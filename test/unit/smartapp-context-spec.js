const assert = require('assert').strict
const {
	BearerTokenAuthenticator,
	SequentialRefreshTokenAuthenticator} = require('@smartthings/core-sdk')
const SmartApp = require('../../lib/smart-app')
const SmartAppContext = require('../../lib/util/smart-app-context')
const ContextStore = require('../utilities/context-store')

describe('smartapp-context-spec', () => {
	let app

	beforeEach(() => {
		app = new SmartApp({logUnhandledRejections: false})
	})

	it('endpoint app with unitialized context store', async () => {
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

		expect(ctx).toBeInstanceOf(SmartAppContext)
		expect(ctx.api.config.authenticator).toBeInstanceOf(SequentialRefreshTokenAuthenticator)
		assert.equal(installData.installedApp.installedAppId, ctx.installedAppId)
		assert.equal(installData.installedApp.locationId, ctx.locationId)
		assert.equal(installData.authToken, ctx.authToken)
		assert.equal(installData.refreshToken, ctx.refreshToken)
	})

	it('endpoint app with populated context store', async () => {
		const installData = {
			authToken: 'xxx',
			refreshToken: 'yyy',
			installedApp: {
				installedAppId: 'd692699d-e7a6-400d-a0b7-d5be96e7a564',
				locationId: 'e675a3d9-2499-406c-86dc-8a492a886494',
				config: {}
			}
		}

		const contextStore = new ContextStore({
			'd692699d-e7a6-400d-a0b7-d5be96e7a564': {
				locationId: 'e675a3d9-2499-406c-86dc-8a492a886494',
				installedAppId: 'd692699d-e7a6-400d-a0b7-d5be96e7a564',
				state: {
					accessToken: 'xxx'
				}
			}
		})
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

		expect(ctx).toBeInstanceOf(SmartAppContext)
		expect(ctx.api.config.authenticator).toBeInstanceOf(SequentialRefreshTokenAuthenticator)
		assert.equal(installData.installedApp.installedAppId, ctx.installedAppId)
		assert.equal(installData.installedApp.locationId, ctx.locationId)
		assert.equal(installData.authToken, ctx.authToken)
		assert.equal(installData.refreshToken, ctx.refreshToken)
		assert.equal(await ctx.getItem('accessToken'), 'xxx')
	})

	it('endpoint app with context object', async () => {
		const params = {
			authToken: 'xxx',
			installedAppId: 'aaa',
			locationId: 'bbb',
			locale: 'en',
			config: {device: 'ccc'}
		}

		const ctx = await app.withContext(params)

		expect(ctx.api.config.authenticator).toBeInstanceOf(BearerTokenAuthenticator)
		assert.equal(params.installedAppId, ctx.installedAppId)
		assert.equal(params.locationId, ctx.locationId)
		assert.equal(params.authToken, ctx.authToken)
		assert.equal(params.locale, ctx.event.locale)
	})

	it('api app with context object', async () => {
		const contextStore = new ContextStore()
		app.contextStore(contextStore)

		const params = {
			authToken: 'xxx',
			refreshToken: 'yyy',
			installedAppId: 'aaa',
			locationId: 'bbb'
		}

		const ctx = await app.withContext(params)

		expect(ctx.api.config.authenticator).toBeInstanceOf(SequentialRefreshTokenAuthenticator)
		assert.equal(params.installedAppId, ctx.installedAppId)
		assert.equal(params.locationId, ctx.locationId)
		assert.equal(params.authToken, ctx.authToken)
		assert.equal(params.refreshToken, ctx.refreshToken)
		assert.equal(params.locale, ctx.event.locale)
	})

	it('accept-language header in API calls', async () => {
		const params = {
			authToken: 'xxx',
			installedAppId: 'aaa',
			locationId: 'bbb',
			locale: 'es',
			config: {device: 'ccc'}
		}

		const ctx = await app.withContext(params)

		expect(ctx.api.config.headers['Accept-Language']).toBe('es')
	})

	test('get item', async () => {
		const contextStore = new ContextStore(
			{
				'get-item-1': {
					installedAppId: 'get-item-1',
					state: {
						count: 1
					}
				}
			}
		)
		app.contextStore(contextStore)
		const ctx = await app.withContext('get-item-1')
		const count = await ctx.getItem('count')

		expect(count).toBe(1)
	})

	test('set item', async () => {
		const contextStore = new ContextStore(
			{
				'set-item-1': {
					installedAppId: 'set-item-1',
					state: {}
				}
			}
		)
		app.contextStore(contextStore)
		const ctx = await app.withContext('set-item-1')
		await ctx.setItem('count', 2)

		const count = await ctx.getItem('count')

		expect(count).toBe(2)
	})
})
