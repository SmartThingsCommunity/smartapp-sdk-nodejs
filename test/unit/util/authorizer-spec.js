const fs = require('fs')
const path = require('path')
const nock = require('nock')
const sshpk = require('sshpk')
const httpSignature = require('http-signature')
const SmartApp = require('../../../lib/smart-app')
const Log = require('../../../lib/util/log')

jest.mock('http-signature', () => ({
	parseRequest: req => {
		return {keyId: req.keyId}
	},

	verifySignature: () => {
		return true
	}
}))

const Authorizer = require('../../../lib/util/authorizer')

const publicKeyFilePath = path.resolve(__dirname, '../../fixtures/unit_test_rsa.key')
const publicCertFilePath = path.resolve(__dirname, '../../fixtures/unit_test_cert.crt')
describe('authorizer-spec', () => {
	let publicKey
	let publicCert

	beforeEach(() => {
		publicKey = fs.readFileSync(publicKeyFilePath, 'utf8')
		publicCert = fs.readFileSync(publicCertFilePath, 'utf8')
	})

	it('should resolve a local file public key as set via constructor options', async () => {
		const authorizer = new Authorizer({
			publicKey: `@${publicKeyFilePath}`
		})
		const actualPublicKey = await authorizer.getKey('/SmartThings/key-id')
		expect(publicKey).toStrictEqual(actualPublicKey)
	})

	it('should resolve a local file public key as set via public setter', async () => {
		const authorizer = new Authorizer()
		authorizer.setPublicKey(`@${publicKeyFilePath}`)
		const publicKey = fs.readFileSync(publicKeyFilePath, 'utf8')
		const actualPublicKey = await authorizer.getKey('/SmartThings/key-id')
		expect(publicKey).toStrictEqual(actualPublicKey)
	})

	it('should resolve a remote file public key', async () => {
		const keyId = '/pl/useast1/keyId'
		const scope = nock('https://key.smartthings.com')
			.get(keyId)
			.reply(200, publicCert)
		const authorizer = new Authorizer()
		const actualPublicKey = await authorizer.getKey(keyId)
		const isKey = sshpk.Key.isKey(actualPublicKey, [1, 1])
		expect(isKey).toBe(true)
		scope.done()
	})

	it('should verify an http signature', async () => {
		const keyId = '/pl/useast1/anotherKeyId'
		const scope = nock('https://key.smartthings.com')
			.get(keyId)
			.reply(200, publicCert)
		const authorizer = new Authorizer()
		const isValid = await authorizer.isAuthorized({
			keyId
		})
		expect(isValid).toBe(true)
		scope.done()
	})
})

describe('authorizer-logger-spec', () => {
	const request = {
		body: {
			lifecycle: 'CONFIGURATION',
			executionId: 'e6903fe6-f88f-da69-4c12-e2802606ccbc',
			locale: 'en',
			version: '0.1.0',
			client: {
				os: 'ios',
				version: '0.0.0',
				language: 'en-US'
			},
			configurationData: {
				installedAppId: '7d7fa36d-0ad9-4893-985c-6b75858e38e4',
				phase: 'INITIALIZE',
				pageId: '',
				previousPageId: '',
				config: {}
			},
			settings: {}
		}
	}

	it('should log exception when authorizing header key is missing', async () => {
		const authorizer = new Authorizer()
		const missingHeaderError = new Error('MissingHeaderError')
		const parseRequestSpy = jest.spyOn(httpSignature, 'parseRequest').mockImplementation(() => {
			throw missingHeaderError
		})
		const logExceptionSpy = jest.spyOn(Log.prototype, 'exception')

		await expect(authorizer.isAuthorized(request)).resolves.toBe(false)
		expect(parseRequestSpy).toHaveBeenCalledTimes(1)
		expect(authorizer._logger).toBeDefined()
		expect(logExceptionSpy).toHaveBeenCalledTimes(1)
		expect(logExceptionSpy).toHaveBeenCalledWith(missingHeaderError)

		parseRequestSpy.mockRestore()
		logExceptionSpy.mockRestore()
	})

	it('should use a default Log instance when none configured', async () => {
		const app = new SmartApp({logUnhandledRejections: false})
		app.handleMockCallback(request.body)
		expect(app._authorizer._logger).toBeDefined()
		expect(app._authorizer._logger).toBeInstanceOf(Log)
	})

	it('should use the Log logger specified by the user', () => {
		const app = new SmartApp({logger: console, logUnhandledRejections: false})
		app.handleMockCallback(request.body)
		expect(app._authorizer._logger._logger).toBeDefined()
		expect(app._authorizer._logger._logger).toBeInstanceOf(console.Console)
	})
})
