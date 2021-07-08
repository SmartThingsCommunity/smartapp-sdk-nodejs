const { SmartApp } = require('../../../lib/smart-app')
const { INSTALL, UNINSTALL, UPDATE } = require('../../data/lifecycles')

describe('installation-lifecycle-spec', () => {
	let app
	let receivedEvent
	let receivedData

	beforeEach(() => {
		app = new SmartApp({ logUnhandledRejections: false })
		receivedEvent = undefined
		receivedData = undefined
	})

	it('handles INSTALL lifecycle with installed handler', async () => {
		app.installed((_, installData) => {
			receivedData = installData
		})

		await app.handleMockCallback(INSTALL)

		expect(receivedData).toStrictEqual(INSTALL.installData)
	})

	it('handles INSTALL lifecycle with updated handler when no installed handler defined', async () => {
		app.updated((_, installData) => {
			receivedData = installData
		})

		await app.handleMockCallback(INSTALL)

		expect(receivedData).toStrictEqual(INSTALL.installData)
	})

	it('handles INSTALL lifecycle rejection with async updated handler when no installed handler defined', async () => {
		app.updated(async () => {
			await Promise.reject(new Error('something failed'))
		})

		const response = app.handleMockCallback(INSTALL)

		await expect(response).resolves.toStrictEqual(
			expect.objectContaining({ statusCode: 500, message: expect.stringContaining('something failed') })
		)
	})

	it('handles INSTALL lifecycle with installed handler when both installed and updated handlers defined', async () => {
		app.installed((_, installData) => {
			receivedData = installData
		})

		const updateHandler = jest.fn(() => {
			receivedData = null
		})

		app.updated(updateHandler)

		await app.handleMockCallback(INSTALL)

		expect(updateHandler).not.toBeCalled()
		expect(receivedData).toStrictEqual(INSTALL.installData)
	})

	it('handles UNINSTALL lifecycle', async () => {
		app.uninstalled((_, event) => {
			receivedEvent = event
		})

		await app.handleMockCallback(UNINSTALL)

		expect(receivedEvent).toStrictEqual(UNINSTALL.uninstallData)
	})

	it('handles UPDATE lifecycle', async () => {
		app.updated((_, updateData) => {
			receivedData = updateData
		})

		await app.handleMockCallback(UPDATE)

		expect(receivedData).toStrictEqual(UPDATE.updateData)
	})
})
