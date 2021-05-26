import {Section} from './section'
import {SectionSetting} from './section-setting'

/**
 * A text setting create a text input field with full alphanumeric keypad.
 * ```
 * section.textSetting('warningMessage')
 * ```
 */
export class TextSetting extends SectionSetting<TextSetting> {
	constructor(section: Section, id: string)

	/**
	* Specify an image URL to display with this setting
	* @param source HTTPS url or Base64-encoded data URI. Max length 2048 characters.
	*/
	image(source: string): TextSetting

	/**
	* The maximum text length
	*/
	maxLength(value: number): TextSetting

	/**
	* The minimum text length
	*/
	minLength(value: number): TextSetting

	/**
	* A string to be shown after the text input field. One common use for this field is to
	* specify a unit of measure.
	* @param value Max length 10 characters
	*/
	postMessage(value: string): TextSetting
}
