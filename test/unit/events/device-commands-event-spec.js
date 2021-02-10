const SmartApp = require('../../../lib/smart-app')

describe('device-commands-event-spec', () => {
	const deviceCommandsEvent = {
		'lifecycle': 'EVENT',
		'executionId': '00000000-0000-0000-0000-000000000000',
		'eventData': {
			'installedApp': {
				'installedAppId': '00000000-0000-0000-0000-000000000000'
			},
			'events': [
				{
					'eventTime': '1970-01-01T00:00:00Z',
					'eventType': 'DEVICE_COMMANDS_EVENT',
					'deviceCommandsEvent': {
						'eventId': '00000000-0000-0000-0000-000000000000',
						'deviceId': '00000000-0000-0000-0000-000000000000',
						'profileId': '00000000-0000-0000-0000-000000000000',
						'externalId': '00000000-0000-0000-0000-000000000000',
						'commands': [
							{
								'componentId': 'main',
								'capability': 'switch',
								'command': 'on',
								'arguments': []
							}
						]
					}
				}
			]
		}
	}

	const mockCallback = jest.fn()
	let app

	beforeEach(() => {
		app = new SmartApp({logUnhandledRejections: false})
	})

	afterEach(() => {
		mockCallback.mockClear()
	})

	it('should handle all DEVICE_COMMANDS_EVENT', async () => {
		app.deviceCommandHandler(mockCallback)

		const response = await app.handleMockCallback(deviceCommandsEvent)

		expect(mockCallback).toBeCalledTimes(1)
		expect(response.statusCode).toBe(200)
	})

	it('should handle a specific DEVICE_COMMANDS_EVENT', async () => {
		app.deviceCommand('main/switch/on', mockCallback)

		const response = await app.handleMockCallback(deviceCommandsEvent)

		expect(mockCallback).toBeCalledTimes(1)
		expect(response.statusCode).toBe(200)
	})

	it('should handle a specific DEVICE_COMMANDS_EVENT without component specified', async () => {
		app.deviceCommand('switch/on', mockCallback)

		const response = await app.handleMockCallback(deviceCommandsEvent)

		expect(mockCallback).toBeCalledTimes(1)
		expect(response.statusCode).toBe(200)
	})

	it('should warn when there is no handler for a device command', async () => {
		const logSpy = jest.spyOn(app._log, 'warn')

		const response = await app.handleMockCallback(deviceCommandsEvent)

		const event = deviceCommandsEvent.eventData.events[0]
		const command = event.deviceCommandsEvent.commands[0]

		expect(logSpy).toBeCalledTimes(1)
		expect(logSpy).toBeCalledWith(`No command handler for ${JSON.stringify(command)} of device ${event.deviceCommandsEvent.deviceId}`)
		expect(response.statusCode).toBe(200)

		logSpy.mockClear()
	})
})
