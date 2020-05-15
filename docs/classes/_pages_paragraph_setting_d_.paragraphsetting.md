[Reference](../index.md) › [SmartApp](_smart_app_d_.smartapp.md) › [Page](_pages_page_d_.page.md) › [Section](_pages_section_d_.section.md) ›  [ParagraphSetting](_pages_paragraph_setting_d_.paragraphsetting.md)

# ParagraphSetting

A paragraph setting displays text on a page. It's typically used for instructional information. If the i18n
framework is used then normally only the name is specified:
```
section.paragraphSetting('instructionalText')
```
and the heading and body of the paragraph element are set in the localization file:
```
 "pages.page1.settings.instructionalText.name": "Paragraph Heading",
 "pages.page1.settings.instructionalText.description": "Paragraph text lorem ipsum dolor"
```
If i18n localization is not being used then the name and body of the text can be set explicitly:
```
section.paragraphSetting('instructionalText')
    .name('Paragraph Heading')
    .description('Paragraph text lorem ipsum dolor')
```

## Methods

* [defaultValue](_pages_paragraph_setting_d_.paragraphsetting.md#defaultvalue)
* [description](_pages_paragraph_setting_d_.paragraphsetting.md#description)
* [disabled](_pages_paragraph_setting_d_.paragraphsetting.md#disabled)
* [image](_pages_paragraph_setting_d_.paragraphsetting.md#image)
* [name](_pages_paragraph_setting_d_.paragraphsetting.md#name)
* [required](_pages_paragraph_setting_d_.paragraphsetting.md#required)
* [submitOnChange](_pages_paragraph_setting_d_.paragraphsetting.md#submitonchange)
* [text](_pages_paragraph_setting_d_.paragraphsetting.md#text)
* [translateDefaultValue](_pages_paragraph_setting_d_.paragraphsetting.md#translatedefaultvalue)


###  defaultValue

▸ **defaultValue**(`value`: string | number): *[ParagraphSetting](_pages_paragraph_setting_d_.paragraphsetting.md)*

*Inherited from [SectionSetting](_pages_section_setting_d_.sectionsetting.md).[defaultValue](_pages_section_setting_d_.sectionsetting.md#defaultvalue)*

Sets the initial value displayed in the setting when first shown to the user.

**Parameters:**

Name | Type |
------ | ------ |
`value` | string &#124; number |

**Returns:** *[ParagraphSetting](_pages_paragraph_setting_d_.paragraphsetting.md)*

___

###  description

▸ **description**(`value`: string): *[ParagraphSetting](_pages_paragraph_setting_d_.paragraphsetting.md)*

*Inherited from [SectionSetting](_pages_section_setting_d_.sectionsetting.md).[description](_pages_section_setting_d_.sectionsetting.md#description)*

Sets value displayed in the setting control. Defaults to 'Tap to Set' for most types of settings.

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *[ParagraphSetting](_pages_paragraph_setting_d_.paragraphsetting.md)*

___

###  disabled

▸ **disabled**(`value`: boolean): *[ParagraphSetting](_pages_paragraph_setting_d_.paragraphsetting.md)*

*Inherited from [SectionSetting](_pages_section_setting_d_.sectionsetting.md).[disabled](_pages_section_setting_d_.sectionsetting.md#disabled)*

Disables the ability to use the control

**Parameters:**

Name | Type |
------ | ------ |
`value` | boolean |

**Returns:** *[ParagraphSetting](_pages_paragraph_setting_d_.paragraphsetting.md)*

___

###  image

▸ **image**(`source`: string): *[ParagraphSetting](_pages_paragraph_setting_d_.paragraphsetting.md)*

Specify an image URL to display with this setting

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`source` | string | HTTPS url or Base64-encoded data URI. Max length 2048 characters.  |

**Returns:** *[ParagraphSetting](_pages_paragraph_setting_d_.paragraphsetting.md)*

___

###  name

▸ **name**(`value`: string): *[ParagraphSetting](_pages_paragraph_setting_d_.paragraphsetting.md)*

*Inherited from [SectionSetting](_pages_section_setting_d_.sectionsetting.md).[name](_pages_section_setting_d_.sectionsetting.md#name)*

Sets the name of this setting. Used to reference the setting value during the processing of events. Also
used as part of the i18n key for translating the displayed name and description of the setting. All settings
on a page must have unique names.

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *[ParagraphSetting](_pages_paragraph_setting_d_.paragraphsetting.md)*

___

###  required

▸ **required**(`value`: boolean): *[ParagraphSetting](_pages_paragraph_setting_d_.paragraphsetting.md)*

*Inherited from [SectionSetting](_pages_section_setting_d_.sectionsetting.md).[required](_pages_section_setting_d_.sectionsetting.md#required)*

Specifies that the control must be set in order to save the configuration page

**Parameters:**

Name | Type |
------ | ------ |
`value` | boolean |

**Returns:** *[ParagraphSetting](_pages_paragraph_setting_d_.paragraphsetting.md)*

___

###  submitOnChange

▸ **submitOnChange**(`value`: boolean): *[ParagraphSetting](_pages_paragraph_setting_d_.paragraphsetting.md)*

*Inherited from [SectionSetting](_pages_section_setting_d_.sectionsetting.md).[submitOnChange](_pages_section_setting_d_.sectionsetting.md#submitonchange)*

Causes the page to be submitted and re-rendered any time the value of the setting is changed, rather than
requiring the user to tap Next or Done. This behavior is useful when the the presence or enabled/disabled
status of some settings depend on the value of other settings.

**Parameters:**

Name | Type |
------ | ------ |
`value` | boolean |

**Returns:** *[ParagraphSetting](_pages_paragraph_setting_d_.paragraphsetting.md)*

___

###  text

▸ **text**(`value`: string): *[ParagraphSetting](_pages_paragraph_setting_d_.paragraphsetting.md)*

Sets the paragraph text. Normally not used if the i18n framework is being used.

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *[ParagraphSetting](_pages_paragraph_setting_d_.paragraphsetting.md)*

___

###  translateDefaultValue

▸ **translateDefaultValue**(`value`: string): *[ParagraphSetting](_pages_paragraph_setting_d_.paragraphsetting.md)*

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

**Returns:** *[ParagraphSetting](_pages_paragraph_setting_d_.paragraphsetting.md)*

