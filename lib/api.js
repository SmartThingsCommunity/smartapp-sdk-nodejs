'use strict'

const Client = require('./platform/client')
const Apps = require('./platform/apps')
const DeviceProfiles = require('./platform/deviceprofiles')
const Devices = require('./platform/devices')
const InstalledApps = require('./platform/installedapps')
const Locations = require('./platform/locations')
const Modes = require('./platform/modes')
const Scenes = require('./platform/scenes')
const Schedules = require('./platform/schedules')
const Subscriptions = require('./platform/subscriptions')

module.exports = class SmartThingsApi {
	constructor(options) {
		this.client = new Client(options)
		this.apps = new Apps(this)
		this.deviceProfiles = new DeviceProfiles(this)
		this.devices = new Devices(this)
		this.installedApps = new InstalledApps(this)
		this.locations = new Locations(this)
		this.modes = new Modes(this)
		this.scenes = new Scenes(this)
		this.schedules = new Schedules(this)
		this.subscriptions = new Subscriptions(this)
		this.installedAppId = options.installedAppId
		this.locationId = options.locationId
	}
}
