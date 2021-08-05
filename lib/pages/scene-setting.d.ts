import {Section} from './section'
import {SectionSetting} from './section-setting'

export enum SceneStyle {
	COMPLETE = 'COMPLETE',
	ERROR = 'ERROR',
	DROPDOWN = 'DROPDOWN',
	DEFAULT = 'DEFAULT'
}

/**
 * A scene setting displays a control that allows one or more scenes to be selected.
 * ```
 * section.sceneSetting('selectedScene')
 * ```
 */
export class SceneSetting extends SectionSetting<SceneSetting> {
	constructor(section: Section, id: string)

	/**
	 * Specifies whether this input should close on selection.
	 */
	closeOnSelection(value: true): SceneSetting

	/**
	 * Specifies whether this scene setting can have multiple values.
	 */
	multiple(value: true): SceneSetting

	/**
	 * Sets the style of the control
	 */
	style(value: SceneStyle): SceneSetting
}
