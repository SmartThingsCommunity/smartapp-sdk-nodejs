import {Section} from './section'
import {SectionSetting} from './section-setting'

/**
 * A password setting creates a password input field that does not display existing values. To create a password
 * field with a minimum password length of 6:
 * ```
 * section.passwordSetting('password').minLength(6)
 * ```
 */
export class PasswordSetting extends SectionSetting<PasswordSetting> {
	constructor(section: Section, id: string)

	/**
	 * Specify an image URL to display with this setting
	 * @param source HTTPS url or Base64-encoded data URI. Max length 2048 characters.
	 */
	image(source: string): PasswordSetting

	/**
	 * Set the maximum length of the password
	 */
	maxLength(value: number): PasswordSetting

	/**
	 * Set the minimum length of the password
	 */
	minLength(value: number): PasswordSetting
}
