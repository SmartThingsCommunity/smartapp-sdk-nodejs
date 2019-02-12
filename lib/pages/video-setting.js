'use strict'

const SectionSetting = require('./section-setting.js')

module.exports = class VideoSetting extends SectionSetting {
	constructor(section, id) {
		super(section, id)
		this._type = 'VIDEO'
	}

	video(value) {
		this._video = value
		return this
	}

	image(value) {
		this._image = value
		return this
	}

	toJson() {
		const result = super.toJson()
		if (this._video) {
			result.video = this._video
		}

		if (this._image) {
			result.image = this._image
		}

		return result
	}
}
