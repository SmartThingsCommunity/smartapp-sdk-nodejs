'use strict'

const i18n = require('i18n')
const fs = require('fs-extra')
const {Mutex} = require('async-mutex')
const Authorizer = require('./util/authorizer')
const responders = require('./util/responders')

const Page = require('./pages/page')
const EndpointContext = require('./util/endpoint-context')
const Log = require('./util/log')

module.exports = class SmartApp {
	/**
	 * @typedef {Object} SmartAppOptions
	 * @prop {String=} clientId The app's `clientId`, used to refresh expired tokens
	 * @prop {String=} clientSecret The app's `clientSecret`, used to refresh expired tokens
	 * @prop {String=} appId Your app name in `snake-case`, required for persisting configuration values
	 * @prop {Boolean=} disableCustomDisplayName Disallows the user's ability to set a custom name
	 * @prop {Array.<String>|String=} permissions The app's requested permissions configured in Developer Workspace
	 * @prop {Boolean=} disableRemoveApp Disallows removal of the app during the configuration flow
	 * @prop {String=} apiUrl Override the default SmartThings API host
	 * @prop {String=} refreshUrl Override the default SmartThings Auth API host
	 * @prop {String=} keyApiHost Override the default SmartThings Key API host
	 * @prop {number=} [keyCacheTTL=86400000] Override the SmartThings key cache TTL. Default 24 hours.
	 * @prop {any=} logger Override the Winston event and error logger
	 * @prop {number=} [jsonSpace=0] Basic formatting option for indentation
	 * @prop {Boolean=} enableEventLogging Log incoming lifecycle event requests and responses
	 * @prop {String=} publicKey Public key to verify the authenticity of requests
	 * @prop {Boolean=} logUnhandledRejections
	 */
	/**
	 * Create a SmartApp instance
	 * @param {SmartAppOptions} [options] Optionally, pass in a configuration object
	 */
	constructor(options = {}) {
		this._clientId = options.clientId
		this._clientSecret = options.clientSecret
		this._id = options.appId
		this._log = new Log(options.logger, options.jsonSpace, options.enableEventLogging)
		this._permissions = options.permissions ? options.permissions : []
		this._disableCustomDisplayName = options.disableCustomDisplayName === undefined ? false : options.disableCustomDisplayName
		this._disableRemoveApp = options.disableRemoveApp === undefined ? false : options.disableRemoveApp
		this._subscribedEventHandlers = {}
		this._scheduledEventHandlers = {}
		this._pages = {}
		this._installedHandler = ((ctx, evt) => {
			this._updatedHandler(ctx, evt.installData)
		})
		this._updatedHandler = (() => { })
		this._uninstalledHandler = (() => {})
		this._oauthHandler = (() => {})
		this._deviceCommandHandler = null
		this._defaultDeviceCommandHandler = ((ctx, deviceId, cmd) => {
			this._log.warn(`No command handler for ${JSON.stringify(cmd)} of device ${deviceId}`)
		})
		this._deviceCommands = {}
		this._executeHandler = (() => {})
		this._localizationEnabled = false
		this._apiUrl = options.apiUrl ? options.apiUrl : 'https://api.smartthings.com'
		this._refreshUrl = options.refreshUrl ? options.refreshUrl : 'https://auth-global.api.smartthings.com/oauth/token'

		this._authorizer = new Authorizer({
			logger: this._log,
			keyApiHost: options.keyApiHost,
			publicKey: options.publicKey,
			keyCacheTTL: options.keyCacheTTL
		})
		this._unhandledRejectionHandler = reason => {
			this._log.exception(reason)
		}

		if (options.logUnhandledRejections !== false) {
			process.on('unhandledRejection', this._unhandledRejectionHandler)
		}
	}

	/// /////////////////////////////
	// App Initialization Options //
	/// /////////////////////////////

	/**
	 * Set your app identifier for use elsewhere in the app
	 * @param {String} id A globally unique, developer-defined identifier
	 * for an app. It is alpha-numeric, may contain dashes, underscores,
	 * periods, and must be less then 250 characters long.
	 * @returns {SmartApp} SmartApp instance
	 */
	appId(id) {
		this._id = id
		return this
	}

	/**
	 * Manually set the SmartThings API URL
	 * @param {String} url The host URL
	 * @default https://api.smartthings.com
	 * @returns {SmartApp} SmartApp instance
	 */
	apiUrl(url) {
		this._apiUrl = url
		return this
	}

	/**
	 * Manually set the refresh token URL
	 * @param {String} url The host URL
	 * @default https://auth-global.api.smartthings.com/oauth/token
	 * @returns {SmartApp} SmartApp instance
	 */
	refreshUrl(url) {
		this._refreshUrl = url
		return this
	}

	/**
	 * Manually set the SmartThings Key API host
	 * @param {String} url The host URL
	 * @default https://key.smartthings.com
	 * @returns {SmartApp} SmartApp instance
	 */
	keyApiHost(url) {
		this._authorizer._keyResolver._httpKeyResolve._keyApiHost = url
		return this
	}

	/**
	 * Set your smartapp automation's client id. Cannot be
	 * acquired until your app has been created through the
	 * Developer Workspace.
	 * @param {String} id The clientId
	 * @returns {SmartApp} SmartApp instance
	 */
	clientId(id) {
		this._clientId = id
		return this
	}

	/**
	 * Set your smartapp automation's client secret. Cannot be
	 * acquired until your app has been created through the
	 * Developer Workspace. This secret should never be shared
	 * or committed into a public repository.
	 * @param {String} secret The clientSecret
	 * @returns {SmartApp} SmartApp instance
	 */
	clientSecret(secret) {
		this._clientSecret = secret
		return this
	}

	/**
	 * Add your public key so that our WebHook endpoint can verify
	 * requests from SmartThings.
	 *
	 * https://smartthings.developer.samsung.com/docs/how-to/using-public-key-webhook-endpoint.html
	 * @param {String} key public key to identify your app with SmartThings
	 * @returns {SmartApp} SmartApp instance
	 */
	publicKey(key) {
		this._authorizer.setPublicKey(key)
		return this
	}

	/**
	 * Configure the event and error logger. Default behavior is to log errors but not events.
	 * @param {any} logger Override the Winston logger
	 * @param {number} [jsonSpace=null] Override the JSON formatter indentation
	 * @param {Boolean} [enableEvents=false] Logs lifecycle event requests and responses
	 * @example
	 * smartapp.configureLogger(console, 2, true)
	 */
	configureLogger(logger, jsonSpace = null, enableEvents = false) {
		this._log = new Log(logger, jsonSpace, enableEvents)
		return this
	}

	/**
	 * Enable or disable lifecycle event requests and responses
	 * without overriding the default {@see Winston} logger.
	 * @param {number} [jsonSpace=null]  Override the JSON formatter indentation
	 * @param {Boolean} [enableEvents=true] Logs lifecycle event requests and responses
	 * @example
	 * smartapp.enableEventLogging(2, true)
	 */
	enableEventLogging(jsonSpace = null, enableEvents = true) {
		this._log.enableEvents(jsonSpace, enableEvents)
		return this
	}

	/**
	 * Set app permissions as a string or array of strings.
	 *
	 * @example
	 * // sets single permission
	 * smartapp.permissions('r:devices:*')
	 * @example
	 * // sets multiple permissions
	 * smartapp.permissions('r:devices:* r:locations:*')
	 * @example
	 * // sets multiple permissions
	 * smartapp.permissions(['r:devices:*', 'r:locations:*'])
	 * @param {Array<String> | String} value
	 * @returns {SmartApp} SmartApp instance
	 */
	permissions(value) {
		this._permissions = value
		return this
	}

	/**
	 * Disable the ability for the user to customize the display name.
	 *
	 * @param {Boolean} [value=true] Value
	 * @default true
	 * @returns {SmartApp} SmartApp instance
	 */
	disableCustomDisplayName(value = true) {
		this._disableCustomDisplayName = value
		return this
	}

	/**
	 * Disable the ability to remove the app from the configuration flow.
	 *
	 * @param {Boolean} [value=true] Value
	 * @default true
	 * @returns {SmartApp} SmartApp instance
	 */
	disableRemoveApp(value = true) {
		this._disableRemoveApp = value
		return this
	}

	/**
	 * Provide a custom context store used for storing in-flight credentials
	 * for each installed instance of the app.
	 *
	 * @param {any} value ContextStore instance
	 * @example Use the AWS DynamoDB plugin
	 * smartapp.contextStore(new DynamoDBContextStore('aws-region', 'app-table-name'))
	 * @example
	 * // Use Firebase Cloud Firestore
	 * smartapp.contextStore(new FirestoreDBContextStore(firebaseServiceAccount, 'app-table-name'))
	 * @returns {SmartApp} SmartApp instance
	 */
	contextStore(value) {
		this._contextStore = value
		return this
	}

	/**
	 * Replaces the default unhandled rejection handler. If you don't want to have a default handler at
	 * all then instantiate the app with new SmartApp({logUnhandledRejections: false})
	 *
	 * @param {Function} callback when a promise rejection is not handled
	 * @returns {SmartApp} SmartApp instance */
	unhandledRejectionHandler(callback) {
		this._unhandledRejectionHandler = callback
		return this
	}

	/// ///////////////////////////
	// Configuration/Initialize //
	/// ///////////////////////////

	configureI18n(options = {directory: './locales'}) {
		if (options.updateFiles === undefined || options.updateFiles === true) {
			fs.ensureDirSync(options.directory)
		}

		i18n.configure(options)
		this._localizationEnabled = true
		return this
	}

	/**
	 * The first page users will see when they open configuration.
	 *
	 * @param {String} pageId A developer defined page ID. Must
	 * be URL safe characters.
	 * @returns {SmartApp} SmartApp instance
	 */
	firstPageId(pageId) {
		this._firstPageId = pageId
		return this
	}

	/// //////////////////////
	// Configuration/Page   //
	/// //////////////////////

	/**
	 * @typedef ConfigurationData
	 * @property {String=} installedAppId The id of the installed app.
	 * @property {String} phase Denotes the current installation phase.
	 * @property {String=} pageId A developer defined page ID. Must be URL
	 * safe characters.
	 * @property {String=} previousPageId The previous page the user
	 * completed. Must be URL safe characters.
	 * @property {Object=} config A map of configurations for an Installed App.
	 * The map 'key' is the configuration name and the 'value' is an array
	 * of strings.
	 */

	/**
	 * @callback PageCallback
	 * @param context { import("./util/endpoint-context") } EndpointContext to
	 * access config values associated to the installed app
	 * @param page { import("./pages/page") } Chainable page instance
	 * @param {ConfigurationData} data Optionally access the raw configuration
	 * data event object
	 * @returns {SmartApp} SmartApp instance
	 */

	/**
	 * Define a configuration page – you may chain as many pages as is
	 * necessary to satisfy your configuration needs. Please see the
	 * the documentation on how to design pages for your automation.
	 *
	 * https://smartthings.developer.samsung.com/docs/how-to/design-pages-smartapp.html
	 * @param {String} id Identify your page with a unique snake_case or
	 * camelCase identifier, used for i18n keys
	 * @param {PageCallback} callback Allows you to define config page
	 * characteristics and access config values
	 * @returns {SmartApp} SmartApp instance
	 */
	page(id, callback) {
		if (!this._firstPageId) {
			this._firstPageId = id
		}

		this._pages[id] = callback
		return this
	}

	/// ///////////
	// Install  //
	/// ///////////

	installed(callback) {
		this._installedHandler = callback
		return this
	}

	/// ///////////
	// Update   //
	/// ///////////

	updated(callback) {
		this._updatedHandler = callback
		return this
	}

	/// /////////////
	// Uninstall  //
	/// /////////////

	uninstalled(callback) {
		this._uninstalledHandler = callback
		return this
	}

	/// ///////////
	// Events   //
	/// ///////////

	oauthHandler(callback) {
		this._oauthHandler = callback
		return this
	}

	/**
	 * @typedef {Object} ModeEvent
	 * @property {String} eventId The id of the event
	 * @property {String} locationId The id of the location in which the event was triggered.
	 * @property {String} modeId The ID of the mode associated with a MODE_EVENT.
	 */

	/**
	 * @typedef {Object} DeviceEvent An event on a device that matched a subscription for this app.
	 * @property {String} eventId The ID of the event.
	 * @property {String} locationId The ID of the location in which the event was triggered.
	 * @property {String} deviceId The ID of the location in which the event was triggered.
	 * @property {String} componentId The name of the component on the device that the event is associated with.
	 * @property {String} capability The name of the capability associated with the DEVICE_EVENT.
	 * @property {String} attribute The name of the DEVICE_EVENT. This typically corresponds to an attribute name of the device-handler’s capabilities.
	 * @property {Object} value The value of the event. The type of the value is dependent on the capability's attribute type.
	 * @property {String} valueType The root level data type of the value field. The data types are representitive of standard JSON data types.
	 * @property {Boolean} stateChange Whether or not the state of the device has changed as a result of the DEVICE_EVENT.
	 * @property {Map} data json map as defined by capability data schema
	 * @property {String} subscriptionName The name of subscription that caused delivery.
	 */

	/**
	 * @typedef {Object} TimerEvent
	 * @property {String} eventId The ID of the event.
	 * @property {String} name The name of the schedule that caused this event.
	 * @property {Object} type
	 * @property {String} time The IS0-8601 date time strings in UTC that this event was scheduled for.
	 * @property {String} expression The CRON expression if the schedule was of type CRON.
	 */

	/**
	 * @callback EventCallback
	 * @param context { import('./util/endpoint-context') }
	 * @param {ModeEvent|DeviceEvent|TimerEvent} event
	 * @returns {EventCallback}
	 */

	/**
	 * Handler for named subscriptions to events
	 *
	 * @param {String} name Provide the name matching a created subscription
	 * @param {EventCallback} callback Callback handler object
	 * @returns {SmartApp} SmartApp instance
	 */
	subscribedEventHandler(name, callback) {
		this._subscribedEventHandlers[name] = callback
		return this
	}

	/**
	 * Handler for named subscriptions to **scheduled** events
	 *
	 * @param {String} name Provide the name matching a created subscription
	 * @param {Object} callback Callback handler object
	 * @returns {SmartApp} SmartApp instance
	 */
	scheduledEventHandler(name, callback) {
		this._scheduledEventHandlers[name] = callback
		return this
	}

	/**
	 * Handler for device commands
	 *
	 * @param {Object} callback Callback handler object
	 * @returns {SmartApp} SmartApp instance
	 */
	deviceCommandHandler(callback) {
		this._deviceCommandHandler = callback
		return this
	}

	/**
	 * Handler for device commands
	 *
	 * @param {Object} callback Callback handler object
	 * @returns {SmartApp} SmartApp instance
	 */
	defaultDeviceCommandHandler(callback) {
		this._defaultDeviceCommandHandler = callback
		return this
	}

	/**
	 * Device command and callback
	 *
	 * @param {String} command Device command
	 * @param {Object} callback Callback handler object
	 * @returns {SmartApp} SmartApp instance
	 */
	deviceCommand(command, callback) {
		this._deviceCommands[command] = callback
		return this
	}

	/// //////////////
	// Utilities   //
	/// //////////////

	translate(...args) {
		if (this._localizationEnabled) {
			return this.__(...args)
		}

		return args[0]
	}

	/**
	 * Use with an AWS Lambda function. No signature verification is required.
	 *
	 * @param {*} event
	 * @param {*} context
	 * @param {*} callback
	 */
	handleLambdaCallback(event, context, callback) {
		this._handleCallback(event, responders.lambdaResponse(callback, this._log))
	}

	/**
	 * Use with a standard HTTP webhook endpoint app. Signature verification is required.
	 *
	 * @param {*} request
	 * @param {*} response
	 */
	async handleHttpCallback(request, response) {
		if (request.body && request.body.lifecycle === 'PING') {
			return this._handleCallback(request.body, responders.httpResponder(response, this._log))
		}

		const isAuthorized = await this._authorizer.isAuthorized(request)
		if (isAuthorized) {
			return this._handleCallback(request.body, responders.httpResponder(response, this._log))
		}

		this._log.error('Unauthorized')
		response.status(401).send('Forbidden')
	}

	/**
	 * Use with a standard HTTP webhook endpoint app, but
	 * disregard the HTTP verification process.
	 *
	 * @param {*} request
	 * @param {*} response
	 */
	handleHttpCallbackUnverified(request, response) {
		this._handleCallback(request.body, responders.httpResponder(response, this._log))
	}

	/**
	 * Used for internal unit testing.
	 *
	 * @param {Object} body
	 */
	async handleMockCallback(body) {
		const responder = responders.mockResponder(this._log)
		await this._handleCallback(body, responder)
		return responder.response
	}

	/// ///////////////////////////////////////////////////////////
	// Proactive API calls (not in response to lifecycle events //
	/// ///////////////////////////////////////////////////////////

	withContext(installedAppIdOrObject) {
		const app = this
		if (typeof installedAppIdOrObject === 'object') {
			return new Promise(resolve => {
				resolve(new EndpointContext(app, installedAppIdOrObject, new Mutex()))
			})
		}

		if (this._contextStore) {
			return new Promise((resolve, reject) => {
				this._contextStore.get(installedAppIdOrObject).then(data => {
					resolve(new EndpointContext(app, data, new Mutex()))
				}).catch(error => {
					reject(error)
				})
			})
		}

		return Promise.reject(new Error('Context not available. No context store defined'))
	}

	/// /////////////////////
	// Event Dispatching  //
	/// /////////////////////

	async _handleCallback(evt, responder) {
		const context = new EndpointContext(this, evt)
		try {
			switch (evt.lifecycle) {
				case 'PING': {
					this._log.event(evt)
					responder.respond({statusCode: 200, pingData: {challenge: evt.pingData.challenge}})
					break
				}

				case 'CONFIGURATION': {
					const {configurationData} = evt

					// Inject whether or not the request was a resubmitted page
					configurationData.isResubmit = configurationData.pageId === configurationData.previousPageId

					switch (configurationData.phase) {
						case 'INITIALIZE': {
							this._log.event(evt, configurationData.phase)
							responder.respond({
								statusCode: 200, configurationData: {
									initialize: {
										id: this._id,
										firstPageId: this._firstPageId,
										permissions: this._permissions,
										disableCustomDisplayName: this._disableCustomDisplayName,
										disableRemoveApp: this._disableRemoveApp
									}
								}
							})
							break
						}

						case 'PAGE': {
							this._log.event(evt, configurationData.phase)
							const pageId = configurationData.pageId ? configurationData.pageId : this._firstPageId
							const pageHandler = this._pages[pageId]
							if (pageHandler) {
								const page = this._localizationEnabled ? new Page(pageId, context.locale) : new Page(pageId)
								await pageHandler(context, page, configurationData)
								responder.respond({statusCode: 200, configurationData: {page: page.toJson()}})
							} else {
								throw new Error(`Page '${configurationData.pageId}' not found`)
							}

							break
						}

						default:
							throw new Error(`Unsupported config phase: ${configurationData.phase}`)
					}

					break
				}

				case 'OAUTH_CALLBACK': {
					this._log.event(evt)
					await this._oauthHandler(context, evt.oauthCallbackData)
					responder.respond({statusCode: 200, oAuthCallbackData: {}})
					break
				}

				case 'INSTALL': {
					this._log.event(evt)
					await this._installedHandler(context, evt.installData)
					if (this._contextStore) {
						this._contextStore.put({
							installedAppId: context.installedAppId,
							locationId: context.locationId,
							authToken: context.api.client.authToken,
							refreshToken: context.api.client.refreshToken,
							clientId: this._clientId,
							clientSecret: this._clientSecret,
							config: context.config
						})
					}

					responder.respond({statusCode: 200, installData: {}})
					break
				}

				case 'UPDATE': {
					this._log.event(evt)
					await this._updatedHandler(context, evt.updateData)
					if (this._contextStore) {
						this._contextStore.put({
							installedAppId: context.installedAppId,
							locationId: context.locationId,
							authToken: context.api.client.authToken,
							refreshToken: context.api.client.refreshToken,
							clientId: this._clientId,
							clientSecret: this._clientSecret,
							config: context.config
						})
					}

					responder.respond({statusCode: 200, updateData: {}})
					break
				}

				case 'UNINSTALL': {
					this._log.event(evt)
					await this._uninstalledHandler(context, evt.uninstallData)
					if (this._contextStore) {
						this._contextStore.delete(context.installedAppId)
					}

					responder.respond({statusCode: 200, uninstallData: {}})
					break
				}

				case 'EVENT': {
					this._log.event(evt)
					const results = []
					for (const event of evt.eventData.events) {
						switch (event.eventType) {
							case 'DEVICE_EVENT': {
								const handlerName = event.deviceEvent.subscriptionName.split('_')[0]
								const handler = this._subscribedEventHandlers[handlerName]
								results.push(handler(context, event.deviceEvent))
								break
							}

							case 'TIMER_EVENT': {
								const handlerName = event.timerEvent.name
								const handler = this._scheduledEventHandlers[handlerName]
								results.push(handler(context, event.timerEvent))
								break
							}

							case 'DEVICE_COMMANDS_EVENT': {
								if (this._deviceCommandHandler) {
									results.push(this._deviceCommandHandler(context, event.deviceCommandsEvent))
								} else {
									const {deviceCommandsEvent} = event
									for (const cmd of deviceCommandsEvent.commands) {
										const compKey = `${cmd.componentId}/${cmd.capability}/${cmd.command}`
										const capKey = `${cmd.capability}/${cmd.command}`
										let handler = this._deviceCommands[compKey]
										if (!handler) {
											handler = this._deviceCommands[capKey]
										}

										if (handler) {
											results.push(handler(context, deviceCommandsEvent.deviceId, cmd, deviceCommandsEvent))
										} else {
											this._defaultDeviceCommandHandler(context, deviceCommandsEvent.deviceId, cmd)
										}
									}
								}

								break
							}

							case 'MODE_EVENT': {
								// TODO - there is no mode handler name!!!
								const handlerName = 'modeChangeHandler'
								const handler = this._subscribedEventHandlers[handlerName]
								results.push(handler(context, event.modeEvent))
								break
							}

							case 'SECURITY_ARM_STATE_EVENT': {
								// TODO - name specified but not returned!!!
								// const handlerName = event.securityArmStateEvent.name;
								const handlerName = 'securityArmStateHandler'
								const handler = this._subscribedEventHandlers[handlerName]
								results.push(handler(context, event.securityArmStateEvent))
								break
							}

							default: {
								this._log.warn(`Unhandled event of type ${event.eventType}`)
							}
						}
					}

					await Promise.all(results)
					responder.respond({statusCode: 200, eventData: {}})
					break
				}

				case 'EXECUTE': {
					this._log.event(evt)
					await this._executeHandler(context, evt.executeData)
					break
				}

				case 'CONFIRMATION': {
					this._log.event(evt)
					responder.respond({statusCode: 200, uninstallData: {}})
					break
				}

				default: {
					this._log.warn(`Lifecycle ${evt.lifecycle} not supported`)
				}
			}
		} catch (error) {
			this._log.exception(error)
			responder.respond({statusCode: 500, message: `Server error: '${error.toString()}'`})
		}
	}
}
