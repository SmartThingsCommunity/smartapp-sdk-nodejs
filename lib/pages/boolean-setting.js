'use strict'

const SectionSetting = require('./section-setting.js')

module.exports = class BooleanSetting extends SectionSetting {
	constructor(section, id) {
		super(section, id)
		this._type = 'BOOLEAN'
	}

	image(value) {
		this._image = value
		return this
	}

	submitOnChange(value) {
		this._submitOnChange = value
		return this
	}

	toJson() {
		const result = super.toJson()
		if (result.defaultValue === undefined && result.required) {
			result.defaultValue = 'false'
		}

		if (this._image) {
			result.image = this._image
		}

		if (this._submitOnChange) {
			result.submitOnChange = this._submitOnChange
		}

		return result
	}
}
