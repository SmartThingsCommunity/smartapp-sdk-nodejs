[Reference](../index.md) › [SmartApp](_smart_app_d_.smartapp.md) › [Page](_pages_page_d_.page.md) › [Section](_pages_section_d_.section.md) ›  [TextSetting](_pages_text_setting_d_.textsetting.md)

# TextSetting

A text setting creates a text input field with full alphanumeric keypad.
```
section.textSetting('warningMessage')
```

## Methods

* [defaultValue](_pages_text_setting_d_.textsetting.md#defaultvalue)
* [description](_pages_text_setting_d_.textsetting.md#description)
* [disabled](_pages_text_setting_d_.textsetting.md#disabled)
* [image](_pages_text_setting_d_.textsetting.md#image)
* [maxLength](_pages_text_setting_d_.textsetting.md#maxlength)
* [minLength](_pages_text_setting_d_.textsetting.md#minlength)
* [name](_pages_text_setting_d_.textsetting.md#name)
* [postMessage](_pages_text_setting_d_.textsetting.md#postmessage)
* [required](_pages_text_setting_d_.textsetting.md#required)
* [submitOnChange](_pages_text_setting_d_.textsetting.md#submitonchange)
* [translateDefaultValue](_pages_text_setting_d_.textsetting.md#translatedefaultvalue)


###  defaultValue

▸ **defaultValue**(`value`: string | number): *[TextSetting](_pages_text_setting_d_.textsetting.md)*

*Inherited from [SectionSetting](_pages_section_setting_d_.sectionsetting.md).[defaultValue](_pages_section_setting_d_.sectionsetting.md#defaultvalue)*

Sets the initial value displayed in the setting when first shown to the user.

**Parameters:**

Name | Type |
------ | ------ |
`value` | string &#124; number |

**Returns:** *[TextSetting](_pages_text_setting_d_.textsetting.md)*

___

###  description

▸ **description**(`value`: string): *[TextSetting](_pages_text_setting_d_.textsetting.md)*

*Inherited from [SectionSetting](_pages_section_setting_d_.sectionsetting.md).[description](_pages_section_setting_d_.sectionsetting.md#description)*

Sets value displayed in the setting control. Defaults to 'Tap to Set' for most types of settings.

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *[TextSetting](_pages_text_setting_d_.textsetting.md)*

___

###  disabled

▸ **disabled**(`value`: boolean): *[TextSetting](_pages_text_setting_d_.textsetting.md)*

*Inherited from [SectionSetting](_pages_section_setting_d_.sectionsetting.md).[disabled](_pages_section_setting_d_.sectionsetting.md#disabled)*

Disables the ability to use the control

**Parameters:**

Name | Type |
------ | ------ |
`value` | boolean |

**Returns:** *[TextSetting](_pages_text_setting_d_.textsetting.md)*

___

###  image

▸ **image**(`source`: string): *[TextSetting](_pages_text_setting_d_.textsetting.md)*

Specify an image URL to display with this setting

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`source` | string | HTTPS url or Base64-encoded data URI. Max length 2048 characters.  |

**Returns:** *[TextSetting](_pages_text_setting_d_.textsetting.md)*

___

###  maxLength

▸ **maxLength**(`value`: number): *[TextSetting](_pages_text_setting_d_.textsetting.md)*

The maximum text length

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *[TextSetting](_pages_text_setting_d_.textsetting.md)*

___

###  minLength

▸ **minLength**(`value`: number): *[TextSetting](_pages_text_setting_d_.textsetting.md)*

The minimum text length

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *[TextSetting](_pages_text_setting_d_.textsetting.md)*

___

###  name

▸ **name**(`value`: string): *[TextSetting](_pages_text_setting_d_.textsetting.md)*

*Inherited from [SectionSetting](_pages_section_setting_d_.sectionsetting.md).[name](_pages_section_setting_d_.sectionsetting.md#name)*

Sets the name of this setting. Used to reference the setting value during the processing of events. Also
used as part of the i18n key for translating the displayed name and description of the setting. All settings
on a page must have unique names.

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *[TextSetting](_pages_text_setting_d_.textsetting.md)*

___

###  postMessage

▸ **postMessage**(`value`: string): *[TextSetting](_pages_text_setting_d_.textsetting.md)*

A string to be shown after the text input field. One common use for this field is to
specify a unit of measure.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | string | Max length 10 characters  |

**Returns:** *[TextSetting](_pages_text_setting_d_.textsetting.md)*

___

###  required

▸ **required**(`value`: boolean): *[TextSetting](_pages_text_setting_d_.textsetting.md)*

*Inherited from [SectionSetting](_pages_section_setting_d_.sectionsetting.md).[required](_pages_section_setting_d_.sectionsetting.md#required)*

Specifies that the control must be set in order to save the configuration page

**Parameters:**

Name | Type |
------ | ------ |
`value` | boolean |

**Returns:** *[TextSetting](_pages_text_setting_d_.textsetting.md)*

___

###  submitOnChange

▸ **submitOnChange**(`value`: boolean): *[TextSetting](_pages_text_setting_d_.textsetting.md)*

*Inherited from [SectionSetting](_pages_section_setting_d_.sectionsetting.md).[submitOnChange](_pages_section_setting_d_.sectionsetting.md#submitonchange)*

Causes the page to be submitted and re-rendered any time the value of the setting is changed, rather than
requiring the user to tap Next or Done. This behavior is useful when the the presence or enabled/disabled
status of some settings depend on the value of other settings.

**Parameters:**

Name | Type |
------ | ------ |
`value` | boolean |

**Returns:** *[TextSetting](_pages_text_setting_d_.textsetting.md)*

___

###  translateDefaultValue

▸ **translateDefaultValue**(`value`: string): *[TextSetting](_pages_text_setting_d_.textsetting.md)*

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

**Returns:** *[TextSetting](_pages_text_setting_d_.textsetting.md)*

