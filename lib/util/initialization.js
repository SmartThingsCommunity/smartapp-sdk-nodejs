'use strict'

module.exports = class Initialization {
	constructor(params) {
		this._params = params
	}

	firstPageId(value) {
		this._params.firstPageId = value
		return this
	}

	permissions(value) {
		this._params.permissions = value
		return this
	}

	disableCustomDisplayName(value = true) {
		this._params.disableCustomDisplayName = value
		return this
	}

	disableRemoveApp(value = true) {
		this._params.disableRemoveApp = value
		return this
	}
}
