'use strict';

const Base = require('./base');

module.exports = class Modes extends Base {

    constructor(st) {
        super(st);
    }

    list(query = {max: 500}) {
        return this.st.client.request(`locations/${this.st.locationId}/modes`, 'GET', null, null, query);
    }

    get(id) {
        return this.st.client.request(`locations/${this.st.locationId}/modes/${id}`);
    }

    update(id, data) {
        return this.st.client.request(`locations/${this.st.locationId}/modes/${id}`, 'PUT', data);
    }
};