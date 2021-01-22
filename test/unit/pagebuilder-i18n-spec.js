const path = require('path')
const i18n = require('i18n')
const Page = require('../../lib/pages/page')

i18n.configure({
	locales: ['en', 'fr'],
	directory: path.join(__dirname, 'locales')
})
describe('pagebuilder-i18n-spec', () => {
	it('should process two sections', () => {
		const page = new Page('i18nMainPage', 'fr')

		page.section('whenDoorOpensAndCloses', section => {
			section.deviceSetting('contactSensor')
				.capabilities(['contactSensor'])
		})

		page.section('turnLightsOnAndOff', section => {
			section.deviceSetting('lights')
				.capabilities(['switch'])
				.multiple(true)
				.permissions('rx')
		})

		page.section('pickFromList', section => {
			section.enumSetting('enumList')
				.options([
					{
						id: 'option-001',
						name: 'optionName001'
					}
				])
		})

		page.section('pickFromGroupedList', section => {
			section.enumSetting('enumGroupList')
				.groupedOptions([
					{
						name: 'groupName001',
						options: [
							{
								id: 'option-001',
								name: 'optionGroupName001'
							}
						]
					}
				])
		})

		const json = page.toJson()
		// Console.log(JSON.stringify(json, null, 2))
		expect(json.sections.length).toBe(4)

		expect(json.sections[0].name).toBe('Quand cette porte s\'ouvre et se ferme')
		expect(json.sections[0].settings.length).toBe(1)
		expect(json.sections[0].settings[0].id).toBe('contactSensor')
		expect(json.sections[0].settings[0].name).toBe('Sélectionnez un capteur d\'ouverture / fermeture')
		expect(json.sections[0].settings[0].description).toBe('Appuyez pour définir')
		expect(json.sections[0].settings[0].multiple).toBe(false)
		expect(json.sections[0].settings[0].type).toBe('DEVICE')
		expect(json.sections[0].settings[0].permissions[0]).toBe('r')
		expect(json.sections[0].settings[0].capabilities[0]).toBe('contactSensor')

		expect(json.sections[1].name).toBe('Allumer et éteindre ces lumières')
		expect(json.sections[1].settings.length).toBe(1)
		expect(json.sections[1].settings[0].id).toBe('lights')
		expect(json.sections[1].settings[0].name).toBe('Sélectionnez une ou plusieurs lumières à contrôler')
		expect(json.sections[0].settings[0].description).toBe('Appuyez pour définir')
		expect(json.sections[1].settings[0].multiple).toBe(true)
		expect(json.sections[1].settings[0].type).toBe('DEVICE')
		expect(json.sections[1].settings[0].permissions[0]).toBe('r')
		expect(json.sections[1].settings[0].permissions[1]).toBe('x')
		expect(json.sections[1].settings[0].capabilities[0]).toBe('switch')

		expect(json.sections[2].name).toBe('Choisissez parmi une liste')
		expect(json.sections[2].settings.length).toBe(1)
		expect(json.sections[2].settings[0].id).toBe('enumList')
		expect(json.sections[2].settings[0].name).toBe('Les options')
		expect(json.sections[2].settings[0].options[0].name).toBe('Nom de l\'option 1')

		expect(json.sections[3].name).toBe('Choisissez parmi une liste groupée')
		expect(json.sections[3].settings.length).toBe(1)
		expect(json.sections[3].settings[0].id).toBe('enumGroupList')
		expect(json.sections[3].settings[0].name).toBe('Liste de groupe d\'énumération')
		expect(json.sections[3].settings[0].groupedOptions[0].name).toBe('Options groupées')
		expect(json.sections[3].settings[0].groupedOptions[0].options[0].name).toBe('Nom du groupe d\'options 1')
	})

	it('should allow overrides', () => {
		const page = new Page('i18nMainPage', 'fr')

		page.section('whenDoorOpensAndCloses', section => {
			section.name('When anything opens or closes')
			section.deviceSetting('contactSensor')
				.capabilities(['contactSensor'])
				.name('Any open or close sensor')
		})

		page.section('turnLightsOnAndOff', section => {
			section.deviceSetting('lights')
				.capabilities(['switch'])
				.multiple(true)
				.permissions('rx')
		})

		const json = page.toJson()
		// Console.log(JSON.stringify(json, null, 2))
		expect(json.sections.length).toBe(2)

		expect(json.sections[0].name).toBe('When anything opens or closes')
		expect(json.sections[0].settings.length).toBe(1)
		expect(json.sections[0].settings[0].id).toBe('contactSensor')
		expect(json.sections[0].settings[0].name).toBe('Any open or close sensor')
		expect(json.sections[0].settings[0].description).toBe('Appuyez pour définir')
		expect(json.sections[0].settings[0].multiple).toBe(false)
		expect(json.sections[0].settings[0].type).toBe('DEVICE')
		expect(json.sections[0].settings[0].permissions[0]).toBe('r')
		expect(json.sections[0].settings[0].capabilities[0]).toBe('contactSensor')

		expect(json.sections[1].name).toBe('Allumer et éteindre ces lumières')
		expect(json.sections[1].settings.length).toBe(1)
		expect(json.sections[1].settings[0].id).toBe('lights')
		expect(json.sections[1].settings[0].name).toBe('Sélectionnez une ou plusieurs lumières à contrôler')
		expect(json.sections[0].settings[0].description).toBe('Appuyez pour définir')
		expect(json.sections[1].settings[0].multiple).toBe(true)
		expect(json.sections[1].settings[0].type).toBe('DEVICE')
		expect(json.sections[1].settings[0].permissions[0]).toBe('r')
		expect(json.sections[1].settings[0].permissions[1]).toBe('x')
		expect(json.sections[1].settings[0].capabilities[0]).toBe('switch')
	})
})
