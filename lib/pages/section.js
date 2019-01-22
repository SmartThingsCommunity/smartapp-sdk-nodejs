'use strict';

const DeviceSetting = require('./device-setting');
const OAuthSetting = require('./oauth-setting');
const TimeSetting = require('./time-setting');
const TextSetting = require('./text-setting');
const PasswordSetting = require('./password-setting');
const PhoneSetting = require('./phone-setting');
const EmailSetting = require('./email-setting');
const NumberSetting = require('./number-setting');
const DecimalSetting = require('./decimal-setting');
const BooleanSetting = require('./boolean-setting');
const ParagraphSetting = require('./paragraph-setting');
const LinkSetting = require('./link-setting');
const PageSetting = require('./page-setting');
const ImageSetting = require('./image-setting');
const ImagesSetting = require('./images-setting');
const VideoSetting = require('./video-setting');
const EnumSetting = require('./enum-setting');
const SoundSetting = require('./sound-setting');
const SecuritySetting = require('./security-setting');
const ModeSetting = require('./mode-setting');
const SceneSetting = require('./scene-setting');

module.exports = class Section {

    constructor(page, name) {
        this._page = page;
        this._name = name;
        this._settings = [];
        this._defaultRequired = page._defaultRequired;
    }

    deviceSetting(id) {
        const result = new DeviceSetting(this, id);
        this._settings.push(result);
        return result;
    }

    oauthSetting(id) {
        const result = new OAuthSetting(this, id);
        this._settings.push(result);
        return result;
    }

    timeSetting(id) {
        const result = new TimeSetting(this, id);
        this._settings.push(result);
        return result;
    }

    textSetting(id) {
        const result = new TextSetting(this, id);
        this._settings.push(result);
        return result;
    }

    passwordSetting(id) {
        const result = new PasswordSetting(this, id);
        this._settings.push(result);
        return result;
    }

    phoneSetting(id) {
        const result = new PhoneSetting(this, id);
        this._settings.push(result);
        return result;
    }

    emailSetting(id) {
        const result = new EmailSetting(this, id);
        this._settings.push(result);
        return result;
    }

    numberSetting(id) {
        const result = new NumberSetting(this, id);
        this._settings.push(result);
        return result;
    }

    decimalSetting(id) {
        const result = new DecimalSetting(this, id);
        this._settings.push(result);
        return result;
    }

    booleanSetting(id) {
        const result = new BooleanSetting(this, id);
        this._settings.push(result);
        return result;
    }

    paragraphSetting(id) {
        const result = new ParagraphSetting(this, id);
        this._settings.push(result);
        return result;
    }

    linkSetting(id) {
        const result = new LinkSetting(this, id);
        this._settings.push(result);
        return result;
    }

    pageSetting(id) {
        const result = new PageSetting(this, id);
        this._settings.push(result);
        return result;
    }

    imageSetting(id) {
        const result = new ImageSetting(this, id);
        this._settings.push(result);
        return result;
    }

    imagesSetting(id) {
        const result = new ImagesSetting(this, id);
        this._settings.push(result);
        return result;
    }

    videoSetting(id) {
        const result = new VideoSetting(this, id);
        this._settings.push(result);
        return result;
    }

    enumSetting(id) {
        const result = new EnumSetting(this, id);
        this._settings.push(result);
        return result;
    }

    securitySetting(id) {
        const result = new SecuritySetting(this, id);
        this._settings.push(result);
        return result;
    }

    soundSetting(id) {
        const result = new SoundSetting(this, id);
        this._settings.push(result);
        return result;
    }

    modeSetting(id) {
        const result = new ModeSetting(this, id);
        this._settings.push(result);
        return result;
    }

    sceneSetting(id) {
        const result = new SceneSetting(this, id);
        this._settings.push(result);
        return result;
    }

    hideable(value) {
        this._hideable = value;
        return this;
    }

    hidden(value) {
        this._hidden = value;
        return this;
    }

    defaultRequired(value) {
        this._defaultRequired = value;
        return this;
    }

    i18nKey(property, value) {
        return this._page.i18nKey(`sections.${value}.${property}`)
    }

    translate(...args) {
        return this._page.translate(...args);
    }

    toJson() {
        let result = {};
        if (this._name) {
            result.name = this._page.headers ? this.translate(this.i18nKey('name', this._name)) : this._name;
        }

        result.settings = [];
        for (let setting of this._settings) {
            result.settings.push(setting.toJson());
        }
        return result;
    }
}