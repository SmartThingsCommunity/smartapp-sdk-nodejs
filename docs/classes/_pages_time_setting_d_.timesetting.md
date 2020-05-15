[Reference](../index.md) › [SmartApp](_smart_app_d_.smartapp.md) › [Page](_pages_page_d_.page.md) › [Section](_pages_section_d_.section.md) ›  [TimeSetting](_pages_time_setting_d_.timesetting.md)

# TimeSetting

A time setting creates a control that supports the entry of the time of day.
This value can be used in scheduling one-per-day events at a specific time.
For example this setting:
```
section.timeSetting('happyHour')
```
Coupled with this schedule call will execute a handler at the selected time each day:
```
context.schedules.runDaily('happyHourHandler', context.config.happyHour)
```

## Methods

* [defaultValue](_pages_time_setting_d_.timesetting.md#defaultvalue)
* [description](_pages_time_setting_d_.timesetting.md#description)
* [disabled](_pages_time_setting_d_.timesetting.md#disabled)
* [image](_pages_time_setting_d_.timesetting.md#image)
* [max](_pages_time_setting_d_.timesetting.md#max)
* [min](_pages_time_setting_d_.timesetting.md#min)
* [name](_pages_time_setting_d_.timesetting.md#name)
* [required](_pages_time_setting_d_.timesetting.md#required)
* [submitOnChange](_pages_time_setting_d_.timesetting.md#submitonchange)
* [translateDefaultValue](_pages_time_setting_d_.timesetting.md#translatedefaultvalue)


###  defaultValue

▸ **defaultValue**(`value`: string | number): *[TimeSetting](_pages_time_setting_d_.timesetting.md)*

*Inherited from [SectionSetting](_pages_section_setting_d_.sectionsetting.md).[defaultValue](_pages_section_setting_d_.sectionsetting.md#defaultvalue)*

Sets the initial value displayed in the setting when first shown to the user.

**Parameters:**

Name | Type |
------ | ------ |
`value` | string &#124; number |

**Returns:** *[TimeSetting](_pages_time_setting_d_.timesetting.md)*

___

###  description

▸ **description**(`value`: string): *[TimeSetting](_pages_time_setting_d_.timesetting.md)*

*Inherited from [SectionSetting](_pages_section_setting_d_.sectionsetting.md).[description](_pages_section_setting_d_.sectionsetting.md#description)*

Sets value displayed in the setting control. Defaults to 'Tap to Set' for most types of settings.

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *[TimeSetting](_pages_time_setting_d_.timesetting.md)*

___

###  disabled

▸ **disabled**(`value`: boolean): *[TimeSetting](_pages_time_setting_d_.timesetting.md)*

*Inherited from [SectionSetting](_pages_section_setting_d_.sectionsetting.md).[disabled](_pages_section_setting_d_.sectionsetting.md#disabled)*

Disables the ability to use the control

**Parameters:**

Name | Type |
------ | ------ |
`value` | boolean |

**Returns:** *[TimeSetting](_pages_time_setting_d_.timesetting.md)*

___

###  image

▸ **image**(`source`: string): *[TimeSetting](_pages_time_setting_d_.timesetting.md)*

Specify an image URL to display with this setting

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`source` | string | HTTPS url or Base64-encoded data URI. Max length 2048 characters.  |

**Returns:** *[TimeSetting](_pages_time_setting_d_.timesetting.md)*

___

###  max

▸ **max**(`value`: string): *[TimeSetting](_pages_time_setting_d_.timesetting.md)*

The latest time that can be entered

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *[TimeSetting](_pages_time_setting_d_.timesetting.md)*

___

###  min

▸ **min**(`value`: string): *[TimeSetting](_pages_time_setting_d_.timesetting.md)*

The earlies time that can be entered

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *[TimeSetting](_pages_time_setting_d_.timesetting.md)*

___

###  name

▸ **name**(`value`: string): *[TimeSetting](_pages_time_setting_d_.timesetting.md)*

*Inherited from [SectionSetting](_pages_section_setting_d_.sectionsetting.md).[name](_pages_section_setting_d_.sectionsetting.md#name)*

Sets the name of this setting. Used to reference the setting value during the processing of events. Also
used as part of the i18n key for translating the displayed name and description of the setting. All settings
on a page must have unique names.

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *[TimeSetting](_pages_time_setting_d_.timesetting.md)*

___

###  required

▸ **required**(`value`: boolean): *[TimeSetting](_pages_time_setting_d_.timesetting.md)*

*Inherited from [SectionSetting](_pages_section_setting_d_.sectionsetting.md).[required](_pages_section_setting_d_.sectionsetting.md#required)*

Specifies that the control must be set in order to save the configuration page

**Parameters:**

Name | Type |
------ | ------ |
`value` | boolean |

**Returns:** *[TimeSetting](_pages_time_setting_d_.timesetting.md)*

___

###  submitOnChange

▸ **submitOnChange**(`value`: boolean): *[TimeSetting](_pages_time_setting_d_.timesetting.md)*

*Inherited from [SectionSetting](_pages_section_setting_d_.sectionsetting.md).[submitOnChange](_pages_section_setting_d_.sectionsetting.md#submitonchange)*

Causes the page to be submitted and re-rendered any time the value of the setting is changed, rather than
requiring the user to tap Next or Done. This behavior is useful when the the presence or enabled/disabled
status of some settings depend on the value of other settings.

**Parameters:**

Name | Type |
------ | ------ |
`value` | boolean |

**Returns:** *[TimeSetting](_pages_time_setting_d_.timesetting.md)*

___

###  translateDefaultValue

▸ **translateDefaultValue**(`value`: string): *[TimeSetting](_pages_time_setting_d_.timesetting.md)*

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

**Returns:** *[TimeSetting](_pages_time_setting_d_.timesetting.md)*

