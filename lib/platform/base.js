'use strict'

module.exports = class Base {
	constructor(st) {
		this.st = st
	}

	installedAppId(id) {
		this.st.installedAppId(id)
		return this
	}
}
