'use strict'

const SectionSetting = require('./section-setting.js')

module.exports = class EnumSetting extends SectionSetting {
	constructor(section, id) {
		super(section, id)
		this._type = 'ENUM'
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

	groupedOptions(value) {
		this._groupedOptions = value
		return this
	}

	options(value) {
		const values = []
		if (Array.isArray(value)) {
			for (const it of value) {
				if (it instanceof Object) {
					values.push(it)
				} else {
					const item = String(it)
					values.push({id: item, name: item})
				}
			}
		} else if (value instanceof Object) {
			for (const property in value) {
				if (Object.prototype.hasOwnProperty.call(value, property)) {
					values.push({id: property, name: value[property]})
				}
			}
		} else {
			throw new TypeError(`${typeof value} not valid for options`)
		}

		this._options = values
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
