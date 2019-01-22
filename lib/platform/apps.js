'use strict';

const Base = require('./base');

module.exports = class Apps extends Base {

    constructor(st) {
        super(st);
    }
    
    list() {
        return this.st.client.request(`apps`);
    }

    get(id) {
        return this.st.client.request(`apps/${id}`);
    }

    create(data) {
        return this.st.client.request('apps', 'POST', data);
    }

    update(id, data) {
        return this.st.client.request(`apps/${id}`, 'PUT', data);
    }

    getSettings(id) {
        return this.st.client.request(`apps/${id}/settings`);
    }

    updateSettings(id, data) {
        return this.st.client.request(`apps/${id}/settings`, 'PUT', data);
    }

    getOauth(id) {
        return this.st.client.request(`apps/${id}/oauth`);
    }

    updateOauth(id, data) {
        return this.st.client.request(`apps/${id}/oauth`, 'PUT', data);
    }

    regenerateOauth(id, data = {}) {
        return this.st.client.request(`apps/${id}/oauth/generate`, 'POST', data);
    }

    getTags(id) {
        return this.st.client.request(`apps/${id}/tags`);
    }

    updateTags(id, data) {
        return this.st.client.request(`apps/${id}/tags`, 'PUT', data);
    }

    addTags(id, data) {
        return this.st.client.request(`apps/${id}/tags`, 'PATCH', data);
    }
};