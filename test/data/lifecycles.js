const { v4: uuid } = require('uuid')

exports.INSTALL = {
	lifecycle: 'INSTALL',
	executionId: uuid(),
	locale: 'en',
	version: '0.1.0',
	client: {
		os: 'ios',
		version: '0.0.0',
		language: 'en-US'
	},
	installData: {
		authToken: uuid(),
		refreshToken: uuid(),
		installedApp: {
			installedAppId: uuid(),
			locationId: uuid(),
			config: {}
		}
	},
	settings: {}
}

exports.UNINSTALL = {
	lifecycle: 'UNINSTALL',
	executionId: uuid(),
	locale: 'en-US',
	version: '0.1.0',
	uninstallData: {
		installedApp: {
			installedAppId: uuid(),
			locationId: uuid(),
			config: {},
			permissions: []
		}
	},
	settings: {}
}

exports.UPDATE = {
	lifecycle: 'UPDATE',
	executionId: uuid(),
	locale: 'en',
	version: '0.1.0',
	client: {
		os: 'ios',
		version: '0.0.0',
		language: 'en-US'
	},
	updateData: {
		authToken: uuid(),
		refreshToken: uuid(),
		installedApp: {
			installedAppId: uuid(),
			locationId: uuid(),
			config: {}
		}
	},
	settings: {}
}
