'use strict'

const SectionSetting = require('./section-setting.js')

module.exports = class ImagesSetting extends SectionSetting {
	constructor(section, id) {
		super(section, id)
		this._type = 'IMAGES'
	}

	images(value) {
		this._images = value
		return this
	}

	toJson() {
		const result = super.toJson()
		if (this._images) {
			result.images = this._images
		}

		return result
	}
}
