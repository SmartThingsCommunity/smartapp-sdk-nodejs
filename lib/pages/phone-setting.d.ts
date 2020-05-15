import {Section} from './section'
import {SectionSetting} from './section-setting'

/**
 * A phone setting displays an input box with a keypad appropriate to phone number entry.
 * ```
 * section.phoneSetting('phoneNumber')
 * ```
 */
export class PhoneSetting extends SectionSetting<PhoneSetting> {
    constructor(section: Section, id: string)

    /**
     * Specify an image URL to display with this setting
     * @param source HTTPS url or Base64-encoded data URI. Max length 2048 characters.
     */
    image(source: string): PhoneSetting
}
