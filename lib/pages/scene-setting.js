'use strict'

const SectionSetting = require('./section-setting.js')

module.exports = class SceneSetting extends SectionSetting {
	constructor(section, id) {
		super(section, id)
		this._type = 'SCENE'
		this._description = 'Tap to set'
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

		if (this._submitOnChange) {
			result.submitOnChange = this._submitOnChange
		}

		if (this._style) {
			result.style = this._style
		}

		return result
	}
}
