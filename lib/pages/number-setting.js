'use strict'

const SectionSetting = require('./section-setting.js')

module.exports = class NumberSetting extends SectionSetting {
	constructor(section, id) {
		super(section, id)
		this._type = 'NUMBER'
		this._description = 'Tap to set'
	}

	max(value) {
		this._max = value
		return this
	}

	min(value) {
		this._min = value
		return this
	}

	step(value) {
		this._step = value
		return this
	}

	style(value) {
		this._style = value
		return this
	}

	image(value) {
		this._image = value
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

		if (this._step) {
			result.step = this._step
		}

		if (this._style) {
			result.style = this._style
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
