[SmartApp](../classes/_smart_app_d_.smartapp.md) ›  [SmartAppOptions](_smart_app_d_.smartappoptions.md)
# SmartAppOptions
## Properties

* [apiUrl](_smart_app_d_.smartappoptions.md#optional-apiurl)
* [appId](_smart_app_d_.smartappoptions.md#optional-appid)
* [clientId](_smart_app_d_.smartappoptions.md#optional-clientid)
* [clientSecret](_smart_app_d_.smartappoptions.md#optional-clientsecret)
* [disableCustomDisplayName](_smart_app_d_.smartappoptions.md#optional-disablecustomdisplayname)
* [disableRemoveApp](_smart_app_d_.smartappoptions.md#optional-disableremoveapp)
* [enableEventLogging](_smart_app_d_.smartappoptions.md#optional-enableeventlogging)
* [jsonSpace](_smart_app_d_.smartappoptions.md#optional-jsonspace)
* [keyApiHost](_smart_app_d_.smartappoptions.md#optional-keyapihost)
* [keyCacheTTL](_smart_app_d_.smartappoptions.md#optional-keycachettl)
* [logUnhandledRejections](_smart_app_d_.smartappoptions.md#optional-logunhandledrejections)
* [logger](_smart_app_d_.smartappoptions.md#optional-logger)
* [permissions](_smart_app_d_.smartappoptions.md#optional-permissions)
* [publicKey](_smart_app_d_.smartappoptions.md#optional-publickey)
* [redirectUri](_smart_app_d_.smartappoptions.md#optional-redirecturi)
* [refreshUrl](_smart_app_d_.smartappoptions.md#optional-refreshurl)


### `Optional` apiUrl

• **apiUrl**? : *string*

Specify an alternate base URL for SmartThings API calls. This value is only necessary for testing new
API versions or non-production environments.

___

### `Optional` appId

• **appId**? : *string*

The `App.appId` or unique `App.appName` field of your SmartApp. This field
is necessary for any app that requires permissions in addition to those implied
by the app configuration settings.

___

### `Optional` clientId

• **clientId**? : *string*

The client id used to refresh expired tokens

___

### `Optional` clientSecret

• **clientSecret**? : *string*

The client secret used to refresh expired tokens

___

### `Optional` disableCustomDisplayName

• **disableCustomDisplayName**? : *boolean*

Disables the ability for users to rename the installed app instance in the configuration page.
This may be desirable for singleton apps that can only be installed once per location. Apps
that can be installed multiple times per location should not disable renaming, or the result
will be multiple apps with the same name.

___

### `Optional` disableRemoveApp

• **disableRemoveApp**? : *boolean*

Disables the button that allows users to remove the app from the configuration page.

___

### `Optional` enableEventLogging

• **enableEventLogging**? : *boolean*

Enables logging of all lifecycle events and responses

___

### `Optional` jsonSpace

• **jsonSpace**? : *number*

The number of spaces to indent pretty-printed JSON log output. Setting this value to zero disables
pretty-printing

___

### `Optional` keyApiHost

• **keyApiHost**? : *string*

Specify an alternate key host URL for use in validating request signatures. This value is only necessary for
testing new API versions or non-production environments.

___

### `Optional` keyCacheTTL

• **keyCacheTTL**? : *number*

Time-to-live of the ST_PADLOCK keys in milliseconds. The default value is 86400000 (24 hours).

___

### `Optional` logUnhandledRejections

• **logUnhandledRejections**? : *boolean*

Catch and log any unhandled rejections. Defaults to true

___

### `Optional` logger

• **logger**? : *[Logger](_util_log_d_.logger.md)*

Overrides the default Winston event and error logger that writes to the console

___

### `Optional` permissions

• **permissions**? : *string | string[]*

List of scopes explicitly required by this app. For example `['r:devices:*', and 'x:devices:*']
to be able to read and control all devices in the location. Note that you do not have to
provide this list for devices selected by the user in configuration settings.

___

### `Optional` publicKey

• **publicKey**? : *string*

The public key to be used for signature verification of lifecycle event calls. Not necessary for apps that
use ST_PADLOCK signatures.

___

### `Optional` redirectUri

• **redirectUri**? : *string*

The OAuth2 redirect uri used for API access integrations to SmartThings

___

### `Optional` refreshUrl

• **refreshUrl**? : *string*

Specify an alternate OAuth2 refresh URL for API access apps. This value is only necessary for testing new
API versions or non-production environments.

