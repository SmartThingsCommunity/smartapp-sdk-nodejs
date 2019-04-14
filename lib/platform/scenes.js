'use strict'

const Base = require('./base')

module.exports = class Scenes extends Base {
	list(query = {max: 500}) {
		const qs = query
		if (this.st.locationId) {
			qs.locationid = this.st.locationId
		}

		return this.st.client.request('scenes', 'GET', null, null, qs)
	}

	getScene(id) {
		return this.st.client.request('scenes', 'GET', null, (data => {
			return data.items.find(it => {
				return it.sceneId === id
			})
		}))
	}

	execute(id) {
		return this.st.client.request(`scenes/${id}/execute`, 'POST')
	}
}
