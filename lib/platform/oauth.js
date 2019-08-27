'use strict'

const rp = require('request-promise-native')
const Base = require('./base')

module.exports = class OAuth extends Base {
	redeemCode(authCode) {
		const options = {
			url: `${this.st._apiUrl}/oauth/token`,
			method: 'POST',
			headers: {
				Authorization: `Basic ${Buffer.from(this.st._clientId + ':' + this.st._clientSecret).toString('base64')}`
			},
			form: {
				'client_id': this.st._clientId,
				'code': authCode,
				'grant_type': 'authorization_code',
				'redirect_uri': this.st._redirectUri
			}
		}
		return rp(options)
	}
}
