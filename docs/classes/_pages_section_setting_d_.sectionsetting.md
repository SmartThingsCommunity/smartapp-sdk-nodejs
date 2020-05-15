[Reference](../index.md) › [SmartApp](_smart_app_d_.smartapp.md) › [Page](_pages_page_d_.page.md) › [Section](_pages_section_d_.section.md) ›  [SectionSetting](_pages_section_setting_d_.sectionsetting.md)

# SectionSetting <**T**>

Base class for all section settings

## Type parameters

▪ **T**

## Methods

* [defaultValue](_pages_section_setting_d_.sectionsetting.md#defaultvalue)
* [description](_pages_section_setting_d_.sectionsetting.md#description)
* [disabled](_pages_section_setting_d_.sectionsetting.md#disabled)
* [name](_pages_section_setting_d_.sectionsetting.md#name)
* [required](_pages_section_setting_d_.sectionsetting.md#required)
* [submitOnChange](_pages_section_setting_d_.sectionsetting.md#submitonchange)
* [translateDefaultValue](_pages_section_setting_d_.sectionsetting.md#translatedefaultvalue)


###  defaultValue

▸ **defaultValue**(`value`: string | number): *T*

Sets the initial value displayed in the setting when first shown to the user.

**Parameters:**

Name | Type |
------ | ------ |
`value` | string &#124; number |

**Returns:** *T*

___

###  description

▸ **description**(`value`: string): *T*

Sets value displayed in the setting control. Defaults to 'Tap to Set' for most types of settings.

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *T*

___

###  disabled

▸ **disabled**(`value`: boolean): *T*

Disables the ability to use the control

**Parameters:**

Name | Type |
------ | ------ |
`value` | boolean |

**Returns:** *T*

___

###  name

▸ **name**(`value`: string): *T*

Sets the name of this setting. Used to reference the setting value during the processing of events. Also
used as part of the i18n key for translating the displayed name and description of the setting. All settings
on a page must have unique names.

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *T*

___

###  required

▸ **required**(`value`: boolean): *T*

Specifies that the control must be set in order to save the configuration page

**Parameters:**

Name | Type |
------ | ------ |
`value` | boolean |

**Returns:** *T*

___

###  submitOnChange

▸ **submitOnChange**(`value`: boolean): *T*

Causes the page to be submitted and re-rendered any time the value of the setting is changed, rather than
requiring the user to tap Next or Done. This behavior is useful when the the presence or enabled/disabled
status of some settings depend on the value of other settings.

**Parameters:**

Name | Type |
------ | ------ |
`value` | boolean |

**Returns:** *T*

___

###  translateDefaultValue

▸ **translateDefaultValue**(`value`: string): *T*

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

**Returns:** *T*

