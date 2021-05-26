import {Section} from './section'
import {SectionSetting} from './section-setting'

/**
 * An image settings simply displays an image on the configuration page. There is no user input involved.
 * ```
 * section.imageSetting('banner')
 *     .image('https://mysite/image.png')
 * ```
 */
export class ImageSetting extends SectionSetting<ImageSetting> {
	constructor(section: Section, id: string)

	/**
	 * Specify an image URL to display as this setting
	 */
	image(source: string): ImageSetting
}
