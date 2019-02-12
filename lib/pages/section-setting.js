'use strict'

module.exports = class SectionSetting {
	constructor(section, id) {
		this._section = section
		this._id = id
		this._name = this.i18nKey('name')
		this._description = ''
		this._required = section._defaultRequired
		if (section._page._settingIds.includes(id)) {
			throw new Error(`Setting ID '${id}' has already been used.`)
		} else {
			section._page._settingIds.push(id)
		}
	}

	name(value) {
		this._name = value
		return this
	}

	description(value) {
		if (value === undefined || value === null) {
			this._description = ''
		} else {
			this._description = value
		}

		return this
	}

	defaultValue(value) {
		this._defaultValue = String(value)
		return this
	}

	required(value) {
		this._required = value
		return this
	}

	disabled(value) {
		this._disabled = value
		return this
	}

	i18nKey(property) {
		return this._section._page.i18nKey(`settings.${this._id}.${property}`)
	}

	translate(...args) {
		return this._section._page.translate(...args)
	}

	toJson() {
		const result = {
			id: this._id,
			name: this.translate(this._name),
			required: this._required,
			type: this._type
		}

		if (!this._description) {
			result.description = ''
		} else if (this._description instanceof Function) {
			result.description = this._description()
		} else {
			result.description = this.translate(this._description)
		}

		if (this._defaultValue !== undefined) {
			result.defaultValue = this._defaultValue
		}

		if (this._disabled) {
			result.disabled = this._disabled
		}

		return result
	}
}
