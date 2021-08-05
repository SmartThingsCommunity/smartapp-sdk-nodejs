import {Section} from './section'

export enum PageStyle {
	NORMAL = 'NORMAL',
	SPLASH = 'SPLASH'
}

/**
 * Defines an app installation page. App pages are composed of one or more sections, with each section
 * being composed of one or more settings.
 */
export class Page {
	constructor(id: string, language?: string);

	/**
	* Mark this page as complete, which renders a Done button that initiates the installation or update process.
	*/
	complete(value: boolean): Page

	/**
	* Make all settings on this page required by default. Individual settings can be made optional.
	*/
	defaultRequired(value: boolean): Page

	/**
	* Sets the name of the page. Not normally necessary when using the i18n localization framework unless
	* you need to set to set the name of the page to a non-localized value such as a room name.
	*/
	name(value: string): Page

	/**
	* Sets the next page in a multi-page app configuration
	*/
	nextPageId(value: string): Page

	/**
	* Set the text of the next page link (defaults to "Next"). Only applies if style is `SPLASH`
	*/
	nextText(value: string): Page

	/**
	* Sets the previous page in a multi-page app configuration
	*/
	previousPageId(value: string): Page

	/**
	* Create a new page section
	*
	* @param name the name of the section. All page section names should be unique. The section name is used in
	* generating an i18n key to support localized section names
	*
	* @param closure code block that defines the settings within the section
	*/
	section(name: string, closure: (section: Section) => void | Promise<void>): Page

	/**
	* Set the style of this page
	*/
	style(value: PageStyle): Page

	protected i18nKey(value: string): string
	protected translate(...args: any): Page
}
