const SmartApp = require('../../lib/smart-app')

describe('smartapp-initialize-spec', () => {
	test('default handler', async () => {
		const app = new SmartApp()
			.appId('xxx')
			.firstPageId('page1')
			.permissions(['r:devices:*'])
			.disableCustomDisplayName(true)
			.disableRemoveApp(true)

		// Initialize configuration callback
		const resp = await app.handleMockCallback({
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

		const expectedInitResponse = {initialize: {
			id: 'xxx',
			firstPageId: 'page1',
			permissions: ['r:devices:*'],
			disableCustomDisplayName: true,
			disableRemoveApp: true
		}}

		expect(resp.configurationData).toStrictEqual(expectedInitResponse)
	})

	test('custom handler page', async () => {
		const app = new SmartApp()
			.appId('xxx')
			.permissions(['r:devices:*'])
			.initialized((ctx, initialization) => {
				initialization.firstPageId('page2A')
			})

		// Initialize configuration callback
		const resp = await app.handleMockCallback({
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

		const expectedInitResponse = {initialize: {
			id: 'xxx',
			firstPageId: 'page2A',
			permissions: ['r:devices:*'],
			disableCustomDisplayName: false,
			disableRemoveApp: false
		}}

		expect(resp.configurationData).toStrictEqual(expectedInitResponse)
	})

	test('custom handler all', async () => {
		const app = new SmartApp()
			.appId('xxx')
			.firstPageId('page1')
			.permissions(['r:devices:*'])
			.disableCustomDisplayName(true)
			.disableRemoveApp(true)
			.initialized((ctx, initialization) => {
				initialization.firstPageId('page2')
					.disableCustomDisplayName(false)
					.disableRemoveApp(false)
					.permissions(['r:devices:*', 'x:devices:*'])
			})

		// Initialize configuration callback
		const resp = await app.handleMockCallback({
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

		const expectedInitResponse = {initialize: {
			id: 'xxx',
			firstPageId: 'page2',
			permissions: ['r:devices:*', 'x:devices:*'],
			disableCustomDisplayName: false,
			disableRemoveApp: false
		}}

		expect(resp.configurationData).toStrictEqual(expectedInitResponse)
	})
})
