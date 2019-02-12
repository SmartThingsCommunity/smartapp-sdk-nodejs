'use strict'

const SectionSetting = require('./section-setting.js')

module.exports = class SoundSetting extends SectionSetting {
	constructor(section, id) {
		super(section, id)
		this._type = 'SOUND'
	}

	multiple(value) {
		this._multiple = value
		return this
	}

	groupedOptions(value) {
		this._groupedOptions = value
		return this
	}

	options(value) {
		this._options = value
		return this
	}

	submitOnChange(value) {
		this._submitOnChange = value
		return this
	}

	style(value) {
		this._style = value
		return this
	}

	toJson() {
		const result = super.toJson()
		if (this._multiple) {
			result.multiple = this._multiple
		}

		if (this._groupedOptions) {
			result.groupedOptions = this._groupedOptions
		}

		if (this._options) {
			result.options = this._options
		}

		if (this._submitOnChange) {
			result.submitOnChange = this._submitOnChange
		}

		if (this._style) {
			result.style = this._style
		}

		return result
	}
}
