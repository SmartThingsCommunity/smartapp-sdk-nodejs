const SmartApp = require('../../../lib/smart-app')

describe('installed-app-lifecycle-event-spec', () => {
	let app
	let receivedEvent

	beforeEach(() => {
		app = new SmartApp({logUnhandledRejections: false})
	})

	it('should handle UNINSTALL event', async () => {
		const expectedEvent = {
			'installedApp': {
				'installedAppId': '8f8004ac-789e-40a3-84db-896545a112f8',
				'locationId': 'e1e66eab-1eab-4f09-9bb6-91da6585576d'
			}
		}
		app.uninstalled((_, event) => {
			receivedEvent = event
		})
		await app.handleMockCallback({
			'messageType': 'EVENT',
			'eventData': {
				'installedApp': {
					'installedAppId': '8f8004ac-789e-40a3-84db-896545a112f8',
					'locationId': 'e1e66eab-1eab-4f09-9bb6-91da6585576d'
				},
				'events': [
					{
						'eventTime': '2019-08-20T16:36:06Z',
						'eventType': 'INSTALLED_APP_LIFECYCLE_EVENT',
						'installedAppLifecycleEvent': {
							'eventId': '9ba30d8d-c368-11e9-80a8-1fbacc5808f3',
							'locationId': 'e1e66eab-1eab-4f09-9bb6-91da6585576d',
							'installedAppId': '8f8004ac-789e-40a3-84db-896545a112f8',
							'appId': '4406788a-c401-4752-a8ce-af7cf75d06d3',
							'lifecycle': 'DELETE',
							'delete': {}
						}
					}
				]
			}
		})

		expect(receivedEvent).toStrictEqual(expectedEvent)
	})
})
