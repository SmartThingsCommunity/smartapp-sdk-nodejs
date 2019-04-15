'use strict'

const fs = require('fs')
const httpSignature = require('http-signature')

let publicKey = 'INVALID'

module.exports = {

	/**
	 * Set the public key with raw text, or point to a file with the prefix `@`
	 *
	 * @param {String} key Key contents or key path
	 * @returns {Object} Public key
	 */
	setPublicKey(key) {
		if (key.startsWith('@')) {
			publicKey = fs.readFileSync(key.slice(1), 'utf8')
		} else {
			publicKey = key
		}

		return publicKey
	},

	/**
	 * Confirms if key is verified or not
	 *
	 * @param {*} req HTTP request
	 * @returns {Boolean}
	 */
	signatureIsVerified(req) {
		try {
			const parsed = httpSignature.parseRequest(req)
			if (!httpSignature.verifySignature(parsed, publicKey)) {
				console.error('Forbidden - failed verifySignature')
				return false
			}
		} catch (error) {
			console.error(error)
			return false
		}

		return true
	}
}
