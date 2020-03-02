'use strict'

const rp = require('request-promise-native')
const ClientError = require('./client-error')

class Client {
	constructor(options) {
		this.authToken = options.authToken
		this.refreshToken = options.refreshToken
		this.clientId = options.clientId
		this.clientSecret = options.clientSecret
		this.apiUrl = options.apiUrl ? options.apiUrl : 'https://api.smartthings.com'
		this.refreshUrl = options.refreshUrl ? options.refreshUrl : 'https://auth-global.api.smartthings.com/oauth/token'
		this.contextStore = options.contextStore
		this.installedAppId = options.installedAppId
		this._log = options.log
		this._mutex = options.apiMutex
	}

	async request(path, method, data, transform, qs) {
		const opts = {
			url: `${this.apiUrl}/${path}`,
			method: method ? method : 'GET',
			json: true,
			headers: {
				'Content-Type': 'application/json; charset=utf-8',
				'Authorization': 'Bearer ' + this.authToken
			}
		}
		if (data) {
			opts.body = data
		}

		if (transform) {
			opts.transform = transform
		}

		if (qs) {
			opts.qs = qs
		}

		if (this._mutex) {
			return rp(opts).catch(async error => {
				const client = this
				if (error.statusCode === 401 && client.refreshToken && client.contextStore) {
					// Acquire mutex to prevent multiple concurrent requests from storing invalid access and refresh tokens
					const release = await this._mutex.acquire()
					const str = await exports.refreshToken(client.refreshUrl, client.clientId, client.clientSecret, client.refreshToken)
					const data = JSON.parse(str)
					if (data.access_token) {
						client.authToken = data.access_token
						client.refreshToken = data.refresh_token

						await client.contextStore.update(client.installedAppId, {
							authToken: client.authToken,
							refreshToken: client.refreshToken
						})

						opts.headers.Authorization = 'Bearer ' + client.authToken

						return rp(opts)
							.then(data => {
								release()
								return data
							})
							.catch(error => {
								release()
								throw new ClientError(error)
							})
					}

					release()
				}

				throw new ClientError(error)
			}).then(async data => {
				return data
			})
		}

		return rp(opts).catch(error => {
			throw new ClientError(error)
		})
	}
}

exports.client = function (authToken, clientId, clientSecret) {
	return new Client(authToken, clientId, clientSecret)
}

exports.refreshToken = function (url, clientId, clientSecret, refreshToken) {
	console.log(`refreshToken(${refreshToken})`)
	const opts = {
		url,
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
			'Authorization': 'Basic ' + Buffer.from(`${clientId}:${clientSecret}`, 'ascii').toString('base64')
		},
		body: `grant_type=refresh_token&client_id=${clientId}&client_secret=${clientSecret}&refresh_token=${refreshToken}`
	}
	return rp(opts)
}
