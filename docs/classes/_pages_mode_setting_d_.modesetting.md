[Reference](../index.md) › [SmartApp](_smart_app_d_.smartapp.md) › [Page](_pages_page_d_.page.md) › [Section](_pages_section_d_.section.md) ›  [ModeSetting](_pages_mode_setting_d_.modesetting.md)

# ModeSetting

A device setting creates a control that allows the user to select one or more location modes. To allow the selection
of only one mode:
```
section.modeSetting('targetMode')
```
The allow the selection of more than one mode:
```
section.modeSetting('permittedModes').multiple(true)
```

## Methods

* [closeOnSelection](_pages_mode_setting_d_.modesetting.md#closeonselection)
* [defaultValue](_pages_mode_setting_d_.modesetting.md#defaultvalue)
* [description](_pages_mode_setting_d_.modesetting.md#description)
* [disabled](_pages_mode_setting_d_.modesetting.md#disabled)
* [multiple](_pages_mode_setting_d_.modesetting.md#multiple)
* [name](_pages_mode_setting_d_.modesetting.md#name)
* [required](_pages_mode_setting_d_.modesetting.md#required)
* [style](_pages_mode_setting_d_.modesetting.md#style)
* [submitOnChange](_pages_mode_setting_d_.modesetting.md#submitonchange)
* [translateDefaultValue](_pages_mode_setting_d_.modesetting.md#translatedefaultvalue)


###  closeOnSelection

▸ **closeOnSelection**(`value`: boolean): *[ModeSetting](_pages_mode_setting_d_.modesetting.md)*

Specifies whether this input should close on selection.

**Parameters:**

Name | Type |
------ | ------ |
`value` | boolean |

**Returns:** *[ModeSetting](_pages_mode_setting_d_.modesetting.md)*

___

###  defaultValue

▸ **defaultValue**(`value`: string | number): *[ModeSetting](_pages_mode_setting_d_.modesetting.md)*

*Inherited from [SectionSetting](_pages_section_setting_d_.sectionsetting.md).[defaultValue](_pages_section_setting_d_.sectionsetting.md#defaultvalue)*

Sets the initial value displayed in the setting when first shown to the user.

**Parameters:**

Name | Type |
------ | ------ |
`value` | string &#124; number |

**Returns:** *[ModeSetting](_pages_mode_setting_d_.modesetting.md)*

___

###  description

▸ **description**(`value`: string): *[ModeSetting](_pages_mode_setting_d_.modesetting.md)*

*Inherited from [SectionSetting](_pages_section_setting_d_.sectionsetting.md).[description](_pages_section_setting_d_.sectionsetting.md#description)*

Sets value displayed in the setting control. Defaults to 'Tap to Set' for most types of settings.

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *[ModeSetting](_pages_mode_setting_d_.modesetting.md)*

___

###  disabled

▸ **disabled**(`value`: boolean): *[ModeSetting](_pages_mode_setting_d_.modesetting.md)*

*Inherited from [SectionSetting](_pages_section_setting_d_.sectionsetting.md).[disabled](_pages_section_setting_d_.sectionsetting.md#disabled)*

Disables the ability to use the control

**Parameters:**

Name | Type |
------ | ------ |
`value` | boolean |

**Returns:** *[ModeSetting](_pages_mode_setting_d_.modesetting.md)*

___

###  multiple

▸ **multiple**(`boolean`: true): *[ModeSetting](_pages_mode_setting_d_.modesetting.md)*

Specifies whether this device setting can have multiple values.

**Parameters:**

Name | Type |
------ | ------ |
`boolean` | true |

**Returns:** *[ModeSetting](_pages_mode_setting_d_.modesetting.md)*

___

###  name

▸ **name**(`value`: string): *[ModeSetting](_pages_mode_setting_d_.modesetting.md)*

*Inherited from [SectionSetting](_pages_section_setting_d_.sectionsetting.md).[name](_pages_section_setting_d_.sectionsetting.md#name)*

Sets the name of this setting. Used to reference the setting value during the processing of events. Also
used as part of the i18n key for translating the displayed name and description of the setting. All settings
on a page must have unique names.

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *[ModeSetting](_pages_mode_setting_d_.modesetting.md)*

___

###  required

▸ **required**(`value`: boolean): *[ModeSetting](_pages_mode_setting_d_.modesetting.md)*

*Inherited from [SectionSetting](_pages_section_setting_d_.sectionsetting.md).[required](_pages_section_setting_d_.sectionsetting.md#required)*

Specifies that the control must be set in order to save the configuration page

**Parameters:**

Name | Type |
------ | ------ |
`value` | boolean |

**Returns:** *[ModeSetting](_pages_mode_setting_d_.modesetting.md)*

___

###  style

▸ **style**(`value`: [ModeStyle](../enums/_pages_mode_setting_d_.modestyle.md)): *[ModeSetting](_pages_mode_setting_d_.modesetting.md)*

Set the style of the setting in the UI.

**Parameters:**

Name | Type |
------ | ------ |
`value` | [ModeStyle](../enums/_pages_mode_setting_d_.modestyle.md) |

**Returns:** *[ModeSetting](_pages_mode_setting_d_.modesetting.md)*

___

###  submitOnChange

▸ **submitOnChange**(`value`: boolean): *[ModeSetting](_pages_mode_setting_d_.modesetting.md)*

*Inherited from [SectionSetting](_pages_section_setting_d_.sectionsetting.md).[submitOnChange](_pages_section_setting_d_.sectionsetting.md#submitonchange)*

Causes the page to be submitted and re-rendered any time the value of the setting is changed, rather than
requiring the user to tap Next or Done. This behavior is useful when the the presence or enabled/disabled
status of some settings depend on the value of other settings.

**Parameters:**

Name | Type |
------ | ------ |
`value` | boolean |

**Returns:** *[ModeSetting](_pages_mode_setting_d_.modesetting.md)*

___

###  translateDefaultValue

▸ **translateDefaultValue**(`value`: string): *[ModeSetting](_pages_mode_setting_d_.modesetting.md)*

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

**Returns:** *[ModeSetting](_pages_mode_setting_d_.modesetting.md)*

