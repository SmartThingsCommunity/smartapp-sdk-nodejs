'use strict'

const SectionSetting = require('./section-setting.js')

module.exports = class ParagraphSetting extends SectionSetting {
	constructor(section, id) {
		super(section, id)
		this._type = 'PARAGRAPH'
	}

	text(value) {
		this.name(value)
	}

	image(value) {
		this._image = value
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
