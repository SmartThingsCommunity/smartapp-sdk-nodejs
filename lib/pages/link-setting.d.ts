import {Section} from './section'
import {SectionSetting} from './section-setting'

export enum LinkStyle {
    COMPLETE = 'COMPLETE',
    ERROR = 'ERROR',
    DEFAULT = 'DEFAULT',
    BUTTON = 'BUTTON'
}

/**
 * A link setting display a hypertext link that opens an external web page in a browser window. It
 * does not replace the current configuration page window.
 * ```
 * section.linkSetting('moreInfo')
 *     .url('http://www.smartthings.com')
 * ```
 */
export class LinkSetting extends SectionSetting<LinkSetting> {
    constructor(section: Section, id: string)

    /**
     * Specify an image URL to display with this setting
     */
    image(source: string): LinkSetting

    /**
     * Set the style of the link in the UI
     */
    style(value: LinkStyle): LinkSetting

    /**
     * Set the URL of the link.
     */
    url(value: string): LinkSetting
}
