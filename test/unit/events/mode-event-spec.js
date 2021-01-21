const assert = require('assert').strict
const SmartApp = require('../../../lib/smart-app')

describe('mode-event-spec', () => {
	/** @type {SmartApp} */
	let app

	beforeEach(() => {
		app = new SmartApp({logUnhandledRejections: false})
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
		assert.equal(response.statusCode, 422)
	})
})
