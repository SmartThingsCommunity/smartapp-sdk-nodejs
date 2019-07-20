'use strict'

const Base = require('./base')

module.exports = class Rooms extends Base {
	list(locationId = null) {
		const loc = locationId || this.st.locationId
		return this.st.client.request(`locations/${loc}/rooms`)
	}

	get(id, locationId = null) {
		const loc = locationId || this.st.locationId
		return this.st.client.request(`locations/${loc}/rooms/${id}`)
	}

	create(data, locationId = null) {
		const loc = locationId || this.st.locationId
		return this.st.client.request(`locations/${loc}/rooms`, 'POST', data)
	}

	update(id, data, locationId = null) {
		const loc = locationId || this.st.locationId
		return this.st.client.request(`locations/${loc}/rooms/${id}`, 'PUT', data)
	}

	delete(id, locationId = null) {
		const loc = locationId || this.st.locationId
		return this.st.client.request(`locations/${loc}/rooms/${id}`, 'DELETE')
	}
}
