const SmartApp = require('../../lib/smart-app')

describe('smartapp-spec', () => {
	let app

	beforeEach(() => {
		app = new SmartApp({logUnhandledRejections: false})
	})

	it('should configure event logger', async () => {
		app.enableEventLogging(4)

		expect(app._log._eventsEnabled).toBe(true)
		expect(app._log._jsonSpace).toBe(4)
	})

	it('should respond with error when config phase is not supported', async () => {
		const unsupportedConfigPhase = {
			lifecycle: 'CONFIGURATION',
			executionId: '00000000-0000-0000-0000-000000000000',
			locale: 'en',
			version: '0.1.0',
			client: {
				os: 'ios',
				version: '0.0.0',
				language: 'fr'
			},
			configurationData: {
				installedAppId: '00000000-0000-0000-0000-000000000000',
				phase: 'UNSUPPORTED',
				pageId: '',
				previousPageId: '',
				config: {}
			},
			settings: {}
		}

		const expectedPageResponse = {
			message: 'Server error: \'Error: Unsupported config phase: UNSUPPORTED\'',
			statusCode: 500
		}

		await expect(app.handleMockCallback(unsupportedConfigPhase)).resolves.toStrictEqual(expectedPageResponse)
	})

	it('should warn when event type is unhandled', async () => {
		const logSpy = jest.spyOn(app._log, 'warn')

		const unhandledEvent = {
			lifecycle: 'EVENT',
			eventData: {
				installedApp: {
					installedAppId: '00000000-0000-0000-0000-000000000000'
				},
				events: [
					{
						eventType: 'UNHANDLED_EVENT'
					}
				]
			}
		}

		await expect(app.handleMockCallback(unhandledEvent)).resolves.not.toThrow()
		expect(logSpy).toBeCalledTimes(1)
		expect(logSpy).toBeCalledWith('Unhandled event of type UNHANDLED_EVENT')

		logSpy.mockClear()
	})
})
