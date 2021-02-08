const SmartApp = require('../../lib/smart-app')

describe('smartapp-page-spec', () => {
	let app
	beforeEach(() => {
		app = new SmartApp()
	})

	it('should set page ID', () => {
		app.appId('xxx')
		app.page('eaMainPage', (ctx, page) => {
			page.section('whenDoorOpensAndCloses', section => {
				section.deviceSetting('contactSensor')
					.capabilities(['contactSensor'])
					.required(true)
			})

			page.section('turnLightsOnAndOff', section => {
				section.deviceSetting('lights')
					.capabilities(['switch'])
					.multiple(true)
					.permissions('rx')
					.required(true)
			})
		})
		app.defaultPage((ctx, page, config) => {
			page.section(`Page ${config.pageId}`, section => {
				section.deviceSetting('contactSensor')
					.capabilities(['contactSensor'])
					.required(true)
			})
		})

		// Initialize configuration callback
		app.handleMockCallback({
			lifecycle: 'CONFIGURATION',
			executionId: 'e6903fe6-f88f-da69-4c12-e2802606ccbc',
			locale: 'en',
			version: '0.1.0',
			client: {
				os: 'ios',
				version: '0.0.0',
				language: 'en-US'
			},
			configurationData: {
				installedAppId: '7d7fa36d-0ad9-4893-985c-6b75858e38e4',
				phase: 'INITIALIZE',
				pageId: '',
				previousPageId: '',
				config: {}
			},
			settings: {}
		}).then(initResponse => {
			const expectedInitResponse = {initialize: {
				id: 'xxx',
				firstPageId: 'eaMainPage',
				permissions: [],
				disableCustomDisplayName: false,
				disableRemoveApp: false
			}}

			expect(initResponse.configurationData).toStrictEqual(expectedInitResponse)
		})

		// Page configuration callback
		app.handleMockCallback({
			lifecycle: 'CONFIGURATION',
			executionId: 'abcf6e72-60f4-1f27-341b-449ad9e2192e',
			locale: 'en',
			version: '0.1.0',
			client: {
				os: 'ios',
				version: '0.0.0',
				language: 'fr'
			},
			configurationData: {
				installedAppId: '702d6539-cde1-4baf-9336-10110a0fd000',
				phase: 'PAGE',
				pageId: 'eaAnotherPage',
				previousPageId: '',
				config: {}
			},
			settings: {}
		}).then(pageResponse => {
			const expectedPageResponse = {
				page: {
					name: 'pages.eaAnotherPage.name',
					complete: true,
					pageId: 'eaAnotherPage',
					nextPageId: null,
					previousPageId: null,
					sections: [
						{
							name: 'Page eaAnotherPage',
							settings: [
								{
									id: 'contactSensor',
									name: 'pages.eaAnotherPage.settings.contactSensor.name',
									required: true,
									type: 'DEVICE',
									description: 'Tap to set',
									multiple: false,
									capabilities: [
										'contactSensor'
									],
									permissions: [
										'r'
									]
								}
							]
						}
					]
				}
			}

			expect(pageResponse.configurationData).toStrictEqual(expectedPageResponse)
		})

		// Default page handler configuration callback
		app.handleMockCallback({
			lifecycle: 'CONFIGURATION',
			executionId: 'abcf6e72-60f4-1f27-341b-449ad9e2192e',
			locale: 'en',
			version: '0.1.0',
			client: {
				os: 'ios',
				version: '0.0.0',
				language: 'fr'
			},
			configurationData: {
				installedAppId: '702d6539-cde1-4baf-9336-10110a0fd000',
				phase: 'PAGE',
				pageId: '',
				previousPageId: '',
				config: {}
			},
			settings: {}
		}).then(pageResponse => {
			const expectedPageResponse = {
				page: {
					name: 'pages.eaMainPage.name',
					complete: true,
					pageId: 'eaMainPage',
					nextPageId: null,
					previousPageId: null,
					sections: [
						{
							name: 'whenDoorOpensAndCloses',
							settings: [
								{
									id: 'contactSensor',
									name: 'pages.eaMainPage.settings.contactSensor.name',
									required: true,
									type: 'DEVICE',
									description: 'Tap to set',
									multiple: false,
									capabilities: [
										'contactSensor'
									],
									permissions: [
										'r'
									]
								}
							]
						},
						{
							name: 'turnLightsOnAndOff',
							settings: [
								{
									id: 'lights',
									name: 'pages.eaMainPage.settings.lights.name',
									required: true,
									type: 'DEVICE',
									description: 'Tap to set',
									multiple: true,
									capabilities: [
										'switch'
									],
									permissions: [
										'r',
										'x'
									]
								}
							]
						}
					]
				}
			}

			expect(pageResponse.configurationData).toStrictEqual(expectedPageResponse)
		})
	})

	it('should configure event logger', () => {
		app.appId('xxx')
		app.enableEventLogging(4)
		app.page('eaMainPage', (ctx, page) => {
			page.section('whenDoorOpensAndCloses', section => {
				section.deviceSetting('contactSensor')
					.capabilities(['contactSensor'])
			})
		})

		app.handleMockCallback({
			lifecycle: 'CONFIGURATION',
			executionId: 'e6903fe6-f88f-da69-4c12-e2802606ccbc',
			locale: 'en',
			version: '0.1.0',
			client: {
				os: 'ios',
				version: '0.0.0',
				language: 'en-US'
			},
			configurationData: {
				installedAppId: '7d7fa36d-0ad9-4893-985c-6b75858e38e4',
				phase: 'INITIALIZE',
				pageId: '',
				previousPageId: '',
				config: {}
			},
			settings: {}
		})
	})

	test('default page handler', () => {
		app.handleMockCallback({
			lifecycle: 'CONFIGURATION',
			executionId: 'abcf6e72-60f4-1f27-341b-449ad9e2192e',
			locale: 'en',
			version: '0.1.0',
			client: {
				os: 'ios',
				version: '0.0.0',
				language: 'fr'
			},
			configurationData: {
				installedAppId: '702d6539-cde1-4baf-9336-10110a0fd000',
				phase: 'PAGE',
				pageId: 'mainPage',
				previousPageId: '',
				config: {}
			},
			settings: {}
		}).then(pageResponse => {
			const expectedPageResponse = {
				page: {
					name: 'System Error!',
					complete: true,
					pageId: 'mainPage',
					nextPageId: null,
					previousPageId: null,
					sections: [
						{
							name: 'Configuration Page Error',
							settings: [
								{
									id: 'undefined_handler',
									required: false,
									name: 'Page Handler Missing',
									type: 'PARAGRAPH',
									description: 'No handler found for page \'mainPage\''
								}
							]
						}
					]
				}
			}

			expect(pageResponse.configurationData).toStrictEqual(expectedPageResponse)
		})
	})

	test('default page handler without pageId', () => {
		app.handleMockCallback({
			lifecycle: 'CONFIGURATION',
			executionId: 'abcf6e72-60f4-1f27-341b-449ad9e2192e',
			locale: 'en',
			version: '0.1.0',
			client: {
				os: 'ios',
				version: '0.0.0',
				language: 'fr'
			},
			configurationData: {
				installedAppId: '702d6539-cde1-4baf-9336-10110a0fd000',
				phase: 'PAGE',
				pageId: '',
				previousPageId: '',
				config: {}
			},
			settings: {}
		}).then(pageResponse => {
			const expectedPageResponse = {
				page: {
					name: 'System Error!',
					complete: true,
					pageId: undefined,
					nextPageId: null,
					previousPageId: null,
					sections: [
						{
							name: 'Configuration Page Error',
							settings: [
								{
									id: 'undefined_handler',
									required: false,
									name: 'Page Handler Missing',
									type: 'PARAGRAPH',
									description: 'No page handlers were found'
								}
							]
						}
					]
				}
			}

			expect(pageResponse.configurationData).toStrictEqual(expectedPageResponse)
		})
	})

	it('should respond with error when config phase is not supported', async () => {
		const unsupportedConfigPhase = {
			lifecycle: 'CONFIGURATION',
			executionId: '00000000-0000-0000-0000-000000000000',
			locale: 'en',
			version: '0.1.0',
			client: {
				os: 'ios',
				version: '0.0.0',
				language: 'fr'
			},
			configurationData: {
				installedAppId: '00000000-0000-0000-0000-000000000000',
				phase: 'UNSUPPORTED',
				pageId: '',
				previousPageId: '',
				config: {}
			},
			settings: {}
		}

		const expectedPageResponse = {
			message: 'Server error: \'Error: Unsupported config phase: UNSUPPORTED\'',
			statusCode: 500
		}

		await expect(app.handleMockCallback(unsupportedConfigPhase)).resolves.toStrictEqual(expectedPageResponse)
	})
})
