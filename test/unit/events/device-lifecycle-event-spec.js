const SmartApp = require('../../../lib/smart-app')

describe('device-lifecycle-event-spec', () => {
	let app
	let receivedEvent
	let receivedEventTime

	beforeEach(() => {
		app = new SmartApp({logUnhandledRejections: false})
	})

	it('should handle DEVICE_LIFECYCLE_EVENT', async () => {
		const expectedEvent = {
			'lifecycle': 'UPDATE',
			'eventId': '091bd080-ade3-11e9-aa79-415d41e7ce77',
			'locationId': '5f278baa-aff0-4cf0-a323-3d9ee1fc58d5',
			'deviceId': 'ba0767c3-f883-438d-9db1-b1a84b8d347b',
			'deviceName': '',
			'principal': '',
			'update': {}
		}
		const expectedEventTime = '2019-07-24T07:17:03Z'

		app.subscribedDeviceLifecycleEventHandler('deviceLifecycle', (_, event, eventTime) => {
			receivedEvent = event
			receivedEventTime = eventTime
		})
		await app.handleMockCallback({
			'lifecycle': 'EVENT',
			'executionId': '6b85d1aa-a059-fe2f-ac71-f863df37da65',
			'locale': 'en-US',
			'version': '0.1.0',
			'eventData': {
				'authToken': 'IjoiUlMyNTYifQ.eyJwcmluY2lwYWwiOiJpbnN0YWxsZWRhcHA6YTdkZmFhNzgtY2NlNy00NTljLThkMGMtZDU5M2YwZDU1Yjc2OjVmMjc4YmFhLWFmZjAtNGNmMC1hMzIzLTNkOWVlMWZjNThkNSIsInNjb3BlIjpbImk6ZGV2aWNlcHJvZmlsZXMiLCJyOmRldmljZXM6KiIsInI6bG9jYXRpb25zOioiLCJ4OmRldmljZXM6KiJdLCJleHAiOjE1NjM5NTI5MjMsImNsaWVudF9pZCI6ImVhODM5ZGJhLTVkZGEtNDFmYS1iMGU0LTgzOWYyOTRiNjJhMiJ9.FOZFZCBMMG-kMmRK8y_QDeA4722GuXEb86sKgDBeJN2WrizJr6Id8XKMvJAP9dR_yMzc4FlykZ0ln51YrLQ6DIUlzHuKL28dSU_RkJhkIMqTx8XxSOe7ae2nRaMdhtMnjx6t9NaxTMNkSFGYCG_McwHTHPGTDu0AxONHTzOjqECyYfSXR7BASkQqaDca0hbyfp0kqRnb_9HBdnE7gHYgwAMij_co2yGeBD4aMPIbr04OJSJsJZ89jfJ17CX6hsKKRkMwicauIQKzxgJnLLORuRX8amc_2fLEgbJSz1YKpJgSNLs555Kb3B31OU9LuqtsbNBTYg9MT9xnS4C90nNdFw',
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
						'eventTime': '2019-07-24T07:17:03Z',
						'eventType': 'DEVICE_LIFECYCLE_EVENT',
						'deviceLifecycleEvent': expectedEvent
					}
				]
			},
			'settings': {}
		})

		expect(receivedEvent).toStrictEqual(expectedEvent)
		expect(receivedEventTime).toBe(expectedEventTime)
	})

	it('should throw 422 error for undefined device lifecycle event handler', async () => {
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
						'eventType': 'DEVICE_LIFECYCLE_EVENT',
						'deviceLifecycleEvent': {
							'lifecycle': 'CREATE',
							'eventId': 'e9a510c9-3eec-444d-9153-b822caf7db7f',
							'locationId': '5f278baa-aff0-4cf0-a323-3d9ee1fc58d5',
							'deviceId': 'e9a510c9-3eec-444d-9153-b822caf7db7f',
							'deviceName': 'Device 1',
							'principal': 'LOCATION',
							'create': {
								'presentationId': '497c21fa-a045-4008-9e84-79b160b8fa44',
								'manufacturerName': 'SmartThings',
								'categories': []
							}
						}
					}
				]
			}
		})

		expect(response.statusCode).toBe(422)
	})
})
