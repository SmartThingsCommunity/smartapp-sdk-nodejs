'use strict'

const i18n = require('i18n')
const {Mutex} = require('async-mutex')
const SmartThingsApi = require('../api')

module.exports = class EndpointContext {
	constructor(app, evt, apiMutex) {
		this.event = evt

		/** @type { import('../api') } */
		this.api = {}

		let authToken
		let refreshToken
		switch (evt.lifecycle) {
			case 'EVENT':
				authToken = evt.eventData.authToken
				this.executionId = evt.executionId
				this.installedAppId = evt.eventData.installedApp.installedAppId
				this.locationId = evt.eventData.installedApp.locationId
				this.config = evt.eventData.installedApp.config
				this.locale = evt.locale
				break

			case 'INSTALL':
				authToken = evt.installData.authToken
				refreshToken = evt.installData.refreshToken
				this.executionId = evt.executionId
				this.installedAppId = evt.installData.installedApp.installedAppId
				this.locationId = evt.installData.installedApp.locationId
				this.config = evt.installData.installedApp.config
				this.locale = evt.client.language
				break

			case 'UPDATE':
				authToken = evt.updateData.authToken
				refreshToken = evt.updateData.refreshToken
				this.executionId = evt.executionId
				this.installedAppId = evt.updateData.installedApp.installedAppId
				this.locationId = evt.updateData.installedApp.locationId
				this.config = evt.updateData.installedApp.config
				this.locale = evt.client.language
				break

			case 'CONFIGURATION':
				this.executionId = evt.executionId
				this.installedAppId = evt.configurationData.installedAppId
				this.locationId = evt.configurationData.locationId
				this.config = evt.configurationData.config
				this.locale = evt.client.language
				break

			case 'UNINSTALL':
				this.executionId = evt.executionId
				this.installedAppId = evt.uninstallData.installedApp.installedAppId
				this.locationId = evt.uninstallData.installedApp.locationId
				break

			case 'EXECUTE':
				authToken = evt.executeData.authToken
				this.executionId = evt.executionId
				this.installedAppId = evt.executeData.installedApp.installedAppId
				this.locationId = evt.executeData.installedApp.locationId
				this.config = evt.executeData.installedApp.config
				this.locale = evt.executeData.parameters.locale
				break

			// For constructing context for proactive API calls not in response to a lifecycle event
			default:
				authToken = evt.authToken
				refreshToken = evt.refreshToken
				this.executionId = ''
				this.installedAppId = evt.installedAppId
				this.locationId = evt.locationId
				this.config = evt.config
				this.locale = evt.locale
				break
		}

		if (app._localizationEnabled) {
			if (this.locale) {
				this.headers = {'accept-language': this.locale}
				i18n.init(this)
			}
		}

		this.api = new SmartThingsApi({
			authToken,
			refreshToken,
			clientId: app._clientId,
			clientSecret: app._clientSecret,
			log: app._log,
			apiUrl: app._apiUrl,
			refreshUrl: app._refreshUrl,
			locationId: this.locationId,
			installedAppId: this.installedAppId,
			contextStore: app._contextStore,
			apiMutex
		})
	}

	async retrieveTokens(app) {
		const data = await app._contextStore.get(this.installedAppId)
		if (data) {
			this.locationId = data.locationId
			this.api = new SmartThingsApi({
				authToken: data.authToken,
				refreshToken: data.authToken,
				clientId: app._clientId,
				clientSecret: app._clientSecret,
				log: app._log,
				apiUrl: app._apiUrl,
				refreshUrl: app._refreshUrl,
				locationId: this.locationId,
				installedAppId: this.installedAppId,
				contextStore: app._contextStore,
				apiMutex: new Mutex()
			})
		}
	}

	isAuthenticated() {
		return Boolean(this.api.client.authToken)
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

	/**
	 * Retrieve a Boolean value from the configuration map for the InstalledApp context
	 * @param {String} name The config key name
	 * @returns {Boolean}
	 */
	configBooleanValue(name) {
		const entry = this.config[name]
		if (!entry) {
			return false
		}

		return entry[0].stringConfig.value === 'true'
	}

	/**
	 * Retrieve a Number value from the configuration map for the InstalledApp context
	 * @param {String} name The config key name
	 * @returns {?Number}
	 */
	configNumberValue(name) {
		const entry = this.config[name]
		if (!entry) {
			return
		}

		return Number(entry[0].stringConfig.value)
	}

	/**
	 * Retrieve a String value from the configuration map for the InstalledApp context
	 * @param {String} name The config key name
	 * @returns {?Date}
	 */
	configDateValue(name) {
		const entry = this.config[name]
		if (!entry) {
			return
		}

		return new Date(entry[0].stringConfig.value)
	}

	/**
	 * Retrieve a locale-base time string value from the configuration map for the InstalledApp context
	 * @param {String} name The config key name
	 * @param {object} [options={}] Optional [toLocaleTimeString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString#Parameters) formatting options
	 * @returns {?String}
	 * @example
	 * // Override the hour field
	 * context.configTimeString('myKeyName', {hour: '2-digit'})
	 *
	 * // Override with advanced usage of toLocaleTimeString() options
	 * const options = {
	 *   hour: 'numeric',
	 *   minute: '2-digit',
	 *   second: 'numeric',
	 *   era: 'long'
	 * }
	 * context.configTimeString('myKeyName', options)
	 */
	configTimeString(name, options = {}) {
		const entry = this.configDateValue(name)
		if (!entry) {
			return
		}

		if (Object.entries(options).length === 0 && options.constructor === Object) {
			options.hour = '2-digit'
			options.minute = '2-digit'
		}

		return entry.toLocaleTimeString(this.locale, options)
	}

	/**
	 * Retrieve a `modeId` string value from the configuration map for the InstalledApp context
	 * @param {String} name The config key name
	 * @returns {?Array.<String>}
	 */
	configModeIds(name) {
		const entry = this.config[name]
		if (!entry) {
			return
		}

		return entry.map(it => it.modeConfig.modeId)
	}

	/**
	 * @typedef ConfigDevice
	 * @property {String} deviceId
	 * @property {String} name
	 * @property {String} label
	 * @property {String} componentId
	 */

	/**
	 * @typedef ConfigDeviceWithState
	 * @property {String} deviceId
	 * @property {String} name
	 * @property {String} label
	 * @property {String} componentId
	 * @property {Object} state
	 */

	/**
	 * Retrieve a `ConfigDevice` string value from the configuration map for the InstalledApp context
	 * @param {String} name The config key name
	 * @returns {Promise.<Array.<ConfigDevice>>}
	 */
	configDevices(name) {
		const list = []
		const entry = this.config[name]
		if (!entry) {
			return
		}

		entry.forEach(item => {
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
		})
		return Promise.all(list)
	}

	/**
	 * Retrieve a `ConfigDevice` string value from the configuration map for the InstalledApp context
	 * @param {String} name The config key name
	 * @returns {Promise.<Array.<ConfigDeviceWithState>>}
	 */
	configDevicesWithState(name) {
		const list = []
		const entry = this.config[name]
		if (!entry) {
			return
		}

		entry.forEach(item => {
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
		})
		return Promise.all(list)
	}
}
