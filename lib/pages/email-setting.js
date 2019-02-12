'use strict'

const SectionSetting = require('./section-setting.js')

module.exports = class EmailSetting extends SectionSetting {
	constructor(section, id) {
		super(section, id)
		this._type = 'EMAIL'
		this._description = 'Tap to set'
	}

	// TODO -- Is this right? It is from Swagger
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
