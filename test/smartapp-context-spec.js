/* eslint no-undef: "off" */

const assert = require('assert').strict
const SmartApp = require('../lib/smart-app')

class ContextStore {
	constructor() {
		this.contexts = {}
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

describe('smartapp-context-spec', () => {
	let app

	beforeEach(() => {
		app = new SmartApp()
	})

	it('should handle context store', async () => {
		const installData = {
			authToken: 'xxx',
			refreshToken: 'yyy',
			installedApp: {
				installedAppId: 'd692699d-e7a6-400d-a0b7-d5be96e7a564',
				locationId: 'e675a3d9-2499-406c-86dc-8a492a886494',
				config: {}
			}
		}

		const contextStore = new ContextStore()
		app.contextStore(contextStore)

		await app.handleMockCallback({
			lifecycle: 'INSTALL',
			executionId: 'e6903fe6-f88f-da69-4c12-e2802606ccbc',
			locale: 'en',
			version: '0.1.0',
			client: {
				os: 'ios',
				version: '0.0.0',
				language: 'en-US'
			},
			installData,
			settings: {}
		})

		const ctx = await app.withContext('d692699d-e7a6-400d-a0b7-d5be96e7a564')

		assert.equal(installData.installedApp.installedAppId, ctx.installedAppId)
		assert.equal(installData.installedApp.locationId, ctx.locationId)
		assert.equal(installData.authToken, ctx.api.client.authToken)
		assert.equal(installData.refreshToken, ctx.api.client.refreshToken)
	})

	it('should handle context object', async () => {
		const params = {
			authToken: 'xxx',
			refreshToken: 'yyy',
			installedAppId: 'aaa',
			locationId: 'bbb',
			locale: 'en',
			config: {device: 'ccc'}
		}

		const ctx = await app.withContext(params)

		assert.equal(params.installedAppId, ctx.installedAppId)
		assert.equal(params.locationId, ctx.locationId)
		assert.equal(params.authToken, ctx.api.client.authToken)
		assert.equal(params.refreshToken, ctx.api.client.refreshToken)
		assert.equal(params.locale, ctx.event.locale)
	})
})
