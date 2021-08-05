[Reference](../index.md) › [SmartApp](_smart_app_d_.smartapp.md) › [Page](_pages_page_d_.page.md) › [Section](_pages_section_d_.section.md) ›  [SecuritySetting](_pages_security_setting_d_.securitysetting.md)

# SecuritySetting

A security setting allows for the selection of one or more security system modes.

## Methods

* [closeOnSelection](_pages_security_setting_d_.securitysetting.md#closeonselection)
* [defaultValue](_pages_security_setting_d_.securitysetting.md#defaultvalue)
* [description](_pages_security_setting_d_.securitysetting.md#description)
* [disabled](_pages_security_setting_d_.securitysetting.md#disabled)
* [multiple](_pages_security_setting_d_.securitysetting.md#multiple)
* [name](_pages_security_setting_d_.securitysetting.md#name)
* [required](_pages_security_setting_d_.securitysetting.md#required)
* [style](_pages_security_setting_d_.securitysetting.md#style)
* [submitOnChange](_pages_security_setting_d_.securitysetting.md#submitonchange)
* [translateDefaultValue](_pages_security_setting_d_.securitysetting.md#translatedefaultvalue)


###  closeOnSelection

▸ **closeOnSelection**(`value`: boolean): *[SecuritySetting](_pages_security_setting_d_.securitysetting.md)*

Specifies whether this input should close on selection.

**Parameters:**

Name | Type |
------ | ------ |
`value` | boolean |

**Returns:** *[SecuritySetting](_pages_security_setting_d_.securitysetting.md)*

___

###  defaultValue

▸ **defaultValue**(`value`: string | number): *[SecuritySetting](_pages_security_setting_d_.securitysetting.md)*

*Inherited from [SectionSetting](_pages_section_setting_d_.sectionsetting.md).[defaultValue](_pages_section_setting_d_.sectionsetting.md#defaultvalue)*

Sets the initial value displayed in the setting when first shown to the user.

**Parameters:**

Name | Type |
------ | ------ |
`value` | string &#124; number |

**Returns:** *[SecuritySetting](_pages_security_setting_d_.securitysetting.md)*

___

###  description

▸ **description**(`value`: string): *[SecuritySetting](_pages_security_setting_d_.securitysetting.md)*

*Inherited from [SectionSetting](_pages_section_setting_d_.sectionsetting.md).[description](_pages_section_setting_d_.sectionsetting.md#description)*

Sets value displayed in the setting control. Defaults to 'Tap to Set' for most types of settings.

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *[SecuritySetting](_pages_security_setting_d_.securitysetting.md)*

___

###  disabled

▸ **disabled**(`value`: boolean): *[SecuritySetting](_pages_security_setting_d_.securitysetting.md)*

*Inherited from [SectionSetting](_pages_section_setting_d_.sectionsetting.md).[disabled](_pages_section_setting_d_.sectionsetting.md#disabled)*

Disables the ability to use the control

**Parameters:**

Name | Type |
------ | ------ |
`value` | boolean |

**Returns:** *[SecuritySetting](_pages_security_setting_d_.securitysetting.md)*

___

###  multiple

▸ **multiple**(`value`: boolean): *[SecuritySetting](_pages_security_setting_d_.securitysetting.md)*

Specifies whether this security setting can have multiple values.

**Parameters:**

Name | Type |
------ | ------ |
`value` | boolean |

**Returns:** *[SecuritySetting](_pages_security_setting_d_.securitysetting.md)*

___

###  name

▸ **name**(`value`: string): *[SecuritySetting](_pages_security_setting_d_.securitysetting.md)*

*Inherited from [SectionSetting](_pages_section_setting_d_.sectionsetting.md).[name](_pages_section_setting_d_.sectionsetting.md#name)*

Sets the name of this setting. Used to reference the setting value during the processing of events. Also
used as part of the i18n key for translating the displayed name and description of the setting. All settings
on a page must have unique names.

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *[SecuritySetting](_pages_security_setting_d_.securitysetting.md)*

___

###  required

▸ **required**(`value`: boolean): *[SecuritySetting](_pages_security_setting_d_.securitysetting.md)*

*Inherited from [SectionSetting](_pages_section_setting_d_.sectionsetting.md).[required](_pages_section_setting_d_.sectionsetting.md#required)*

Specifies that the control must be set in order to save the configuration page

**Parameters:**

Name | Type |
------ | ------ |
`value` | boolean |

**Returns:** *[SecuritySetting](_pages_security_setting_d_.securitysetting.md)*

___

###  style

▸ **style**(`value`: [SecurityStyle](../enums/_pages_security_setting_d_.securitystyle.md)): *[SecuritySetting](_pages_security_setting_d_.securitysetting.md)*

Sets the control style

**Parameters:**

Name | Type |
------ | ------ |
`value` | [SecurityStyle](../enums/_pages_security_setting_d_.securitystyle.md) |

**Returns:** *[SecuritySetting](_pages_security_setting_d_.securitysetting.md)*

___

###  submitOnChange

▸ **submitOnChange**(`value`: boolean): *[SecuritySetting](_pages_security_setting_d_.securitysetting.md)*

*Inherited from [SectionSetting](_pages_section_setting_d_.sectionsetting.md).[submitOnChange](_pages_section_setting_d_.sectionsetting.md#submitonchange)*

Causes the page to be submitted and re-rendered any time the value of the setting is changed, rather than
requiring the user to tap Next or Done. This behavior is useful when the the presence or enabled/disabled
status of some settings depend on the value of other settings.

**Parameters:**

Name | Type |
------ | ------ |
`value` | boolean |

**Returns:** *[SecuritySetting](_pages_security_setting_d_.securitysetting.md)*

___

###  translateDefaultValue

▸ **translateDefaultValue**(`value`: string): *[SecuritySetting](_pages_security_setting_d_.securitysetting.md)*

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

**Returns:** *[SecuritySetting](_pages_security_setting_d_.securitysetting.md)*

