const Page = require('../../../lib/pages/page')
const Section = require('../../../lib/pages/section')
const TextSetting = require('../../../lib/pages/text-setting')

describe('text-setting', () => {
	let page = {}
	let section = {}

	beforeEach(() => {
		page = new Page('testPage')
		section = new Section(page, 'testSection')
	})

	it('should set type to text', () => {
		const textSetting = new TextSetting(section, 'text').toJson()
		expect(textSetting.type).toBe('TEXT')
	})

	it('should set default description', () => {
		const textSetting = new TextSetting(section, 'text').toJson()
		expect(textSetting.description).toBe('Tap to set')
	})

	it('should set maxLength when specified', () => {
		const maxLength = 9
		const textSetting = new TextSetting(section, 'text')
			.maxLength(maxLength)
			.toJson()

		expect(textSetting.maxLength).toBe(maxLength)
	})

	it('should set minLength when specified', () => {
		const minLength = 1
		const textSetting = new TextSetting(section, 'text')
			.minLength(minLength)
			.toJson()

		expect(textSetting.minLength).toBe(minLength)
	})

	it('should set image when specified', () => {
		const imageUrl = 'https://test.local/image.png'
		const textSetting = new TextSetting(section, 'text')
			.image(imageUrl)
			.toJson()

		expect(textSetting.image).toBe(imageUrl)
	})

	it('should set postMessage when specified', () => {
		const postMessage = 'test'
		const textSetting = new TextSetting(section, 'text')
			.postMessage(postMessage)
			.toJson()

		expect(textSetting.postMessage).toBe(postMessage)
	})
})
