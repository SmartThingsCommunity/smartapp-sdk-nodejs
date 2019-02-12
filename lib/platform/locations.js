'use strict'

const Base = require('./base')

module.exports = class Locations extends Base {
	constructor(st) {
		super(st)
	}

	list(query = {max: 500}) {
		return this.st.client.request('locations', 'GET', null, null, query)
	}

	get(id = null) {
		const isa = id ? id : this.st.locationId
		return this.st.client.request(`locations/${isa}`)
	}

	updateLocation(id, data) {
		return this.st.client.request(`locations/${id}`, 'PUT', data)
	}

	createLocation(data) {
		return this.st.client.request('locations', 'POST', data)
	}

	deleteLocation(id) {
		return this.st.client.request(`locations/${id}`, 'DELETE')
	}
}
