import {Section} from './section'
import {SectionSetting} from './section-setting'

/**
 * An email setting creates an input box with a keyboard appropriate for the entry of email addresses.
 * ```
 * section.emailSetting("emailAddress")
 * ```
 */
export class EmailSetting extends SectionSetting<EmailSetting> {
	constructor(section: Section, id: string)

	/**
	 * Specify an image URL to display with this setting
	 * @param source HTTPS url or Base64-encoded data URI. Max length 2048 characters.
	 */
	image(source: string): EmailSetting

	/**
	 * Set a default value for the setting
	 */
	defaultValue(source: string): EmailSetting
}
