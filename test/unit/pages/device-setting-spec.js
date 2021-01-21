const Page = require('../../../lib/pages/page')
const Section = require('../../../lib/pages/section')
const DeviceSetting = require('../../../lib/pages/device-setting')

describe('device-setting', () => {
	let page = {}
	let section = {}
	const expected = {
		// Super
		id: 'testSetting',
		name: 'myTestDeviceSettingName',
		description: 'myTestDviceSettingDesc',
		disabled: true,
		required: true,
		defaultValue: 'defaultValue',
		//  End Super
		submitOnChange: true,
		multiple: true,
		closeOnSelection: true,
		preselect: true,
		capabilities: ['switch'],
		excludeCapabilities: ['light'],
		permissions: 'rwx'
	}

	beforeEach(() => {
		page = new Page('testPage')
		section = new Section(page, 'testSection')
	})

	it('should set `multiple`', () => {
		const setting = new DeviceSetting(section, 'testDevice')
		expect(setting.toJson().multiple).toBe(false)
	})

	it('should set `closeOnSelection`', () => {
		const setting = new DeviceSetting(section, expected.id)
		setting.closeOnSelection(expected.closeOnSelection)
		expect(setting.toJson().closeOnSelection).toBe(expected.closeOnSelection)
	})

	it('should set `preselect`', () => {
		const setting = new DeviceSetting(section, expected.id)
		setting.preselect(expected.preselect)
		expect(setting.toJson().preselect).toBe(expected.preselect)
	})

	it('should set `capabilities`', () => {
		const setting = new DeviceSetting(section, expected.id)
		setting.capabilities(expected.capabilities)
		expect(setting.toJson().capabilities).toEqual(expected.capabilities)
	})

	it('should set `capability`', () => {
		const setting = new DeviceSetting(section, expected.id)
		setting.capability(expected.capabilities[0])
		expect(setting.toJson().capabilities).toEqual(expected.capabilities)
	})

	it('should set `excludeCapabilities`', () => {
		const setting = new DeviceSetting(section, expected.id)
		setting.excludeCapabilities(expected.excludeCapabilities)
		expect(setting.toJson().excludeCapabilities).toEqual(expected.excludeCapabilities)
	})

	it('should set `excludeCapability`', () => {
		const setting = new DeviceSetting(section, expected.id)
		setting.excludeCapability(expected.excludeCapabilities[0])
		expect(setting.toJson().excludeCapabilities).toEqual(expected.excludeCapabilities)
	})

	it('should set `super.submitOnChange`', () => {
		const setting = new DeviceSetting(section, expected.id)
		setting.submitOnChange(expected.submitOnChange)
		expect(setting.toJson().submitOnChange).toBe(expected.submitOnChange)
	})

	it('should set `permissions` correctly with `rwx`', () => {
		const setting = new DeviceSetting(section, expected.id)
		setting.permissions(expected.permissions)
		expect(setting.toJson().permissions).toEqual(expect.arrayContaining(['r', 'w', 'x']))
	})

	it('should set `permissions` correctly with `r`', () => {
		const setting = new DeviceSetting(section, expected.id)
		setting.permissions(expected.permissions[0])
		expect(setting.toJson().permissions).toEqual(expect.arrayContaining(['r']))
	})

	it('should set `permissions` correctly with `[r,w,x]`', () => {
		const setting = new DeviceSetting(section, expected.id)
		setting.permissions(expected.permissions.split(''))
		expect(setting.toJson().permissions).toEqual(expect.arrayContaining(['r', 'w', 'x']))
	})

	it('should default `permissions` to [r]', () => {
		const setting = new DeviceSetting(section, expected.id)
		expect(setting.toJson().permissions).toEqual(expect.arrayContaining(['r']))
	})

	it('`toJson()` to return super properties at least', () => {
		const setting = new DeviceSetting(section, expected.id)
		expect(setting.toJson().id).toBeDefined()
		expect(setting.toJson().name).toBeDefined()
		expect(setting.toJson().description).toBeDefined()
		expect(setting.toJson().required).toBeDefined()
	})

	it('`toJson()` to return specific properties', () => {
		const setting = new DeviceSetting(section, expected.id)
		expect(setting.toJson().type).toBe('DEVICE')
		expect(setting.toJson().description).toBe('Tap to set')
		expect(setting.toJson().multiple).toBe(false)
	})
})
