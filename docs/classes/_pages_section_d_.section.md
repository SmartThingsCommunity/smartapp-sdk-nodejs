[Reference](../index.md) › [SmartApp](_smart_app_d_.smartapp.md) › [Page](_pages_page_d_.page.md) › [Section](_pages_section_d_.section.md)
# Section

A section is a labeled collection of settings. The contents can be made collapsible if desired.
To create a basic non-collapsible section:
```
page.section('section1', section => {
    // create settings here, e.g
    section.booleanSetting('turnBackOn')
}
```
To make this section collapsible (and initially collapsed):
```
page.section('section1', section => {
    section.hideable(true).hidden(true)

    // create settings here, e.g
    section.booleanSetting('turnBackOn')
}
```

## Section Options

* [defaultRequired](_pages_section_d_.section.md#defaultrequired)
* [hidden](_pages_section_d_.section.md#hidden)
* [hideable](_pages_section_d_.section.md#hideable)
* [name](_pages_section_d_.section.md#name)
* [style](_pages_section_d_.section.md#style)

## Setting Methods
* [booleanSetting](_pages_boolean_setting_d_.booleansetting.md)
* [decimalSetting](_pages_decimal_setting_d_.decimalsetting.md)
* [deviceSetting](_pages_device_setting_d_.devicesetting.md)
* [emailSetting](_pages_email_setting_d_.emailsetting.md)
* [enumSetting](_pages_enum_setting_d_.enumsetting.md)
* [imageSetting](_pages_image_setting_d_.imagesetting.md)
* [imagesSetting](_pages_images_setting_d_.imagessetting.md)
* [linkSetting](_pages_link_setting_d_.linksetting.md)
* [modeSetting](_pages_mode_setting_d_.modesetting.md)
* [numberSetting](_pages_number_setting_d_.numbersetting.md)
* [oauthSetting](_pages_oauth_setting_d_.oauthsetting.md)
* [pageSetting](_pages_page_setting_d_.pagesetting.md)
* [paragraphSetting](_pages_paragraph_setting_d_.paragraphsetting.md)
* [passwordSetting](_pages_password_setting_d_.passwordsetting.md)
* [phoneSetting](_pages_phone_setting_d_.phonesetting.md)
* [sceneSetting](_pages_scene_setting_d_.scenesetting.md)
* [securitySetting](_pages_security_setting_d_.securitysetting.md)
* [soundSetting](_pages_sound_setting_d_.soundsetting.md)
* [textSetting](_pages_text_setting_d_.textsetting.md)
* [timeSetting](_pages_time_setting_d_.timesetting.md)
* [videoSetting](_pages_video_setting_d_.videosetting.md)

###  defaultRequired

▸ **defaultRequired**(`defaultRequired`: boolean): *[Section](_pages_section_d_.section.md)*

Specifies that all settings in the session should default to being required

**Parameters:**

Name | Type |
------ | ------ |
`defaultRequired` | boolean |

**Returns:** *[Section](_pages_section_d_.section.md)*

___

###  hidden

▸ **hidden**(`value`: boolean): *[Section](_pages_section_d_.section.md)*

Specifies that the section should initially be hidden

**Parameters:**

Name | Type |
------ | ------ |
`value` | boolean |

**Returns:** *[Section](_pages_section_d_.section.md)*

___

###  hideable

▸ **hideable**(`value`: boolean): *[Section](_pages_section_d_.section.md)*

Specifies that the section should be able to be hidden (though not initially hidden)

**Parameters:**

Name | Type |
------ | ------ |
`value` | boolean |

**Returns:** *[Section](_pages_section_d_.section.md)*

___

###  name

▸ **name**(`value`: string): *[Section](_pages_section_d_.section.md)*

Sets the name (label) of the section. Normally not set if the i18n framework is being used

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *[Section](_pages_section_d_.section.md)*

___

###  style

▸ **style**(`style`: [SectionStyle](../enums/_pages_section_d_.sectionstyle.md)): *[Section](_pages_section_d_.section.md)*

Sets the session style

**Parameters:**

Name | Type |
------ | ------ |
`style` | [SectionStyle](../enums/_pages_section_d_.sectionstyle.md) |

**Returns:** *[Section](_pages_section_d_.section.md)*

___

