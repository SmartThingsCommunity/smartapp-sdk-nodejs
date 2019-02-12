'use strict'

const SectionSetting = require('./section-setting.js')

module.exports = class OAuthSetting extends SectionSetting {
	constructor(section, id) {
		super(section, id)
		this._type = 'OAUTH'
	}

	urlTemplate(value) {
		this._urlTemplate = value
		return this
	}

	style(value) {
		this._style = value
		return this
	}

	toJson() {
		const result = super.toJson()
		result.urlTemplate = this._urlTemplate

		if (this._style) {
			result.style = this._style
		}

		return result
	}
}
