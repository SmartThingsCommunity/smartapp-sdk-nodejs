'use strict'

const i18n = require('i18n')
const fs = require('fs-extra')
const {Mutex} = require('async-mutex')
const signature = require('./util/signature')
const responders = require('./util/responders')

const Page = require('./pages/page')
const EndpointContext = require('./util/endpoint-context')
const Log = require('./util/log')

module.exports = class SmartApp {
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

		if (options.publicKey) {
			signature.setPublicKey(options.publicKey)
		}
	}

	/// /////////////////////////////
	// App Initialization Options //
	/// /////////////////////////////

	appId(value) {
		this._id = value
		return this
	}

	apiUrl(value) {
		this._apiUrl = value
		return this
	}

	refreshUrl(value) {
		this._refreshUrl = value
		return this
	}

	clientId(value) {
		this._clientId = value
		return this
	}

	clientSecret(value) {
		this._clientSecret = value
		return this
	}

	publicKey(key) {
		signature.setPublicKey(key)
		return this
	}

	configureLogger(logger, jsonSpace = null, enableEvents = false) {
		this._log = new Log(logger, jsonSpace, enableEvents)
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

	firstPageId(value) {
		this._firstPageId = value
		return this
	}

	/// /////////////////////
	// Configuration/Page //
	/// /////////////////////

	page(id, callback) {
		if (!this._firstPageId) {
			this._firstPageId = id
		}

		this._pages[id] = callback
		return this
	}

	/// //////////
	// Install //
	/// //////////

	installed(callback) {
		this._installedHandler = callback
		return this
	}

	/// //////////
	// Update  //
	/// //////////

	updated(callback) {
		this._updatedHandler = callback
		return this
	}

	/// ////////////
	// Uninstall //
	/// ////////////

	uninstalled(callback) {
		this._uninstalledHandler = callback
		return this
	}

	/// //////////
	// Events  //
	/// //////////

	oauthHandler(callback) {
		this._oauthHandler = callback
		return this
	}

	subscribedEventHandler(name, callback) {
		this._subscribedEventHandlers[name] = callback
		return this
	}

	scheduledEventHandler(name, callback) {
		this._scheduledEventHandlers[name] = callback
		return this
	}

	deviceCommandHandler(callback) {
		this._deviceCommandHandler = callback
		return this
	}

	defaultDeviceCommandHandler(callback) {
		this._defaultDeviceCommandHandler = callback
		return this
	}

	deviceCommand(command, callback) {
		this._deviceCommands[command] = callback
		return this
	}

	/// /////////////
	// Utilities  //
	/// /////////////

	translate(...args) {
		if (this._localizationEnabled) {
			return this.__(...args)
		}

		return args[0]
	}

	handleLambdaCallback(event, context, callback) {
		this._handleCallback(event, responders.lambdaResponse(callback, this._log))
	}

	handleHttpCallback(request, response) {
		if (request.body && (request.body.lifecycle === 'PING' || signature.signatureIsVerified(request))) {
			this._handleCallback(request.body, responders.httpResponder(response, this._log))
		} else {
			this._log.error('Unauthorized')
			response.status(401).send('Forbidden')
		}
	}

	handleHttpCallbackUnverified(request, response) {
		this._handleCallback(request.body, responders.httpResponder(response, this._log))
	}

	async handleMockCallback(body) {
		const responder = responders.mockResponder(this._log)
		await this._handleCallback(body, responder)
		return responder.response
	}

	/// ///////////////////////////////////////////////////////////
	// Proactive API calls (not in response to lifecycle events //
	/// ///////////////////////////////////////////////////////////

	withContext(installedAppId) {
		const app = this
		if (this._contextStore) {
			return new Promise((resolve, reject) => {
				this._contextStore.get(installedAppId).then(data => {
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

	_handleCallback(evt, responder) {
		try {
			const context = new EndpointContext(this, evt)

			switch (evt.lifecycle) {
				case 'PING': {
					this._log.event(evt)
					responder.respond({statusCode: 200, pingData: {challenge: evt.pingData.challenge}})
					break
				}

				case 'CONFIGURATION': {
					const {configurationData} = evt
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
								Promise.resolve(pageHandler(context, page, configurationData)).then(() => {
									responder.respond({statusCode: 200, configurationData: {page: page.toJson()}})
								})
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
					this._oauthHandler(context, evt.oauthCallbackData)
					responder.respond({statusCode: 200, oAuthCallbackData: {}})
					break
				}

				case 'INSTALL': {
					this._log.event(evt)
					this._installedHandler(context, evt.installData)
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
					this._updatedHandler(context, evt.updateData)
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
					this._uninstalledHandler(context, evt.uninstallData)
					if (this._contextStore) {
						this._contextStore.delete(context.installedAppId)
					}

					responder.respond({statusCode: 200, uninstallData: {}})
					break
				}

				case 'EVENT': {
					this._log.event(evt)
					for (const event of evt.eventData.events) {
						switch (event.eventType) {
							case 'DEVICE_EVENT': {
								const handlerName = event.deviceEvent.subscriptionName.split('_')[0]
								const handler = this._subscribedEventHandlers[handlerName]
								handler(context, event.deviceEvent)
								break
							}

							case 'TIMER_EVENT': {
								const handlerName = event.timerEvent.name
								const handler = this._scheduledEventHandlers[handlerName]
								handler(context, event.timerEvent)
								break
							}

							case 'DEVICE_COMMANDS_EVENT': {
								if (this._deviceCommandHandler) {
									this._deviceCommandHandler(context, event.deviceCommandsEvent)
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
											handler(context, deviceCommandsEvent.deviceId, cmd, deviceCommandsEvent)
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
								handler(context, event.modeEvent)
								break
							}

							case 'SECURITY_ARM_STATE_EVENT': {
								// TODO - name specified but not returned!!!
								// const handlerName = event.securityArmStateEvent.name;
								const handlerName = 'securityArmStateHandler'
								const handler = this._subscribedEventHandlers[handlerName]
								handler(context, event.securityArmStateEvent)
								break
							}

							default: {
								this._log.warn(`Unhandled event of type ${event.eventType}`)
							}
						}
					}

					responder.respond({statusCode: 200, eventData: {}})
					break
				}

				case 'EXECUTE': {
					this._log.event(evt)
					this._executeHandler(context, evt.executeData)
					break
				}

				default: {
					this._log.warn(`Lifecycle ${evt.lifecycle} not supported`)
				}
			}
		} catch (error) {
			this._log.error(error.message ? error.message : error.toString())
		}
	}
}
