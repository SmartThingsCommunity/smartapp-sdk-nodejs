const SmartApp = require('../../../lib/smart-app')

describe('security-arm-state-event-spec', () => {
	/** @type {SmartApp} */
	let app
	let receivedEvent
	let receivedEventTime

	beforeEach(() => {
		app = new SmartApp({logUnhandledRejections: false})
	})

	it('should handle SECURITY_ARM_STATE_EVENT', async () => {
		const expectedEvent = {
			'eventId': '12347df0-ade4-11e9-b187-3f8238130d63',
			'armState': 'UNKNOWN',
			'locationId': '66b5208f-f3e2-4a1a-c3eb-e2e34e009828',
			'optionalArguments': {
				'property1': {
					'valueType': 'NULL_VALUE',
					'intValue': 0,
					'doubleValue': 0,
					'stringValue': 'string',
					'boolValue': true
				}
			}
		}
		const expectedEventTime = '2019-07-24T07:24:17Z'

		app.subscribedSecurityArmStateEventHandler('securityArmState', (_, event, eventTime) => {
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
						'eventTime': '2019-07-24T07:24:17Z',
						'eventType': 'SECURITY_ARM_STATE_EVENT',
						'securityArmStateEvent': expectedEvent
					}
				]
			},
			'settings': {}
		})

		expect(receivedEvent).toStrictEqual(expectedEvent)
		expect(receivedEventTime).toBe(expectedEventTime)
	})

	it('should return 200 status for defined security arm state event handler', async () => {
		app.subscribedSecurityArmStateEventHandler('otherHandler', _ => {
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
						'eventType': 'SECURITY_ARM_STATE_EVENT',
						'securityArmStateEvent': {
							'eventId': 'string',
							'locationId': 'string',
							'armState': 'UNKNOWN',
							'optionalArguments': {
								'property1': {
									'valueType': 'NULL_VALUE',
									'intValue': 0,
									'doubleValue': 0,
									'stringValue': 'string',
									'boolValue': true
								},
								'property2': {
									'valueType': 'NULL_VALUE',
									'intValue': 0,
									'doubleValue': 0,
									'stringValue': 'string',
									'boolValue': true
								}
							}
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
						'eventType': 'SECURITY_ARM_STATE_EVENT',
						'securityArmStateEvent': {
							'eventId': 'string',
							'locationId': 'string',
							'armState': 'UNKNOWN',
							'optionalArguments': {
								'property1': {
									'valueType': 'NULL_VALUE',
									'intValue': 0,
									'doubleValue': 0,
									'stringValue': 'string',
									'boolValue': true
								},
								'property2': {
									'valueType': 'NULL_VALUE',
									'intValue': 0,
									'doubleValue': 0,
									'stringValue': 'string',
									'boolValue': true
								}
							}
						}
					}
				]
			}
		})

		expect(response.statusCode).toBe(422)
	})
})
