[Reference](../index.md) › [SmartApp](_smart_app_d_.smartapp.md) › [Page](_pages_page_d_.page.md) › [Section](_pages_section_d_.section.md) ›  [VideoSetting](_pages_video_setting_d_.videosetting.md)

# VideoSetting

An image settings simply displays an image on the configuration page. There is no user input involved.
```
section.videoSetting('instructions')
    .image('https://mysite/preview.png')
    .video('https…//mysite/video.mp4')
```

## Methods

* [defaultValue](_pages_video_setting_d_.videosetting.md#defaultvalue)
* [description](_pages_video_setting_d_.videosetting.md#description)
* [disabled](_pages_video_setting_d_.videosetting.md#disabled)
* [image](_pages_video_setting_d_.videosetting.md#image)
* [name](_pages_video_setting_d_.videosetting.md#name)
* [required](_pages_video_setting_d_.videosetting.md#required)
* [submitOnChange](_pages_video_setting_d_.videosetting.md#submitonchange)
* [translateDefaultValue](_pages_video_setting_d_.videosetting.md#translatedefaultvalue)
* [video](_pages_video_setting_d_.videosetting.md#video)


###  defaultValue

▸ **defaultValue**(`value`: string | number): *[VideoSetting](_pages_video_setting_d_.videosetting.md)*

*Inherited from [SectionSetting](_pages_section_setting_d_.sectionsetting.md).[defaultValue](_pages_section_setting_d_.sectionsetting.md#defaultvalue)*

Sets the initial value displayed in the setting when first shown to the user.

**Parameters:**

Name | Type |
------ | ------ |
`value` | string &#124; number |

**Returns:** *[VideoSetting](_pages_video_setting_d_.videosetting.md)*

___

###  description

▸ **description**(`value`: string): *[VideoSetting](_pages_video_setting_d_.videosetting.md)*

*Inherited from [SectionSetting](_pages_section_setting_d_.sectionsetting.md).[description](_pages_section_setting_d_.sectionsetting.md#description)*

Sets value displayed in the setting control. Defaults to 'Tap to Set' for most types of settings.

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *[VideoSetting](_pages_video_setting_d_.videosetting.md)*

___

###  disabled

▸ **disabled**(`value`: boolean): *[VideoSetting](_pages_video_setting_d_.videosetting.md)*

*Inherited from [SectionSetting](_pages_section_setting_d_.sectionsetting.md).[disabled](_pages_section_setting_d_.sectionsetting.md#disabled)*

Disables the ability to use the control

**Parameters:**

Name | Type |
------ | ------ |
`value` | boolean |

**Returns:** *[VideoSetting](_pages_video_setting_d_.videosetting.md)*

___

###  image

▸ **image**(`source`: string): *[VideoSetting](_pages_video_setting_d_.videosetting.md)*

Set the URL of an image to display as a preview of the video

**Parameters:**

Name | Type |
------ | ------ |
`source` | string |

**Returns:** *[VideoSetting](_pages_video_setting_d_.videosetting.md)*

___

###  name

▸ **name**(`value`: string): *[VideoSetting](_pages_video_setting_d_.videosetting.md)*

*Inherited from [SectionSetting](_pages_section_setting_d_.sectionsetting.md).[name](_pages_section_setting_d_.sectionsetting.md#name)*

Sets the name of this setting. Used to reference the setting value during the processing of events. Also
used as part of the i18n key for translating the displayed name and description of the setting. All settings
on a page must have unique names.

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *[VideoSetting](_pages_video_setting_d_.videosetting.md)*

___

###  required

▸ **required**(`value`: boolean): *[VideoSetting](_pages_video_setting_d_.videosetting.md)*

*Inherited from [SectionSetting](_pages_section_setting_d_.sectionsetting.md).[required](_pages_section_setting_d_.sectionsetting.md#required)*

Specifies that the control must be set in order to save the configuration page

**Parameters:**

Name | Type |
------ | ------ |
`value` | boolean |

**Returns:** *[VideoSetting](_pages_video_setting_d_.videosetting.md)*

___

###  submitOnChange

▸ **submitOnChange**(`value`: boolean): *[VideoSetting](_pages_video_setting_d_.videosetting.md)*

*Inherited from [SectionSetting](_pages_section_setting_d_.sectionsetting.md).[submitOnChange](_pages_section_setting_d_.sectionsetting.md#submitonchange)*

Causes the page to be submitted and re-rendered any time the value of the setting is changed, rather than
requiring the user to tap Next or Done. This behavior is useful when the the presence or enabled/disabled
status of some settings depend on the value of other settings.

**Parameters:**

Name | Type |
------ | ------ |
`value` | boolean |

**Returns:** *[VideoSetting](_pages_video_setting_d_.videosetting.md)*

___

###  translateDefaultValue

▸ **translateDefaultValue**(`value`: string): *[VideoSetting](_pages_video_setting_d_.videosetting.md)*

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

**Returns:** *[VideoSetting](_pages_video_setting_d_.videosetting.md)*

___

###  video

▸ **video**(`source`: string): *[VideoSetting](_pages_video_setting_d_.videosetting.md)*

Set the URL of the video

**Parameters:**

Name | Type |
------ | ------ |
`source` | string |

**Returns:** *[VideoSetting](_pages_video_setting_d_.videosetting.md)*

