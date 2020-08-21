'use strict'

const i18n = require('i18n')
const fs = require('fs-extra')
const {Mutex} = require('async-mutex')
const {SmartThingsOAuthClient} = require('@smartthings/core-sdk')
const Authorizer = require('./util/authorizer')
const responders = require('./util/responders')
const SmartAppContext = require('./util/smart-app-context')
const Page = require('./pages/page')
const Log = require('./util/log')
const ConfigurationError = require('./util/configuration-error')

class SmartApp {
	constructor(options = {}) {
		this._clientId = options.clientId
		this._clientSecret = options.clientSecret
		this._redirectUri = options.redirectUri
		this._id = options.appId
		this._log = new Log(options.logger, options.jsonSpace, options.enableEventLogging)
		this._permissions = options.permissions ? options.permissions : []
		this._disableCustomDisplayName = options.disableCustomDisplayName === undefined ? false : options.disableCustomDisplayName
		this._disableRemoveApp = options.disableRemoveApp === undefined ? false : options.disableRemoveApp
		this._subscribedEventHandlers = {}
		this._eventTypeHandlers = {}
		this._scheduledEventHandlers = {}
		this._pages = {}
		this._defaultPage = ((ctx, page, configurationData) => {
			page.name('System Error!')
			const msg = configurationData.pageId ?
				`No handler found for page '${configurationData.pageId}'` :
				'No page handlers were found'

			page.section('error', section => {
				section.name('Configuration Page Error')
				section.paragraphSetting('undefined_handler')
					.name('Page Handler Missing')
					.description(msg)
			})
			this._log.warn(msg)
		})
		this._installedHandler = ((ctx, installData) => {
			this._updatedHandler(ctx, installData)
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
		this._apiUrl = options.apiUrl
		this._refreshUrl = options.refreshUrl

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

	appId(id) {
		this._id = id
		return this
	}

	apiUrl(url) {
		this._apiUrl = url
		return this
	}

	refreshUrl(url) {
		this._refreshUrl = url
		return this
	}

	keyApiHost(url) {
		this._authorizer._keyResolver._httpKeyResolve._keyApiHost = url
		return this
	}

	clientId(id) {
		this._clientId = id
		return this
	}

	clientSecret(secret) {
		this._clientSecret = secret
		return this
	}

	redirectUri(uri) {
		this._redirectUri = uri
		return this
	}

	publicKey(key) {
		this._authorizer.setPublicKey(key)
		return this
	}

	configureLogger(logger, jsonSpace = null, enableEvents = false) {
		this._log = new Log(logger, jsonSpace, enableEvents)
		return this
	}

	enableEventLogging(jsonSpace = null, enableEvents = true) {
		this._log.enableEvents(jsonSpace, enableEvents)
		return this
	}

	permissions(value) {
		this._permissions = value
		return this
	}

	disableCustomDisplayName(value = true) {
		this._disableCustomDisplayName = value
		return this
	}

	disableRemoveApp(value = true) {
		this._disableRemoveApp = value
		return this
	}

	contextStore(value) {
		this._contextStore = value
		return this
	}

	unhandledRejectionHandler(callback) {
		this._unhandledRejectionHandler = callback
		return this
	}

	/// ///////////////////////////
	// Configuration/Initialize //
	/// ///////////////////////////

	configureI18n(options = {}) {
		const opts = {directory: './locales', updateFiles: false, ...options}
		if (opts.updateFiles) {
			fs.ensureDirSync(opts.directory)
		}

		i18n.configure(opts)
		this._localizationEnabled = true
		return this
	}

	firstPageId(pageId) {
		this._firstPageId = pageId
		return this
	}

	/// //////////////////////
	// Configuration/Page   //
	/// //////////////////////

	page(id, callback) {
		if (!this._firstPageId) {
			this._firstPageId = id
		}

		this._pages[id] = callback
		return this
	}

	defaultPage(callback) {
		this._defaultPage = callback
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

	subscribedEventHandler(name, callback, eventType = undefined) {
		if (eventType) {
			if (this._eventTypeHandlers[eventType] && this._eventTypeHandlers[eventType] !== name) {
				throw new ConfigurationError(`Event type ${eventType} already assigned to handler ${this._eventTypeHandlers[eventType]}`)
			}

			this._eventTypeHandlers[eventType] = name
		}

		this._subscribedEventHandlers[name] = callback
		return this
	}

	subscribedModeEventHandler(name, callback) {
		const eventType = 'MODE_EVENT'
		this.subscribedEventHandler(name, callback, eventType)
		return this
	}

	subscribedDeviceEventHandler(name, callback) {
		this.subscribedEventHandler(name, callback)
		return this
	}

	subscribedTimerEventHandler(name, callback) {
		const eventType = 'TIMER_EVENT'
		this.subscribedEventHandler(name, callback, eventType)
		return this
	}

	subscribedHubHealthEventHandler(name, callback) {
		const eventType = 'HUB_HEALTH_EVENT'
		this.subscribedEventHandler(name, callback, eventType)
		return this
	}

	subscribedDeviceLifecycleEventHandler(name, callback) {
		const eventType = 'DEVICE_LIFECYCLE_EVENT'
		this.subscribedEventHandler(name, callback, eventType)
		return this
	}

	subscribedDeviceHealthEventHandler(name, callback) {
		const eventType = 'DEVICE_HEALTH_EVENT'
		this.subscribedEventHandler(name, callback, eventType)
		return this
	}

	subscribedSecurityArmStateEventHandler(name, callback) {
		const eventType = 'SECURITY_ARM_STATE_EVENT'
		this.subscribedEventHandler(name, callback, eventType)
		return this
	}

	subscribedSceneLifecycleEventHandler(name, callback) {
		const eventType = 'SCENE_LIFECYCLE_EVENT'
		this.subscribedEventHandler(name, callback, eventType)
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

	/**
	 * Handler for execute events
	 * @param {Object} callback handler
	 * @returns {SmartApp} SmartApp instance
	 */
	executeHandler(callback) {
		this._executeHandler = callback
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

	async handleOAuthCallback(request) {
		const oauthClient = new SmartThingsOAuthClient(this._clientId, this._clientSecret, this._redirectUri)
		const auth = await oauthClient.redeemCode(request.query.code)
		const ctx = await this.withContext({
			installedAppId: auth.installed_app_id,
			authToken: auth.access_token,
			refreshToken: auth.refresh_token
		})

		const isa = await ctx.api.installedApps.get(auth.installed_app_id)
		ctx.setLocationId(isa.locationId)

		if (this._contextStore) {
			this._contextStore.put({
				installedAppId: ctx.installedAppId,
				locationId: ctx.locationId,
				authToken: auth.access_token,
				refreshToken: auth.refresh_token,
				clientId: this._clientId,
				clientSecret: this._clientSecret,
				config: ctx.config
			})
		}

		return ctx
	}

	/// ///////////////////////////////////////////////////////////
	// Proactive API calls (not in response to lifecycle events //
	/// ///////////////////////////////////////////////////////////

	withContext(installedAppIdOrObject) {
		const app = this
		if (typeof installedAppIdOrObject === 'object') {
			return new Promise(resolve => {
				resolve(new SmartAppContext(app, installedAppIdOrObject, new Mutex()))
			})
		}

		if (this._contextStore) {
			return new Promise((resolve, reject) => {
				this._contextStore.get(installedAppIdOrObject).then(data => {
					resolve(new SmartAppContext(app, data, new Mutex()))
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
		const context = new SmartAppContext(this, evt)
		try {
			const {messageType, lifecycle} = evt
			switch (lifecycle || messageType) {
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
							await context.retrieveTokens()
							this._log.event(evt, configurationData.phase)
							const pageId = configurationData.pageId ? configurationData.pageId : this._firstPageId
							const pageHandler = this._pages[pageId]
							if (pageHandler) {
								const page = this._localizationEnabled ? new Page(pageId, context.locale) : new Page(pageId)
								await pageHandler(context, page, configurationData)
								responder.respond({statusCode: 200, configurationData: {page: page.toJson()}})
							} else {
								const page = this._localizationEnabled ? new Page(pageId, context.locale) : new Page(pageId)
								await this._defaultPage(context, page, configurationData)
								responder.respond({statusCode: 200, configurationData: {page: page.toJson()}})
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
							authToken: context.authToken,
							refreshToken: context.refreshToken,
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
							authToken: context.authToken,
							refreshToken: context.refreshToken,
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
								if (handler) {
									results.push(handler(context, event.deviceEvent, event.eventTime))
									break
								} else {
									responder.respond({statusCode: 422, eventData: {}})
									return
								}
							}

							case 'TIMER_EVENT': {
								const handlerName = event.timerEvent.name
								const handler = this._scheduledEventHandlers[handlerName]
								if (handler) {
									results.push(handler(context, event.timerEvent, event.eventTime))
									break
								} else {
									responder.respond({statusCode: 422, eventData: {}})
									return
								}
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
											results.push(handler(context, deviceCommandsEvent.deviceId, cmd, deviceCommandsEvent, event.eventTime))
										} else {
											this._defaultDeviceCommandHandler(context, deviceCommandsEvent.deviceId, cmd, event.eventTime)
										}
									}
								}

								break
							}

							case 'DEVICE_LIFECYCLE_EVENT': {
								// TODO - remove when handler name is returned in event
								const handlerName = this._eventTypeHandlers[event.eventType]
								const handler = this._subscribedEventHandlers[handlerName]
								if (handler) {
									results.push(handler(context, event.deviceLifecycleEvent, event.eventTime))
									break
								} else {
									responder.respond({statusCode: 422, eventData: {}})
									return
								}
							}

							case 'DEVICE_HEALTH_EVENT': {
								// TODO - remove when handler name is returned in event
								const handlerName = this._eventTypeHandlers[event.eventType]
								const handler = this._subscribedEventHandlers[handlerName]
								if (handler) {
									results.push(handler(context, event.deviceHealthEvent, event.eventTime))
									break
								} else {
									responder.respond({statusCode: 422, eventData: {}})
									return
								}
							}

							case 'HUB_HEALTH_EVENT': {
								// TODO - remove when handler name is returned in event
								const handlerName = this._eventTypeHandlers[event.eventType]
								const handler = this._subscribedEventHandlers[handlerName]
								if (handler) {
									results.push(handler(context, event.hubHealthEvent, event.eventTime))
									break
								} else {
									responder.respond({statusCode: 422, eventData: {}})
									return
								}
							}

							case 'MODE_EVENT': {
								// TODO - remove when handler name is returned in event
								const handlerName = this._eventTypeHandlers[event.eventType]
								const handler = this._subscribedEventHandlers[handlerName]
								if (handler) {
									results.push(handler(context, event.modeEvent, event.eventTime))
									break
								} else {
									responder.respond({statusCode: 422, eventData: {}})
									return
								}
							}

							case 'SECURITY_ARM_STATE_EVENT': {
								// TODO - remove when handler name is returned in event
								const handlerName = this._eventTypeHandlers[event.eventType]
								const handler = this._subscribedEventHandlers[handlerName]
								if (handler) {
									results.push(handler(context, event.securityArmStateEvent, event.eventTime))
									break
								} else {
									responder.respond({statusCode: 422, eventData: {}})
									return
								}
							}

							case 'SCENE_LIFECYCLE_EVENT': {
								// TODO - remove when handler name is returned in event
								const handlerName = this._eventTypeHandlers[event.eventType]
								const handler = this._subscribedEventHandlers[handlerName]
								if (handler) {
									results.push(handler(context, event.sceneLifecycleEvent, event.eventTime))
									break
								} else {
									responder.respond({statusCode: 422, eventData: {}})
									return
								}
							}

							case 'INSTALLED_APP_LIFECYCLE_EVENT': {
								// TODO - remove when handler name is returned in event
								const handlerName = this._eventTypeHandlers[event.eventType]
								const handler = this._subscribedEventHandlers[handlerName]
								if (handler) {
									results.push(handler(context, event.installedAppLifecycleEvent, event.eventTime))
								} else {
									const {installedAppLifecycleEvent} = event
									if (installedAppLifecycleEvent.lifecycle === 'DELETE' && installedAppLifecycleEvent.installedAppId === context.installedAppId) {
										this._uninstalledHandler(context, {installedApp: evt.eventData.installedApp})
										if (this._contextStore) {
											this._contextStore.delete(installedAppLifecycleEvent.installedAppId)
										}
									}
								}

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
					const executeData = (await this._executeHandler(context, evt.executeData)) || {}
					responder.respond({statusCode: 200, executeData})
					break
				}

				case 'CONFIRMATION': {
					if (evt.confirmationData && evt.confirmationData.appId && evt.confirmationData.confirmationUrl) {
						if (this._id) {
							if (evt.confirmationData.appId === this._id) {
								this._log.info(`CONFIRMATION request for app ${evt.confirmationData.appId}, to enable events visit ${evt.confirmationData.confirmationUrl}`)
							} else {
								this._log.warn(`Unexpected CONFIRMATION request for app ${evt.confirmationData.appId}, received ${JSON.stringify(evt)}`)
							}
						} else {
							this._log.info(`CONFIRMATION request for app ${evt.confirmationData.appId}, to enable events visit ${evt.confirmationData.confirmationUrl}`)
						}
					} else {
						this._log.warn(`Invalid CONFIRMATION request ${JSON.stringify(evt)}`)
					}

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

module.exports = SmartApp
module.exports.SmartApp = SmartApp

