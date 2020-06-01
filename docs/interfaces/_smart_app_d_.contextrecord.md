[SmartApp](../classes/_smart_app_d_.smartapp.md) ›  [ContextRecord](_smart_app_d_.contextrecord.md)
# ContextRecord
## Properties

* [authToken](_smart_app_d_.contextrecord.md#authtoken)
* [config](_smart_app_d_.contextrecord.md#optional-config)
* [installedAppId](_smart_app_d_.contextrecord.md#installedappid)
* [locationId](_smart_app_d_.contextrecord.md#optional-locationid)
* [refreshToken](_smart_app_d_.contextrecord.md#refreshtoken)


###  authToken

• **authToken**: *string*

Token used for calls to the SmartThings API

___

### `Optional` config

• **config**? : *InstalledAppConfiguration*

Configuration settings of the smartapp, i.e. device selections and other settings chosen by the user
during app installation. Does not apply to API Access apps.

___

###  installedAppId

• **installedAppId**: *string*

UUID of the installed app instance

___

### `Optional` locationId

• **locationId**? : *string*

The UUID of the location of the installed app instance. Included in the context so that an API isn't
required to retrieve the location of the installed app.

___

###  refreshToken

• **refreshToken**: *string*

Token used to refresh expired authTokens

