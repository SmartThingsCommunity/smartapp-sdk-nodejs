[Reference](../index.md) › [SmartApp](_smart_app_d_.smartapp.md) › [Page](_pages_page_d_.page.md) › [Section](_pages_section_d_.section.md) ›  [SoundSetting](_pages_sound_setting_d_.soundsetting.md)

# SoundSetting

## Methods

* [defaultValue](_pages_sound_setting_d_.soundsetting.md#defaultvalue)
* [description](_pages_sound_setting_d_.soundsetting.md#description)
* [disabled](_pages_sound_setting_d_.soundsetting.md#disabled)
* [groupedOptions](_pages_sound_setting_d_.soundsetting.md#groupedoptions)
* [multiple](_pages_sound_setting_d_.soundsetting.md#multiple)
* [name](_pages_sound_setting_d_.soundsetting.md#name)
* [options](_pages_sound_setting_d_.soundsetting.md#options)
* [required](_pages_sound_setting_d_.soundsetting.md#required)
* [style](_pages_sound_setting_d_.soundsetting.md#style)
* [submitOnChange](_pages_sound_setting_d_.soundsetting.md#submitonchange)
* [translateDefaultValue](_pages_sound_setting_d_.soundsetting.md#translatedefaultvalue)


###  defaultValue

▸ **defaultValue**(`value`: string | number): *[SoundSetting](_pages_sound_setting_d_.soundsetting.md)*

*Inherited from [SectionSetting](_pages_section_setting_d_.sectionsetting.md).[defaultValue](_pages_section_setting_d_.sectionsetting.md#defaultvalue)*

Sets the initial value displayed in the setting when first shown to the user.

**Parameters:**

Name | Type |
------ | ------ |
`value` | string &#124; number |

**Returns:** *[SoundSetting](_pages_sound_setting_d_.soundsetting.md)*

___

###  description

▸ **description**(`value`: string): *[SoundSetting](_pages_sound_setting_d_.soundsetting.md)*

*Inherited from [SectionSetting](_pages_section_setting_d_.sectionsetting.md).[description](_pages_section_setting_d_.sectionsetting.md#description)*

Sets value displayed in the setting control. Defaults to 'Tap to Set' for most types of settings.

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *[SoundSetting](_pages_sound_setting_d_.soundsetting.md)*

___

###  disabled

▸ **disabled**(`value`: boolean): *[SoundSetting](_pages_sound_setting_d_.soundsetting.md)*

*Inherited from [SectionSetting](_pages_section_setting_d_.sectionsetting.md).[disabled](_pages_section_setting_d_.sectionsetting.md#disabled)*

Disables the ability to use the control

**Parameters:**

Name | Type |
------ | ------ |
`value` | boolean |

**Returns:** *[SoundSetting](_pages_sound_setting_d_.soundsetting.md)*

___

###  groupedOptions

▸ **groupedOptions**(`groupedOptions`: [SoundOptionGroup](../interfaces/_pages_sound_setting_d_.soundoptiongroup.md)[]): *[SoundSetting](_pages_sound_setting_d_.soundsetting.md)*

Sets the possible sound option items as named groups of options

**Parameters:**

Name | Type |
------ | ------ |
`groupedOptions` | [SoundOptionGroup](../interfaces/_pages_sound_setting_d_.soundoptiongroup.md)[] |

**Returns:** *[SoundSetting](_pages_sound_setting_d_.soundsetting.md)*

___

###  multiple

▸ **multiple**(`value`: boolean): *[SoundSetting](_pages_sound_setting_d_.soundsetting.md)*

Specifies whether this device setting can have multiple values.

**Parameters:**

Name | Type |
------ | ------ |
`value` | boolean |

**Returns:** *[SoundSetting](_pages_sound_setting_d_.soundsetting.md)*

___

###  name

▸ **name**(`value`: string): *[SoundSetting](_pages_sound_setting_d_.soundsetting.md)*

*Inherited from [SectionSetting](_pages_section_setting_d_.sectionsetting.md).[name](_pages_section_setting_d_.sectionsetting.md#name)*

Sets the name of this setting. Used to reference the setting value during the processing of events. Also
used as part of the i18n key for translating the displayed name and description of the setting. All settings
on a page must have unique names.

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *[SoundSetting](_pages_sound_setting_d_.soundsetting.md)*

___

###  options

▸ **options**(`options`: [SoundOptionItem](../interfaces/_pages_sound_setting_d_.soundoptionitem.md)[]): *[SoundSetting](_pages_sound_setting_d_.soundsetting.md)*

Sets the possible sound option items as one list of options

**Parameters:**

Name | Type |
------ | ------ |
`options` | [SoundOptionItem](../interfaces/_pages_sound_setting_d_.soundoptionitem.md)[] |

**Returns:** *[SoundSetting](_pages_sound_setting_d_.soundsetting.md)*

___

###  required

▸ **required**(`value`: boolean): *[SoundSetting](_pages_sound_setting_d_.soundsetting.md)*

*Inherited from [SectionSetting](_pages_section_setting_d_.sectionsetting.md).[required](_pages_section_setting_d_.sectionsetting.md#required)*

Specifies that the control must be set in order to save the configuration page

**Parameters:**

Name | Type |
------ | ------ |
`value` | boolean |

**Returns:** *[SoundSetting](_pages_sound_setting_d_.soundsetting.md)*

___

###  style

▸ **style**(`value`: [SoundOptionsStyle](../enums/_pages_sound_setting_d_.soundoptionsstyle.md)): *[SoundSetting](_pages_sound_setting_d_.soundsetting.md)*

Set the style of the setting in the UI.

**Parameters:**

Name | Type |
------ | ------ |
`value` | [SoundOptionsStyle](../enums/_pages_sound_setting_d_.soundoptionsstyle.md) |

**Returns:** *[SoundSetting](_pages_sound_setting_d_.soundsetting.md)*

___

###  submitOnChange

▸ **submitOnChange**(`value`: boolean): *[SoundSetting](_pages_sound_setting_d_.soundsetting.md)*

*Inherited from [SectionSetting](_pages_section_setting_d_.sectionsetting.md).[submitOnChange](_pages_section_setting_d_.sectionsetting.md#submitonchange)*

Causes the page to be submitted and re-rendered any time the value of the setting is changed, rather than
requiring the user to tap Next or Done. This behavior is useful when the the presence or enabled/disabled
status of some settings depend on the value of other settings.

**Parameters:**

Name | Type |
------ | ------ |
`value` | boolean |

**Returns:** *[SoundSetting](_pages_sound_setting_d_.soundsetting.md)*

___

###  translateDefaultValue

▸ **translateDefaultValue**(`value`: string): *[SoundSetting](_pages_sound_setting_d_.soundsetting.md)*

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

**Returns:** *[SoundSetting](_pages_sound_setting_d_.soundsetting.md)*

