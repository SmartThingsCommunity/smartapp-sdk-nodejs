const SmartApp = require('../../../lib/smart-app')

describe('hub-health-event-spec', () => {
	let app
	let receivedEvent
	let receivedEventTime

	beforeEach(() => {
		app = new SmartApp({logUnhandledRejections: false})
	})

	it('should handle HUB_HEALTH_EVENT', async () => {
		const expectedEvent = {
			'eventId': '12347df0-ade4-11e9-b187-3f8238130d63',
			'locationId': '66b5208f-f3e2-4a1a-c3eb-e2e34e009828',
			'hubId': '1935208f-f4d2-4a1a-c3eb-e2e45e008928',
			'status': 'OFFLINE'
		}
		const expectedEventTime = '2019-07-24T07:23:17Z'

		app.subscribedHubHealthEventHandler('hubHealth', (_, event, eventTime) => {
			receivedEvent = event
			receivedEventTime = eventTime
		})
		await app.handleMockCallback({
			'lifecycle': 'EVENT',
			'executionId': '66b5208f-f3e2-403a-b2da-e2e34e009828',
			'locale': 'en-US',
			'version': '0.1.0',
			'eventData': {
				'installedApp': {
					'installedAppId': 'a7dfaa78-cce7-459c-8d0c-d593f0d55b76',
					'locationId': '5f278baa-aff0-4cf0-a323-3d9ee1fc58d5',
					'config': {},
					'permissions': [
						'r:locations:*',
						'x:devices:*',
						'i:deviceprofiles',
						'r:devices:*'
					]
				},
				'events': [
					{
						'eventTime': '2019-07-24T07:23:17Z',
						'eventType': 'HUB_HEALTH_EVENT',
						'hubHealthEvent': expectedEvent
					}
				]
			},
			'settings': {}
		})

		expect(receivedEvent).toStrictEqual(expectedEvent)
		expect(receivedEventTime).toBe(expectedEventTime)
	})
})
