'use strict'

const SectionSetting = require('./section-setting.js')

module.exports = class DeviceSetting extends SectionSetting {
	constructor(section, id) {
		super(section, id)
		this._type = 'DEVICE'
		this._description = 'Tap to set'
		this._multiple = false
	}

	multiple(value) {
		this._multiple = value
		return this
	}

	closeOnSelection(value) {
		this._closeOnSelection = value
		return this
	}

	preselect(value) {
		this._preselect = value
		return this
	}

	capabilities(items) {
		this._capabilities = items
		return this
	}

	capability(capability) {
		this._capabilities = [capability]
		return this
	}

	excludeCapabilities(capabilities) {
		this._excludeCapabilities = typeof capabilities === 'string' ?
			capabilities.split(' ') :
			capabilities
		return this
	}

	excludeCapability(value) {
		// TODO -- need to be able to OR capabilities
		this._excludeCapabilities = [value]
		return this
	}

	permissions(permissions) {
		this._permissions = typeof permissions === 'string' ? permissions.match(/[rwx]/gi) : permissions
		return this
	}

	toJson() {
		const result = super.toJson()
		result.multiple = this._multiple

		if (this._closeOnSelection) {
			result.closeOnSelection = this._closeOnSelection
		}

		if (this._submitOnChange) {
			result.submitOnChange = this._submitOnChange
		}

		if (this._preselect) {
			result.preselect = this._preselect
		}

		if (this._capabilities) {
			result.capabilities = this._capabilities
		}

		if (this._excludeCapabilities) {
			result.excludeCapabilities = this._excludeCapabilities
		}

		if (this._permissions) {
			result.permissions = this._permissions
		} else {
			result.permissions = ['r']
		}

		if (this._style) {
			result.style = this._style
		}

		return result
	}
}
