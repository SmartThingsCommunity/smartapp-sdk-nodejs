class ContextStore {
	constructor() {
		this.contexts = {
			'00000000-0000-0000-0000-000000000000': {
				locationId: 'e9a56178-3518-49f3-b944-a25ac941c3bd'
			}
		}
	}

	get(installedAppId) {
		return new Promise(resolve => {
			resolve(this.contexts[installedAppId])
		})
	}

	put(params) {
		this.contexts[params.installedAppId] = params
		return new Promise(resolve => {
			resolve()
		})
	}

	update(installedAppId, params) {
		this.contexts[params.installedAppId].authToken = params.authToken
		this.contexts[params.installedAppId].refreshToken = params.refreshToken
		return new Promise(resolve => {
			resolve()
		})
	}

	delete(installedAppId) {
		this.contexts[installedAppId] = null
		return new Promise(resolve => {
			resolve()
		})
	}
}

module.exports = ContextStore
