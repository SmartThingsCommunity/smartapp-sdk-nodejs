'use strict'

const Base = require('./base')

module.exports = class InstalledApps extends Base {
	constructor(st) {
		super(st)
	}

	list(locationId = null) {
		const loc = locationId ? locationId : this.st.locationId
		return this.st.client.request('installedapps', null, {locationId: loc, max: 500})
	}

	get(id = null) {
		const isa = id ? id : this.st.installedAppId
		return this.st.client.request(`installedapps/${isa}`)
	}

	update(id, data) {
		const isa = data ? (id ? id : this.st.installedAppId) : this.st.installedAppId
		const d = data ? data : id
		return this.st.client.request(`installedapps/${isa}`, 'PUT', d)
	}

	getConfigs(id = null) {
		const isa = id ? id : this.st.installedAppId
		return this.st.client.request(`installedapps/${isa}/configs`)
	}

	getConfig(id = null, configId) {
		const isa = configId ? (id ? id : this.st.installedAppId) : this.st.installedAppId
		const conf = configId ? configId : id
		return this.st.client.request(`installedapps/${isa}/configs/${conf}`)
	}

	deleteInstalledApp(id = null) {
		const isa = id ? id : this.st.installedAppId
		return this.st.client.request(`installedapps/${isa}`, 'DELETE')
	}

	listChildDevices() {
		// TODO - someday this shouldn't be needed
		const isa = this.st.installedAppId
		return this.st.client.request(`devices?locationId=${this.st.locationId}`, data => {
			const result = []
			if (data.items) {
				for (let i = 0; i < data.items.length; i++) {
					const it = data.items[i]
					if (it.app) {
						if (it.app.installedAppId === isa) {
							result.push(it)
						}
					}
				}
			}

			return result
		})
	}
}
