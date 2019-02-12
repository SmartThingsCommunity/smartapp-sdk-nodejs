'use strict'

const SectionSetting = require('./section-setting.js')

module.exports = class PasswordSetting extends SectionSetting {
	constructor(section, id) {
		super(section, id)
		this._type = 'PASSWORD'
		this._description = 'Tap to set'
	}

	maxLength(value) {
		this._maxLength = value
		return this
	}

	minLength(value) {
		this._minLength = value
		return this
	}

	image(value) {
		this._image = value
		return this
	}

	toJson() {
		const result = super.toJson()
		if (this._maxLength) {
			result.maxLength = this._maxLength
		}

		if (this._minLength) {
			result.minLength = this._minLength
		}

		if (this._image) {
			result.image = this._image
		}

		return result
	}
}
