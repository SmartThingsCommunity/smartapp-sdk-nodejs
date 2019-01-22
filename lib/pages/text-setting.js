'use strict';

const SectionSetting = require('./section-setting.js');

module.exports = class TextSetting extends SectionSetting {

    constructor(section, id) {
        super(section, id);
        this._type = 'TEXT';
        this._description = 'Tap to set';
    }

    maxLength(value) {
        this._maxLength = value;
        return this;
    }

    minLength(value) {
        this._minLength = value;
        return this;
    }

    image(value) {
        this._image = value;
        return this;
    }

    postMessage(value) {
        this._postMessage = value;
        return this;
    }

    toJson() {
        let result = super.toJson();
        if (this._maxLength) {
            result.maxLength = this._maxLength;
        }
        if (this._minLength) {
            result.minLength = this._minLength;
        }
        if (this._image) {
            result.image = this._image;
        }
        if (this._postMessage) {
            result.postMessage = this._postMessage;
        }
        return result;
    }
};