import {Page} from './page'

import {BooleanSetting} from './boolean-setting'
// import {ColorSetting} from './color-setting'
import {DecimalSetting} from './decimal-setting'
import {DeviceSetting} from './device-setting'
import {EmailSetting} from './email-setting'
import {EnumSetting} from './enum-setting'
import {ImageSetting} from './image-setting'
// import {ImagesSetting} from './images-setting'
import {LinkSetting} from './link-setting'
// import {MessageGroupSetting} from './message-group-setting'
import {ModeSetting} from './mode-setting'
import {NumberSetting} from './number-setting'
import {OAuthSetting} from './oauth-setting'
import {PageSetting} from './page-setting'
import {ParagraphSetting} from './paragraph-setting'
import {PasswordSetting} from './password-setting'
import {PhoneSetting} from './phone-setting'
import {SceneSetting} from './scene-setting'
import {SecuritySetting} from './security-setting'
import {SoundSetting} from './sound-setting'
import {TextSetting} from './text-setting'
import {TimeSetting} from './time-setting'
import {VideoSetting} from './video-setting'

export enum SectionStyle {
    NORMAL = 'NORMAL',
    SPLASH = 'SPLASH'
}

/**
 * A section is a labeled collection of settings. The contents can be made collapsable if desired.
 * To create a basic non-collapsable section:
 * ```
 * page.section('section1', section => {
 *     // create settings here, e.g
 *     section.booleanSetting('turnBackOn')
 * }
 * ```
 * To make this section collapsable (and initially collapsed):
 * ```
 * page.section('section1', section => {
 *     section.hideable(true).hidden(true)
 *
 *     // create settings here, e.g
 *     section.booleanSetting('turnBackOn')
 * }
 * ```
 */
export class Section {
    constructor(page: Page, name: string)

    /**
     * Sets the name (label) of the section. Normally not set if the i18n framework is being used
     */
    name(id: string): Section

    /**
     * Specifies that the section should initially be hidden
     */
    hidden(id: string): Section

    /**
     * Specifies that the section should be able to be hidden (though not initially hidden)
     */
    hideable(id: string): Section

    /**
     * Sets the session style
     */
    style(id: string): Section

    /**
     * Specifies that all settings in the session should default to being required
     */
    defaultRequired(id: string): Section

    /**
     * Creates a new boolean setting
     */
    booleanSetting(id: string): BooleanSetting

    // colorSetting(id: string): ColorSetting

    /**
     * Creates a new decimal setting
     */
    decimalSetting(id: string): DecimalSetting

    /**
     * Creates a new device setting
     */
    deviceSetting(id: string): DeviceSetting

    /**
     * Creates a new email setting
     */
    emailSetting(id: string): EmailSetting

    /**
     * Creates a new enumerated list setting
     */
    enumSetting(id: string): EnumSetting

    /**
     * Creates a new image setting
     */
    imageSetting(id: string): ImageSetting

    // imagesSetting(id: string): ImagesSetting

    /**
     * Creates a new link setting
     */
    linkSetting(id: string): LinkSetting

    // messageGroupSetting(id: string): MessageGroupSetting

    /**
     * Creates a new mode setting
     */
    modeSetting(id: string): ModeSetting

    /**
     * Creates a new number setting
     */
    numberSetting(id: string): NumberSetting

    /**
     * Creates a new OAuth2 setting
     */
    oauthSetting(id: string): OAuthSetting

    /**
     * Creates a new page link setting
     */
    pageSetting(id: string): PageSetting

    /**
     * Creates a new paragraph setting
     */
    paragraphSetting(id: string): ParagraphSetting

    /**
     * Creates a new password setting
     */
    passwordSetting(id: string): PasswordSetting

    /**
     * Creates a new phone setting
     */
    phoneSetting(id: string): PhoneSetting

    /**
     * Creates a new scene setting
     */
    sceneSetting(id: string): SceneSetting

    /**
     * Creates a new security system setting
     */
    securitySetting(id: string): SecuritySetting

    /**
     * Creates a new sound setting
     */
    soundSetting(id: string): SoundSetting

    /**
     * Creates a new text setting
     */
    textSetting(id: string): TextSetting

    /**
     * Creates a new time setting
     */
    timeSetting(id: string): TimeSetting

    /**
     * Creates a new video setting
     */
    videoSetting(id: string): VideoSetting

    protected i18nKey(id: string): string
    protected toJson(id: string): string
    protected translate(id: string): void;
}
