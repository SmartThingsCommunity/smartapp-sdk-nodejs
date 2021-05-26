import {Section} from './section'
import {SectionSetting} from './section-setting'

/**
 * A paragraph setting displays text on a page. It's typically used for instructional information. If the i18n
 * framework is used then normally only the name is specified:
 * ```
 * section.paragraphSetting('instructionalText')
 * ```
 * and the heading and body of the paragraph element are set in the localization file:
 * ```
 *  "pages.page1.settings.instructionalText.name": "Paragraph Heading",
 *  "pages.page1.settings.instructionalText.description": "Paragraph text lorem ipsum dolor"
 * ```
 * If i18n localization is not being used then the name and body of the text can be set explicitly:
 * ```
 * section.paragraphSetting('instructionalText')
 *     .name('Paragraph Heading')
 *     .description('Paragraph text lorem ipsum dolor')
 * ```
 */
export class ParagraphSetting extends SectionSetting<ParagraphSetting> {
	constructor(section: Section, id: string)

	/**
	 * Specify an image URL to display with this setting
	 * @param source HTTPS url or Base64-encoded data URI. Max length 2048 characters.
	 */
	image(source: string): ParagraphSetting

	/**
	 * Sets the paragraph text. Normally not used if the i18n framework is being used.
	 */
	text(value: string): ParagraphSetting
}
