import {Section} from './section'
import {SectionSetting} from './section-setting'

export enum PageLinkStyle {
	COMPLETE = 'COMPLETE',
	ERROR = 'ERROR',
	DEFAULT = 'DEFAULT',
	BUTTON = 'BUTTON'
}

/**
 * A page setting create a link to another configuration page. Tapping on the link displays
 * the linked page.
 */
export class PageSetting extends SectionSetting<PageSetting> {
	constructor(section: Section, id: string)

	/**
	 * Specify an image URL to display with this setting
	 * @param source HTTPS url or Base64-encoded data URI. Max length 2048 characters.
	 */
	image(source: string): PageSetting

	/**
	 * Set the page id
	 */
	page(id: string): PageSetting

	/**
	 * Sets the style of the page link
	 */
	style(value: PageLinkStyle): PageSetting
}
