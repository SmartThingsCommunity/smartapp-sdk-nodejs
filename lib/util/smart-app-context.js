const i18n = require('i18n')
const {Mutex} = require('async-mutex')
const {
	SmartThingsClient,
	BearerTokenAuthenticator,
	RefreshTokenAuthenticator,
	SequentialRefreshTokenAuthenticator} = require('@smartthings/core-sdk')

const TokenStore = require('./token-store')

module.exports = class SmartAppContext {
	constructor(app, data, apiMutex) {
		this.event = data
		this.app = app
		this.apiMutex = apiMutex

		/** @type SmartThingsClient */
		this.api = {}
		const {messageType, lifecycle} = data
		switch (lifecycle || messageType) {
			case 'EVENT':
				this.authToken = data.eventData.authToken
				this.executionId = data.executionId
				this.installedAppId = data.eventData.installedApp.installedAppId
				this.locationId = data.eventData.installedApp.locationId
				this.config = data.eventData.installedApp.config
				this.locale = data.locale
				break

			case 'INSTALL':
				this.authToken = data.installData.authToken
				this.refreshToken = data.installData.refreshToken
				this.executionId = data.executionId
				this.installedAppId = data.installData.installedApp.installedAppId
				this.locationId = data.installData.installedApp.locationId
				this.config = data.installData.installedApp.config
				this.locale = (data.client && data.client.language) || data.locale
				break

			case 'UPDATE':
				data.client = undefined
				this.authToken = data.updateData.authToken
				this.refreshToken = data.updateData.refreshToken
				this.executionId = data.executionId
				this.installedAppId = data.updateData.installedApp.installedAppId
				this.locationId = data.updateData.installedApp.locationId
				this.config = data.updateData.installedApp.config
				this.locale = (data.client && data.client.language) || data.locale
				break

			case 'CONFIGURATION':
				this.executionId = data.executionId
				this.installedAppId = data.configurationData.installedAppId
				this.locationId = data.configurationData.locationId
				this.config = data.configurationData.config
				this.locale = (data.client && data.client.language) || data.locale
				break

			case 'UNINSTALL':
				this.executionId = data.executionId
				this.installedAppId = data.uninstallData.installedApp.installedAppId
				this.locationId = data.uninstallData.installedApp.locationId
				break

			case 'EXECUTE':
				this.authToken = data.executeData.authToken
				this.executionId = data.executionId
				this.installedAppId = data.executeData.installedApp.installedAppId
				this.locationId = data.executeData.installedApp.locationId
				this.config = data.executeData.installedApp.config
				this.locale = data.executeData.parameters.locale
				break

			case 'OAUTH_CALLBACK':
				this.executionId = data.executionId
				this.installedAppId = data.oauthCallbackData.installedAppId
				this.locale = data.locale
				break

			// For constructing context for proactive API calls not in response to a lifecycle event
			default:
				this.authToken = data.authToken
				this.refreshToken = data.refreshToken
				this.executionId = ''
				this.installedAppId = data.installedAppId
				this.locationId = data.locationId
				this.config = data.config
				this.locale = data.locale
				break
		}

		if (app._localizationEnabled && this.locale) {
			this.headers = { 'accept-language': this.locale }
			i18n.init(this)
		}

		if (this.authToken) {
			const authenticator = app._contextStore ?
				(this.apiMutex ?

					// Authenticator for non-lifecycle invocations which forces refresh requests to be
					// sequential to reduce the chance of overwriting a valid refresh token with an
					// invalid one
					new SequentialRefreshTokenAuthenticator(
						this.authToken,
						new TokenStore(this.installedAppId, app._contextStore, app._clientId, app._clientSecret),
						this.apiMutex) :

					// Not currently used by the SDK but here for logical consistency in case a path is added that
					// supports parallel refreshes
					new RefreshTokenAuthenticator(this.authToken,
						new TokenStore(this.installedAppId, app._contextStore, app._clientId, app._clientSecret))) :

				// Authenticator for lifecycle event invocations. Refresh unnecessary since token is always valid
				new BearerTokenAuthenticator(this.authToken)

			const config = {
				locationId: this.locationId,
				installedAppId: this.installedAppId
			}

			if (this.locale) {
				config.headers = {
					'Accept-Language': this.locale
				}
			}

			if (app._apiUrl) {
				config.urlProvider = {
					baseURL: app._apiUrl,
					authURL: app._refreshUrl
				}
			}

			this.api = new SmartThingsClient(authenticator, config)
		}
	}

	isAuthenticated() {
		if (this.api && this.authToken) {
			return true
		}

		return false
	}

	setLocationId(id) {
		this.locationId = id
		if (this.api) {
			this.api.setLocation(id)
		}
	}

	/**
	 * @deprecated This method will be removed at some point after the platform has been changed to include
	 * valid tokens in CONFIGURATION events as it does for all other lifecycle events.
	 */
	async retrieveTokens() {
		const {app} = this
		if (app._contextStore) {
			const data = await app._contextStore.get(this.installedAppId)
			if (data) {
				this.locationId = data.locationId
				this.authToken = data.authToken
				this.refreshToken = data.refreshToken
				this.apiMutex = new Mutex()

				const authenticator = new SequentialRefreshTokenAuthenticator(
					this.authToken,
					new TokenStore(this.installedAppId, app._contextStore, app._clientId, app._clientSecret),
					this.apiMutex
				)

				const config = {
					locationId: this.locationId,
					installedAppId: this.installedAppId
				}

				if (this.locale) {
					config.headers = {
						'Accept-Language': this.locale
					}
				}

				if (app._apiUrl) {
					config.urlProvider = {
						baseURL: app._apiUrl,
						authURL: app._refreshUrl
					}
				}

				this.api = new SmartThingsClient(authenticator, config)
			}
		}

		return this
	}

	async deleteContext() {
		if (this.app._contextStore) {
			await this.app._contextStore.delete(this.installedAppId)
		}
	}

	/**
	 * Retrieve a string value from the configuration map for the InstalledApp context
	 * @param {String} name The config key name
	 * @returns {?String}
	 */
	configStringValue(name) {
		const entry = this.config[name]
		if (!entry) {
			return
		}

		return entry[0].stringConfig.value
	}

	configBooleanValue(id) {
		const entry = this.config[id]
		if (!entry) {
			return false
		}

		return entry[0].stringConfig.value === 'true'
	}

	configNumberValue(id) {
		const entry = this.config[id]
		if (!entry) {
			return
		}

		return Number(entry[0].stringConfig.value)
	}

	configDateValue(id) {
		const entry = this.config[id]
		if (!entry) {
			return
		}

		return new Date(entry[0].stringConfig.value)
	}

	configTimeString(id, options = {}) {
		const entry = this.configDateValue(id)
		if (!entry) {
			return
		}

		if (Object.entries(options).length === 0 && options.constructor === Object) {
			options.hour = '2-digit'
			options.minute = '2-digit'
		}

		return entry.toLocaleTimeString(this.locale, options)
	}

	configModeIds(id) {
		const entry = this.config[id]
		if (!entry) {
			return
		}

		return entry.map(it => it.modeConfig.modeId)
	}

	configDevices(id) {
		const list = []
		const entry = this.config[id]
		if (!entry) {
			return
		}

		for (const item of entry) {
			const {componentId} = item.deviceConfig
			const promise = this.api.devices.get(item.deviceConfig.deviceId).then(device => {
				return {
					deviceId: device.deviceId,
					name: device.name,
					label: device.label,
					componentId
				}
			})
			list.push(promise)
		}
		return Promise.all(list)
	}

	configDevicesWithState(id) {
		const list = []
		const entry = this.config[id]
		if (!entry) {
			return
		}

		for (const item of entry) {
			const {componentId} = item.deviceConfig
			const promise = this.api.devices.get(item.deviceConfig.deviceId).then(device => {
				return {
					deviceId: device.deviceId,
					name: device.name,
					label: device.label,
					componentId
				}
			}).then(entry => {
				return this.api.devices.getState(entry.deviceId).then(state => {
					entry.state = state.components[componentId]
					return entry
				})
			})
			list.push(promise)
		}
		return Promise.all(list)
	}

	getItem(key) {
		if (this.app._contextStore) {
			if (this.app._contextStore.getItem) {
				return this.app._contextStore.getItem(this.installedAppId, key)
			}
			throw new Error('Context store does not support getting item.')
		}
		throw new Error('Context store not configured. Cannot get item.')
	}

	setItem(key, value) {
		if (this.app._contextStore) {
			if (this.app._contextStore.setItem) {
				return this.app._contextStore.setItem(this.installedAppId, key, value)
			}
			throw new Error('Context store does not support setting item.')
		}
		throw new Error('Context store not configured. Cannot set item.')
	}

	removeItem(key) {
		if (this.app._contextStore) {
			if (this.app._contextStore.clearItem) {
				return this.app._contextStore.clearItem(this.installedAppId, key)
			}
			throw new Error('Context store does not support clearing individual item.')
		}
		throw new Error('Context store not configured. Cannot clear item.')
	}

	removeAllItems() {
		if (this.app._contextStore) {
			if (this.app._contextStore.clearAllItems) {
				return this.app._contextStore.clearAllItems(this.installedAppId)
			}
			throw new Error('Context store does not support clearing all items.')
		}
		throw new Error('Context store not configured. Cannot clear items.')
	}
}

