'use strict'

const Base = require('./base')

module.exports = class Devices extends Base {
	create(params) {
		const body = {
			label: params.label,
			locationId: this.st.locationId,
			app: {
				profileId: params.profileId,
				installedAppId: this.st.installedAppId,
				externalId: params.externalId ? params.externalId : 'undefined'
			}
		}
		return this.st.client.request('devices', 'POST', body)
	}

	delete(deviceId) {
		return this.st.client.request(`devices/${deviceId}`, 'DELETE')
	}

	get(deviceId) {
		return this.st.client.request(`devices/${deviceId}`)
	}

	update(deviceId, data) {
		return this.st.client.request(`devices/${deviceId}`, 'PUT', data)
	}

	sendEvents(deviceId, events) {
		return this.st.client.request('devices/' + deviceId + '/events', 'POST', events)
	}

	listInLocation() {
		return this.st.client.request(`devices?locationId=${this.st.locationId}`)
	}

	findByCapability(capabilityId) {
		return this.st.client.request(`devices?locationId=${this.st.locationId}&capability=${capabilityId}`)
	}

	listAll() {
		return this.st.client.request('devices')
	}

	sendCommand(item, capabilityNameOrCmdList, command, args) {
		let commands
		const {deviceConfig} = item
		if (Array.isArray(capabilityNameOrCmdList)) {
			commands = capabilityNameOrCmdList.map(it => {
				return {
					component: deviceConfig.componentId,
					capability: it.capability,
					command: it.command,
					arguments: it.arguments || []
				}
			})
		} else {
			commands = [
				{
					component: deviceConfig.componentId,
					capability: capabilityNameOrCmdList,
					command,
					arguments: args || []
				}
			]
		}

		const body = {commands}
		return this.st.client.request(`devices/${deviceConfig.deviceId}/commands`, 'POST', body)
	}

	sendCommands(items, capabilityNameOrCmdList, command, args) {
		const results = []
		if (items) {
			for (const it of items) {
				results.push(this.sendCommand(it, capabilityNameOrCmdList, command, args))
			}
		}

		return Promise.all(results)
	}

	postCommands(deviceId, body) {
		return this.st.client.request(`devices/${deviceId}/commands`, 'POST', body)
	}

	getState(deviceId) {
		return this.st.client.request(`devices/${deviceId}/status`)
	}

	getComponentState(deviceId, componentId) {
		return this.st.client.request(`devices/${deviceId}/components/${componentId}/status`)
	}

	getCapabilityState(deviceId, componentId, capabilityId) {
		return this.st.client.request(`devices/${deviceId}/components/${componentId}/capabilities/${capabilityId}/status`)
	}

	getHealth(deviceId) {
		return this.st.client.request(`devices/${deviceId}/health`).catch(error => {
			if (error.statusCode === 404) {
				return {state: 'UNKNOWN'}
			}

			return Promise.reject(error)
		})
	}

	getAttributeValue(deviceId, capability, attribute) {
		return this.st.client.request(`devices/${deviceId}/components/main/capabilities/${capability}/status`, 'GET', null, data => {
			return data[attribute].value
		})
	}

	namedColor(color, sat = 100) {
		let hueColor = 0
		const saturation = sat
		switch (color) {
			case 'Blue':
				hueColor = 70
				break
			case 'Green':
				hueColor = 39
				break
			case 'Yellow':
				hueColor = 25
				break
			case 'Orange':
				hueColor = 10
				break
			case 'Purple':
				hueColor = 75
				break
			case 'Pink':
				hueColor = 83
				break
			case 'Red':
				hueColor = 100
				break
			default:
				hueColor = 0
		}

		return {hue: hueColor, saturation}
	}
}
