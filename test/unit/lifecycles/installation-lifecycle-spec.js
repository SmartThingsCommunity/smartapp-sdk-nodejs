const SmartApp = require('../../../lib/smart-app')

describe('installation-lifecycle-spec', () => {
	let app
	let expectedData
	let receivedEvent
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

	it('should handle INSTALL lifecycle', async () => {
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

	it('should handle UNINSTALL lifecycle', async () => {
		const expectedEvent = {
			'installedApp': {
				'installedAppId': 'd46a1c60-b6bd-4f82-b124-028e0f14a4f4',
				'locationId': 'e1e66eab-1eab-4f09-9bb6-91da6585576d',
				'config': {},
				'permissions': []
			}
		}
		app.uninstalled((_, event) => {
			receivedEvent = event
		})
		await app.handleMockCallback({
			'lifecycle': 'UNINSTALL',
			'executionId': 'e139dc1f-ee24-3c1a-309e-48669006817f',
			'locale': 'en-US',
			'version': '0.1.0',
			'uninstallData': {
				'installedApp': {
					'installedAppId': 'd46a1c60-b6bd-4f82-b124-028e0f14a4f4',
					'locationId': 'e1e66eab-1eab-4f09-9bb6-91da6585576d',
					'config': {},
					'permissions': []
				}
			},
			'settings': {}
		})

		expect(receivedEvent).toStrictEqual(expectedEvent)
	})

	it('should handle UPDATE lifecycle', async () => {
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
})
