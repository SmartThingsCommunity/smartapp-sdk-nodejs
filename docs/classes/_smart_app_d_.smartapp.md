[Reference](../index.md) › [SmartApp](_smart_app_d_.smartapp.md)

# SmartApp

An instance of the SmartApp class is created to handle lifecycle events for WEBHOOK_SMART_APP, LAMBDA_SMART_APP,
and API_ONLY apps. Options can either be passed in as parameters to the constructor, for example:
```
import {SmartApp} from '@smartthings/smartapp'
...
const smartApp = new SmartApp({
    appId: 'xxx',
    disableCustomDisplayName: true
})
```
or set with individual chained configuration method calls, for example:
```
const smartApp = new SmartAll()
    .appId('xxx')
    .disableCustomDisplayName()
```

## Constructor

\+ **new SmartApp**(`options?`: [SmartAppOptions](../interfaces/_smart_app_d_.smartappoptions.md)): *[SmartApp](_smart_app_d_.smartapp.md)*

Create a SmartApp instance

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`options?` | [SmartAppOptions](../interfaces/_smart_app_d_.smartappoptions.md) | configuration object defining SmartApp options  |

**Returns:** *[SmartApp](_smart_app_d_.smartapp.md)*

## Methods

* [apiUrl](_smart_app_d_.smartapp.md#apiurl)
* [appId](_smart_app_d_.smartapp.md#appid)
* [clientId](_smart_app_d_.smartapp.md#clientid)
* [clientSecret](_smart_app_d_.smartapp.md#clientsecret)
* [configureI18n](_smart_app_d_.smartapp.md#configurei18n)
* [configureLogger](_smart_app_d_.smartapp.md#configurelogger)
* [contextStore](_smart_app_d_.smartapp.md#contextstore)
* [defaultDeviceCommandHandler](_smart_app_d_.smartapp.md#defaultdevicecommandhandler)
* [defaultPage](_smart_app_d_.smartapp.md#defaultpage)
* [defaultScheduledEventHandler](_smart_app_d_.smartapp.md#defaultscheduledeventhandler)
* [deviceCommand](_smart_app_d_.smartapp.md#devicecommand)
* [deviceCommandHandler](_smart_app_d_.smartapp.md#devicecommandhandler)
* [disableCustomDisplayName](_smart_app_d_.smartapp.md#disablecustomdisplayname)
* [disableRemoveApp](_smart_app_d_.smartapp.md#disableremoveapp)
* [enableEventLogging](_smart_app_d_.smartapp.md#enableeventlogging)
* [executeHandler](_smart_app_d_.smartapp.md#executehandler)
* [firstPageId](_smart_app_d_.smartapp.md#firstpageid)
* [handleHttpCallback](_smart_app_d_.smartapp.md#handlehttpcallback)
* [handleHttpCallbackUnverified](_smart_app_d_.smartapp.md#handlehttpcallbackunverified)
* [handleLambdaCallback](_smart_app_d_.smartapp.md#handlelambdacallback)
* [handleMockCallback](_smart_app_d_.smartapp.md#handlemockcallback)
* [handleOAuthCallback](_smart_app_d_.smartapp.md#handleoauthcallback)
* [initialized](_smart_app_d_.smartapp.md#initialized)
* [installed](_smart_app_d_.smartapp.md#installed)
* [keyApiHost](_smart_app_d_.smartapp.md#keyapihost)
* [oauthHandler](_smart_app_d_.smartapp.md#oauthhandler)
* [page](_smart_app_d_.smartapp.md#page)
* [permissions](_smart_app_d_.smartapp.md#permissions)
* [publicKey](_smart_app_d_.smartapp.md#publickey)
* [redirectUri](_smart_app_d_.smartapp.md#redirecturi)
* [refreshUrl](_smart_app_d_.smartapp.md#refreshurl)
* [scheduledEventHandler](_smart_app_d_.smartapp.md#scheduledeventhandler)
* [subscribedDeviceEventHandler](_smart_app_d_.smartapp.md#subscribeddeviceeventhandler)
* [subscribedDeviceHealthEventHandler](_smart_app_d_.smartapp.md#subscribeddevicehealtheventhandler)
* [subscribedDeviceLifecycleEventHandler](_smart_app_d_.smartapp.md#subscribeddevicelifecycleeventhandler)
* [subscribedEventHandler](_smart_app_d_.smartapp.md#subscribedeventhandler)
* [subscribedHubHealthEventHandler](_smart_app_d_.smartapp.md#subscribedhubhealtheventhandler)
* [subscribedModeEventHandler](_smart_app_d_.smartapp.md#subscribedmodeeventhandler)
* [subscribedSceneLifecycleEventHandler](_smart_app_d_.smartapp.md#subscribedscenelifecycleeventhandler)
* [subscribedSecurityArmStateEventHandler](_smart_app_d_.smartapp.md#subscribedsecurityarmstateeventhandler)
* [unhandledRejectionHandler](_smart_app_d_.smartapp.md#unhandledrejectionhandler)
* [uninstalled](_smart_app_d_.smartapp.md#uninstalled)
* [updated](_smart_app_d_.smartapp.md#updated)
* [withContext](_smart_app_d_.smartapp.md#withcontext)


###  apiUrl

▸ **apiUrl**(`url`: string): *[SmartApp](_smart_app_d_.smartapp.md)*

Specify an alternate base URL for SmartThings API calls. This value is only necessary for testing new
API versions or non-production environments.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`url` | string | base URL of the alternate API  |

**Returns:** *[SmartApp](_smart_app_d_.smartapp.md)*

___

###  appId

▸ **appId**(`id`: string): *[SmartApp](_smart_app_d_.smartapp.md)*

Set the app that this SmartApp object is implementing. This field
is necessary for any app that requires [permissions](_smart_app_d_.smartapp.md#permissions) in addition to those implied
by the app configuration settings.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | either the `App.appId` or `App.appName` field of your SmartApp  |

**Returns:** *[SmartApp](_smart_app_d_.smartapp.md)*

___

###  clientId

▸ **clientId**(`id`: string): *[SmartApp](_smart_app_d_.smartapp.md)*

Set the client id, which together with the client secret, enables apps that make proactive calls to the
SmartThings API to refresh their access tokens. Does not need to be set for apps that only respond
to lifecycle events because those event requests contain valid tokens.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | the clientId that was generated when the App was created  |

**Returns:** *[SmartApp](_smart_app_d_.smartapp.md)*

___

###  clientSecret

▸ **clientSecret**(`secret`: string): *[SmartApp](_smart_app_d_.smartapp.md)*

Set the client secret, which together with the client id, enables apps that make proactive calls to the
SmartThings API to refresh their access tokens. Does not need to be set for apps that only respond
to lifecycle events because those event requests contain valid tokens.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`secret` | string | the clientSecret that was generated when the App was created  |

**Returns:** *[SmartApp](_smart_app_d_.smartapp.md)*

___

###  configureI18n

▸ **configureI18n**(`options?`: [ConfigurationOptions](../modules/_i18n_d_.md#configurationoptions)): *[SmartApp](_smart_app_d_.smartapp.md)*

Configure the i18n localization framework used to translate app installation pages.
The most commonly used option is `{updateFiles: true}` which will automatically add keys
to the localization file for new configuration page settings. The use of the i18n framework
is recommended even if you are not planning to support multiple languages in your app because
it nicely separates user-visible text from the app logic, allowing that text to be changed without
changing the app code itself.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`options?` | [ConfigurationOptions](../modules/_i18n_d_.md#configurationoptions) | settings of the i18n localization module  |

**Returns:** *[SmartApp](_smart_app_d_.smartapp.md)*

___

###  configureLogger

▸ **configureLogger**(`logger`: [Logger](../interfaces/_util_log_d_.logger.md)): *[SmartApp](_smart_app_d_.smartapp.md)*

Override the default Winston event and error logger. You may want to do this to integrate
with your logging infrastructure. The default logger writes to the console.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`logger` | [Logger](../interfaces/_util_log_d_.logger.md) | your logging implementation  |

**Returns:** *[SmartApp](_smart_app_d_.smartapp.md)*

___

###  contextStore

▸ **contextStore**(`contextStore`: [ContextStore](../interfaces/_smart_app_d_.contextstore.md)): *[SmartApp](_smart_app_d_.smartapp.md)*

Sets the context store implementation for saving and retrieving installed app context.
A context store is required for apps that make SmartThings API calls in response to
external trigger and conditions. Apps that only response to lifecycle events from
SmartThings do not require a context store because the installed app context is
provided in the call.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`contextStore` | [ContextStore](../interfaces/_smart_app_d_.contextstore.md) | a service implementing the context store interface  |

**Returns:** *[SmartApp](_smart_app_d_.smartapp.md)*

___

###  defaultDeviceCommandHandler

▸ **defaultDeviceCommandHandler**(`callback`: function): *[SmartApp](_smart_app_d_.smartapp.md)*

Defines a handler to be called for any device command event that does not have a handler
defined for that specific command. The default implementation of this handler simply logs a
message about the missing command handler. Note that only C2C connector SmartApps that create
devices will receive command events.

**Parameters:**

▪ **callback**: *function*

▸ (`context`: [SmartAppContext](../interfaces/_util_smart_app_context_d_.smartappcontext.md), `deviceId`: string, `cmd`: DeviceCommand): *[HandlerResponse](../modules/_smart_app_d_.md#handlerresponse)*

**Parameters:**

Name | Type |
------ | ------ |
`context` | [SmartAppContext](../interfaces/_util_smart_app_context_d_.smartappcontext.md) |
`deviceId` | string |
`cmd` | DeviceCommand |

**Returns:** *[SmartApp](_smart_app_d_.smartapp.md)*

___

###  defaultPage

▸ **defaultPage**(`callback`: function): *[SmartApp](_smart_app_d_.smartapp.md)*

Defines a handler that is called for any configuration page that does not have a specific page handler
mapped to that page id. Default page handlers are typically used when an app has a variable number
of configuration pages. For example, an app that has a separate configuration page for each room
of a location.

**Parameters:**

▪ **callback**: *function*

▸ (`context`: [SmartAppContext](../interfaces/_util_smart_app_context_d_.smartappcontext.md), `page`: [Page](_pages_page_d_.page.md), `configData?`: InstalledAppConfiguration): *[HandlerResponse](../modules/_smart_app_d_.md#handlerresponse)*

**Parameters:**

Name | Type |
------ | ------ |
`context` | [SmartAppContext](../interfaces/_util_smart_app_context_d_.smartappcontext.md) |
`page` | [Page](_pages_page_d_.page.md) |
`configData?` | InstalledAppConfiguration |

**Returns:** *[SmartApp](_smart_app_d_.smartapp.md)*

___

###  defaultScheduledEventHandler

▸ **defaultScheduledEventHandler**(`callback`: function): *[SmartApp](_smart_app_d_.smartapp.md)*

Defines a handler to be called for any scheduled event that does not have a handler
defined for that specific event. 

**Parameters:**

▪ **callback**: *function*

▸ (`context`: [SmartAppContext](../interfaces/_util_smart_app_context_d_.smartappcontext.md), `eventData`: TimerEvent): *[HandlerResponse](../modules/_smart_app_d_.md#handlerresponse)*

**Parameters:**

Name | Type                                                                           |
------ |--------------------------------------------------------------------------------|
`context` | [SmartAppContext](../interfaces/_util_smart_app_context_d_.smartappcontext.md) |                                                                        |
`eventData` | TimerEvent                                                                     |

**Returns:** *[SmartApp](_smart_app_d_.smartapp.md)*


___

###  deviceCommand

▸ **deviceCommand**(`command`: string, `callback`: function): *[SmartApp](_smart_app_d_.smartapp.md)*

Defines a handler for a specific device command.

**Parameters:**

▪ **command**: *string*

the command path in the form `[component]/capability/command`. If the component is not
specified then the handler will be called for all components.

▪ **callback**: *function*

the handler called when the specified command is received

▸ (`context`: [SmartAppContext](../interfaces/_util_smart_app_context_d_.smartappcontext.md), `deviceId`: string, `cmd`: DeviceCommand, `eventTime?`: string): *[HandlerResponse](../modules/_smart_app_d_.md#handlerresponse)*

**Parameters:**

Name | Type |
------ | ------ |
`context` | [SmartAppContext](../interfaces/_util_smart_app_context_d_.smartappcontext.md) |
`deviceId` | string |
`cmd` | DeviceCommand |
`eventTime?` | string |

**Returns:** *[SmartApp](_smart_app_d_.smartapp.md)*

___

###  deviceCommandHandler

▸ **deviceCommandHandler**(`callback`: function): *[SmartApp](_smart_app_d_.smartapp.md)*

Defines a single command handler for all device commands. Its use should be exclusive with the
`deviceCommand()` method that defines handlers for specific commands because those handlers
will not be called if a handler is defined here. To define a handler that's called only when
no specific device command handler exists use `defaultDeviceCommandHandler`

**Parameters:**

▪ **callback**: *function*

▸ (`context`: [SmartAppContext](../interfaces/_util_smart_app_context_d_.smartappcontext.md), `deviceId`: string, `eventData`: [DeviceCommandsEvent](../modules/_lifecycle_events_d_.md#devicecommandsevent), `eventTime?`: string): *[HandlerResponse](../modules/_smart_app_d_.md#handlerresponse)*

**Parameters:**

Name | Type |
------ | ------ |
`context` | [SmartAppContext](../interfaces/_util_smart_app_context_d_.smartappcontext.md) |
`deviceId` | string |
`eventData` | [DeviceCommandsEvent](../modules/_lifecycle_events_d_.md#devicecommandsevent) |
`eventTime?` | string |

**Returns:** *[SmartApp](_smart_app_d_.smartapp.md)*

___

###  disableCustomDisplayName

▸ **disableCustomDisplayName**(`value`: boolean): *[SmartApp](_smart_app_d_.smartapp.md)*

Disable the ability for users to rename the installed app instance in the configuration page.
This behavior may be desirable for singleton apps that can only be installed once per location. Apps
that can be installed multiple times per location should not disable renaming, or the result
will be multiple apps with the same name.

**Parameters:**

Name | Type |
------ | ------ |
`value` | boolean |

**Returns:** *[SmartApp](_smart_app_d_.smartapp.md)*

___

###  disableRemoveApp

▸ **disableRemoveApp**(`value`: boolean): *[SmartApp](_smart_app_d_.smartapp.md)*

Disable the button that allows users to remove the app from the configuration page. Apps can still be removed
using the delete menu options.

**Parameters:**

Name | Type |
------ | ------ |
`value` | boolean |

**Returns:** *[SmartApp](_smart_app_d_.smartapp.md)*

___

###  enableEventLogging

▸ **enableEventLogging**(`jsonSpace?`: number, `enableEvents?`: boolean): *[SmartApp](_smart_app_d_.smartapp.md)*

Turns on the logging of lifecycle events and responses.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`jsonSpace?` | number | the number of spaces to use for indentation in pretty-printed output. Setting this value to zero disables pretty printing |
`enableEvents?` | boolean | whether or not to enable logging. Defaults to true  |

**Returns:** *[SmartApp](_smart_app_d_.smartapp.md)*

___

###  executeHandler

▸ **executeHandler**(`callback`: function): *[SmartApp](_smart_app_d_.smartapp.md)*

Defines a handler for EXECUTE lifecycle events

**Parameters:**

▪ **callback**: *function*

▸ (`context`: [SmartAppContext](../interfaces/_util_smart_app_context_d_.smartappcontext.md), `executeData`: [ExecuteData](../modules/_lifecycle_events_d_.md#executedata)): *Promise‹any›*

**Parameters:**

Name | Type |
------ | ------ |
`context` | [SmartAppContext](../interfaces/_util_smart_app_context_d_.smartappcontext.md) |
`executeData` | [ExecuteData](../modules/_lifecycle_events_d_.md#executedata) |

**Returns:** *[SmartApp](_smart_app_d_.smartapp.md)*

___

###  firstPageId

▸ **firstPageId**(`id`: string): *[SmartApp](_smart_app_d_.smartapp.md)*

Sets the initial configuration page to be rendered when an app is installed or updated.
If not specified then the first page defined will be rendered.

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |

**Returns:** *[SmartApp](_smart_app_d_.smartapp.md)*

___

###  handleHttpCallback

▸ **handleHttpCallback**(`request`: [WebHookRequest](../interfaces/_smart_app_d_.webhookrequest.md), `response`: [WebHookResponse](../interfaces/_smart_app_d_.webhookresponse.md)): *Promise‹void›*

To be called by the web server to handle lifecycle events from WEBHOOK_SMART_APPs

**Parameters:**

Name | Type |
------ | ------ |
`request` | [WebHookRequest](../interfaces/_smart_app_d_.webhookrequest.md) |
`response` | [WebHookResponse](../interfaces/_smart_app_d_.webhookresponse.md) |

**Returns:** *Promise‹void›*

___

###  handleHttpCallbackUnverified

▸ **handleHttpCallbackUnverified**(`request`: [WebHookRequest](../interfaces/_smart_app_d_.webhookrequest.md), `response`: [WebHookResponse](../interfaces/_smart_app_d_.webhookresponse.md)): *Promise‹void›*

Bypasses event signature verification of WEBHOOK_SMART_APP requests. This method can be useful
for testing apps with the APP_RSA signature type but is not needed for apps with the
ST_PADLOCK signature type (which is now the default). Do not use in production apps.

**Parameters:**

Name | Type |
------ | ------ |
`request` | [WebHookRequest](../interfaces/_smart_app_d_.webhookrequest.md) |
`response` | [WebHookResponse](../interfaces/_smart_app_d_.webhookresponse.md) |

**Returns:** *Promise‹void›*

___

###  handleLambdaCallback

▸ **handleLambdaCallback**(`event`: any, `context`: Context, `callback`: function): *void*

To be called by AWS Lambda functions to handle LAMBDA_APP lifecycle events.

**Parameters:**

▪ **event**: *any*

▪ **context**: *Context*

▪ **callback**: *function*

▸ (): *any*

**Returns:** *void*

___

###  handleMockCallback

▸ **handleMockCallback**(`body`: any): *Promise‹void›*

To be called by test scripts

**Parameters:**

Name | Type |
------ | ------ |
`body` | any |

**Returns:** *Promise‹void›*

___

###  handleOAuthCallback

▸ **handleOAuthCallback**(`request`: [WebHookRequest](../interfaces/_smart_app_d_.webhookrequest.md)): *Promise‹[ContextRecord](../interfaces/_smart_app_d_.contextrecord.md)›*

To be called by the web server of an API access app when it receives an OAuth2 callback.
Redeems the code for access and refresh tokens.

**Parameters:**

Name | Type |
------ | ------ |
`request` | [WebHookRequest](../interfaces/_smart_app_d_.webhookrequest.md) |

**Returns:** *Promise‹[ContextRecord](../interfaces/_smart_app_d_.contextrecord.md)›*

___

###  initialized

▸ **initialized**(`callback`: function): *[SmartApp](_smart_app_d_.smartapp.md)*

Defines a handler to be called before configuration the first time a SmartApp is installed.

**Parameters:**

▪ **callback**: *function*

▸ (`context`: [SmartAppContext](../interfaces/_util_smart_app_context_d_.smartappcontext.md), `initialization`: [Initialization](_util_initialization_d_.initialization.md), `configData`: [ConfigurationData](../modules/_lifecycle_events_d_.md#configurationdata)): *[HandlerResponse](../modules/_smart_app_d_.md#handlerresponse)*

**Parameters:**

Name | Type |
------ | ------ |
`context` | [SmartAppContext](../interfaces/_util_smart_app_context_d_.smartappcontext.md) |
`initialization` | [Initialization](_util_initialization_d_.initialization.md) |
`configData` | [ConfigurationData](../modules/_lifecycle_events_d_.md#configurationdata) |

**Returns:** *[SmartApp](_smart_app_d_.smartapp.md)*

___

###  installed

▸ **installed**(`callback`: function): *[SmartApp](_smart_app_d_.smartapp.md)*

Defines a handler to be called after configuration the first time a SmartApp is installed. If not specified then the
`updated()` handler will be called on the initial installation as well as updates.

**Parameters:**

▪ **callback**: *function*

▸ (`context`: [SmartAppContext](../interfaces/_util_smart_app_context_d_.smartappcontext.md), `installData`: [InstallData](../modules/_lifecycle_events_d_.md#installdata)): *[HandlerResponse](../modules/_smart_app_d_.md#handlerresponse)*

**Parameters:**

Name | Type |
------ | ------ |
`context` | [SmartAppContext](../interfaces/_util_smart_app_context_d_.smartappcontext.md) |
`installData` | [InstallData](../modules/_lifecycle_events_d_.md#installdata) |

**Returns:** *[SmartApp](_smart_app_d_.smartapp.md)*

___

###  keyApiHost

▸ **keyApiHost**(`url`: string): *[SmartApp](_smart_app_d_.smartapp.md)*

Specify an alternate OAuth2 refresh URL for API access apps. This value is only necessary for testing new
API versions or non-production environments.

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |

**Returns:** *[SmartApp](_smart_app_d_.smartapp.md)*

___

###  oauthHandler

▸ **oauthHandler**(`callback`: function): *[SmartApp](_smart_app_d_.smartapp.md)*

Defines a handler to be called when the user completes the OAuth2 sign in process to a third party cloud
that has been initiated from an app installation page.

**Parameters:**

▪ **callback**: *function*

▸ (): *[HandlerResponse](../modules/_smart_app_d_.md#handlerresponse)*

**Returns:** *[SmartApp](_smart_app_d_.smartapp.md)*

___

###  page

▸ **page**(`id`: string, `callback`: function): *[SmartApp](_smart_app_d_.smartapp.md)*

Defines a configuration page that is displayed during app installation and update.
You can create as many pages as needed to satisfy your configuration needs. See the documentation on
[how to design pages](https://developer.smartthings.com/docs/connected-services/configuration#page-phase)
for your automation.

**Parameters:**

▪ **id**: *string*

▪ **callback**: *function*

▸ (`context`: [SmartAppContext](../interfaces/_util_smart_app_context_d_.smartappcontext.md), `page`: [Page](_pages_page_d_.page.md), `configData?`: InstalledAppConfiguration): *[HandlerResponse](../modules/_smart_app_d_.md#handlerresponse)*

**Parameters:**

Name | Type |
------ | ------ |
`context` | [SmartAppContext](../interfaces/_util_smart_app_context_d_.smartappcontext.md) |
`page` | [Page](_pages_page_d_.page.md) |
`configData?` | InstalledAppConfiguration |

**Returns:** *[SmartApp](_smart_app_d_.smartapp.md)*

___

###  permissions

▸ **permissions**(`value`: string | string[]): *[SmartApp](_smart_app_d_.smartapp.md)*

Specify the [OAuth2 scopes](https://developer.smartthings.com/docs/connected-services/oauth-integrations)
explicitly required by this app. For example `['r:devices:*', and 'x:devices:*']
to be able to read and control all devices in the location. You do not have to
provide this list for devices selected by the user in configuration settings.

If permissions are specified, [appId](_smart_app_d_.smartapp.md#appid) is also required.

**Parameters:**

Name | Type |
------ | ------ |
`value` | string &#124; string[] |

**Returns:** *[SmartApp](_smart_app_d_.smartapp.md)*

___

###  publicKey

▸ **publicKey**(`value`: string): *[SmartApp](_smart_app_d_.smartapp.md)*

Set the public key to be used for signature verification of lifecycle event calls. Not necessary for apps that
use ST_PADLOCK signatures.

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *[SmartApp](_smart_app_d_.smartapp.md)*

___

###  redirectUri

▸ **redirectUri**(`uri`: string): *[SmartApp](_smart_app_d_.smartapp.md)*

Set the OAuth2 redirect uri used for API Access integrations to SmartThings

**Parameters:**

Name | Type |
------ | ------ |
`uri` | string |

**Returns:** *[SmartApp](_smart_app_d_.smartapp.md)*

___

###  refreshUrl

▸ **refreshUrl**(`url`: string): *[SmartApp](_smart_app_d_.smartapp.md)*

Specify an alternate OAuth2 refresh URL for API Access apps. This value is only necessary for testing new
API versions or non-production environments.

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |

**Returns:** *[SmartApp](_smart_app_d_.smartapp.md)*

___

###  scheduledEventHandler

▸ **scheduledEventHandler**(`name`: string, `callback`: function): *[SmartApp](_smart_app_d_.smartapp.md)*

Defines a handler for scheduled events. The name corresponds the the name specified when the event is
scheduled by the `context.api.schedules.create()` call or any of its other variants. There can be
multiple scheduled event handlers in one app.

**Parameters:**

▪ **name**: *string*

the name used when the event to be handled was scheduled

▪ **callback**: *function*

the handler to be called with the event

▸ (`context`: [SmartAppContext](../interfaces/_util_smart_app_context_d_.smartappcontext.md), `eventData`: [TimerEvent](../modules/_lifecycle_events_d_.md#timerevent), `eventTime?`: string): *[HandlerResponse](../modules/_smart_app_d_.md#handlerresponse)*

**Parameters:**

Name | Type |
------ | ------ |
`context` | [SmartAppContext](../interfaces/_util_smart_app_context_d_.smartappcontext.md) |
`eventData` | [TimerEvent](../modules/_lifecycle_events_d_.md#timerevent) |
`eventTime?` | string |

**Returns:** *[SmartApp](_smart_app_d_.smartapp.md)*

___

###  subscribedDeviceEventHandler

▸ **subscribedDeviceEventHandler**(`name`: string, `callback`: function): *[SmartApp](_smart_app_d_.smartapp.md)*

Defines a handler for device event subscriptions. Device events occur whenever one
of the attributes of a device changes state, such as when a switch turns on or off.
The name corresponds to the name specified when the subscription
is created with the `context.api.subscriptions.subscribeToDevices()` call. There can be
multiple subscribed device event handlers in one app.

**Parameters:**

▪ **name**: *string*

the name used when the subscription was created

▪ **callback**: *function*

the handler to be called with the event

▸ (`context`: [SmartAppContext](../interfaces/_util_smart_app_context_d_.smartappcontext.md), `deviceEvent`: [DeviceEvent](../modules/_lifecycle_events_d_.md#deviceevent), `eventTime?`: string): *[HandlerResponse](../modules/_smart_app_d_.md#handlerresponse)*

**Parameters:**

Name | Type |
------ | ------ |
`context` | [SmartAppContext](../interfaces/_util_smart_app_context_d_.smartappcontext.md) |
`deviceEvent` | [DeviceEvent](../modules/_lifecycle_events_d_.md#deviceevent) |
`eventTime?` | string |

**Returns:** *[SmartApp](_smart_app_d_.smartapp.md)*

___

###  subscribedDeviceHealthEventHandler

▸ **subscribedDeviceHealthEventHandler**(`name`: string, `callback`: function): *[SmartApp](_smart_app_d_.smartapp.md)*

Defines a handler for device health event subscriptions. Device health events occur
whenever a device goes online or offline, or fails for some other reason.
The name corresponds to the name specified when the subscription
is created by the `context.api.subscriptions.subscribeToDeviceHealth()`. There can only
be one device health event handler for an app.

**Parameters:**

▪ **name**: *string*

the name used when the subscription was created

▪ **callback**: *function*

the handler to be called with the event

▸ (`context`: [SmartAppContext](../interfaces/_util_smart_app_context_d_.smartappcontext.md), `eventData`: [DeviceHealthEvent](../modules/_lifecycle_events_d_.md#devicehealthevent), `eventTime?`: string): *[HandlerResponse](../modules/_smart_app_d_.md#handlerresponse)*

**Parameters:**

Name | Type |
------ | ------ |
`context` | [SmartAppContext](../interfaces/_util_smart_app_context_d_.smartappcontext.md) |
`eventData` | [DeviceHealthEvent](../modules/_lifecycle_events_d_.md#devicehealthevent) |
`eventTime?` | string |

**Returns:** *[SmartApp](_smart_app_d_.smartapp.md)*

___

###  subscribedDeviceLifecycleEventHandler

▸ **subscribedDeviceLifecycleEventHandler**(`name`: string, `callback`: function): *[SmartApp](_smart_app_d_.smartapp.md)*

Defines a handler for device lifecycle event subscriptions. Device lifecycle events
occur whenever a device is created, deleted, updated, or moved to another room.
The name argument corresponds to the name specified when the subscription
is created by the `context.api.subscriptions.subscribeToDeviceHealth()` call. There can only
be one device lifecycle event handler for an app.

**Parameters:**

▪ **name**: *string*

the name used when the subscription was created

▪ **callback**: *function*

the handler to be called with the event

▸ (`context`: [SmartAppContext](../interfaces/_util_smart_app_context_d_.smartappcontext.md), `eventData`: [DeviceLifecycleEvent](../modules/_lifecycle_events_d_.md#devicelifecycleevent), `eventTime?`: string): *[HandlerResponse](../modules/_smart_app_d_.md#handlerresponse)*

**Parameters:**

Name | Type |
------ | ------ |
`context` | [SmartAppContext](../interfaces/_util_smart_app_context_d_.smartappcontext.md) |
`eventData` | [DeviceLifecycleEvent](../modules/_lifecycle_events_d_.md#devicelifecycleevent) |
`eventTime?` | string |

**Returns:** *[SmartApp](_smart_app_d_.smartapp.md)*

___

###  subscribedEventHandler

▸ **subscribedEventHandler**(`name`: string, `callback`: function, `type?`: [EventType](../modules/_lifecycle_events_d_.md#eventtype)): *[SmartApp](_smart_app_d_.smartapp.md)*

Defines a handler for any subscribed event. If the type of event is not specified
it defaults to DEVICE_EVENT.

**Parameters:**

▪ **name**: *string*

the name used when the subscription was created

▪ **callback**: *function*

the handler to be called with the event

▸ (`context`: [SmartAppContext](../interfaces/_util_smart_app_context_d_.smartappcontext.md), `eventData`: [DeviceEvent](../modules/_lifecycle_events_d_.md#deviceevent), `eventTime`: string): *[HandlerResponse](../modules/_smart_app_d_.md#handlerresponse)*

**Parameters:**

Name | Type |
------ | ------ |
`context` | [SmartAppContext](../interfaces/_util_smart_app_context_d_.smartappcontext.md) |
`eventData` | [DeviceEvent](../modules/_lifecycle_events_d_.md#deviceevent) |
`eventTime` | string |

▪`Optional`  **type**: *[EventType](../modules/_lifecycle_events_d_.md#eventtype)*

the type of event being subscribed to

**Returns:** *[SmartApp](_smart_app_d_.smartapp.md)*

___

###  subscribedHubHealthEventHandler

▸ **subscribedHubHealthEventHandler**(`name`: string, `callback`: function): *[SmartApp](_smart_app_d_.smartapp.md)*

Defines a handler for hub health event subscriptions. Hub health events occur
whenever a hub goes online or offline, or fails for some other reason.
The name argument corresponds to the name specified when the subscription
is created by the `context.api.subscriptions.subscribeToHubHealth()` call. There can only
be one hub health event handler for an app.

**Parameters:**

▪ **name**: *string*

the name used when the subscription was created

▪ **callback**: *function*

the handler to be called with the event

▸ (`context`: [SmartAppContext](../interfaces/_util_smart_app_context_d_.smartappcontext.md), `eventData`: [HubHealthEvent](../modules/_lifecycle_events_d_.md#hubhealthevent), `eventTime?`: string): *[HandlerResponse](../modules/_smart_app_d_.md#handlerresponse)*

**Parameters:**

Name | Type |
------ | ------ |
`context` | [SmartAppContext](../interfaces/_util_smart_app_context_d_.smartappcontext.md) |
`eventData` | [HubHealthEvent](../modules/_lifecycle_events_d_.md#hubhealthevent) |
`eventTime?` | string |

**Returns:** *[SmartApp](_smart_app_d_.smartapp.md)*

___

###  subscribedModeEventHandler

▸ **subscribedModeEventHandler**(`name`: string, `callback`: function): *[SmartApp](_smart_app_d_.smartapp.md)*

Defines a handler for location mode change subscriptions. The location mode can be changed
manually by the user or automatically with an automation or another SmartApp.
The name argument corresponds to the name specified when the subscription
is created by the `context.api.subscriptions.subscribeToModeChange()` call. There can only
be one mode change event handler for an app.

**Parameters:**

▪ **name**: *string*

the name used when the subscription was created

▪ **callback**: *function*

the handler to be called with the event

▸ (`context`: [SmartAppContext](../interfaces/_util_smart_app_context_d_.smartappcontext.md), `eventData`: [ModeEvent](../modules/_lifecycle_events_d_.md#modeevent), `eventTime?`: string): *[HandlerResponse](../modules/_smart_app_d_.md#handlerresponse)*

**Parameters:**

Name | Type |
------ | ------ |
`context` | [SmartAppContext](../interfaces/_util_smart_app_context_d_.smartappcontext.md) |
`eventData` | [ModeEvent](../modules/_lifecycle_events_d_.md#modeevent) |
`eventTime?` | string |

**Returns:** *[SmartApp](_smart_app_d_.smartapp.md)*

___

###  subscribedSceneLifecycleEventHandler

▸ **subscribedSceneLifecycleEventHandler**(`name`: string, `callback`: function): *[SmartApp](_smart_app_d_.smartapp.md)*

Defines a handler for scene lifecycle event subscriptions. Scene lifecycle events
occur whenever a scene is created, deleted, or updated.
The name argument corresponds the the name specified when the subscription
is created by the `context.api.subscriptions.subscribeToSceneLifecycle()` call. There can only
be one scene lifecycle event handler for an app.

**Parameters:**

▪ **name**: *string*

the name used when the subscription was created

▪ **callback**: *function*

the handler to be called with the event

▸ (`context`: [SmartAppContext](../interfaces/_util_smart_app_context_d_.smartappcontext.md), `eventData`: [SceneLifecycleEvent](../modules/_lifecycle_events_d_.md#scenelifecycleevent), `eventTime?`: string): *[HandlerResponse](../modules/_smart_app_d_.md#handlerresponse)*

**Parameters:**

Name | Type |
------ | ------ |
`context` | [SmartAppContext](../interfaces/_util_smart_app_context_d_.smartappcontext.md) |
`eventData` | [SceneLifecycleEvent](../modules/_lifecycle_events_d_.md#scenelifecycleevent) |
`eventTime?` | string |

**Returns:** *[SmartApp](_smart_app_d_.smartapp.md)*

___

###  subscribedSecurityArmStateEventHandler

▸ **subscribedSecurityArmStateEventHandler**(`name`: string, `callback`: function): *[SmartApp](_smart_app_d_.smartapp.md)*

Defines a handler for security system subscriptions. The handler will be called
whenever the SmartThings Home Monitor application is armed or disarmed.
The name argument corresponds to the name specified when the subscription
is created by the `context.api.subscriptions.subscribeToSecuritySystem()` call. There can only
be one security system event handler for an app.

**Parameters:**

▪ **name**: *string*

the name used when the subscription was created

▪ **callback**: *function*

the handler to be called with the event

▸ (`context`: [SmartAppContext](../interfaces/_util_smart_app_context_d_.smartappcontext.md), `eventData`: [SecurityArmStateEvent](../modules/_lifecycle_events_d_.md#securityarmstateevent), `eventTime?`: string): *[HandlerResponse](../modules/_smart_app_d_.md#handlerresponse)*

**Parameters:**

Name | Type |
------ | ------ |
`context` | [SmartAppContext](../interfaces/_util_smart_app_context_d_.smartappcontext.md) |
`eventData` | [SecurityArmStateEvent](../modules/_lifecycle_events_d_.md#securityarmstateevent) |
`eventTime?` | string |

**Returns:** *[SmartApp](_smart_app_d_.smartapp.md)*

___

###  unhandledRejectionHandler

▸ **unhandledRejectionHandler**(`callback`: function): *[SmartApp](_smart_app_d_.smartapp.md)*

Specify a function to be call if an unhandled rejection is encountered. The default
handler logs the stack trace of the error

**Parameters:**

▪ **callback**: *function*

▸ (`reason`: Error): *void*

**Parameters:**

Name | Type |
------ | ------ |
`reason` | Error |

**Returns:** *[SmartApp](_smart_app_d_.smartapp.md)*

___

###  uninstalled

▸ **uninstalled**(`callback`: function): *[SmartApp](_smart_app_d_.smartapp.md)*

Defines a handler to be called when an instance of this app is uninstalled

**Parameters:**

▪ **callback**: *function*

▸ (`context`: [SmartAppContext](../interfaces/_util_smart_app_context_d_.smartappcontext.md), `uninstallData`: [UninstallData](../modules/_lifecycle_events_d_.md#uninstalldata)): *[HandlerResponse](../modules/_smart_app_d_.md#handlerresponse)*

**Parameters:**

Name | Type |
------ | ------ |
`context` | [SmartAppContext](../interfaces/_util_smart_app_context_d_.smartappcontext.md) |
`uninstallData` | [UninstallData](../modules/_lifecycle_events_d_.md#uninstalldata) |

**Returns:** *[SmartApp](_smart_app_d_.smartapp.md)*

___

###  updated

▸ **updated**(`callback`: function): *[SmartApp](_smart_app_d_.smartapp.md)*

Defines a handler to be called whenever the app configuration is updated by the user. If no separate
`installed()` handler is defined, then this handler will also be called the first time the app
is installed

**Parameters:**

▪ **callback**: *function*

▸ (`context`: [SmartAppContext](../interfaces/_util_smart_app_context_d_.smartappcontext.md), `updateData`: [UpdateData](../modules/_lifecycle_events_d_.md#updatedata)): *[HandlerResponse](../modules/_smart_app_d_.md#handlerresponse)*

**Parameters:**

Name | Type |
------ | ------ |
`context` | [SmartAppContext](../interfaces/_util_smart_app_context_d_.smartappcontext.md) |
`updateData` | [UpdateData](../modules/_lifecycle_events_d_.md#updatedata) |

**Returns:** *[SmartApp](_smart_app_d_.smartapp.md)*

___

###  withContext

▸ **withContext**(`installedAppIdOrObject`: string | [ContextRecord](../interfaces/_smart_app_d_.contextrecord.md)): *Promise‹[SmartAppContext](../interfaces/_util_smart_app_context_d_.smartappcontext.md)›*

Returns a context object corresponding to the specified installedAppId or context record. If a context
record is supplied, then the resulting SmartApp context is constructed from its properties. If
an installed app UUID is specified, then the context for that installed instance will be read from
the context store.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`installedAppIdOrObject` | string &#124; [ContextRecord](../interfaces/_smart_app_d_.contextrecord.md) | either an installed app uuid or an object specifying the installed app id along with the auth and refresh tokens for the installed instance.  |

**Returns:** *Promise‹[SmartAppContext](../interfaces/_util_smart_app_context_d_.smartappcontext.md)›*

