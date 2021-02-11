const SmartApp = require('../../../lib/smart-app')

describe('device-health-event-spec', () => {
	let app
	let receivedEvent
	let receivedEventTime

	beforeEach(() => {
		app = new SmartApp({logUnhandledRejections: false})
	})

	it('should handle DEVICE_HEALTH_EVENT', async () => {
		const expectedEvent = {
			'eventId': '0bde7df0-ade4-11e9-b187-3f8238130d63',
			'locationId': '5f278baa-aff0-4cf0-a323-3d9ee1fc58d5',
			'deviceId': '1ed46054-c643-4153-b50d-7509de9b237b',
			'hubId': '',
			'status': 'OFFLINE',
			'reason': 'SERVICE_UNAVAILABLE'
		}
		const expectedEventTime = '2019-07-24T07:23:17Z'

		app.subscribedDeviceHealthEventHandler('deviceHealth', (_, event, eventTime) => {
			receivedEvent = event
			receivedEventTime = eventTime
		})
		await app.handleMockCallback({
			'lifecycle': 'EVENT',
			'executionId': '66b5208f-f3e2-403a-b2da-e2e34e009828',
			'locale': 'en-US',
			'version': '0.1.0',
			'eventData': {
				'authToken': 'LdnBwVkFNNTYtOFIwX21BIiwiYWxnIjoiUlMyNTYifQ.eyJwcmluY2lwYWwiOiJpbnN0YWxsZWRhcHA6YTdkZmFhNzgtY2NlNy00NTljLThkMGMtZDU5M2YwZDU1Yjc2OjVmMjc4YmFhLWFmZjAtNGNmMC1hMzIzLTNkOWVlMWZjNThkNSIsInNjb3BlIjpbImk6ZGV2aWNlcHJvZmlsZXMiLCJyOmRldmljZXM6KiIsInI6bG9jYXRpb25zOioiLCJ4OmRldmljZXM6KiJdLCJleHAiOjE1NjM5NTMzNTcsImNsaWVudF9pZCI6ImVhODM5ZGJhLTVkZGEtNDFmYS1iMGU0LTgzOWYyOTRiNjJhMiJ9.AJxVO9dlboeuRUBPbUKmaZ2IXYVDYkN5E4Usq6V3vuhPWcl57R5hkEmnREkjwih5FoxhRxbTvQotrm18K9Z-zTIHd9oOH2_pYsyWyaQIa_nPRlYxmu6s6gBM4uxHklS0Ez43bFSbUYMD9jSBPjbujnTPL1WUqF_x5o-zhXCwNXUN-yQ84pkHuuFCilNNCEqj5WTPFW-OxId4VDk3kx3snrk6w2bJzgbJ3G97v1EgXXMmbqGuzW0qwJNYv9jcCQTlE4WEsfsnyNmEmkzMGNls0e79v-0C_X0ES5EszoP6zNA7xPS0BOdZvWWDTfSILtTlnh6uJ7KOMulncqGZkl9ShQ',
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
						'eventType': 'DEVICE_HEALTH_EVENT',
						'deviceHealthEvent': expectedEvent
					}
				]
			},
			'settings': {}
		})

		expect(receivedEvent).toStrictEqual(expectedEvent)
		expect(receivedEventTime).toBe(expectedEventTime)
	})

	it('should return 200 status for defined device health event handler', async () => {
		app.subscribedDeviceHealthEventHandler('otherHandler', (_, event, eventTime) => {
			receivedEvent = event
			receivedEventTime = eventTime
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
						'eventType': 'DEVICE_HEALTH_EVENT',
						'deviceHealthEvent': {
							'eventId': 'e9a510c9-3eec-444d-9153-b822caf7db7f',
							'locationId': '5f278baa-aff0-4cf0-a323-3d9ee1fc58d5',
							'deviceId': 'e9a510c9-3eec-444d-9153-b822caf7db7f',
							'hubId': 'e9a510c9-3eec-444d-9153-b822caf7db7f',
							'status': 'OFFLINE',
							'reason': 'NONE'
						}
					}
				]
			}
		})

		expect(response.statusCode).toBe(200)
	})

	it('should throw 422 error for undefined device health event handler', async () => {
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
						'eventType': 'DEVICE_HEALTH_EVENT',
						'deviceHealthEvent': {
							'eventId': 'e9a510c9-3eec-444d-9153-b822caf7db7f',
							'locationId': '5f278baa-aff0-4cf0-a323-3d9ee1fc58d5',
							'deviceId': 'e9a510c9-3eec-444d-9153-b822caf7db7f',
							'hubId': 'e9a510c9-3eec-444d-9153-b822caf7db7f',
							'status': 'OFFLINE',
							'reason': 'NONE'
						}
					}
				]
			}
		})

		expect(response.statusCode).toBe(422)
	})
})
