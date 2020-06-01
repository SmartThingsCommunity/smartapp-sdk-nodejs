'use strict'

const SectionSetting = require('./section-setting.js')

module.exports = class DecimalSetting extends SectionSetting {
	constructor(section, id) {
		super(section, id)
		this._type = 'DECIMAL'
		this._description = 'Tap to set'
		this._postMessage = this.i18nKey('postMessage')
	}

	max(value) {
		this._max = value
		return this
	}

	min(value) {
		this._min = value
		return this
	}

	image(source) {
		this._image = source
		return this
	}

	postMessage(value) {
		this._postMessage = value
		return this
	}

	toJson() {
		const result = super.toJson()
		if (this._max) {
			result.max = this._max
		}

		if (this._min) {
			result.min = this._min
		}

		if (this._image) {
			result.image = this._image
		}

		if (this._postMessage) {
			result.postMessage = this._postMessage
		}

		return result
	}
}
