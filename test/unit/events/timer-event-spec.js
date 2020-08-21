/* eslint no-undef: 'off' */
const assert = require('assert').strict
const SmartApp = require('../../../lib/smart-app')

describe('timer-event-spec', () => {
	/** @type {SmartApp} */
	let app

	beforeEach(() => {
		app = new SmartApp({logUnhandledRejections: false})
	})

	it('should return 200 status for defined mode event handler', async () => {
		app.scheduledEventHandler('lights_off_timeout', _ => {
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
						'eventType': 'TIMER_EVENT',
						'timerEvent': {
							'eventId': 'string',
							'name': 'lights_off_timeout',
							'type': 'CRON',
							'time': '2020-08-19T13:10:39.243Z',
							'expression': 'string'
						}
					}
				]
			}
		})
		assert.equal(response.statusCode, 200)
	})

	it('should throw 422 error for undefined mode event handler', async () => {
		app.scheduledEventHandler('otherHandler', (_, event, eventTime) => {
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
						'eventType': 'TIMER_EVENT',
						'timerEvent': {
							'eventId': 'string',
							'name': 'lights_off_timeout',
							'type': 'CRON',
							'time': '2020-08-19T13:10:39.243Z',
							'expression': 'string'
						}
					}
				]
			}
		})
		assert.equal(response.statusCode, 422)
	})
})
