import {Section} from './section'
import {SectionSetting} from './section-setting'

/**
 * An images settings displays a carousel of images on the configuration page. There is no user input involved.
 * ```
 * section.imageSetting('banner')
 *     .images(['https://mysite/image.png', 'https://mysite/image2.png', 'https://mysite/image3.png')
 * ```
 */
export class ImagesSetting extends SectionSetting<ImagesSetting> {
	constructor(section: Section, id: string)

	/**
	 * A list of image URLs to be displayed in a carousel
	 */
	images(sources: string[]): ImagesSetting
}
