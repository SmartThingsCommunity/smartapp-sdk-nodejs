# SmartThings SmartApp NodeJS SDK (preview)

<p align="center">
<a href="https://www.npmjs.com/package/@smartthings/smartapp"><img src="https://badgen.net/npm/v/@smartthings/smartapp" /></a>
<a href="https://www.npmjs.com/package/@smartthings/smartapp"><img src="https://badgen.net/npm/license/@smartthings/smartapp" /></a>
<a href="https://status.badgen.net/"><img src="https://badgen.net/xo/status/@smartthings/smartapp" /></a>
<a href="https://lgtm.com/projects/g/SmartThingsCommunity/smartapp-sdk-nodejs/context:javascript"><img alt="Language grade: JavaScript" src="https://img.shields.io/lgtm/grade/javascript/g/SmartThingsCommunity/smartapp-sdk-nodejs.svg?logo=lgtm&logoWidth=18"/></a>
<a href="https://lgtm.com/projects/g/SmartThingsCommunity/smartapp-sdk-nodejs/alerts/"><img alt="Total alerts" src="https://img.shields.io/lgtm/alerts/g/SmartThingsCommunity/smartapp-sdk-nodejs.svg?logo=lgtm&logoWidth=18"/></a>
<a href="https://snyk.io/test/github/SmartThingsCommunity/smartapp-sdk-nodejs?targetFile=package.json"><img src="https://snyk.io/test/github/SmartThingsCommunity/smartapp-sdk-nodejs/badge.svg?targetFile=package.json" alt="Known Vulnerabilities" data-canonical-src="https://snyk.io/test/github/SmartThingsCommunity/smartapp-sdk-nodejs?targetFile=package.json" style="max-width:100%;"></a>
<a href="https://smartthingsdev.slack.com/messages/CG595N08N"><img src="https://badgen.net/badge//smartthingsdev?icon=slack" /></a>
</p>

[Reference Documentation](doc/index.md)

SDK that wraps the SmartThings REST API and reduces the amount of code necessary to write a SmartApp app. It supports both webhook and AWS Lambda implementations. This is a preview version of the API and will change over time time.

## Installation

```bash
npm i @smartthings/smartapp --save
```

## Importing

`NodeJS`:

```javascript
const smartapp = require('@smartthings/smartapp')
```

Or, if you're transpiling to `ES6`/`ES2015`+:

```javascript
import smartapp from '@smartthings/smartapp'
```

## Highlights

- [x] Javascript API hides details of REST calls and authentication.
- [x] Event handler framework dispatches lifecycle evebnts to named event handlers.
- [x] Configuration page API simplifies page definition.
- [x] Integrated [i18n](https://www.npmjs.com/package/i18n) framework provides configuration page localization.
- [x] [Winston](https://www.npmjs.com/package/winston) framework manges log messages.

## Example

### Run as an AWS Lambda function

Here's the equivalent of the original SmartThings Groovy _Let There Be Light_ app that turns on and off a light when a door opens and closes, set up to run as a Lambda.

```javascript
const smartapp = require('@smartthings/smartapp')
smartapp.configureI18n()
    .page('mainPage', (page) => {
        page.section('sensors', (section) => {
            section.deviceSetting('contactSensor').capabilities(['contactSensor']);
        });
        page.section('lights', (section) => {
            section.deviceSetting('lights').capabilities(['switch']).multiple(true).permissions('rx');
        });
    })
    .updated(() => {
        smartapp.api.devices.unsubscribeAll().then(() => {
            smartapp.api.devices.subscribe(smartapp.config.contactSensor, 'contactSensor', 'contact', 'openCloseHandler');
        });
    })
    .subscribedEventHandler('openCloseHandler', (event) => {
        const value = event.value === 'open' ? 'on' : 'off';
        smartapp.api.devices.sendCommands(smartapp.config.lights, 'switch', value);
    });
exports.handle = (evt, context, callback) => {
    smartapp.handleLambdaCallback(evt, context, callback);
};
```

### Localization

Configuration page strings are specified in a separate `locales/en.json` file, which can be automatically created the first time you run the app. Here's a completed English localization file for the previous example:

```json
{
  "pages.mainPage.name": "Let There Be Light",
  "pages.mainPage.sections.sensors.name": "When this door or window opens or closes",
  "pages.mainPage.settings.contactSensor.name": "Select open/close sensor",
  "pages.mainPage.sections.lights.name": "Turn on and off these lights and switches",
  "pages.mainPage.settings.lights.name": "Select lights and switches",
  "Tap to set": "Tap to set"
}
```

### Run as a web service

To run the app in a webserver rather than a lambda replace the `exports.handle = ...` function with an HTTP server
with the public key file specified:

```javascript
const express = require('express');
const bodyParser = require('body-parser');
const server = module.exports = express();
const smartapp = require('@smartthings/smartapp');
smartapp.publicKey(`@${process.env.HOME}/smartthings_rsa.pub`)
    .configureI18n()
    .page('mainPage', (page) => {
        page.section('sensors', (section) => {
            section.deviceSetting('contactSensor').capabilities(['contactSensor']);
        });
        page.section('lights', (section) => {
            section.deviceSetting('lights').capabilities(['switch']).multiple(true).permissions('rx');
        });
    })
    .updated(() => {
        smartapp.api.devices.unsubscribeAll().then(() => {
            smartapp.api.devices.subscribe(smartapp.config.contactSensor, 'contactSensor', 'contact', 'openCloseHandler');
        });
    })
    .subscribedEventHandler('openCloseHandler', (event) => {
        const value = event.value === 'open' ? 'on' : 'off';
        smartapp.api.devices.sendCommands(smartapp.config.lights, 'switch', value);
    });
server.use(bodyParser.json());
server.post('/', function(req, response) {
    smartapp.handleHttpCallback(req, response);
});
```