[Reference](../index.md) › [SmartApp](_smart_app_d_.smartapp.md) › [Page](_pages_page_d_.page.md) › [Section](_pages_section_d_.section.md) ›  [PhoneSetting](_pages_phone_setting_d_.phonesetting.md)

# PhoneSetting

A phone setting displays an input box with a keypad appropriate to phone number entry.
```
section.phoneSetting('phoneNumber')
```

## Methods

* [defaultValue](_pages_phone_setting_d_.phonesetting.md#defaultvalue)
* [description](_pages_phone_setting_d_.phonesetting.md#description)
* [disabled](_pages_phone_setting_d_.phonesetting.md#disabled)
* [image](_pages_phone_setting_d_.phonesetting.md#image)
* [name](_pages_phone_setting_d_.phonesetting.md#name)
* [required](_pages_phone_setting_d_.phonesetting.md#required)
* [submitOnChange](_pages_phone_setting_d_.phonesetting.md#submitonchange)
* [translateDefaultValue](_pages_phone_setting_d_.phonesetting.md#translatedefaultvalue)


###  defaultValue

▸ **defaultValue**(`value`: string | number): *[PhoneSetting](_pages_phone_setting_d_.phonesetting.md)*

*Inherited from [SectionSetting](_pages_section_setting_d_.sectionsetting.md).[defaultValue](_pages_section_setting_d_.sectionsetting.md#defaultvalue)*

Sets the initial value displayed in the setting when first shown to the user.

**Parameters:**

Name | Type |
------ | ------ |
`value` | string &#124; number |

**Returns:** *[PhoneSetting](_pages_phone_setting_d_.phonesetting.md)*

___

###  description

▸ **description**(`value`: string): *[PhoneSetting](_pages_phone_setting_d_.phonesetting.md)*

*Inherited from [SectionSetting](_pages_section_setting_d_.sectionsetting.md).[description](_pages_section_setting_d_.sectionsetting.md#description)*

Sets value displayed in the setting control. Defaults to 'Tap to Set' for most types of settings.

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *[PhoneSetting](_pages_phone_setting_d_.phonesetting.md)*

___

###  disabled

▸ **disabled**(`value`: boolean): *[PhoneSetting](_pages_phone_setting_d_.phonesetting.md)*

*Inherited from [SectionSetting](_pages_section_setting_d_.sectionsetting.md).[disabled](_pages_section_setting_d_.sectionsetting.md#disabled)*

Disables the ability to use the control

**Parameters:**

Name | Type |
------ | ------ |
`value` | boolean |

**Returns:** *[PhoneSetting](_pages_phone_setting_d_.phonesetting.md)*

___

###  image

▸ **image**(`source`: string): *[PhoneSetting](_pages_phone_setting_d_.phonesetting.md)*

Specify an image URL to display with this setting

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`source` | string | HTTPS url or Base64-encoded data URI. Max length 2048 characters.  |

**Returns:** *[PhoneSetting](_pages_phone_setting_d_.phonesetting.md)*

___

###  name

▸ **name**(`value`: string): *[PhoneSetting](_pages_phone_setting_d_.phonesetting.md)*

*Inherited from [SectionSetting](_pages_section_setting_d_.sectionsetting.md).[name](_pages_section_setting_d_.sectionsetting.md#name)*

Sets the name of this setting. Used to reference the setting value during the processing of events. Also
used as part of the i18n key for translating the displayed name and description of the setting. All settings
on a page must have unique names.

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *[PhoneSetting](_pages_phone_setting_d_.phonesetting.md)*

___

###  required

▸ **required**(`value`: boolean): *[PhoneSetting](_pages_phone_setting_d_.phonesetting.md)*

*Inherited from [SectionSetting](_pages_section_setting_d_.sectionsetting.md).[required](_pages_section_setting_d_.sectionsetting.md#required)*

Specifies that the control must be set in order to save the configuration page

**Parameters:**

Name | Type |
------ | ------ |
`value` | boolean |

**Returns:** *[PhoneSetting](_pages_phone_setting_d_.phonesetting.md)*

___

###  submitOnChange

▸ **submitOnChange**(`value`: boolean): *[PhoneSetting](_pages_phone_setting_d_.phonesetting.md)*

*Inherited from [SectionSetting](_pages_section_setting_d_.sectionsetting.md).[submitOnChange](_pages_section_setting_d_.sectionsetting.md#submitonchange)*

Causes the page to be submitted and re-rendered any time the value of the setting is changed, rather than
requiring the user to tap Next or Done. This behavior is useful when the the presence or enabled/disabled
status of some settings depend on the value of other settings.

**Parameters:**

Name | Type |
------ | ------ |
`value` | boolean |

**Returns:** *[PhoneSetting](_pages_phone_setting_d_.phonesetting.md)*

___

###  translateDefaultValue

▸ **translateDefaultValue**(`value`: string): *[PhoneSetting](_pages_phone_setting_d_.phonesetting.md)*

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

**Returns:** *[PhoneSetting](_pages_phone_setting_d_.phonesetting.md)*

