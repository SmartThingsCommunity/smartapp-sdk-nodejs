import {Section} from './section'
import {SectionSetting} from './section-setting'

/**
 * A video setting provides a player on the configuration page allowing the user to play/pause a video.
 * ```
 * section.videoSetting('instructions')
 *     .image('https://mysite/preview.png')
 *     .video('https://mysite/video.mp4')
 * ```
 */
export class VideoSetting extends SectionSetting<VideoSetting> {
	constructor(section: Section, id: string)

	/**
	 * Set the URL of an image to display as a video thumbnail.
	 * Max length 2048 characters.
	 */
	image(source: string): VideoSetting

	/**
	 * Set the URL of the video.
	 * Max length 2048 characters.
	 */
	video(source: string): VideoSetting
}
