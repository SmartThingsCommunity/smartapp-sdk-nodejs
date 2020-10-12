[Reference](../index.md) › [SmartApp](_smart_app_d_.smartapp.md) › [Page](_pages_page_d_.page.md) › [Section](_pages_section_d_.section.md) ›  [NumberSetting](_pages_number_setting_d_.numbersetting.md)

# NumberSetting

A number setting creates an input box with a numeric keypad or slider control. The following code will create an input
box with numeric keypad:
```
section.numberSetting("delayPeriodSeconds")
    .min(10)
    .max(3600)
```
To render a slider control instead:
```
section.numberSetting("colorTemperature")
    .min(2800).max(9000)
    .step(100)
    .style('SLIDER')
```

## Methods

* [defaultValue](_pages_number_setting_d_.numbersetting.md#defaultvalue)
* [description](_pages_number_setting_d_.numbersetting.md#description)
* [disabled](_pages_number_setting_d_.numbersetting.md#disabled)
* [image](_pages_number_setting_d_.numbersetting.md#image)
* [max](_pages_number_setting_d_.numbersetting.md#max)
* [min](_pages_number_setting_d_.numbersetting.md#min)
* [name](_pages_number_setting_d_.numbersetting.md#name)
* [postMessage](_pages_number_setting_d_.numbersetting.md#postmessage)
* [required](_pages_number_setting_d_.numbersetting.md#required)
* [step](_pages_number_setting_d_.numbersetting.md#step)
* [style](_pages_number_setting_d_.numbersetting.md#style)
* [submitOnChange](_pages_number_setting_d_.numbersetting.md#submitonchange)
* [translateDefaultValue](_pages_number_setting_d_.numbersetting.md#translatedefaultvalue)


###  defaultValue

▸ **defaultValue**(`value`: string | number): *[NumberSetting](_pages_number_setting_d_.numbersetting.md)*

*Inherited from [SectionSetting](_pages_section_setting_d_.sectionsetting.md).[defaultValue](_pages_section_setting_d_.sectionsetting.md#defaultvalue)*

Sets the initial value displayed in the setting when first shown to the user.

**Parameters:**

Name | Type |
------ | ------ |
`value` | string &#124; number |

**Returns:** *[NumberSetting](_pages_number_setting_d_.numbersetting.md)*

___

###  description

▸ **description**(`value`: string): *[NumberSetting](_pages_number_setting_d_.numbersetting.md)*

*Inherited from [SectionSetting](_pages_section_setting_d_.sectionsetting.md).[description](_pages_section_setting_d_.sectionsetting.md#description)*

Sets value displayed in the setting control. Defaults to 'Tap to Set' for most types of settings.

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *[NumberSetting](_pages_number_setting_d_.numbersetting.md)*

___

###  disabled

▸ **disabled**(`value`: boolean): *[NumberSetting](_pages_number_setting_d_.numbersetting.md)*

*Inherited from [SectionSetting](_pages_section_setting_d_.sectionsetting.md).[disabled](_pages_section_setting_d_.sectionsetting.md#disabled)*

Disables the ability to use the control

**Parameters:**

Name | Type |
------ | ------ |
`value` | boolean |

**Returns:** *[NumberSetting](_pages_number_setting_d_.numbersetting.md)*

___

###  image

▸ **image**(`source`: string): *[NumberSetting](_pages_number_setting_d_.numbersetting.md)*

Specify an image URL to display with this setting

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`source` | string | HTTPS url or Base64-encoded data URI. Max length 2048 characters.  |

**Returns:** *[NumberSetting](_pages_number_setting_d_.numbersetting.md)*

___

###  max

▸ **max**(`value`: number): *[NumberSetting](_pages_number_setting_d_.numbersetting.md)*

The maximum inclusive value the value can be set to.

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *[NumberSetting](_pages_number_setting_d_.numbersetting.md)*

___

###  min

▸ **min**(`value`: number): *[NumberSetting](_pages_number_setting_d_.numbersetting.md)*

The minimum inclusive value the decimal can be set to.

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *[NumberSetting](_pages_number_setting_d_.numbersetting.md)*

___

###  name

▸ **name**(`value`: string): *[NumberSetting](_pages_number_setting_d_.numbersetting.md)*

*Inherited from [SectionSetting](_pages_section_setting_d_.sectionsetting.md).[name](_pages_section_setting_d_.sectionsetting.md#name)*

Sets the name of this setting. Used to reference the setting value during the processing of events. Also
used as part of the i18n key for translating the displayed name and description of the setting. All settings
on a page must have unique names.

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *[NumberSetting](_pages_number_setting_d_.numbersetting.md)*

___

###  postMessage

▸ **postMessage**(`value`: string): *[NumberSetting](_pages_number_setting_d_.numbersetting.md)*

A string to be shown after the text input field. One common use for this field is to
specify a unit of measure.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | string | Max length 10 characters  |

**Returns:** *[NumberSetting](_pages_number_setting_d_.numbersetting.md)*

___

###  required

▸ **required**(`value`: boolean): *[NumberSetting](_pages_number_setting_d_.numbersetting.md)*

*Inherited from [SectionSetting](_pages_section_setting_d_.sectionsetting.md).[required](_pages_section_setting_d_.sectionsetting.md#required)*

Specifies that the control must be set in order to save the configuration page

**Parameters:**

Name | Type |
------ | ------ |
`value` | boolean |

**Returns:** *[NumberSetting](_pages_number_setting_d_.numbersetting.md)*

___

###  step

▸ **step**(`value`: number): *[NumberSetting](_pages_number_setting_d_.numbersetting.md)*

The step between values values. If the style is not set to slider then setting a step will
cause up and down arrows to appear next to the input box that increment or decrement the value
by the value of the step.

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *[NumberSetting](_pages_number_setting_d_.numbersetting.md)*

___

###  style

▸ **style**(`value`: [NumberStyle](../enums/_pages_number_setting_d_.numberstyle.md)): *[NumberSetting](_pages_number_setting_d_.numbersetting.md)*

Sets the style of the control. The default is a keypad input box.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | [NumberStyle](../enums/_pages_number_setting_d_.numberstyle.md) |   |

**Returns:** *[NumberSetting](_pages_number_setting_d_.numbersetting.md)*

___

###  submitOnChange

▸ **submitOnChange**(`value`: boolean): *[NumberSetting](_pages_number_setting_d_.numbersetting.md)*

*Inherited from [SectionSetting](_pages_section_setting_d_.sectionsetting.md).[submitOnChange](_pages_section_setting_d_.sectionsetting.md#submitonchange)*

Causes the page to be submitted and re-rendered any time the value of the setting is changed, rather than
requiring the user to tap Next or Done. This behavior is useful when the the presence or enabled/disabled
status of some settings depend on the value of other settings.

**Parameters:**

Name | Type |
------ | ------ |
`value` | boolean |

**Returns:** *[NumberSetting](_pages_number_setting_d_.numbersetting.md)*

___

###  translateDefaultValue

▸ **translateDefaultValue**(`value`: string): *[NumberSetting](_pages_number_setting_d_.numbersetting.md)*

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

**Returns:** *[NumberSetting](_pages_number_setting_d_.numbersetting.md)*

