'use strict'

const Base = require('./base')

module.exports = class Rules extends Base {
	list(locationId = null) {
		const loc = locationId ? locationId : this.st.locationId
		return this.st.client.request('rules', 'GET', null, null, {locationId: loc, max: 500})
	}

	get(ruleId, locationId = null) {
		const loc = locationId ? locationId : this.st.locationId
		return this.st.client.request(`rules/${ruleId}`, 'GET', null, null, {locationId: loc})
	}

	delete(ruleId, locationId = null) {
		const loc = locationId ? locationId : this.st.locationId
		return this.st.client.request(`rules/${ruleId}`, 'DELETE', null, null, {locationId: loc})
	}

	create(data, locationId = null) {
		const loc = locationId ? locationId : this.st.locationId
		return this.st.client.request('rules', 'POST', data, null, {locationId: loc})
	}

	update(ruleId, data, locationId = null) {
		const loc = locationId ? locationId : this.st.locationId
		return this.st.client.request(`rules/${ruleId}`, 'PUT', data, null, {locationId: loc})
	}

	execute(id, locationId = null) {
		const loc = locationId ? locationId : this.st.locationId
		return this.st.client.request(`rules/execute/${id}`, 'POST', null, null, {locationId: loc})
	}
}
