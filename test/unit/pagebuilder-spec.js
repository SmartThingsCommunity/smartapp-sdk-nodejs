const Page = require('../../lib/pages/page')

describe('pagebuilder', () => {
	it('should set page ID', () => {
		const page = new Page('mainPage')
		page.name('Page Builder Spec')
		const json = page.toJson()
		expect(json.pageId).toBe('mainPage')
		expect(json.name).toBe('Page Builder Spec')
	})

	it('should process one section', () => {
		const page = new Page('mainPage')
		page.defaultRequired(true)
		page.section('When this door opens and closes', section => {
			section.deviceSetting('contactSensor')
				.capabilities(['contactSensor'])
				.name('Select an open/close sensor')
		})

		const json = page.toJson()
		// Console.log(JSON.stringify(json, null, 2))
		expect(json.sections.length).toBe(1)
		expect(json.sections[0].name).toBe('When this door opens and closes')
		expect(json.sections[0].settings.length).toBe(1)
		expect(json.sections[0].settings[0].id).toBe('contactSensor')
		expect(json.sections[0].settings[0].name).toBe('Select an open/close sensor')
		expect(json.sections[0].settings[0].description).toBe('Tap to set')
		expect(json.sections[0].settings[0].required).toBe(true)
		expect(json.sections[0].settings[0].multiple).toBe(false)
		expect(json.sections[0].settings[0].type).toBe('DEVICE')
		expect(json.sections[0].settings[0].permissions[0]).toBe('r')
		expect(json.sections[0].settings[0].capabilities[0]).toBe('contactSensor')
	})

	it('should process two sections', () => {
		const page = new Page('mainPage')
		page.defaultRequired(true)
		page.section('When this door opens and closes', section => {
			section.deviceSetting('contactSensor')
				.capabilities(['contactSensor'])
				.name('Select an open/close sensor')
		})

		page.section('Turn these lights on and off', section => {
			section.deviceSetting('lights')
				.capabilities(['switch'])
				.name('Select lights')
				.multiple(true)
				.permissions('rx')
		})

		const json = page.toJson()
		// Console.log(JSON.stringify(json, null, 2))
		expect(json.sections.length).toBe(2)

		expect(json.sections[0].name).toBe('When this door opens and closes')
		expect(json.sections[0].settings.length).toBe(1)
		expect(json.sections[0].settings[0].id).toBe('contactSensor')
		expect(json.sections[0].settings[0].name).toBe('Select an open/close sensor')
		expect(json.sections[0].settings[0].description).toBe('Tap to set')
		expect(json.sections[0].settings[0].required).toBe(true)
		expect(json.sections[0].settings[0].multiple).toBe(false)
		expect(json.sections[0].settings[0].type).toBe('DEVICE')
		expect(json.sections[0].settings[0].permissions[0]).toBe('r')
		expect(json.sections[0].settings[0].capabilities[0]).toBe('contactSensor')

		expect(json.sections[1].name).toBe('Turn these lights on and off')
		expect(json.sections[1].settings.length).toBe(1)
		expect(json.sections[1].settings[0].id).toBe('lights')
		expect(json.sections[1].settings[0].name).toBe('Select lights')
		expect(json.sections[0].settings[0].description).toBe('Tap to set')
		expect(json.sections[1].settings[0].required).toBe(true)
		expect(json.sections[1].settings[0].multiple).toBe(true)
		expect(json.sections[1].settings[0].type).toBe('DEVICE')
		expect(json.sections[1].settings[0].permissions[0]).toBe('r')
		expect(json.sections[1].settings[0].permissions[1]).toBe('x')
		expect(json.sections[1].settings[0].capabilities[0]).toBe('switch')
	})

	it('should process unnamed section', () => {
		const page = new Page('mainPage')
		page.defaultRequired(true)
		page.section(section => {
			section.deviceSetting('contactSensor')
				.capabilities(['contactSensor'])
				.name('Select an open/close sensor')
		})

		const json = page.toJson()
		// Console.log(JSON.stringify(json, null, 2))
		expect(json.sections.length).toBe(1)
		expect(json.sections[0].name).toBeUndefined()
		expect(json.sections[0].settings.length).toBe(1)
		expect(json.sections[0].settings[0].id).toBe('contactSensor')
		expect(json.sections[0].settings[0].name).toBe('Select an open/close sensor')
		expect(json.sections[0].settings[0].required).toBe(true)
		expect(json.sections[0].settings[0].multiple).toBe(false)
		expect(json.sections[0].settings[0].type).toBe('DEVICE')
		expect(json.sections[0].settings[0].permissions[0]).toBe('r')
		expect(json.sections[0].settings[0].capabilities[0]).toBe('contactSensor')
	})

	it('should detect duplicate setting ID', () => {
		const page = new Page('mainPage')
		let caughtError = false
		page.section('When this door opens and closes', section => {
			section.deviceSetting('sensor')
				.capabilities(['contactSensor'])
				.name('Select an open/close sensor')

			try {
				section.deviceSetting('sensor')
					.capabilities(['motionSensor'])
					.name('Select a motion sensor')
			} catch (error) {
				caughtError = true
			}
		})

		expect(caughtError).toBe(true)
	})

	it('should honor default required', () => {
		const page = new Page('mainPage')
		page.defaultRequired(true)
		page.section('When this door opens and closes', section => {
			section.deviceSetting('contactSensor')
				.capabilities(['contactSensor'])
				.name('Select an open/close sensor')
			section.deviceSetting('motionSensor')
				.capabilities(['motionSensor'])
				.name('Select an open/close sensor')
				.required(false)
		})

		page.section('Turn these lights on and off', section => {
			section.deviceSetting('lights')
				.capabilities(['switch'])
				.name('Select lights')
				.multiple(true)
				.permissions('rx')
		})

		const json = page.toJson()
		// Console.log(JSON.stringify(json, null, 2))
		expect(json.sections[0].settings[0].required).toBe(true)
		expect(json.sections[0].settings[1].required).toBe(false)
		expect(json.sections[1].settings[0].required).toBe(true)
	})

	it('options formats', () => {
		const page = new Page('mainPage')

		page.section(section => {
			section.enumSetting('standardOptions').options([{id: 'one', name: 'One'}, {id: 'two', name: 'Two'}])
			section.enumSetting('mapOptions').options({red: 'Red', green: 'Green', blue: 'Blue'})
			section.enumSetting('simpleOptions').options(['Vanilla', 'Chocolate', 'Strawberry'])
		})

		const json = page.toJson()
		// Console.log(JSON.stringify(json, null, 2))
		expect(json.sections[0].settings[0].options[0].id).toBe('one')
		expect(json.sections[0].settings[0].options[0].name).toBe('One')
		expect(json.sections[0].settings[0].options[1].id).toBe('two')
		expect(json.sections[0].settings[0].options[1].name).toBe('Two')

		expect(json.sections[0].settings[1].options[0].id).toBe('red')
		expect(json.sections[0].settings[1].options[0].name).toBe('Red')
		expect(json.sections[0].settings[1].options[1].id).toBe('green')
		expect(json.sections[0].settings[1].options[1].name).toBe('Green')
		expect(json.sections[0].settings[1].options[2].id).toBe('blue')
		expect(json.sections[0].settings[1].options[2].name).toBe('Blue')

		expect(json.sections[0].settings[2].options[0].id).toBe('Vanilla')
		expect(json.sections[0].settings[2].options[0].name).toBe('Vanilla')
		expect(json.sections[0].settings[2].options[1].id).toBe('Chocolate')
		expect(json.sections[0].settings[2].options[1].name).toBe('Chocolate')
		expect(json.sections[0].settings[2].options[2].id).toBe('Strawberry')
		expect(json.sections[0].settings[2].options[2].name).toBe('Strawberry')
	})

	it('groupedOptions formats', () => {
		const page = new Page('mainPage')

		page.section('none', section => {
			section.enumSetting('standardOptions').groupedOptions([
				{name: 'Group One', options: [{id: 'g1one', name: 'One'}, {id: 'g1two', name: 'Two'}]},
				{name: 'Group Two', options: [{id: 'g2one', name: 'One'}, {id: 'g2two', name: 'Two'}]}
			])
			section.enumSetting('mapOptions').groupedOptions({
				Colors: {red: 'Red', green: 'Green', blue: 'Blue'},
				Flavors: {vanilla: 'Vanilla', chocolate: 'Chocolate', strawberry: 'Strawberry'}
			})
			section.enumSetting('simpleOptions').groupedOptions({
				Colors: ['Red', 'Green', 'Blue'],
				Flavors: ['Vanilla', 'Chocolate', 'Strawberry']
			})
		})

		const json = page.toJson()
		// Standard Options - group 1
		expect(json.sections[0].settings[0].groupedOptions[0].name).toBe('Group One')
		expect(json.sections[0].settings[0].groupedOptions[0].options[0].id).toBe('g1one')
		expect(json.sections[0].settings[0].groupedOptions[0].options[0].name).toBe('One')
		expect(json.sections[0].settings[0].groupedOptions[0].options[1].id).toBe('g1two')
		expect(json.sections[0].settings[0].groupedOptions[0].options[1].name).toBe('Two')
		// Standard Options - group 2
		expect(json.sections[0].settings[0].groupedOptions[1].name).toBe('Group Two')
		expect(json.sections[0].settings[0].groupedOptions[1].options[0].id).toBe('g2one')
		expect(json.sections[0].settings[0].groupedOptions[1].options[0].name).toBe('One')
		expect(json.sections[0].settings[0].groupedOptions[1].options[1].id).toBe('g2two')
		expect(json.sections[0].settings[0].groupedOptions[1].options[1].name).toBe('Two')

		// Map Options - group 1
		expect(json.sections[0].settings[1].groupedOptions[0].name).toBe('Colors')
		expect(json.sections[0].settings[1].groupedOptions[0].options[0].id).toBe('red')
		expect(json.sections[0].settings[1].groupedOptions[0].options[0].name).toBe('Red')
		expect(json.sections[0].settings[1].groupedOptions[0].options[1].id).toBe('green')
		expect(json.sections[0].settings[1].groupedOptions[0].options[1].name).toBe('Green')
		expect(json.sections[0].settings[1].groupedOptions[0].options[2].id).toBe('blue')
		expect(json.sections[0].settings[1].groupedOptions[0].options[2].name).toBe('Blue')
		// Map Options - group 2
		expect(json.sections[0].settings[1].groupedOptions[1].name).toBe('Flavors')
		expect(json.sections[0].settings[1].groupedOptions[1].options[0].id).toBe('vanilla')
		expect(json.sections[0].settings[1].groupedOptions[1].options[0].name).toBe('Vanilla')
		expect(json.sections[0].settings[1].groupedOptions[1].options[1].id).toBe('chocolate')
		expect(json.sections[0].settings[1].groupedOptions[1].options[1].name).toBe('Chocolate')
		expect(json.sections[0].settings[1].groupedOptions[1].options[2].id).toBe('strawberry')
		expect(json.sections[0].settings[1].groupedOptions[1].options[2].name).toBe('Strawberry')

		// Simple Options - group 1
		expect(json.sections[0].settings[2].groupedOptions[0].name).toBe('Colors')
		expect(json.sections[0].settings[2].groupedOptions[0].options[0].id).toBe('Red')
		expect(json.sections[0].settings[2].groupedOptions[0].options[0].name).toBe('Red')
		expect(json.sections[0].settings[2].groupedOptions[0].options[1].id).toBe('Green')
		expect(json.sections[0].settings[2].groupedOptions[0].options[1].name).toBe('Green')
		expect(json.sections[0].settings[2].groupedOptions[0].options[2].id).toBe('Blue')
		expect(json.sections[0].settings[2].groupedOptions[0].options[2].name).toBe('Blue')
		// Simple Options - group 2
		expect(json.sections[0].settings[2].groupedOptions[1].name).toBe('Flavors')
		expect(json.sections[0].settings[2].groupedOptions[1].options[0].id).toBe('Vanilla')
		expect(json.sections[0].settings[2].groupedOptions[1].options[0].name).toBe('Vanilla')
		expect(json.sections[0].settings[2].groupedOptions[1].options[1].id).toBe('Chocolate')
		expect(json.sections[0].settings[2].groupedOptions[1].options[1].name).toBe('Chocolate')
		expect(json.sections[0].settings[2].groupedOptions[1].options[2].id).toBe('Strawberry')
		expect(json.sections[0].settings[2].groupedOptions[1].options[2].name).toBe('Strawberry')
	})

	it('page setting', () => {
		const page = new Page('mainPage')

		page.section(section => {
			section.pageSetting('anotherPage')
		})

		const json = page.toJson()
		// Console.log(JSON.stringify(json, null, 2))
		expect(json.sections[0].settings[0].id).toBe('anotherPage')
		expect(json.sections[0].settings[0].page).toBe('anotherPage')
		expect(json.sections[0].settings[0].required).toBeUndefined()
	})

	it('page defaultRequired adds required:true', () => {
		const page = new Page('mainPage')
		page.defaultRequired(true)
		page.section(section => {
			section.paragraphSetting('mainParagraph')
		})

		const json = page.toJson()
		// Console.log(JSON.stringify(json, null, 2))
		expect(json.sections[0].settings[0].required).toBe(true)
	})
})
