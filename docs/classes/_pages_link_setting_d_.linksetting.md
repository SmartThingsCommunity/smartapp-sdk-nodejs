[Reference](../index.md) › [SmartApp](_smart_app_d_.smartapp.md) › [Page](_pages_page_d_.page.md) › [Section](_pages_section_d_.section.md) ›  [LinkSetting](_pages_link_setting_d_.linksetting.md)

# LinkSetting

A link setting displays a hypertext link that opens an external web page in a browser window. It
does not replace the current configuration page window.
```
section.linkSetting('moreInfo')
    .url('http://www.smartthings.com')
```

## Methods

* [defaultValue](_pages_link_setting_d_.linksetting.md#defaultvalue)
* [description](_pages_link_setting_d_.linksetting.md#description)
* [disabled](_pages_link_setting_d_.linksetting.md#disabled)
* [image](_pages_link_setting_d_.linksetting.md#image)
* [name](_pages_link_setting_d_.linksetting.md#name)
* [required](_pages_link_setting_d_.linksetting.md#required)
* [style](_pages_link_setting_d_.linksetting.md#style)
* [submitOnChange](_pages_link_setting_d_.linksetting.md#submitonchange)
* [translateDefaultValue](_pages_link_setting_d_.linksetting.md#translatedefaultvalue)
* [url](_pages_link_setting_d_.linksetting.md#url)


###  defaultValue

▸ **defaultValue**(`value`: string | number): *[LinkSetting](_pages_link_setting_d_.linksetting.md)*

*Inherited from [SectionSetting](_pages_section_setting_d_.sectionsetting.md).[defaultValue](_pages_section_setting_d_.sectionsetting.md#defaultvalue)*

Sets the initial value displayed in the setting when first shown to the user.

**Parameters:**

Name | Type |
------ | ------ |
`value` | string &#124; number |

**Returns:** *[LinkSetting](_pages_link_setting_d_.linksetting.md)*

___

###  description

▸ **description**(`value`: string): *[LinkSetting](_pages_link_setting_d_.linksetting.md)*

*Inherited from [SectionSetting](_pages_section_setting_d_.sectionsetting.md).[description](_pages_section_setting_d_.sectionsetting.md#description)*

Sets value displayed in the setting control. Defaults to 'Tap to Set' for most types of settings.

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *[LinkSetting](_pages_link_setting_d_.linksetting.md)*

___

###  disabled

▸ **disabled**(`value`: boolean): *[LinkSetting](_pages_link_setting_d_.linksetting.md)*

*Inherited from [SectionSetting](_pages_section_setting_d_.sectionsetting.md).[disabled](_pages_section_setting_d_.sectionsetting.md#disabled)*

Disables the ability to use the control

**Parameters:**

Name | Type |
------ | ------ |
`value` | boolean |

**Returns:** *[LinkSetting](_pages_link_setting_d_.linksetting.md)*

___

###  image

▸ **image**(`source`: string): *[LinkSetting](_pages_link_setting_d_.linksetting.md)*

Specify an image URL to display with this setting

**Parameters:**

Name | Type |
------ | ------ |
`source` | string |

**Returns:** *[LinkSetting](_pages_link_setting_d_.linksetting.md)*

___

###  name

▸ **name**(`value`: string): *[LinkSetting](_pages_link_setting_d_.linksetting.md)*

*Inherited from [SectionSetting](_pages_section_setting_d_.sectionsetting.md).[name](_pages_section_setting_d_.sectionsetting.md#name)*

Sets the name of this setting. Used to reference the setting value during the processing of events. Also
used as part of the i18n key for translating the displayed name and description of the setting. All settings
on a page must have unique names.

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *[LinkSetting](_pages_link_setting_d_.linksetting.md)*

___

###  required

▸ **required**(`value`: boolean): *[LinkSetting](_pages_link_setting_d_.linksetting.md)*

*Inherited from [SectionSetting](_pages_section_setting_d_.sectionsetting.md).[required](_pages_section_setting_d_.sectionsetting.md#required)*

Specifies that the control must be set in order to save the configuration page

**Parameters:**

Name | Type |
------ | ------ |
`value` | boolean |

**Returns:** *[LinkSetting](_pages_link_setting_d_.linksetting.md)*

___

###  style

▸ **style**(`value`: [LinkStyle](../enums/_pages_link_setting_d_.linkstyle.md)): *[LinkSetting](_pages_link_setting_d_.linksetting.md)*

Set the style of the link in the UI

**Parameters:**

Name | Type |
------ | ------ |
`value` | [LinkStyle](../enums/_pages_link_setting_d_.linkstyle.md) |

**Returns:** *[LinkSetting](_pages_link_setting_d_.linksetting.md)*

___

###  submitOnChange

▸ **submitOnChange**(`value`: boolean): *[LinkSetting](_pages_link_setting_d_.linksetting.md)*

*Inherited from [SectionSetting](_pages_section_setting_d_.sectionsetting.md).[submitOnChange](_pages_section_setting_d_.sectionsetting.md#submitonchange)*

Causes the page to be submitted and re-rendered any time the value of the setting is changed, rather than
requiring the user to tap Next or Done. This behavior is useful when the the presence or enabled/disabled
status of some settings depend on the value of other settings.

**Parameters:**

Name | Type |
------ | ------ |
`value` | boolean |

**Returns:** *[LinkSetting](_pages_link_setting_d_.linksetting.md)*

___

###  translateDefaultValue

▸ **translateDefaultValue**(`value`: string): *[LinkSetting](_pages_link_setting_d_.linksetting.md)*

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

**Returns:** *[LinkSetting](_pages_link_setting_d_.linksetting.md)*

___

###  url

▸ **url**(`value`: string): *[LinkSetting](_pages_link_setting_d_.linksetting.md)*

Set the URL of the link.

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *[LinkSetting](_pages_link_setting_d_.linksetting.md)*

