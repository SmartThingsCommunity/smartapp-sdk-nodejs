import {Section} from './section'
import {SectionSetting} from './section-setting'

export interface SoundOptionItem {
	id: string
	name: string
	sound: string
}

export interface SoundOptionGroup {
	name: string,
	options: SoundOptionItem[]
}

export enum SoundOptionsStyle {
	COMPLETE = 'COMPLETE',
	ERROR = 'ERROR',
	DROPDOWN = 'DROPDOWN',
	DEFAULT = 'DEFAULT'
}

export class SoundSetting extends SectionSetting<SoundSetting> {
	constructor(section: Section, id: string)

	/**
	 * Sets the possible sound option items as named groups of options
	 */
	groupedOptions(groupedOptions: SoundOptionGroup[]): SoundSetting

	/**
	 * Specifies whether this sound setting can have multiple values.
	 */
	multiple(value: boolean): SoundSetting

	/**
	 * Sets the possible sound option items as one list of options
	 */
	options(options: SoundOptionItem[]): SoundSetting

	/**
	 * Set the style of the setting in the UI.
	 */
	style(value: SoundOptionsStyle): SoundSetting
}
