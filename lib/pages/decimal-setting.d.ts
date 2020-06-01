import {Section} from './section'
import {SectionSetting} from './section-setting'

/**
 * A decimal setting creates an input box with a numeric keyboard that includes the
 * decimal point key.
 * ```
 * section.decimalSetting("temperatureThreshold")
 *     .min(-10)
 *     .max(100)
 *     .postMessage('C')
 * ```
 */
export class DecimalSetting extends SectionSetting<DecimalSetting> {
    constructor(section: Section, id: string)

    /**
     * The maximum inclusive value the value can be set to.
     */
    max(value: number): DecimalSetting

    /**
     * The minumum inclusive value the decimal can be set to.
     */
    min(value: number): DecimalSetting

    /**
     * Specify an image URL to display with this setting
     * @param source HTTPS url or Base64-encoded data URI. Max length 2048 characters.
     */
    image(source: string): DecimalSetting

    /**
     * A string to be shown after the text input field. One common use for this field is to
     * specify a unit of measure.
     * @param value Max length 10 characters
     */
    postMessage(value: string): DecimalSetting
}
