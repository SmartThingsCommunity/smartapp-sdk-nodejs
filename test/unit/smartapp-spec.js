const Log = require('../../lib/util/log')
const SmartApp = require('../../lib/smart-app')

describe('smartapp-spec', () => {
	let app
	let expectedData
	let receivedData

	beforeEach(() => {
		app = new SmartApp({logUnhandledRejections: false})
		expectedData = {
			authToken: 'string',
			refreshToken: 'string',
			installedApp: {
				installedAppId: 'd692699d-e7a6-400d-a0b7-d5be96e7a564',
				locationId: 'e675a3d9-2499-406c-86dc-8a492a886494',
				config: {}
			}
		}
	})

	it('should handle INSTALL event', async () => {
		app.installed((_, installData) => {
			receivedData = installData
		})
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
			installData: expectedData,
			settings: {}
		})

		expect(receivedData).toStrictEqual(expectedData)
	})

	it('should handle UPDATE event', async () => {
		app.updated((_, updateData) => {
			receivedData = updateData
		})
		await app.handleMockCallback({
			lifecycle: 'UPDATE',
			executionId: 'e6903fe6-f88f-da69-4c12-e2802606ccbc',
			locale: 'en',
			version: '0.1.0',
			client: {
				os: 'ios',
				version: '0.0.0',
				language: 'en-US'
			},
			updateData: expectedData,
			settings: {}
		})

		expect(receivedData).toStrictEqual(expectedData)
	})

	it('should warn when event type is unhandled', async () => {
		const logSpy = jest.spyOn(Log.prototype, 'warn')

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
