const {expect} = require('chai')
const Page = require('../../../lib/pages/page')
const Section = require('../../../lib/pages/section')
const TextSetting = require('../../../lib/pages/text-setting')

describe('text-setting', function () {
	let page = {}
	let section = {}

	beforeEach(() => {
		page = new Page('testPage')
		section = new Section(page, 'testSection')
	})

	it('should set type to text', function () {
		const textSetting = new TextSetting(section, 'text').toJson()
		expect(textSetting.type).to.equal('TEXT')
	})

	it('should set default description', function () {
		const textSetting = new TextSetting(section, 'text').toJson()
		expect(textSetting.description).to.equal('Tap to set')
	})

	it('should set maxLength when specified', function () {
		const maxLength = 9
		const textSetting = new TextSetting(section, 'text')
			.maxLength(maxLength)
			.toJson()

		expect(textSetting.maxLength).to.equal(maxLength)
	})

	it('should set minLength when specified', function () {
		const minLength = 1
		const textSetting = new TextSetting(section, 'text')
			.minLength(minLength)
			.toJson()

		expect(textSetting.minLength).to.equal(minLength)
	})

	it('should set image when specified', function () {
		const imageUrl = 'https://test.local/image.png'
		const textSetting = new TextSetting(section, 'text')
			.image(imageUrl)
			.toJson()

		expect(textSetting.image).to.equal(imageUrl)
	})

	it('should set postMessage when specified', function () {
		const postMessage = 'test'
		const textSetting = new TextSetting(section, 'text')
			.postMessage(postMessage)
			.toJson()

		expect(textSetting.postMessage).to.equal(postMessage)
	})
})
