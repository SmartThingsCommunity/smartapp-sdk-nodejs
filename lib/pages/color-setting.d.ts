import {Section} from './section'
import {SectionSetting} from './section-setting'

/**
 * @deprecated Not currently implemented
 */
export class ColorSetting extends SectionSetting<ColorSetting> {
	constructor(section: Section, id: string)

	/**
	 * Specify an image URL to display with this setting
	 * @param {String} source HTTPS url or Base64-encoded data URI. Max length 2048 characters.
	 */
	image(source: string): ColorSetting
}
