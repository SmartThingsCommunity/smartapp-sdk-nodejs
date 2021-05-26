import {Section} from './section'
import {SectionSetting} from './section-setting'

/**
 * An image settings simply displays an image on the configuration page. There is no user input involved.
 * ```
 * section.videoSetting('instructions')
 *     .image('https://mysite/preview.png')
 *     .video('https…//mysite/video.mp4')
 * ```
 */
export class VideoSetting extends SectionSetting<VideoSetting> {
	constructor(section: Section, id: string)

	/**
	 * Set the URL of an image to display as a preview of the video
	 */
	image(source: string): VideoSetting

	/**
	 * Set the URL of the video
	 */
	video(source: string): VideoSetting
}
