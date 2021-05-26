import {Section} from './section'
import {SectionSetting} from './section-setting'

export enum MessageGroupStyle {
	COMPLETE = 'COMPLETE',
	ERROR = 'ERROR',
	DEFAULT = 'DEFAULT',
	DROPDOWN = 'DROPDOWN'
}

/**
 * NOT IMPLEMENTED
 */
export class MessageGroupSetting extends SectionSetting<MessageGroupSetting> {
	constructor(section: Section, id: string)
	closeOnSelection(value: true): MessageGroupSetting
	messageGroupKey(value: string): MessageGroupSetting
	multiple(value: boolean): MessageGroupSetting
	style(value: MessageGroupStyle): MessageGroupSetting
}
