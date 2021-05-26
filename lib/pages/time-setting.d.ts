import {Section} from './section'
import {SectionSetting} from './section-setting'

/**
 * A time setting creates a control that supports the entry of the time of day.
 * This value can be used in scheduling one-per-day events at a specific time.
 * For example this setting:
 * ```
 * section.timeSetting('happyHour')
 * ```
 * Coupled with this schedule call will execute a handler at the selected time each day:
 * ```
 * context.schedules.runDaily('happyHourHandler', context.config.happyHour)
 * ```
 */
export class TimeSetting extends SectionSetting<TimeSetting> {
	constructor(section: Section, id: string)

	/**
	 * Specify an image URL to display with this setting
	 * @param source HTTPS url or Base64-encoded data URI. Max length 2048 characters.
	 */
	image(source: string): TimeSetting

	/**
	 * The latest time that can be entered
	 */
	max(value: string): TimeSetting

	/**
	 * The earliest time that can be entered
	 */
	min(value: string): TimeSetting
}
