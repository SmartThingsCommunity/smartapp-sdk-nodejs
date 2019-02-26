'use strict'
const Base = require('./base')

module.exports = class Subscriptions extends Base {
	constructor(st) {
		super(st)
	}

	list() {
		return this.st.client.request(`installedapps/${this.st.installedAppId}/subscriptions`)
	}

	get(name) {
		return this.st.client.request(`installedapps/${this.st.installedAppId}/subscriptions/${name}`)
	}

	update(name, data) {
		return this.st.client.request(`installedapps/${this.st.installedAppId}/subscriptions`, 'PUT', data)
	}

	unsubscribe(name) {
		return this.st.client.request(`installedapps/${this.st.installedAppId}/subscriptions/${name}`, 'DELETE')
	}

	unsubscribeAll() {
		return this.st.client.request(`installedapps/${this.st.installedAppId}/subscriptions/`, 'DELETE')
	}

	subscribeToDevices(devices, capability, attribute, subscriptionName, options = {}) {
		if (devices) {
			const segs = attribute.split('.')
			const attributeName = segs[0]
			const attributeValue = segs.length > 1 ? segs[1] : '*'
			const path = `installedapps/${this.st.installedAppId}/subscriptions`
			devices.forEach((device, index) => {
				const body = {
					sourceType: 'DEVICE',
					device: {
						componentId: device.deviceConfig.componentId,
						deviceId: device.deviceConfig.deviceId,
						capability,
						attribute: attributeName,
						stateChangeOnly: options.stateChangeOnly ? options.stateChangeOnly : true,
						subscriptionName: `${subscriptionName}_${index}`,
						value: attributeValue
					}
				}
				if (options.modes) {
					body.capability.modes = options.modes
				}

				return this.st.client.request(path, 'POST', body)
			})
		}
	}

	subscribeToCapability(capability, attribute, subscriptionName, options = {}) {
		const segs = attribute.split('.')
		const attributeName = segs[0]
		const attributeValue = segs.length > 1 ? segs[1] : '*'
		const path = `installedapps/${this.st.installedAppId}/subscriptions`
		const body = {
			sourceType: 'CAPABILITY',
			capability: {
				locationId: this.st.locationId,
				capability,
				attribute: attributeName,
				stateChangeOnly: options.stateChangeOnly ? options.stateChangeOnly : true,
				subscriptionName,
				value: attributeValue
			}
		}
		if (options.modes) {
			body.capability.modes = options.modes
		}

		return this.st.client.request(path, 'POST', body)
	}

	// TODO there's no handler name!
	subscribeToModeChange(_) {
		const path = `installedapps/${this.st.installedAppId}/subscriptions`
		const body = {
			sourceType: 'MODE',
			mode: {
				locationId: this.st.locationId
			}
		}
		return this.st.client.request(path, 'POST', body)
	}

	// TODO -- need this for entire location
	subscribeToDeviceLifecycle(devices, subscriptionName) {
		const path = `installedapps/${this.st.installedAppId}/subscriptions`
		const body = {
			sourceType: 'DEVICE_LIFECYCLE',
			deviceLifecycle: {
				deviceIds: devices.map(it => it.deviceConfig.deviceId),
				locationId: this.st.locationId,
				subscriptionName
			}
		}
		return this.st.client.request(path, 'POST', body)
	}

	// Why does this accept an array of device IDs but devices does not
	subscribeToDeviceHealth(devices, subscriptionName) {
		const path = `installedapps/${this.st.installedAppId}/subscriptions`
		const body = {
			sourceType: 'DEVICE_HEALTH',
			deviceHealth: {
				deviceIds: devices.map(it => it.deviceConfig.deviceId),
				locationId: this.st.locationId,
				subscriptionName
			}
		}
		return this.st.client.request(path, 'POST', body)
	}

	subscribeToSecuritySystem(subscriptionName) {
		const path = `installedapps/${this.st.installedAppId}/subscriptions`
		const body = {
			sourceType: 'SECURITY_ARM_STATE',
			securityArmState: {
				locationId: this.st.locationId,
				subscriptionName
			}
		}
		return this.st.client.request(path, 'POST', body)
	}

	subscribeToHubHealth(subscriptionName) {
		const path = `installedapps/${this.st.installedAppId}/subscriptions`
		const body = {
			sourceType: 'HUB_HEALTH',
			hubHealth: {
				locationId: this.st.locationId,
				subscriptionName
			}
		}
		return this.st.client.request(path, 'POST', body)
	}

	subscribeToSceneLifecycle(subscriptionName) {
		const path = `installedapps/${this.st.installedAppId}/subscriptions`
		const body = {
			sourceType: 'SCENE_LIFECYCLE',
			sceneLifecycle: {
				locationId: this.st.locationId,
				subscriptionName
			}
		}
		return this.st.client.request(path, 'POST', body)
	}
}
