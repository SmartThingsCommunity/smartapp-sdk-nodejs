[Reference](../index.md) › [SmartApp](_smart_app_d_.smartapp.md) › [Page](_pages_page_d_.page.md) › [Section](_pages_section_d_.section.md) ›  [BooleanSetting](_pages_boolean_setting_d_.booleansetting.md)

# BooleanSetting

A boolean setting creates a toggle control that can be turned on an off by the user.
```
section.booleanSetting('turnBackOn')
```

## Methods

* [defaultValue](_pages_boolean_setting_d_.booleansetting.md#defaultvalue)
* [description](_pages_boolean_setting_d_.booleansetting.md#description)
* [disabled](_pages_boolean_setting_d_.booleansetting.md#disabled)
* [image](_pages_boolean_setting_d_.booleansetting.md#image)
* [name](_pages_boolean_setting_d_.booleansetting.md#name)
* [required](_pages_boolean_setting_d_.booleansetting.md#required)
* [submitOnChange](_pages_boolean_setting_d_.booleansetting.md#submitonchange)
* [translateDefaultValue](_pages_boolean_setting_d_.booleansetting.md#translatedefaultvalue)


###  defaultValue

▸ **defaultValue**(`value`: string | number): *[BooleanSetting](_pages_boolean_setting_d_.booleansetting.md)*

*Inherited from [SectionSetting](_pages_section_setting_d_.sectionsetting.md).[defaultValue](_pages_section_setting_d_.sectionsetting.md#defaultvalue)*

Sets the initial value displayed in the setting when first shown to the user.

**Parameters:**

Name | Type |
------ | ------ |
`value` | string &#124; number |

**Returns:** *[BooleanSetting](_pages_boolean_setting_d_.booleansetting.md)*

___

###  description

▸ **description**(`value`: string): *[BooleanSetting](_pages_boolean_setting_d_.booleansetting.md)*

*Inherited from [SectionSetting](_pages_section_setting_d_.sectionsetting.md).[description](_pages_section_setting_d_.sectionsetting.md#description)*

Sets value displayed in the setting control. Defaults to 'Tap to Set' for most types of settings.

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *[BooleanSetting](_pages_boolean_setting_d_.booleansetting.md)*

___

###  disabled

▸ **disabled**(`value`: boolean): *[BooleanSetting](_pages_boolean_setting_d_.booleansetting.md)*

*Inherited from [SectionSetting](_pages_section_setting_d_.sectionsetting.md).[disabled](_pages_section_setting_d_.sectionsetting.md#disabled)*

Disables the ability to use the control

**Parameters:**

Name | Type |
------ | ------ |
`value` | boolean |

**Returns:** *[BooleanSetting](_pages_boolean_setting_d_.booleansetting.md)*

___

###  image

▸ **image**(`source`: string): *[BooleanSetting](_pages_boolean_setting_d_.booleansetting.md)*

Specify an image URL to display with this setting

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`source` | string | HTTPS url or Base64-encoded data URI. Max length 2048 characters.  |

**Returns:** *[BooleanSetting](_pages_boolean_setting_d_.booleansetting.md)*

___

###  name

▸ **name**(`value`: string): *[BooleanSetting](_pages_boolean_setting_d_.booleansetting.md)*

*Inherited from [SectionSetting](_pages_section_setting_d_.sectionsetting.md).[name](_pages_section_setting_d_.sectionsetting.md#name)*

Sets the name of this setting. Used to reference the setting value during the processing of events. Also
used as part of the i18n key for translating the displayed name and description of the setting. All settings
on a page must have unique names.

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *[BooleanSetting](_pages_boolean_setting_d_.booleansetting.md)*

___

###  required

▸ **required**(`value`: boolean): *[BooleanSetting](_pages_boolean_setting_d_.booleansetting.md)*

*Inherited from [SectionSetting](_pages_section_setting_d_.sectionsetting.md).[required](_pages_section_setting_d_.sectionsetting.md#required)*

Specifies that the control must be set in order to save the configuration page

**Parameters:**

Name | Type |
------ | ------ |
`value` | boolean |

**Returns:** *[BooleanSetting](_pages_boolean_setting_d_.booleansetting.md)*

___

###  submitOnChange

▸ **submitOnChange**(`value`: boolean): *[BooleanSetting](_pages_boolean_setting_d_.booleansetting.md)*

*Inherited from [SectionSetting](_pages_section_setting_d_.sectionsetting.md).[submitOnChange](_pages_section_setting_d_.sectionsetting.md#submitonchange)*

Causes the page to be submitted and re-rendered any time the value of the setting is changed, rather than
requiring the user to tap Next or Done. This behavior is useful when the the presence or enabled/disabled
status of some settings depend on the value of other settings.

**Parameters:**

Name | Type |
------ | ------ |
`value` | boolean |

**Returns:** *[BooleanSetting](_pages_boolean_setting_d_.booleansetting.md)*

___

###  translateDefaultValue

▸ **translateDefaultValue**(`value`: string): *[BooleanSetting](_pages_boolean_setting_d_.booleansetting.md)*

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

**Returns:** *[BooleanSetting](_pages_boolean_setting_d_.booleansetting.md)*

