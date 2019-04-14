'use strict'

module.exports = class ClientError {
	constructor(error) {
		const {name, message, response} = error
		const {statusCode, request} = response
		const {href, body} = request

		this.name = name === 'StatusCodeError' ? 'SmartThingsApiError' : name
		this.statusCode = statusCode
		this.message = messageString(message)
		this.url = href
		this.body = body
	}

	toString() {
		if (this.body) {
			return `${this.name}: ${this.message}, statusCode=${this.statusCode}, url=${this.url}, body=${this.body}`
		}

		return `${this.name}: ${this.message}, statusCode=${this.statusCode}, url=${this.url}`
	}
}

function messageString(msg) {
	if (typeof msg === 'object') {
		return JSON.stringify(msg)
	}

	return msg
}
