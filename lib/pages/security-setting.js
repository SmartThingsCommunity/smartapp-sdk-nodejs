'use strict'

const SectionSetting = require('./section-setting.js')

module.exports = class SecuritySetting extends SectionSetting {
	constructor(section, id) {
		super(section, id)
		this._type = 'ENUM'
		this._description = 'Tap to set'
		this._options = [
			{id: 'DISARMED', name: 'Disarmed'},
			{id: 'ARMED_STAY', name: 'Armed/Stay'},
			{id: 'ARMED_AWAY', name: 'Armed/Away'}
		]
	}

	multiple(value) {
		this._multiple = value
		return this
	}

	closeOnSelection(value) {
		this._closeOnSelection = value
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

		if (this._closeOnSelection) {
			result.closeOnSelection = this._closeOnSelection
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
