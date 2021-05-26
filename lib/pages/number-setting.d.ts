import {Section} from './section'
import {SectionSetting} from './section-setting'

export enum NumberStyle {
	SLIDER = 'SLIDER'
}

/**
 * A number setting creates an input box with a numeric keypad or slider control. The following code will create an input
 * box with numeric keypad:
 * ```
 * section.numberSetting("delayPeriodSeconds")
 *     .min(10)
 *     .max(3600)
 * ```
 * To render a slider control instead:
 * ```
 * section.numberSetting("colorTemperature")
 *     .min(2800).max(9000)
 *     .step(100)
 *     .style('SLIDER')
 * ```
 */
export class NumberSetting extends SectionSetting<NumberSetting> {
	constructor(section: Section, id: string)

	/**
	* Specify an image URL to display with this setting
	* @param source HTTPS url or Base64-encoded data URI. Max length 2048 characters.
	*/
	image(source: string): NumberSetting

	/**
	* The maximum inclusive value the value can be set to.
	*/
	max(value: number): NumberSetting

	/**
	* The minimum inclusive value the decimal can be set to.
	*/
	min(value: number): NumberSetting

	/**
	* A string to be shown after the text input field. One common use for this field is to
	* specify a unit of measure.
	* @param value Max length 10 characters
	*/
	postMessage(value: string): NumberSetting

	/**
	* The step between values values. If the style is not set to slider then setting a step will
	* cause up and down arrows to appear next to the input box that increment or decrement the value
	* by the value of the step.
	*/
	step(value: number): NumberSetting

	/**
	* Sets the style of the control. The default is a keypad input box.
	* @param value
	*/
	style(value: NumberStyle): NumberSetting
}
