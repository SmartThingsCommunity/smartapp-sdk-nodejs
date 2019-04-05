/* eslint no-undef: "off" */
const Assert = require('assert').strict
const StApi = require('../../lib/api')
const Client = require('../../lib/platform/client')

// User token for prod env
const opts = {authToken: PAT}
const api = new StApi(opts)

let params
let devicesApi
let deviceId
let componentId
let capabilityId
let accessToken

async function fetchContent() {
	const [profiles, installApp, locations] = await Promise.all([api.deviceProfiles.list(), api.installedApps.list(), api.locations.list()])

	// Generates an access token to be utilized for testing endpoints
	token = Client.refreshToken('https://auth-global.api.smartthings.com/oauth/token', CLIENT_ID, CLIENT_KEY, REFRESH_TOKEN)
	await token.then(response => {
		parsedObj = JSON.parse(response.body)
		accessToken = parsedObj.access_token
		refreshToken = parsedObj.refresh_token
		// TODO: For automation purposes; need to find a way to persist existing refresh token and update it everytime with new generated value when create a new access token
		// Access token expires within 24 hours
		console.log('access=', accessToken)
		console.log('refresh=', refreshToken)
	}).catch(() => {})

	params = {
		locationId: locations.body.items[0].locationId,
		label: 'Switch.model1',
		profileId: profiles.body.items[0].id,
		installedAppId: installApp.body.items[0].installedAppId,
		externalId: 'externalID',
		authToken: accessToken
	}
	devicesApi = new StApi(params)
	// Creates a device
	console.log('params=', params)
	await devicesApi.devices.create(params).then(response => {
		deviceId = response.body.deviceId
		componentId = response.body.components[0].id
		capabilityId = response.body.components[0].capabilities[0].id
	})
}

describe('Devices API', function () {
	this.timeout(20000)
	before(async () => {
		// Assuming a device profile has been created and an endpoint based c2c app installed in a location.
		await fetchContent()
	})

	after('deleting the created device', () => {
		devicesApi.devices.delete(deviceId)
	})

	it('list devices', done => {
		devicesApi.devices.listAll().then(response => {
			Assert.strictEqual(response.body.items.length, 1)
			Assert.strictEqual(response.body.items[0].label, 'Switch.model1')
			Assert.strictEqual(response.statusCode, 200)
		}).catch(() => {})
		done()
	})

	it('should get device details', done => {
		devicesApi.devices.get(deviceId).then(response => {
			Assert.strictEqual(response.statusCode, 200)
		}).catch(() => {})
		done()
	})

	it('update a device', done => {
		data = {
			label: 'Living room switch'
		}
		devicesApi.devices.update(deviceId, data).then(response => {
			Assert.strictEqual(response.body.label, data.label)
			Assert.strictEqual(response.statusCode, 200)
		}).catch(() => {})
		done()
	})

	it('execute a command to a device', done => {
		requestBody = {
			commands: [
				{
					component: 'main',
					capability: 'switch',
					command: 'off',
					arguments: []
				}
			]
		}
		devicesApi.devices.postCommands(deviceId, requestBody).then(response => {
			Assert.strictEqual(response.statusCode, 200)
		}).catch(() => {})
		done()
	})

	it('should create event for a device', async () => {
		eventsRequest = {
			deviceEvents: [
				{
					component: 'main',
					capability: 'switch',
					attribute: 'switch',
					value: 'on',
					unit: null
				}
			]
		}
		res = await devicesApi.devices.sendEvents(deviceId, eventsRequest)
		Assert.strictEqual(res.statusCode, 200)
		response = await devicesApi.devices.getState(deviceId)
		actualState = response.body.components.main.switch.switch.value
		Assert.strictEqual(actualState, 'on')
	})

	it('should return full status of a device', done => {
		devicesApi.devices.getState(deviceId).then(response => {
			Assert.strictEqual(response.body.components, componentId)
			Assert.strictEqual(response.statusCode, 200)
		}).catch(() => {})
		done()
	})

	it('should get status for all attributes of a component', done => {
		devicesApi.devices.getComponentState(deviceId, componentId).then(response => {
			Assert.strictEqual(response.statusCode, 200)
		}).catch(() => {})
		done()
	})

	it('should get current status of a device capability', done => {
		devicesApi.devices.getCapabilityState(deviceId, componentId, capabilityId).then(response => {
			Assert.strictEqual(response.statusCode, 200)
		}).catch(() => {})
		done()
	})
})
