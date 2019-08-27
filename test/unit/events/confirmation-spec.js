/* eslint no-undef: 'off' */
const {expect} = require('chai')
const rp = require('request-promise-native')
const sinon = require('sinon')
const SmartApp = require('../../../lib/smart-app')

describe('confirmation-spec', () => {
	/** @type {SmartApp} */
	let app

	beforeEach(() => {
		app = new SmartApp({logUnhandledRejections: false})
	})

	it('confirmation message', () => {
		const stub = sinon.stub(rp, 'get')

		app.handleMockCallback({
			'messageType': 'CONFIRMATION',
			'confirmationData': {
				'appId': 'f9a665e7-5a76-4b1e-bdfe-31135eccc2f3',
				'confirmationUrl': 'https://api.smartthings.com/apps/f9a665e7-5a76-4b1e-bdfe-31135eccc2f3/confirm-registration?token=fd9581b5-628c-4cd7-b1c2-dc14761234f3'
			}
		})

		expect(stub.calledOnce).to.equal(true)
	})
})
