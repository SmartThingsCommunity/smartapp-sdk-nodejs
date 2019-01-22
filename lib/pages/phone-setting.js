'use strict';

const SectionSetting = require('./section-setting.js');

module.exports = class PhoneSetting extends SectionSetting {

    constructor(section, id) {
        super(section, id);
        this._type = 'PHONE';
        this._description = 'Tap to set';
    }

    image(value) {
        this._image = value;
        return this;
    }

    toJson() {
        let result = super.toJson();
        if (this._image) {
            result.image = this._image;
        }
        return result;
    }
};
