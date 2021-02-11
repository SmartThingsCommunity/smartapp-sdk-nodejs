const SmartApp = require('../../../lib/smart-app')

describe('mode-event-spec', () => {
	/** @type {SmartApp} */
	let app
	let receivedEvent
	let receivedEventTime

	beforeEach(() => {
		app = new SmartApp({logUnhandledRejections: false})
	})

	it('should handle MODE_EVENT', async () => {
		const expectedEvent = {
			'eventId': 'e9ede6a6-ade1-11e9-8a15-5998645d79ea',
			'locationId': '5f278baa-aff0-4cf0-a323-3d9ee1fc58d5',
			'modeId': '57ae8db9-9187-4293-bf7c-c0218825e94e'
		}
		const expectedEventTime = '2019-07-24T07:09:01Z'

		app.subscribedModeEventHandler('modeHandler', (_, event, eventTime) => {
			receivedEvent = event
			receivedEventTime = eventTime
		})
		await app.handleMockCallback({
			'lifecycle': 'EVENT',
			'executionId': '66D91548-8643-444F-B402-F5CE832A5120',
			'locale': 'en-US',
			'version': '0.1.0',
			'eventData': {
				'authToken': 'WVlMWZjNThkNSIsInNjb3BlIjpbImk6ZGV2aWNlcHJvZmlsZXMiLCJyOmRldmljZXM6KiIsInI6bG9jYXRpb25zOioiLCJ4OmRldmljZXM6KiJdLCJleHAiOjE1NjM5NTI0NDEsImNsaWVudF9pZCI6ImVhODM5ZGJhLTVkZGEtNDFmYS1iMGU0LTgzOWYyOTRiNjJhMiJ9.mJ3cHGncbk6BCt-eEHOb-w3_F6RB_O2A48MzgCphfnOIHkF8WDoDPW-Hhu6c40kXGpGVAryQDHrNWB5NauYVztuYxHBrjFVpxgFDcVOd1zZjUbba4Aeflde8Q0cfPHWezJB3udsXCbRxO0BOXArQmWL_orVb1SX4U-A59anHOQ-x8zvKEYB_-swFSMF3bL2Sbz7-tCKREzMoWWXvJ5mVdek_QBQE0kHLYH0i-GOiKKNjTz2w8RrCOI9FR70cuSWyqG47Q5EtF7ESAHjIVmqtQcnuchK2zhhWnrJbicJ_XzvtPrJs1DBKzJUkNAsgR4RAA6GpixQZLnCrIw0HJU7oRA',
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
						'eventTime': '2019-07-24T07:09:01Z',
						'eventType': 'MODE_EVENT',
						'modeEvent': expectedEvent
					}
				]
			},
			'settings': {}
		})

		expect(receivedEvent).toStrictEqual(expectedEvent)
		expect(receivedEventTime).toBe(expectedEventTime)
	})

	it('should return 200 status for defined mode event handler', async () => {
		app.subscribedModeEventHandler('otherHandler', _ => {
		})

		const response = await app.handleMockCallback({
			'messageType': 'EVENT',
			'eventData': {
				'installedApp': {
					'installedAppId': '07891f14-82da-4239-9900-42e437c49f45',
					'locationId': '5f278baa-aff0-4cf0-a323-3d9ee1fc58d5'
				},
				'events': [
					{
						'eventTime': '2019-08-20T15:36:34Z',
						'eventType': 'MODE_EVENT',
						'modeEvent': {
							'eventId': '497c21fa-a045-4008-9e84-79b160b8fa44',
							'locationId': '5f278baa-aff0-4cf0-a323-3d9ee1fc58d5',
							'modeId': '497c21fa-a045-4008-9e84-79b160b8fa44'
						}
					}
				]
			}
		})

		expect(response.statusCode).toBe(200)
	})

	it('should throw 422 error for undefined mode event handler', async () => {
		const response = await app.handleMockCallback({
			'messageType': 'EVENT',
			'eventData': {
				'installedApp': {
					'installedAppId': '07891f14-82da-4239-9900-42e437c49f45',
					'locationId': '5f278baa-aff0-4cf0-a323-3d9ee1fc58d5'
				},
				'events': [
					{
						'eventTime': '2019-08-20T15:36:34Z',
						'eventType': 'MODE_EVENT',
						'modeEvent': {
							'eventId': '497c21fa-a045-4008-9e84-79b160b8fa44',
							'locationId': '5f278baa-aff0-4cf0-a323-3d9ee1fc58d5',
							'modeId': '497c21fa-a045-4008-9e84-79b160b8fa44'
						}
					}
				]
			}
		})

		expect(response.statusCode).toBe(422)
	})
})
