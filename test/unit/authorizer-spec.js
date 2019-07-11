/* eslint no-undef: "off" */
const assert = require('assert').strict
const fs = require('fs')
const path = require('path')
const nock = require('nock')
const proxyquire = require('proxyquire')
const sshpk = require('sshpk')

const Authorizer = proxyquire('../../lib/util/authorizer', {
	'http-signature': {
		parseRequest: req => {
			return {keyId: req.keyId}
		},
		verifySignature: () => {
			return true
		}
	}
})
const publicKeyFilePath = path.resolve(__dirname, '../fixtures/unit_test_rsa.key')
const publicCertFilePath = path.resolve(__dirname, '../fixtures/unit_test_cert.crt')
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
		assert.strictEqual(publicKey, actualPublicKey)
	})

	it('should resolve a local file public key as set via public setter', async () => {
		const authorizer = new Authorizer()
		authorizer.setPublicKey(`@${publicKeyFilePath}`)
		const publicKey = fs.readFileSync(publicKeyFilePath, 'utf8')
		const actualPublicKey = await authorizer.getKey('/SmartThings/key-id')
		assert.strictEqual(publicKey, actualPublicKey)
	})

	it('should resolve a remote file public key', async () => {
		const keyId = '/pl/useast1/keyId'
		const scope = nock('https://key.smartthings.com')
			.get(keyId)
			.reply(200, publicCert)
		const authorizer = new Authorizer()
		const actualPublicKey = await authorizer.getKey(keyId)
		const isKey = sshpk.Key.isKey(actualPublicKey, [1, 1])
		assert.strictEqual(isKey, true)
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
		assert.strictEqual(isValid, true)
		scope.done()
	})
})
