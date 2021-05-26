import {Section} from './section'
import {SectionSetting} from './section-setting'

export enum OAuthStyle {
	COMPLETE = 'COMPLETE',
	ERROR = 'ERROR',
	DEFAULT = 'DEFAULT'
}

/**
 * Creates an OAuth2 link to initiate the connection from SmartThings to an external
 * web service.
 */
export class OAuthSetting extends SectionSetting<OAuthSetting> {
	constructor(section: Section, id: string)

	/**
	 * Base url of the external web service
	 */
	urlTemplate(url: string): OAuthSetting

	/**
	 * Sets the style of the link
	 */
	style(value: OAuthStyle): OAuthSetting
}
