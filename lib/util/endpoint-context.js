'use strict';

const i18n = require('i18n');
const SmartThingsApi = require('../api');

module.exports = class EndpointContext {

    constructor(app, evt, apiMutex) {
        this.event = evt;

        let authToken;
        let refreshToken;
        switch (evt.lifecycle) {
            case 'EVENT':
                authToken = evt.eventData.authToken;
                this.installedAppId = evt.eventData.installedApp.installedAppId;
                this.locationId = evt.eventData.installedApp.locationId;
                this.config = evt.eventData.installedApp.config;
                this.locale = evt.locale;
                break;

            case 'INSTALL':
                authToken = evt.installData.authToken;
                refreshToken = evt.installData.refreshToken;
                this.installedAppId = evt.installData.installedApp.installedAppId;
                this.locationId = evt.installData.installedApp.locationId;
                this.config = evt.installData.installedApp.config;
                this.locale = evt.client.language;
                break;

            case 'UPDATE':
                authToken = evt.updateData.authToken;
                refreshToken = evt.updateData.refreshToken;
                this.installedAppId = evt.updateData.installedApp.installedAppId;
                this.locationId = evt.updateData.installedApp.locationId;
                this.config = evt.updateData.installedApp.config;
                this.locale = evt.client.language;
                break;

            case 'CONFIGURATION':
                this.installedAppId = evt.configurationData.installedAppId;
                this.locationId = evt.configurationData.locationId;
                this.config = evt.configurationData.config;
                this.locale = evt.client.language;
                break;

            case 'UNINSTALL':
                this.installedAppId = evt.uninstallData.installedApp.installedAppId;
                this.locationId = evt.uninstallData.installedApp.locationId;
                break;

            case 'EXECUTE':
                authToken = evt.executeData.authToken;
                this.installedAppId = evt.executeData.installedApp.installedAppId;
                this.locationId = evt.executeData.installedApp.locationId;
                this.config = evt.executeData.installedApp.config;
                this.locale = evt.executeData.parameters.locale;
                break;

            // For constructing context for proactive API calls not in response to a lifecycle event
            default:
                authToken = evt.authToken;
                refreshToken = evt.refreshToken;
                this.installedAppId = evt.installedAppId;
                this.locationId = evt.locationId;
                this.config = evt.config;
                this.locale = evt.locale;
                break;
        }

        if (app._localizationEnabled) {
            if (this.locale) {
                this.headers = {'accept-language': this.locale};
                i18n.init(this);
            }
        }

        this.api = new SmartThingsApi({
            authToken: authToken,
            refreshToken: refreshToken,
            clientId: app._clientId,
            clientSecret: app._clientSecret,
            log: app._log,
            apiUrl: app._apiUrl,
            refreshUrl: app._refreshUrl,
            locationId: this.locationId,
            installedAppId: this.installedAppId,
            contextStore: app._contextStore,
            apiMutex: apiMutex
        });
    }

    configStringValue(name) {
        const entry = this.config[name];
        return entry ? entry[0].stringConfig.value : null;
    }

    configBooleanValue(name) {
        const entry = this.config[name];
        return entry ? entry[0].stringConfig.value === 'true' : false;
    }

    configNumberValue(name) {
        const entry = this.config[name];
        return entry ? Number(entry[0].stringConfig.value) : null;
    }

    configDateValue(name) {
        const entry = this.config[name];
        return entry ? new Date(entry[0].stringConfig.value) : null;
    }

    configTimeString(name) {
        return this.configDateValue(name).toLocaleTimeString(this.locale, {hour: '2-digit', minute:'2-digit'});
    }

    configModeIds(name) {
        const entry = this.config[name];
        return entry.map(it => it.modeConfig.modeId);
    }

    configDevices(name) {
        let list = [];
        this.config[name].forEach((item) => {
            const componentId = item.deviceConfig.componentId;
            const promise = this.api.devices.get(item.deviceConfig.deviceId).then((device) => {
                return {
                    deviceId: device.deviceId,
                    name: device.name,
                    label: device.label,
                    componentId: componentId
                };
            });
            list.push(promise);
        });
        return Promise.all(list);
    }

    configDevicesWithState(name) {
        let list = [];
        this.config[name].forEach((item) => {
            const componentId = item.deviceConfig.componentId;
            const promise = this.api.devices.get(item.deviceConfig.deviceId).then((device) => {
                return {
                    deviceId: device.deviceId,
                    name: device.name,
                    label: device.label,
                    componentId: componentId
                };
            }).then((entry) => {
                return this.api.devices.getState(entry.deviceId).then((state) => {
                    entry.state = state.components[componentId];
                    return entry;
                });
            });
            list.push(promise);
        });
        return Promise.all(list);
    }
};