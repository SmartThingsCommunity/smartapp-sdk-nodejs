'use strict'

const _ = require('underscore')
const Base = require('./base')

module.exports = class Schedules extends Base {
	schedule(name, cronExpression) {
		const body = {
			name,
			cron: {
				expression: cronExpression,
				timezone: 'GMT'
			}
		}
		return this.st.client.request(`installedapps/${this.st.installedAppId}/schedules`, 'POST', body)
	}

	// Accepts time setting, Date object, or ISO string
	runDaily(name, time) {
		let date
		if (Array.isArray(time) && time[0].stringConfig) {
			date = new Date(time[0].stringConfig.value)
		} else if (_.isString(time)) {
			date = new Date(time)
		} else if (_.isDate(time)) {
			date = time
		} else {
			throw new TypeError(`Invalid time format '${time}'`)
		}

		// TODO - converting to UTC is not the right approach
		const cron = `${date.getUTCMinutes()} ${date.getUTCHours()} * * ? *`
		return this.schedule(name, cron)
	}

	runIn(name, delay) {
		const time = Date.now() + (1000 * delay)
		const body = {
			name,
			once: {
				time,
				overwrite: true
			}
		}
		return this.st.client.request(`installedapps/${this.st.installedAppId}/schedules`, 'POST', body)
	}

	unschedule(name) {
		const path = `installedapps/${this.st.installedAppId}/schedules/${name}`
		return this.st.client.request(path, 'DELETE')
	}

	unscheduleAll() {
		return this.st.client.request(`installedapps/${this.st.installedAppId}/schedules`, 'DELETE')
	}
}
