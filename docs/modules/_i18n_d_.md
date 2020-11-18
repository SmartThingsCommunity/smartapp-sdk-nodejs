[SmartApp](../classes/_smart_app_d_.smartapp.md)

### Namespaces

* [i18n](_i18n_d_.md#i18n)

## Namespaces

###  i18n

• **i18n**:

###  ConfigurationOptions

• **ConfigurationOptions**:

### `Optional` api

• **api**? : *object*

Hash to specify different aliases for i18n's internal methods to apply on the request/response objects (method -> alias).
Note that this will *not* overwrite existing properties with the same name.

**`default`** undefined

#### Type declaration:

* \[ **method**: *string*\]: string

### `Optional` autoReload

• **autoReload**? : *boolean*

Watch for changes in json files to reload locale on updates

**`default`** false

### `Optional` cookie

• **cookie**? : *string*

Sets a custom cookie name to parse locale settings from

**`default`** null

### `Optional` defaultLocale

• **defaultLocale**? : *string*

Alter a site wide default locale

**`default`** "en"

### `Optional` directory

• **directory**? : *string*

Where to store json files, relative to modules directory

**`default`** "./locales"

### `Optional` directoryPermissions

• **directoryPermissions**? : *string*

Control mode on directory creation. Setting has no effect on win.

**`default`** null

### `Optional` extension

• **extension**? : *string*

Setting extension of json files (you might want to set this to '.js' according to webtranslateit)

**`default`** ".json"

### `Optional` fallbacks

• **fallbacks**? : *object*

Language fallback map

**`default`** {}

#### Type declaration:

* \[ **locale**: *string*\]: string

### `Optional` indent

• **indent**? : *string*

What to use as the indentation unit

**`default`** "\t"

### `Optional` locales

• **locales**? : *string[]*

Setup some locales - other locales default to en silently

**`default`** []

### `Optional` logDebugFn

• **logDebugFn**? : *function*

Setting of log level DEBUG

**`default`** require("debug")("i18n:debug")

#### Type declaration:

▸ (`msg`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`msg` | string |

### `Optional` logErrorFn

• **logErrorFn**? : *function*

Setting of log level ERROR

**`default`** require("debug")("i18n:error")

#### Type declaration:

▸ (`msg`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`msg` | string |

### `Optional` logWarnFn

• **logWarnFn**? : *function*

Setting of log level WARN

**`default`** require("debug")("i18n:warn")

#### Type declaration:

▸ (`msg`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`msg` | string |

### `Optional` objectNotation

• **objectNotation**? : *boolean*

Enable object notation

**`default`** false

### `Optional` prefix

• **prefix**? : *string*

Setting prefix of json files name (in case you use different locale files naming scheme (webapp-en.json), rather then just en.json)

**`default`** ""

### `Optional` preserveLegacyCase

• **preserveLegacyCase**? : *boolean*

Downcase locale when passed on queryParam; e.g. lang=en-US becomes en-us.
When set to false, the queryParam value will be used as passed; e.g. lang=en-US remains en-US.

**`default`** true

### `Optional` queryParameter

• **queryParameter**? : *string*

Query parameter to switch locale (ie. /home?lang=ch)

**`default`** null

### `Optional` register

• **register**? : *any*

object or [obj1, obj2] to bind the i18n api and current locale to

**`default`** null

### `Optional` syncFiles

• **syncFiles**? : *boolean*

Sync locale information across all files

**`default`** false

### `Optional` updateFiles

• **updateFiles**? : *boolean*

Whether to write new locale information to disk

**`default`** true
