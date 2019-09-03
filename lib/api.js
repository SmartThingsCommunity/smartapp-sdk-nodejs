'use strict'

const Client = require('./platform/client')
const Apps = require('./platform/apps')
const DeviceProfiles = require('./platform/deviceprofiles')
const Devices = require('./platform/devices')
const InstalledApps = require('./platform/installedapps')
const Locations = require('./platform/locations')
const Modes = require('./platform/modes')
const Notifications = require('./platform/notifications')
const Rooms = require('./platform/rooms')
const Scenes = require('./platform/scenes')
const Schedules = require('./platform/schedules')
const Subscriptions = require('./platform/subscriptions')

module.exports = class SmartThingsApi {
	constructor(options) {
		// TODO – expand these JSdocs
		/** @type { import('./platform/client') } */
		this.client = Client.client(options)

		/** @type { import('./platform/apps') } */
		this.apps = new Apps(this)

		/** @type { import('./platform/deviceprofiles') } */
		this.deviceProfiles = new DeviceProfiles(this)

		/** @type { import('./platform/devices') } */
		this.devices = new Devices(this)

		/** @type { import('./platform/installedapps') } */
		this.installedApps = new InstalledApps(this)

		/** @type { import('./platform/locations') } */
		this.locations = new Locations(this)

		/** @type { import('./platform/modes') } */
		this.modes = new Modes(this)

		/** @type { import('./platform/notifications') } */
		this.notifications = new Notifications(this)

		/** @type { import('./platform/rooms') } */
		this.rooms = new Rooms(this)

		/** @type { import('./platform/scenes') } */
		this.scenes = new Scenes(this)

		/** @type { import('./platform/schedules') } */
		this.schedules = new Schedules(this)

		/** @type { import('./platform/subscriptions') } */
		this.subscriptions = new Subscriptions(this)

		/** @type {String} */
		this.installedAppId = options.installedAppId

		/** @type {String} */
		this.locationId = options.locationId
	}
}
