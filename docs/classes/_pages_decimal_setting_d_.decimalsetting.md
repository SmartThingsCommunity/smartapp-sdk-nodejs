[Reference](../index.md) › [SmartApp](_smart_app_d_.smartapp.md) › [Page](_pages_page_d_.page.md) › [Section](_pages_section_d_.section.md) ›  [DecimalSetting](_pages_decimal_setting_d_.decimalsetting.md)

# DecimalSetting

A decimal setting creates an input box with a numeric keyboard that includes the
decimal point key.
```
section.decimalSetting("temperatureThreshold")
    .min(-10)
    .max(100)
    .postMessage('C')
```

## Methods

* [defaultValue](_pages_decimal_setting_d_.decimalsetting.md#defaultvalue)
* [description](_pages_decimal_setting_d_.decimalsetting.md#description)
* [disabled](_pages_decimal_setting_d_.decimalsetting.md#disabled)
* [image](_pages_decimal_setting_d_.decimalsetting.md#image)
* [max](_pages_decimal_setting_d_.decimalsetting.md#max)
* [min](_pages_decimal_setting_d_.decimalsetting.md#min)
* [name](_pages_decimal_setting_d_.decimalsetting.md#name)
* [postMessage](_pages_decimal_setting_d_.decimalsetting.md#postmessage)
* [required](_pages_decimal_setting_d_.decimalsetting.md#required)
* [submitOnChange](_pages_decimal_setting_d_.decimalsetting.md#submitonchange)
* [translateDefaultValue](_pages_decimal_setting_d_.decimalsetting.md#translatedefaultvalue)


###  defaultValue

▸ **defaultValue**(`value`: string | number): *[DecimalSetting](_pages_decimal_setting_d_.decimalsetting.md)*

*Inherited from [SectionSetting](_pages_section_setting_d_.sectionsetting.md).[defaultValue](_pages_section_setting_d_.sectionsetting.md#defaultvalue)*

Sets the initial value displayed in the setting when first shown to the user.

**Parameters:**

Name | Type |
------ | ------ |
`value` | string &#124; number |

**Returns:** *[DecimalSetting](_pages_decimal_setting_d_.decimalsetting.md)*

___

###  description

▸ **description**(`value`: string): *[DecimalSetting](_pages_decimal_setting_d_.decimalsetting.md)*

*Inherited from [SectionSetting](_pages_section_setting_d_.sectionsetting.md).[description](_pages_section_setting_d_.sectionsetting.md#description)*

Sets value displayed in the setting control. Defaults to 'Tap to Set' for most types of settings.

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *[DecimalSetting](_pages_decimal_setting_d_.decimalsetting.md)*

___

###  disabled

▸ **disabled**(`value`: boolean): *[DecimalSetting](_pages_decimal_setting_d_.decimalsetting.md)*

*Inherited from [SectionSetting](_pages_section_setting_d_.sectionsetting.md).[disabled](_pages_section_setting_d_.sectionsetting.md#disabled)*

Disables the ability to use the control

**Parameters:**

Name | Type |
------ | ------ |
`value` | boolean |

**Returns:** *[DecimalSetting](_pages_decimal_setting_d_.decimalsetting.md)*

___

###  image

▸ **image**(`source`: string): *[DecimalSetting](_pages_decimal_setting_d_.decimalsetting.md)*

Specify an image URL to display with this setting

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`source` | string | HTTPS url or Base64-encoded data URI. Max length 2048 characters.  |

**Returns:** *[DecimalSetting](_pages_decimal_setting_d_.decimalsetting.md)*

___

###  max

▸ **max**(`value`: number): *[DecimalSetting](_pages_decimal_setting_d_.decimalsetting.md)*

The maximum inclusive value the value can be set to.

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *[DecimalSetting](_pages_decimal_setting_d_.decimalsetting.md)*

___

###  min

▸ **min**(`value`: number): *[DecimalSetting](_pages_decimal_setting_d_.decimalsetting.md)*

The minimum inclusive value the decimal can be set to.

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *[DecimalSetting](_pages_decimal_setting_d_.decimalsetting.md)*

___

###  name

▸ **name**(`value`: string): *[DecimalSetting](_pages_decimal_setting_d_.decimalsetting.md)*

*Inherited from [SectionSetting](_pages_section_setting_d_.sectionsetting.md).[name](_pages_section_setting_d_.sectionsetting.md#name)*

Sets the name of this setting. Used to reference the setting value during the processing of events. Also
used as part of the i18n key for translating the displayed name and description of the setting. All settings
on a page must have unique names.

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *[DecimalSetting](_pages_decimal_setting_d_.decimalsetting.md)*

___

###  postMessage

▸ **postMessage**(`value`: string): *[DecimalSetting](_pages_decimal_setting_d_.decimalsetting.md)*

A string to be shown after the text input field. One common use for this field is to
specify a unit of measure. Omitting the value and calling `postMessage()` will set the
value to the default i18n string, allowing translations to be defines in the locale
file in the usual way.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | string | Max length 10 characters  |

**Returns:** *[DecimalSetting](_pages_decimal_setting_d_.decimalsetting.md)*

___

###  required

▸ **required**(`value`: boolean): *[DecimalSetting](_pages_decimal_setting_d_.decimalsetting.md)*

*Inherited from [SectionSetting](_pages_section_setting_d_.sectionsetting.md).[required](_pages_section_setting_d_.sectionsetting.md#required)*

Specifies that the control must be set in order to save the configuration page

**Parameters:**

Name | Type |
------ | ------ |
`value` | boolean |

**Returns:** *[DecimalSetting](_pages_decimal_setting_d_.decimalsetting.md)*

___

###  submitOnChange

▸ **submitOnChange**(`value`: boolean): *[DecimalSetting](_pages_decimal_setting_d_.decimalsetting.md)*

*Inherited from [SectionSetting](_pages_section_setting_d_.sectionsetting.md).[submitOnChange](_pages_section_setting_d_.sectionsetting.md#submitonchange)*

Causes the page to be submitted and re-rendered any time the value of the setting is changed, rather than
requiring the user to tap Next or Done. This behavior is useful when the the presence or enabled/disabled
status of some settings depend on the value of other settings.

**Parameters:**

Name | Type |
------ | ------ |
`value` | boolean |

**Returns:** *[DecimalSetting](_pages_decimal_setting_d_.decimalsetting.md)*

___

###  translateDefaultValue

▸ **translateDefaultValue**(`value`: string): *[DecimalSetting](_pages_decimal_setting_d_.decimalsetting.md)*

*Inherited from [SectionSetting](_pages_section_setting_d_.sectionsetting.md).[translateDefaultValue](_pages_section_setting_d_.sectionsetting.md#translatedefaultvalue)*

Sets the initial value of the setting by passing the specified value through the i18n translation process.
You might want to use `translatedDefaultValue` rather than `defaultValue` in a case like setting the
default value of a text setting to the word "Kitchen" in the language of the user. `defaultValue('Kitchen')`
will set the value "Kitchen" regardless of the user's language or whether there were localization file entries
for the key "Kitchen". However, `translateDefaultValue('Kitchen')` will look for a localization file entry
with the key "Kitchen" and set the default to that value.

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *[DecimalSetting](_pages_decimal_setting_d_.decimalsetting.md)*

