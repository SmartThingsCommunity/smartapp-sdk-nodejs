'use strict';

const SmartApp = require('./lib/smart-app');

module.exports = (function (options = {}) {
    return new SmartApp(options);
})();

module.exports.default = Object.assign({}, module.exports);