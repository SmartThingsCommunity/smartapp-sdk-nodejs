# SmartThings SmartApp NodeJS SDK

<p align="center">
<a href="https://www.npmjs.com/package/@smartthings/smartapp"><img src="https://badgen.net/npm/v/@smartthings/smartapp"/></a>
<a href="https://www.npmjs.com/package/@smartthings/smartapp"><img src="https://badgen.net/npm/license/@smartthings/smartapp"/></a>
<a href="https://circleci.com/gh/SmartThingsCommunity/smartapp-sdk-nodejs/tree/master"><img src="https://circleci.com/gh/SmartThingsCommunity/smartapp-sdk-nodejs.svg?style=svg"/></a>
<a href="https://codecov.io/gh/SmartThingsCommunity/smartapp-sdk-nodejs"><img src="https://codecov.io/gh/SmartThingsCommunity/smartapp-sdk-nodejs/branch/master/graph/badge.svg"/></a>
<a href="https://status.badgen.net/"><img src="https://badgen.net/xo/status/@smartthings/smartapp"/></a>
<a href="https://lgtm.com/projects/g/SmartThingsCommunity/smartapp-sdk-nodejs/context:javascript"><img alt="Language grade: JavaScript" src="https://img.shields.io/lgtm/grade/javascript/g/SmartThingsCommunity/smartapp-sdk-nodejs.svg?logo=lgtm&logoWidth=18"/></a>
<a href="https://lgtm.com/projects/g/SmartThingsCommunity/smartapp-sdk-nodejs/alerts/"><img alt="Total alerts" src="https://img.shields.io/lgtm/alerts/g/SmartThingsCommunity/smartapp-sdk-nodejs.svg?logo=lgtm&logoWidth=18"/></a>
<a href="https://snyk.io/test/github/SmartThingsCommunity/smartapp-sdk-nodejs?targetFile=package.json"><img src="https://snyk.io/test/github/SmartThingsCommunity/smartapp-sdk-nodejs/badge.svg?targetFile=package.json" alt="Known Vulnerabilities" data-canonical-src="https://snyk.io/test/github/SmartThingsCommunity/smartapp-sdk-nodejs?targetFile=package.json" style="max-width:100%;"></a>
<a href="https://smartthingsdev.slack.com/messages/CG595N08N"><img src="https://badgen.net/badge//smartthingsdev?icon=slack"/></a>
</p>

#### [Reference Documentation](docs/index.md)

SDK that wraps the SmartThings REST API and reduces the amount of code necessary to write a SmartApp app. It supports 
both webhook and AWS Lambda implementations. This is a preview version of the API and will change over time time.

## Version 2.0 Release

_ATTENTION! This major release is not completely backwardly compatible with the 1.X version, though for most
SmartApps the changes required should be relatively minor. The major non-backwardly changes are:_
* _Methods that return lists now return arrays rather that an object with the properties `items` and `_links`._
* _Axios is now used rather than request-promise-native for making HTTP calls, resulting in changes to the error
objects thrown when exceptions occur._

_See the [Version 2.0.0 release notes](docs/V2_RELEASE_NOTES.md) for more information._

## Installation

```bash
npm i @smartthings/smartapp --save
```

## Importing

`NodeJS`:

```javascript
const SmartApp = require('@smartthings/smartapp')
```

Or `ES2015`+:

```javascript
import SmartApp from '@smartthings/smartapp'
```

## Highlights

- [x] Javascript API hides details of REST calls and authentication.
- [x] Event handler framework dispatches lifecycle events to named event handlers.
- [x] Configuration page API simplifies page definition.
- [x] Integrated [i18n](https://www.npmjs.com/package/i18n) framework provides configuration page localization.
- [x] [Winston](https://www.npmjs.com/package/winston) framework manges log messages.
- [x] Context Store plugins – easily scale access token management (and more) to support many users
  - [x] [AWS DynamoDB](https://github.com/SmartThingsCommunity/dynamodb-context-store-nodejs) plugin ([usage](#amazon-aws-dynamodb))
  - [x] [Firebase Cloud Firestore](https://github.com/SmartThingsCommunity/firestore-context-store-nodejs) plugin ([usage](#firebase-cloud-firestore))

## Examples

The following example automation is the equivalent of a simple Rule (if contact sensor opens/closes, turn lights on/off) which is easily achieved via our [Rules API](https://smartthings.developer.samsung.com/docs/rules/overview.html). It is given here as a brief showcase of the SDK, and not meant to be a good candidate for a SmartApp. Be sure to check if your automation is possible with the Rules API, as it will benefit from speed, stability, and security through future local execution support.

### Running it as a web service

To run the app with an HTTP server, like Express.js:

```javascript
const SmartApp = require('@smartthings/smartapp');
const express = require('express');
const server = express();
const PORT = 8080;


/* Define the SmartApp */
const smartapp = new SmartApp()
    .enableEventLogging(2) // logs all lifecycle event requests and responses as pretty-printed JSON. Omit in production
    .page('mainPage', (context, page, configData) => {
        page.section('sensors', section => {
            section
                .deviceSetting('contactSensor')
                .capabilities(['contactSensor'])
        });
        page.section('lights', section => {
            section
                .deviceSetting('lights')
                .capabilities(['switch'])
                .permissions('rx')
                .multiple(true);
        });
    })
    // Called for both INSTALLED and UPDATED lifecycle events if there is no separate installed() handler
    .updated(async (context, updateData) => {
        await context.api.subscriptions.delete() // clear any existing configuration
        await context.api.subscriptions.subscribeToDevices(context.config.contactSensor, 'contactSensor', 'contact', 'myDeviceEventHandler');
    })
    .subscribedEventHandler('myDeviceEventHandler', async (context, event) => {
        const value = event.value === 'open' ? 'on' : 'off';
        await context.api.devices.sendCommands(context.config.lights, 'switch', value);
    });

server.use(express.json());

/* Handle POST requests */
server.post('/', function (req, res, next) {
    smartapp.handleHttpCallback(req, res);
});

/* Start listening at your defined PORT */
server.listen(PORT, () => console.log(`Server is up and running on port ${PORT}`));
```

### Running as an AWS Lambda function

To run as a Lambda function instead of an HTTP server, ensure that your main entry file exports `smartapp.handleLambdaCallback(...)`.

> **Note:** This snippet is heavily truncated for brevity.

```javascript
const SmartApp = require('@smartthings/smartapp');

const smartapp = new SmartApp()
    .enableEventLogging() // logs all lifecycle event requests and responses. Omit in production
    .page( ... )
    .updated(() => { ... })
    .subscribedEventHandler( ... );

exports.handler = (event, context, callback) => {
    smartapp.handleLambdaCallback(event, context, callback);
};
```
There are also a few Glitch examples:

- [Simple SmartThings Automation App using Contact Sensors](https://glitch.com/edit/#!/south-mayonnaise?path=README.md:1:0)
- [Simple SmartThings Automation App using Motion Detectors](https://glitch.com/edit/#!/polite-math?path=README.md:1:0)
- [Simple Switch Cloud-to-Cloud (C2C) App](https://glitch.com/edit/#!/aquamarine-crop?path=README.md:1:0)

More detailed examples to use as a starting point can be found in our [app-examples](https://github.com/SmartThingsCommunity/app-examples) repository.

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

### Unhandled Promise Rejection Handling

By default, instantiation of the SmartApp object registers an "unhandledReject" handler
that logs unhandled promise rejections. If you don't want this behavior you can disable
it by passing an option to the SmartApp instantiation, e.g. `new SmartApp({logUnhandledRejections: false})`.
If you want to replace the handler you can do that by calling `unhandledRejectionHandler(promise => {...})`
on the SmartApp object.

### Making API calls outside of an EVENT handler

By default, the SmartApp SDK will facilitate API calls on behalf of a user within the `EVENT` lifecycle. These user tokens are ephemeral and last *5 minutes*. These access tokens are not able to be refreshed and should _not_ be stored. If you're making out-of-band API calls on behalf of a user's installed app, you will need to use the 24-hour access token that are supplied after `INSTALL` and `UPDATE` lifecycles. This token includes a `refresh_token`, and will be automatically refreshed by the SDK when necessary.

> Be aware that **there is no in-memory context store**, you must use a context store plugin. If you'd like to add a custom context store plugin, please [contribute](CONTRIBUTING.md)!

To get started, let's add a compatible `ContextStore` plugin that will persist these tokens (among other things) to a database.

#### Amazon AWS DynamoDB

Available as a node package on [NPM](https://www.npmjs.com/package/@smartthings/dynamodb-context-store) or [fork on GitHub](https://github.com/SmartThingsCommunity/dynamodb-context-store-nodejs/fork).

If you are hosting your SmartApp as an AWS Lambda, this DynamoDB context store makes perfect sense. This assumes you've already configured the [`aws-sdk`](https://www.npmjs.com/package/aws-sdk) package to interact with your Lambda, so extending your context store to DynamoDB is a drop-in solution.

If you are self-hosted and still want to use DynamoDB, you can do that, too:

1. Import the package to your project: `npm i --save @smartthings/dynamodb-context-store`
    - *Note:* when adding this package, you also have `aws-sdk` available at the global scope, so you can configure the AWS SDK: `AWS.config.loadFromPath(creds)`
1. Get an [AWS Access Key and Secret](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/getting-your-credentials.html)
1. Set your credentials for your app, [any of the following ways are fine](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/setting-credentials-node.html).
1. Register your Context Store plugin as described on [the project repository's readme.](https://github.com/SmartThingsCommunity/dynamodb-context-store-nodejs#usage)

For complete directions on usage, please see this project's GitHub repository. ([SmartThingsCommunity/dynamodb-context-store-nodejs](https://github.com/SmartThingsCommunity/dynamodb-context-store-nodejs))

#### Firebase Cloud Firestore

Available as a node package on [NPM](https://www.npmjs.com/package/@smartthings/firestore-context-store) or [fork on GitHub](https://github.com/SmartThingsCommunity/firestore-context-store-nodejs/fork). Usage is generally the same as DynamoDB:

1. Generate a Firebase service account. You will receive a JSON file with the credentials.
1. Load your Google Services JSON
1. Create the context store

See the full usage guide on the project's GitHub repository. ([SmartThingsCommunity/firestore-context-store-nodejs](https://github.com/SmartThingsCommunity/firestore-context-store-nodejs#usage))

---
## More about SmartThings

If you are not familiar with SmartThings, we have
[extensive on-line documentation](https://smartthings.developer.samsung.com/develop/index.html).

To create and manage your services and devices on SmartThings, create an account in the
[developer workspace](https://devworkspace.developer.samsung.com/).

The [SmartThings Community](https://community.smartthings.com/c/developers/) is a good place share and
ask questions.

There is also a [SmartThings reddit community](https://www.reddit.com/r/SmartThings/) where you
can read and share information.

## License and Copyright

Licensed under the [Apache License, Version 2.0](LICENSE)

Copyright 2019 SmartThings, Inc.
