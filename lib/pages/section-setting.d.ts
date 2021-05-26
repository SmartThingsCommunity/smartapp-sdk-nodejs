import {Section} from './section'

/**
 * Base class for all section settings
 */
export abstract class SectionSetting<T> {
	constructor(section: Section, id: string)

	/**
	* Sets the name of this setting. Used to reference the setting value during the processing of events. Also
	* used as part of the i18n key for translating the displayed name and description of the setting. All settings
	* on a page must have unique names.
	*/
	name(value: string): T

	/**
	* Sets value displayed in the setting control. Defaults to 'Tap to Set' for most types of settings.
	*/
	description(value: string): T

	/**
	* Sets the initial value of the setting by passing the specified value through the i18n translation process.
	* You might want to use `translatedDefaultValue` rather than `defaultValue` in a case like setting the
	* default value of a text setting to the word "Kitchen" in the language of the user. `defaultValue('Kitchen')`
	* will set the value "Kitchen" regardless of the user's language or whether there were localization file entries
	* for the key "Kitchen". However, `translateDefaultValue('Kitchen')` will look for a localization file entry
	* with the key "Kitchen" and set the default to that value.
	*/
	translateDefaultValue(value: string): T

	/**
	* Sets the initial value displayed in the setting when first shown to the user.
	*/
	defaultValue(value: string | number): T

	/**
	* Specifies that the control must be set in order to save the configuration page
	*/
	required(value: boolean): T

	/**
	* Disables the ability to use the control
	*/
	disabled(value: boolean): T

	/**
	* Causes the page to be submitted and re-rendered any time the value of the setting is changed, rather than
	* requiring the user to tap Next or Done. This behavior is useful when the the presence or enabled/disabled
	* status of some settings depend on the value of other settings.
	*/
	submitOnChange(value: boolean): T

	protected i18nKey(value: string): T
	protected translate(...args: any[]): string
	protected toJson(): { [key: string]: any }
}
