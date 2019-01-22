# SmartThings Javascript SDK

[Reference Documentation](doc/index.md)

SDK that wraps the SmartThings REST API and reduces the amount of code necessary
to write a SmartApp app. Supports both web-hook and AWS Lambda implementations. 
This is a pre-release version of the API and may change over 
time time.

## Installation:
```
npm install @smartthings/smartapp --save
```

## Key Features
* Javascript API hides details of REST calls and authentication.
* Event handler framework dispatches lifecycle evebnts to named event handlers.
* Configuration page API simplifies page definition.
* Integrated [i18n](https://www.npmjs.com/package/i18n) framework provides configuration page localization.
* [Winston](https://www.npmjs.com/package/winston) framework manges log messages.

## Example

### Run as an AWS Lambda function
Here's the equivalent of the origial SmartThings Groovy _Let There Be Light_ app that 
turns on and off a light when a door opens and closes, set up to run as a Lambda.

```
require('@smartthings/smartapp');
app.configureI18n()
    .page('mainPage', (page) => {
        page.section('sensors', (section) => {
            section.deviceSetting('contactSensor').capabilities(['contactSensor']);
        });
        page.section('lights', (section) => {
            section.deviceSetting('lights').capabilities(['switch']).multiple(true).permissions('rx');
        });
    })
    .updated(() => {
        app.api.devices.unsubscribeAll().then(() => {
            app.api.devices.subscribe(app.config.contactSensor, 'contactSensor', 'contact', 'openCloseHandler');
        });
    })
    .subscribedEventHandler('openCloseHandler', (event) => {
        const value = event.value === 'open' ? 'on' : 'off';
        app.api.devices.sendCommands(app.config.lights, 'switch', value);
    });
    
exports.handle = (evt, context, callback) => {
    app.handleLambdaCallback(evt, context, callback);
};
```

### Localization

Configuration page strings are specified in a separate locales/en.json file, which
can be automatically created the first time you run the app. Here's a completed English localization file
for the previous example:
```
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
```
const express = require('express');
const bodyParser = require('body-parser');
const server = module.exports = express();
require('@smartthings/smartapp');
app.publicKey(`@${process.env.HOME}/smartthings_rsa.pub`)
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
        app.api.devices.unsubscribeAll().then(() => {
            app.api.devices.subscribe(app.config.contactSensor, 'contactSensor', 'contact', 'openCloseHandler');
        });
    })
    .subscribedEventHandler('openCloseHandler', (event) => {
        const value = event.value === 'open' ? 'on' : 'off';
        app.api.devices.sendCommands(app.config.lights, 'switch', value);
    });
    
server.use(bodyParser.json());
server.post('/', function(req, response) {
    app.handleHttpCallback(req, response);
});
``` 