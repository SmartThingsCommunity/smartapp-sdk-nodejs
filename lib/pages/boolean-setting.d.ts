import {Section} from './section'
import {SectionSetting} from './section-setting'

/**
 * A boolean setting creates a toggle control that can be turned on an off by the user.
 * ```
 * section.booleanSetting('turnBackOn')
 * ```
 */
export class BooleanSetting extends SectionSetting<BooleanSetting> {
    constructor(section: Section, id: string)

    /**
     * Specify an image URL to display with this setting
     * @param source HTTPS url or Base64-encoded data URI. Max length 2048 characters.
     */
    image(source: string): BooleanSetting
}
