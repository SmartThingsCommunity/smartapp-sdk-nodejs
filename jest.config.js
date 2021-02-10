module.exports = {
	// Currently unable to set coverage reporter watermarks in jest. See https://github.com/facebook/jest/issues/9734
	//
	// For our previous nyc watermark config, see
	// https://github.com/SmartThingsCommunity/smartapp-sdk-nodejs/blob/79983de15646dd3be84d2b3e82d409f9bc632959/package.json#L72
	coverageReporters: ['json', 'text'],
	testEnvironment: 'node',
	testMatch: ['**/test/**/*.[jt]s?(x)'],
	setupFiles: ['<rootDir>/config/jest.setup.js']
}
