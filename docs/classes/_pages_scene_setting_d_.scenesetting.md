[Reference](../index.md) › [SmartApp](_smart_app_d_.smartapp.md) › [Page](_pages_page_d_.page.md) › [Section](_pages_section_d_.section.md) ›  [SceneSetting](_pages_scene_setting_d_.scenesetting.md)

# SceneSetting

A scene setting display a control that allows one or more scenes to be selected.
```
section.sceneSetting('selectedScene')
```

## Methods

* [closeOnSelection](_pages_scene_setting_d_.scenesetting.md#closeonselection)
* [defaultValue](_pages_scene_setting_d_.scenesetting.md#defaultvalue)
* [description](_pages_scene_setting_d_.scenesetting.md#description)
* [disabled](_pages_scene_setting_d_.scenesetting.md#disabled)
* [multiple](_pages_scene_setting_d_.scenesetting.md#multiple)
* [name](_pages_scene_setting_d_.scenesetting.md#name)
* [required](_pages_scene_setting_d_.scenesetting.md#required)
* [style](_pages_scene_setting_d_.scenesetting.md#style)
* [submitOnChange](_pages_scene_setting_d_.scenesetting.md#submitonchange)
* [translateDefaultValue](_pages_scene_setting_d_.scenesetting.md#translatedefaultvalue)


###  closeOnSelection

▸ **closeOnSelection**(`value`: true): *[SceneSetting](_pages_scene_setting_d_.scenesetting.md)*

Specifies whether this input should close on selection.

**Parameters:**

Name | Type |
------ | ------ |
`value` | true |

**Returns:** *[SceneSetting](_pages_scene_setting_d_.scenesetting.md)*

___

###  defaultValue

▸ **defaultValue**(`value`: string | number): *[SceneSetting](_pages_scene_setting_d_.scenesetting.md)*

*Inherited from [SectionSetting](_pages_section_setting_d_.sectionsetting.md).[defaultValue](_pages_section_setting_d_.sectionsetting.md#defaultvalue)*

Sets the initial value displayed in the setting when first shown to the user.

**Parameters:**

Name | Type |
------ | ------ |
`value` | string &#124; number |

**Returns:** *[SceneSetting](_pages_scene_setting_d_.scenesetting.md)*

___

###  description

▸ **description**(`value`: string): *[SceneSetting](_pages_scene_setting_d_.scenesetting.md)*

*Inherited from [SectionSetting](_pages_section_setting_d_.sectionsetting.md).[description](_pages_section_setting_d_.sectionsetting.md#description)*

Sets value displayed in the setting control. Defaults to 'Tap to Set' for most types of settings.

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *[SceneSetting](_pages_scene_setting_d_.scenesetting.md)*

___

###  disabled

▸ **disabled**(`value`: boolean): *[SceneSetting](_pages_scene_setting_d_.scenesetting.md)*

*Inherited from [SectionSetting](_pages_section_setting_d_.sectionsetting.md).[disabled](_pages_section_setting_d_.sectionsetting.md#disabled)*

Disables the ability to use the control

**Parameters:**

Name | Type |
------ | ------ |
`value` | boolean |

**Returns:** *[SceneSetting](_pages_scene_setting_d_.scenesetting.md)*

___

###  multiple

▸ **multiple**(`value`: true): *[SceneSetting](_pages_scene_setting_d_.scenesetting.md)*

Specifies whether this device setting can have multiple values.

**Parameters:**

Name | Type |
------ | ------ |
`value` | true |

**Returns:** *[SceneSetting](_pages_scene_setting_d_.scenesetting.md)*

___

###  name

▸ **name**(`value`: string): *[SceneSetting](_pages_scene_setting_d_.scenesetting.md)*

*Inherited from [SectionSetting](_pages_section_setting_d_.sectionsetting.md).[name](_pages_section_setting_d_.sectionsetting.md#name)*

Sets the name of this setting. Used to reference the setting value during the processing of events. Also
used as part of the i18n key for translating the displayed name and description of the setting. All settings
on a page must have unique names.

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *[SceneSetting](_pages_scene_setting_d_.scenesetting.md)*

___

###  required

▸ **required**(`value`: boolean): *[SceneSetting](_pages_scene_setting_d_.scenesetting.md)*

*Inherited from [SectionSetting](_pages_section_setting_d_.sectionsetting.md).[required](_pages_section_setting_d_.sectionsetting.md#required)*

Specifies that the control must be set in order to save the configuration page

**Parameters:**

Name | Type |
------ | ------ |
`value` | boolean |

**Returns:** *[SceneSetting](_pages_scene_setting_d_.scenesetting.md)*

___

###  style

▸ **style**(`value`: [SceneStyle](../enums/_pages_scene_setting_d_.scenestyle.md)): *[SceneSetting](_pages_scene_setting_d_.scenesetting.md)*

Sets the style of the control

**Parameters:**

Name | Type |
------ | ------ |
`value` | [SceneStyle](../enums/_pages_scene_setting_d_.scenestyle.md) |

**Returns:** *[SceneSetting](_pages_scene_setting_d_.scenesetting.md)*

___

###  submitOnChange

▸ **submitOnChange**(`value`: boolean): *[SceneSetting](_pages_scene_setting_d_.scenesetting.md)*

*Inherited from [SectionSetting](_pages_section_setting_d_.sectionsetting.md).[submitOnChange](_pages_section_setting_d_.sectionsetting.md#submitonchange)*

Causes the page to be submitted and re-rendered any time the value of the setting is changed, rather than
requiring the user to tap Next or Done. This behavior is useful when the the presence or enabled/disabled
status of some settings depend on the value of other settings.

**Parameters:**

Name | Type |
------ | ------ |
`value` | boolean |

**Returns:** *[SceneSetting](_pages_scene_setting_d_.scenesetting.md)*

___

###  translateDefaultValue

▸ **translateDefaultValue**(`value`: string): *[SceneSetting](_pages_scene_setting_d_.scenesetting.md)*

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

**Returns:** *[SceneSetting](_pages_scene_setting_d_.scenesetting.md)*

