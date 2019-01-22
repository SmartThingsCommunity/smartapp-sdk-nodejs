'use strict';

const rp = require('request-promise');

class Client {

    constructor(options) {
        this.authToken = options.authToken;
        this.refreshToken = options.refreshToken;
        this.clientId = options.clientId;
        this.clientSecret = options.clientSecret;
        this.apiUrl = options.apiUrl ? options.apiUrl : 'https://api.smartthings.com';
        this.refreshUrl = options.refreshUrl ? options.refreshUrl : 'https://auth-global.api.smartthings.com/oauth/token';
        this.contextStore = options.contextStore;
        this.installedAppId = options.installedAppId;
        this._log = options.log;
        this._mutex = options.apiMutex;
    }

    async request(path, method, data, transform, qs) {
        if (this._mutex) {
            return this._sequentialRequest(path, method, data, transform, qs);
        }
        else {
            return this._request(path, method, data, transform, qs);
        }
    }

    async _request(path, method, data, transform, qs) {
        let opts = {
            url: `${this.apiUrl}/${path}`,
            method: method ? method : 'GET',
            json: true,
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'Authorization': 'Bearer ' + this.authToken
            }
        };
        if (data) {
            opts.body = data;
        }
        if (transform) {
            opts.transform = transform;
        }
        if (qs) {
            opts.qs = qs;
        }
        return rp(opts).catch((error) => {
            logError(this._log, error, opts);
        });
    }

    async _sequentialRequest(path, method, data, transform, qs) {
        const release = await this._mutex.acquire();

        let opts = {
            url: `${this.apiUrl}/${path}`,
            method: method ? method : 'GET',
            json: true,
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'Authorization': 'Bearer ' + this.authToken
            }
        };
        if (data) {
            opts.body = data;
        }
        if (transform) {
            opts.transform = transform;
        }
        if (qs) {
            opts.qs = qs;
        }
        return rp(opts).catch(async (error) => {
            const client = this;
            if (error.statusCode === 401 && client.refreshToken && client.contextStore) {
                const str = await refreshToken(client.refreshUrl, client.clientId, client.clientSecret, client.refreshToken);
                const data = JSON.parse(str);
                if (data.access_token) {
                    client.authToken = data.access_token;
                    client.refreshToken = data.refresh_token;

                    //this._log.debug(`refresh ${JSON.stringify(data)}`);

                    await client.contextStore.update(client.installedAppId, {
                        authToken: client.authToken,
                        refreshToken: client.refreshToken
                    });

                    release();

                    opts.headers.Authorization = 'Bearer ' + client.authToken;

                    return rp(opts).catch((error) => {
                        logError(client._log, error, opts, 'TRY2 ');
                    });
                }
            }
            else {
                logError(client._log, error, opts);
            }
            release();
        }).then(async (data) => {
            release();
            return data;
        });
    }
}

module.exports = function(authToken, clientId, clientSecret) {
    return new Client(authToken, clientId, clientSecret);
};

function logError(log, error, opts, prefix = '') {
    try {
        const msg = prefix + error.message;
        const err = {
            statusCode: error.statusCode,
            request: opts
        };
        const p0 = msg.indexOf('{');
        if (p0 > 0) {
            err.message = JSON.parse(msg.slice(msg.indexOf('{')));
        }
        else {
            err.message = msg;
        }
        log.apiError(JSON.stringify(err, null, 2));
        throw error;
    }
    catch (e) {
        log.error(e.message);
        throw e;
    }
}

function refreshToken(url, clientId, clientSecret, refreshToken) {
    //console.log(`refreshToken(${refreshToken})`);
    let opts = {
        url: url,
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + Buffer.from(`${clientId}:${clientSecret}`, 'ascii').toString('base64')
        },
        body: `grant_type=refresh_token&client_id=${clientId}&client_secret=${clientSecret}&refresh_token=${refreshToken}`
    };
    return rp(opts);
}