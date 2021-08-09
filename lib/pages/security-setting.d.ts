import {Section} from './section'
import {SectionSetting} from './section-setting'

export enum SecurityStyle {
	COMPLETE = 'COMPLETE',
	ERROR = 'ERROR',
	DROPDOWN = 'BUTTON',
	DEFAULT = 'DEFAULT'
}

/**
 * A security setting allows for the selection of one or more security system modes.
 */
export class SecuritySetting extends SectionSetting<SecuritySetting> {
	constructor(section: Section, id: string)

	/**
	 * Specifies whether this input should close on selection.
	 */
	closeOnSelection(value: boolean): SecuritySetting

	/**
	 * Specifies whether this security setting can have multiple values.
	 */
	multiple(value: boolean): SecuritySetting

	/**
	 * Sets the control style
	 */
	style(value: SecurityStyle): SecuritySetting
}
