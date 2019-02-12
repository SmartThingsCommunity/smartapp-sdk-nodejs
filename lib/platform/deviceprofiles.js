'use strict'

const Base = require('./base')

module.exports = class DeviceProfiles extends Base {
	constructor(st) {
		super(st)
	}

	list(query = {max: 500}) {
		return this.st.client.request('deviceprofiles', 'GET', null, null, query)
	}

	get(id) {
		return this.st.client.request(`deviceprofiles/${id}`)
	}

	create(data) {
		return this.st.client.request('deviceprofiles', 'POST', data)
	}

	update(id, data) {
		return this.st.client.request(`deviceprofiles/${id}`, 'PUT', data)
	}
}
