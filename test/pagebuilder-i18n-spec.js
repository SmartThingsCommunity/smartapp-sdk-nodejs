/* eslint no-undef: "off" */
const path = require('path')
const {expect} = require('chai')
const i18n = require('i18n')
const Page = require('../lib/pages/page')

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

		const json = page.toJson()
		// Console.log(JSON.stringify(json, null, 2))
		expect(json.sections.length).to.equal(2)

		expect(json.sections[0].name).to.equal('Quand cette porte s\'ouvre et se ferme')
		expect(json.sections[0].settings.length).to.equal(1)
		expect(json.sections[0].settings[0].id).to.equal('contactSensor')
		expect(json.sections[0].settings[0].name).to.equal('Sélectionnez un capteur d\'ouverture / fermeture')
		expect(json.sections[0].settings[0].description).to.equal('Appuyez pour définir')
		expect(json.sections[0].settings[0].multiple).to.equal(false)
		expect(json.sections[0].settings[0].type).to.equal('DEVICE')
		expect(json.sections[0].settings[0].permissions[0]).to.equal('r')
		expect(json.sections[0].settings[0].capabilities[0]).to.equal('contactSensor')

		expect(json.sections[1].name).to.equal('Allumer et éteindre ces lumières')
		expect(json.sections[1].settings.length).to.equal(1)
		expect(json.sections[1].settings[0].id).to.equal('lights')
		expect(json.sections[1].settings[0].name).to.equal('Sélectionnez une ou plusieurs lumières à contrôler')
		expect(json.sections[0].settings[0].description).to.equal('Appuyez pour définir')
		expect(json.sections[1].settings[0].multiple).to.equal(true)
		expect(json.sections[1].settings[0].type).to.equal('DEVICE')
		expect(json.sections[1].settings[0].permissions[0]).to.equal('r')
		expect(json.sections[1].settings[0].permissions[1]).to.equal('x')
		expect(json.sections[1].settings[0].capabilities[0]).to.equal('switch')
	})
})
