[SmartApp](../classes/_smart_app_d_.smartapp.md) ›  [SmartAppContext](_util_smart_app_context_d_.smartappcontext.md)
# SmartAppContext
## Properties

* [api](_util_smart_app_context_d_.smartappcontext.md#api)
* [config](_util_smart_app_context_d_.smartappcontext.md#config)

## Methods

* [configBooleanValue](_util_smart_app_context_d_.smartappcontext.md#configbooleanvalue)
* [configDateValue](_util_smart_app_context_d_.smartappcontext.md#configdatevalue)
* [configDevices](_util_smart_app_context_d_.smartappcontext.md#configdevices)
* [configDevicesWithState](_util_smart_app_context_d_.smartappcontext.md#configdeviceswithstate)
* [configModeIds](_util_smart_app_context_d_.smartappcontext.md#configmodeids)
* [configNumberValue](_util_smart_app_context_d_.smartappcontext.md#confignumbervalue)
* [configStringValue](_util_smart_app_context_d_.smartappcontext.md#configstringvalue)
* [configTimeString](_util_smart_app_context_d_.smartappcontext.md#configtimestring)
* [getItem](_util_smart_app_context_d_.smartappcontext.md#getitem)
* [isAuthenticated](_util_smart_app_context_d_.smartappcontext.md#isauthenticated)
* [removeAllItems](_util_smart_app_context_d_.smartappcontext.md#removeallitems)
* [removeItem](_util_smart_app_context_d_.smartappcontext.md#removeitem)
* [setItem](_util_smart_app_context_d_.smartappcontext.md#setitem)
* [retrieveTokens](_util_smart_app_context_d_.smartappcontext.md#retrievetokens)
* [setLocationId](_util_smart_app_context_d_.smartappcontext.md#setlocationid)


###  api

• **api**: *SmartThingsClient*

An instance of the SmartThings core API instantiated with the access token for the installed app instance.

___

###  config

• **config**: *[ConfigMap](../modules/_lifecycle_events_d_.md#configmap)*

The SmartApp configuration object containing the values of all user selections made during app installation.


###  configBooleanValue

▸ **configBooleanValue**(`id`: string): *boolean*

Returns the specified configuration setting typed as a boolean

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | the id specified when the setting was created  |

**Returns:** *boolean*

___

###  configDateValue

▸ **configDateValue**(`id`: string): *Date*

Returns the specified configuration setting typed as a Date object

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | the id specified when the setting was created  |

**Returns:** *Date*

___

###  configDevices

▸ **configDevices**(`id`: string): *Promise‹[DeviceContext](_util_smart_app_context_d_.devicecontext.md)[]›*

Retrieves the devices specified in the configuration along with their names and
labels (which are not stored in the configuration map and so require API calls)

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | the id specified when the setting was created  |

**Returns:** *Promise‹[DeviceContext](_util_smart_app_context_d_.devicecontext.md)[]›*

___

###  configDevicesWithState

▸ **configDevicesWithState**(`id`: string): *Promise‹[DeviceStateContext](_util_smart_app_context_d_.devicestatecontext.md)[]›*

Retrieves the devices specified in the configuration along with their names,
labels, and the current values of all of their capabilities.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | the id specified when the setting was created  |

**Returns:** *Promise‹[DeviceStateContext](_util_smart_app_context_d_.devicestatecontext.md)[]›*

___

###  configModeIds

▸ **configModeIds**(`id`: string): *string[]*

Returns a list of mode ids from the specified mode configuration setting

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | the id specified when the setting was created  |

**Returns:** *string[]*

___

###  configNumberValue

▸ **configNumberValue**(`id`: string): *number*

Returns the specified configuration setting typed as a number

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | the id specified when the setting was created  |

**Returns:** *number*

___

###  configStringValue

▸ **configStringValue**(`id`: string): *string*

Returns the specified configuration setting typed as a string

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | the id specified when the setting was created  |

**Returns:** *string*

___

###  configTimeString

▸ **configTimeString**(`id`: string): *string*

Returns the specified configuration setting typed as a time string

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | the id specified when the setting was created  |

**Returns:** *string*

___

###  isAuthenticated

▸ **isAuthenticated**(): *boolean*

Tests whether the context is authenticated to make API calls, i.e. has an accessToken.
Note that this method does not actually test the validity of the token, but rather
whether it is present or not. Contexts of CONFIGURATION lifecycle events are not
authenticated. Therefore if an app needs to make API calls during the configuration
lifecycle it must use a token store to authenticate itself.

**Returns:** *boolean*

___

###  retrieveTokens

▸ **retrieveTokens**(): *Promise‹[SmartAppContext](_util_smart_app_context_d_.smartappcontext.md)›*

Retrieve the tokens of the installed instance from the token store and return a new, authenticated
SmartAppContext. This method is typically used to allow API calls to be made from the handlers
of CONFIGURATION/PAGE lifecycle events.

**Returns:** *Promise‹[SmartAppContext](_util_smart_app_context_d_.smartappcontext.md)›*

___

###  setLocationId

▸ **setLocationId**(`id`: string): *void*

Sets the location of the app context. Explicitly setting the location is typically necessary when an
API Access app is first authorized. It is not needed when handling lifecycle events.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | the location UUID  |

**Returns:** *void*

___

###  getItem

▸ **getItem**(`key`: string): *Promise‹any›*

Returns the value of the specified key from the app context state store

**Parameters:**

Name | Type | Description                          |
------ | ------ |--------------------------------------|
`key` | string | the name of the property to retrieve |

**Returns:** *Promise‹any›*

###  setItem

▸ **setItem**(`key`: string, `value`: any): *Promise‹void›*

Add or replaces the value of the specified key in the app context state store. The value can be any
JSON-serializable type.

**Parameters:**

Name | Type   | Description                          |
------ |--------|--------------------------------------|
`key` | string | the name of the property to retrieve |
`value` | any    | the value to be stored               |

**Returns:** *Promise‹void›*

___

###  removeItem

▸ **removeItem**(`key`: string): *Promise‹void›*

Removes the specified entry from the app context state store

**Parameters:**

Name | Type | Description                        |
------ | ------ |------------------------------------|
`key` | string | the name of the property to remove |

**Returns:** *Promise‹void›*

___

###  removeAllItems

▸ **removeAllItems**(): *Promise‹void›*

Removes all items from the app context state store

**Returns:** *Promise‹void›*

