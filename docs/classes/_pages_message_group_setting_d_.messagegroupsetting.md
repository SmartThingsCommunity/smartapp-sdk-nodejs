[Reference](../index.md) › [SmartApp](_smart_app_d_.smartapp.md) › [Page](_pages_page_d_.page.md) › [Section](_pages_section_d_.section.md) ›  [MessageGroupSetting](_pages_message_group_setting_d_.messagegroupsetting.md)

# MessageGroupSetting

NOT IMPLEMENTED

## Methods

* [closeOnSelection](_pages_message_group_setting_d_.messagegroupsetting.md#closeonselection)
* [defaultValue](_pages_message_group_setting_d_.messagegroupsetting.md#defaultvalue)
* [description](_pages_message_group_setting_d_.messagegroupsetting.md#description)
* [disabled](_pages_message_group_setting_d_.messagegroupsetting.md#disabled)
* [messageGroupKey](_pages_message_group_setting_d_.messagegroupsetting.md#messagegroupkey)
* [multiple](_pages_message_group_setting_d_.messagegroupsetting.md#multiple)
* [name](_pages_message_group_setting_d_.messagegroupsetting.md#name)
* [required](_pages_message_group_setting_d_.messagegroupsetting.md#required)
* [style](_pages_message_group_setting_d_.messagegroupsetting.md#style)
* [submitOnChange](_pages_message_group_setting_d_.messagegroupsetting.md#submitonchange)
* [translateDefaultValue](_pages_message_group_setting_d_.messagegroupsetting.md#translatedefaultvalue)


###  closeOnSelection

▸ **closeOnSelection**(`value`: true): *[MessageGroupSetting](_pages_message_group_setting_d_.messagegroupsetting.md)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | true |

**Returns:** *[MessageGroupSetting](_pages_message_group_setting_d_.messagegroupsetting.md)*

___

###  defaultValue

▸ **defaultValue**(`value`: string | number): *[MessageGroupSetting](_pages_message_group_setting_d_.messagegroupsetting.md)*

*Inherited from [SectionSetting](_pages_section_setting_d_.sectionsetting.md).[defaultValue](_pages_section_setting_d_.sectionsetting.md#defaultvalue)*

Sets the initial value displayed in the setting when first shown to the user.

**Parameters:**

Name | Type |
------ | ------ |
`value` | string &#124; number |

**Returns:** *[MessageGroupSetting](_pages_message_group_setting_d_.messagegroupsetting.md)*

___

###  description

▸ **description**(`value`: string): *[MessageGroupSetting](_pages_message_group_setting_d_.messagegroupsetting.md)*

*Inherited from [SectionSetting](_pages_section_setting_d_.sectionsetting.md).[description](_pages_section_setting_d_.sectionsetting.md#description)*

Sets value displayed in the setting control. Defaults to 'Tap to Set' for most types of settings.

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *[MessageGroupSetting](_pages_message_group_setting_d_.messagegroupsetting.md)*

___

###  disabled

▸ **disabled**(`value`: boolean): *[MessageGroupSetting](_pages_message_group_setting_d_.messagegroupsetting.md)*

*Inherited from [SectionSetting](_pages_section_setting_d_.sectionsetting.md).[disabled](_pages_section_setting_d_.sectionsetting.md#disabled)*

Disables the ability to use the control

**Parameters:**

Name | Type |
------ | ------ |
`value` | boolean |

**Returns:** *[MessageGroupSetting](_pages_message_group_setting_d_.messagegroupsetting.md)*

___

###  messageGroupKey

▸ **messageGroupKey**(`value`: string): *[MessageGroupSetting](_pages_message_group_setting_d_.messagegroupsetting.md)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *[MessageGroupSetting](_pages_message_group_setting_d_.messagegroupsetting.md)*

___

###  multiple

▸ **multiple**(`value`: boolean): *[MessageGroupSetting](_pages_message_group_setting_d_.messagegroupsetting.md)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | boolean |

**Returns:** *[MessageGroupSetting](_pages_message_group_setting_d_.messagegroupsetting.md)*

___

###  name

▸ **name**(`value`: string): *[MessageGroupSetting](_pages_message_group_setting_d_.messagegroupsetting.md)*

*Inherited from [SectionSetting](_pages_section_setting_d_.sectionsetting.md).[name](_pages_section_setting_d_.sectionsetting.md#name)*

Sets the name of this setting. Used to reference the setting value during the processing of events. Also
used as part of the i18n key for translating the displayed name and description of the setting. All settings
on a page must have unique names.

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *[MessageGroupSetting](_pages_message_group_setting_d_.messagegroupsetting.md)*

___

###  required

▸ **required**(`value`: boolean): *[MessageGroupSetting](_pages_message_group_setting_d_.messagegroupsetting.md)*

*Inherited from [SectionSetting](_pages_section_setting_d_.sectionsetting.md).[required](_pages_section_setting_d_.sectionsetting.md#required)*

Specifies that the control must be set in order to save the configuration page

**Parameters:**

Name | Type |
------ | ------ |
`value` | boolean |

**Returns:** *[MessageGroupSetting](_pages_message_group_setting_d_.messagegroupsetting.md)*

___

###  style

▸ **style**(`value`: [MessageGroupStyle](../enums/_pages_message_group_setting_d_.messagegroupstyle.md)): *[MessageGroupSetting](_pages_message_group_setting_d_.messagegroupsetting.md)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [MessageGroupStyle](../enums/_pages_message_group_setting_d_.messagegroupstyle.md) |

**Returns:** *[MessageGroupSetting](_pages_message_group_setting_d_.messagegroupsetting.md)*

___

###  submitOnChange

▸ **submitOnChange**(`value`: boolean): *[MessageGroupSetting](_pages_message_group_setting_d_.messagegroupsetting.md)*

*Inherited from [SectionSetting](_pages_section_setting_d_.sectionsetting.md).[submitOnChange](_pages_section_setting_d_.sectionsetting.md#submitonchange)*

Causes the page to be submitted and re-rendered any time the value of the setting is changed, rather than
requiring the user to tap Next or Done. This behavior is useful when the the presence or enabled/disabled
status of some settings depend on the value of other settings.

**Parameters:**

Name | Type |
------ | ------ |
`value` | boolean |

**Returns:** *[MessageGroupSetting](_pages_message_group_setting_d_.messagegroupsetting.md)*

___

###  translateDefaultValue

▸ **translateDefaultValue**(`value`: string): *[MessageGroupSetting](_pages_message_group_setting_d_.messagegroupsetting.md)*

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

**Returns:** *[MessageGroupSetting](_pages_message_group_setting_d_.messagegroupsetting.md)*

