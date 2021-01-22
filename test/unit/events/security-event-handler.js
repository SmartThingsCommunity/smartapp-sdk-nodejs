const assert = require('assert').strict
const SmartApp = require('../../../lib/smart-app')

describe('security-event-spec', () => {
	/** @type {SmartApp} */
	let app

	beforeEach(() => {
		app = new SmartApp({logUnhandledRejections: false})
	})

	it('should return 200 status for defined mode event handler', async () => {
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
		assert.equal(response.statusCode, 200)
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
		assert.equal(response.statusCode, 422)
	})
})
