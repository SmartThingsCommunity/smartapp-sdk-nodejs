import {Section} from './section'
import {SectionSetting} from './section-setting'

export enum ModeStyle {
	COMPLETE = 'COMPLETE',
	ERROR = 'ERROR',
	DEFAULT = 'DEFAULT',
}

/**
 * A mode setting creates a control that allows the user to select one or more location modes. To allow the selection
 * of only one mode:
 * ```
 * section.modeSetting('targetMode')
 * ```
 * To allow the selection of more than one mode:
 * ```
 * section.modeSetting('permittedModes').multiple(true)
 * ```
 */
export class ModeSetting extends SectionSetting<ModeSetting> {
	constructor(section: Section, id: string)

	/**
	 * Specifies whether this input should close on selection.
	 */
	closeOnSelection(value: boolean): ModeSetting

	/**
	 * Specifies whether this mode setting can have multiple values.
	 */
	multiple(boolean: true): ModeSetting

	/**
	 * Set the style of the setting in the UI.
	 */
	style(value: ModeStyle): ModeSetting
}
