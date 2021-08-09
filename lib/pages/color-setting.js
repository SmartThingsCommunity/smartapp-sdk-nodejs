'use strict'

const SectionSetting = require('./section-setting.js')

/**
 * @deprecated
 */
module.exports = class ColorSetting extends SectionSetting {
	constructor(section, id) {
		super(section, id)
		this._type = 'COLOR'
	}

	image(source) {
		this._image = source
		return this
	}

	toJson() {
		const result = super.toJson()
		if (this._image) {
			result.image = this._image
		}

		return result
	}
}
