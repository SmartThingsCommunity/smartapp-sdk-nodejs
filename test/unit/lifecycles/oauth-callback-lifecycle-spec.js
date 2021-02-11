const SmartApp = require('../../../lib/smart-app')

describe('oauth-callback-lifecycle-spec', () => {
	let app
	const oauthCallbackLifecycle = {
		lifecycle: 'OAUTH_CALLBACK',
		executionId: '00000000-0000-0000-0000-000000000000',
		locale: 'en',
		version: '1.0.0',
		oAuthCallbackData: {
			installedAppId: '00000000-0000-0000-0000-000000000000',
			urlPath: 'localhost'
		}
	}

	beforeEach(() => {
		app = new SmartApp({logUnhandledRejections: false})
	})

	it('should handle OAUTH_CALLBACK lifecycle', async () => {
		const mockCallback = jest.fn()
		app.oauthHandler(mockCallback)

		const response = await app.handleMockCallback(oauthCallbackLifecycle)

		expect(mockCallback).toBeCalledTimes(1)
		expect(response.statusCode).toBe(200)
	})

	it('should return 200 when oauth handler not set', async () => {
		const response = await app.handleMockCallback(oauthCallbackLifecycle)

		expect(response.statusCode).toBe(200)
	})
})
