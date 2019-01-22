'use strict';
const i18n = require('i18n');

const Section = require('./section');

module.exports = class Page {

    constructor(id, language) {
        this._id = id;
        this._name = this.i18nKey('name');
        this._nextPageId = null;
        this._previousPageId = null;
        this._sections = [];
        if (language) {
            this.headers = {'accept-language': language};
            i18n.init(this);
        }
        this._settingIds = [];
        this._defaultRequired = true;
    }

    section(name, closure) {
        let sec;
        let callable = closure;
        if (typeof name === 'string') {
            sec = new Section(this, name);
        }
        else {
            sec = new Section(this);
            callable = name;
        }

        this._sections.push(sec);
        if (callable) {
            callable(sec);
        }

        return this;
    }

    complete(value) {
        this._complete = value;
        return this;
    }

    name(value) {
        this._name = value;
        return this;
    }

    style(value) {
        this._style = value;
        return this;
    }

    nextText(value) {
        this._nextText = value;
        return this;
    }

    nextPageId(value) {
        this._nextPageId = value;
        return this;
    }

    previousPageId(value) {
        this._previousPageId = value;
        return this;
    }

    defaultRequired(value) {
        this._defaultRequired = value;
        return this;
    }

    i18nKey(property) {
        return `pages.${this._id}.${property}`;
    }

    translate(...args) {
        if (this.headers) {
            return this.__(...args);
        }
        else {
            return args[0];
        }
    }

    toJson() {
        let result = {
            name: this.translate(this._name),
            complete: this._complete === undefined ? (!this._nextPageId && !this._previousPageId) : this._complete,
            pageId: this._id,
            nextPageId: this._nextPageId,
            previousPageId: this._previousPageId,
            sections: []
        };
        if (this._style) {
            result.style = this._style;
        }
        if (this._nextText) {
            result.nextText = this._nextText;
        }
        for (let section of this._sections) {
            result.sections.push(section.toJson());
        }
        return result;
    }
};