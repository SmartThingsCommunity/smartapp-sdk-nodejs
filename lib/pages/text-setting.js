'use strict'

const SectionSetting = require('./section-setting.js')

module.exports = class TextSetting extends SectionSetting {
	constructor(section, id) {
		super(section, id)
		this._type = 'TEXT'
		this._description = 'Tap to set'
		this._defaultValue = this.i18nKey('defaultValue')
	}

	/**
	 * The maximum length the text can have.
	 *
	 * @param {number} value
	 * @returns {TextSetting} Text Setting instance
	 */
	maxLength(value) {
		this._maxLength = value
		return this
	}

	/**
	 * The minimum length the text can have.
	 *
	 * @param {number} value
	 * @returns {TextSetting} Text Setting instance
	 */
	minLength(value) {
		this._minLength = value
		return this
	}

	/**
	 * Set an image icon
	 *
	 * @param {String} source HTTPS url or Base64-encoded data URI. Max length 2048 characters.
	 * @returns {TextSetting} Text Setting instance
	 */
	image(source) {
		this._image = source
		return this
	}

	/**
	 * A string to be shown after the text input field.
	 *
	 * @param {String} text Max length 10 characters
	 * @returns {TextSetting} Text Setting instance
	 */
	postMessage(text) {
		this._postMessage = text
		return this
	}

	defaultValue(value) {
		this._defaultValue = value
		return this
	}

	toJson() {
		const result = super.toJson()
		if (this._maxLength) {
			result.maxLength = this._maxLength
		}

		if (this._minLength) {
			result.minLength = this._minLength
		}

		if (this._image) {
			result.image = this._image
		}

		if (this._postMessage) {
			result.postMessage = this._postMessage
		}

		if (this._defaultValue !== undefined) {
			result.defaultValue = this.translate(this._defaultValue)
		}

		return result
	}
}
