'use strict';

const fs = require('fs');
const httpSignature = require('http-signature');

let publicKey = 'INVALID';

module.exports = {
    setPublicKey(key) {
        if (key.startsWith('@')) {
            publicKey = fs.readFileSync(key.slice(1), 'utf8');
        }
        else {
            publicKey = key;
        }
        return publicKey;
    },

    signatureIsVerified(req) {
        try {
            let parsed = httpSignature.parseRequest(req);
            if (!httpSignature.verifySignature(parsed, publicKey)) {
                console.error('Forbidden - failed verifySignature');
                return false;
            }
        } catch (err) {
            console.error(err);
            return false;
        }
        return true;
    }
};