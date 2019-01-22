'use strict';

const winston = require('winston');

/**
 * Simple wrapper around the console for logging various kinds of information
 */
module.exports = class Log {

    constructor(logger, enableEvents = false) {
        this._eventsEnabled = enableEvents;
        if (!logger) {
            this._logger = winston.createLogger({
                level: 'debug',
                transports: [
                    new winston.transports.Console({
                        format: winston.format.simple()
                    })
                ]
            });
        }
    }

    event (evt, suffix = '') {
        if ( this._eventsEnabled) {
            try {
                this._logger.log ('debug', `${evt.lifecycle}${suffix ? `/${suffix}` : ''}\nREQUEST: ${JSON.stringify(evt, null, 2)}`);
            }
            catch (e) {
                this._logger.log ('error', `${evt.lifecycle}${suffix ? `/${suffix}` : ''}\nREQUEST: ${e}`);
            }
        }
    }

    response (data) {
        if ( this._eventsEnabled) {
            try {
                this._logger.log('debug', `RESPONSE: ${JSON.stringify(data, null, 2)}`);
            }
            catch (e) {
                this._logger.log('debug', `RESPONSE: ${e}`);
            }
        }
    }

    debug (msg) {
        this._logger.log ('debug', msg);
    }

    info (msg) {
        this._logger.log ('info', msg);
    }

    warn (msg) {
        this._logger.log ('warn', msg);
    }

    error (msg) {
        this._logger.log ('error', msg);
    }

    apiError (msg) {
        this._logger.log ('error', msg);
    }

    enableEvents (value) {
        this._eventsEnabled = value;
    }
};