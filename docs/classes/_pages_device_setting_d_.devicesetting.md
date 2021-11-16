[Reference](../index.md) › [SmartApp](_smart_app_d_.smartapp.md) › [Page](_pages_page_d_.page.md) › [Section](_pages_section_d_.section.md) ›  [DeviceSetting](_pages_device_setting_d_.devicesetting.md)

# DeviceSetting

A device setting creates a control that allows the user to select one or more devices. The list of
devices presented is filtered by the capabilities specified in the setting definition. For example
```
section.deviceSetting("motionSensors")
    .capability("motionSensor")
    .multiple(true)
```

## Methods

* [capabilities](_pages_device_setting_d_.devicesetting.md#capabilities)
* [capability](_pages_device_setting_d_.devicesetting.md#capability)
* [closeOnSelection](_pages_device_setting_d_.devicesetting.md#closeonselection)
* [defaultValue](_pages_device_setting_d_.devicesetting.md#defaultvalue)
* [description](_pages_device_setting_d_.devicesetting.md#description)
* [disabled](_pages_device_setting_d_.devicesetting.md#disabled)
* [excludeCapabilities](_pages_device_setting_d_.devicesetting.md#excludecapabilities)
* [excludeCapability](_pages_device_setting_d_.devicesetting.md#excludecapability)
* [multiple](_pages_device_setting_d_.devicesetting.md#multiple)
* [name](_pages_device_setting_d_.devicesetting.md#name)
* [permissions](_pages_device_setting_d_.devicesetting.md#permissions)
* [preselect](_pages_device_setting_d_.devicesetting.md#preselect)
* [required](_pages_device_setting_d_.devicesetting.md#required)
* [submitOnChange](_pages_device_setting_d_.devicesetting.md#submitonchange)
* [translateDefaultValue](_pages_device_setting_d_.devicesetting.md#translatedefaultvalue)


###  capabilities

▸ **capabilities**(`items`: string[]): *[DeviceSetting](_pages_device_setting_d_.devicesetting.md)*

Sets the required capabilities for the devices in the selection options.
To appear in the selection list, devices must have all of the specified capabilities.

**Parameters:**

Name | Type |
------ | ------ |
`items` | string[] |

**Returns:** *[DeviceSetting](_pages_device_setting_d_.devicesetting.md)*

___

###  capability

▸ **capability**(`item`: string): *[DeviceSetting](_pages_device_setting_d_.devicesetting.md)*

Sets the required capability for the devices in the selection options.

**Parameters:**

Name | Type |
------ | ------ |
`item` | string |

**Returns:** *[DeviceSetting](_pages_device_setting_d_.devicesetting.md)*

___

###  closeOnSelection

▸ **closeOnSelection**(`value`: boolean): *[DeviceSetting](_pages_device_setting_d_.devicesetting.md)*

Specifies whether this input should close on selection.

**Parameters:**

Name | Type |
------ | ------ |
`value` | boolean |

**Returns:** *[DeviceSetting](_pages_device_setting_d_.devicesetting.md)*

___

###  defaultValue

▸ **defaultValue**(`value`: string | number): *[DeviceSetting](_pages_device_setting_d_.devicesetting.md)*

*Inherited from [SectionSetting](_pages_section_setting_d_.sectionsetting.md).[defaultValue](_pages_section_setting_d_.sectionsetting.md#defaultvalue)*

Sets the initial value displayed in the setting when first shown to the user.

**Parameters:**

Name | Type |
------ | ------ |
`value` | string &#124; number |

**Returns:** *[DeviceSetting](_pages_device_setting_d_.devicesetting.md)*

___

###  description

▸ **description**(`value`: string): *[DeviceSetting](_pages_device_setting_d_.devicesetting.md)*

*Inherited from [SectionSetting](_pages_section_setting_d_.sectionsetting.md).[description](_pages_section_setting_d_.sectionsetting.md#description)*

Sets value displayed in the setting control. Defaults to 'Tap to Set' for most types of settings.

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *[DeviceSetting](_pages_device_setting_d_.devicesetting.md)*

___

###  disabled

▸ **disabled**(`value`: boolean): *[DeviceSetting](_pages_device_setting_d_.devicesetting.md)*

*Inherited from [SectionSetting](_pages_section_setting_d_.sectionsetting.md).[disabled](_pages_section_setting_d_.sectionsetting.md#disabled)*

Disables the ability to use the control

**Parameters:**

Name | Type |
------ | ------ |
`value` | boolean |

**Returns:** *[DeviceSetting](_pages_device_setting_d_.devicesetting.md)*

___

###  excludeCapabilities

▸ **excludeCapabilities**(`items`: string[]): *[DeviceSetting](_pages_device_setting_d_.devicesetting.md)*

Devices with these capabilities will be excluded from the selection options
even though they match the criteria specified in the `capabilities()` method

**Parameters:**

Name | Type |
------ | ------ |
`items` | string[] |

**Returns:** *[DeviceSetting](_pages_device_setting_d_.devicesetting.md)*

___

###  excludeCapability

▸ **excludeCapability**(`item`: string): *[DeviceSetting](_pages_device_setting_d_.devicesetting.md)*

Devices with this capability will be excluded from the selection options
even though they match the criteria specified in the `capabilities()` method

**Parameters:**

Name | Type |
------ | ------ |
`item` | string |

**Returns:** *[DeviceSetting](_pages_device_setting_d_.devicesetting.md)*

___

###  multiple

▸ **multiple**(`value`: boolean): *[DeviceSetting](_pages_device_setting_d_.devicesetting.md)*

Specifies whether this device setting can have multiple values.

**Parameters:**

Name | Type |
------ | ------ |
`value` | boolean |

**Returns:** *[DeviceSetting](_pages_device_setting_d_.devicesetting.md)*

___

###  name

▸ **name**(`value`: string): *[DeviceSetting](_pages_device_setting_d_.devicesetting.md)*

*Inherited from [SectionSetting](_pages_section_setting_d_.sectionsetting.md).[name](_pages_section_setting_d_.sectionsetting.md#name)*

Sets the name of this setting. Used to reference the setting value during the processing of events. Also
used as part of the i18n key for translating the displayed name and description of the setting. All settings
on a page must have unique names.

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *[DeviceSetting](_pages_device_setting_d_.devicesetting.md)*

___

###  permissions

▸ **permissions**(`value`: string | string[] | [PermissionsEnum](../enums/_pages_device_setting_d_.permissionsenum.md)[]): *[DeviceSetting](_pages_device_setting_d_.devicesetting.md)*

The required permissions for the selected device(s). This value can be
specified as a string (`rwx`), an array of strings(`['r','w','x']`), or
an array of typescript enum values (`[PermissionsEnum.R, PermissionsEnum.W, PermissionsEnum.X]`)

**Parameters:**

Name | Type |
------ | ------ |
`value` | string &#124; string[] &#124; [PermissionsEnum](../enums/_pages_device_setting_d_.permissionsenum.md)[] |

**Returns:** *[DeviceSetting](_pages_device_setting_d_.devicesetting.md)*

___

###  preselect

▸ **preselect**(`value`: boolean): *[DeviceSetting](_pages_device_setting_d_.devicesetting.md)*

Specifies whether the first device in the list of options should be pre selected.

**Parameters:**

Name | Type |
------ | ------ |
`value` | boolean |

**Returns:** *[DeviceSetting](_pages_device_setting_d_.devicesetting.md)*

___

###  required

▸ **required**(`value`: boolean): *[DeviceSetting](_pages_device_setting_d_.devicesetting.md)*

*Inherited from [SectionSetting](_pages_section_setting_d_.sectionsetting.md).[required](_pages_section_setting_d_.sectionsetting.md#required)*

Specifies that the control must be set in order to save the configuration page

**Parameters:**

Name | Type |
------ | ------ |
`value` | boolean |

**Returns:** *[DeviceSetting](_pages_device_setting_d_.devicesetting.md)*

___

###  submitOnChange

▸ **submitOnChange**(`value`: boolean): *[DeviceSetting](_pages_device_setting_d_.devicesetting.md)*

*Inherited from [SectionSetting](_pages_section_setting_d_.sectionsetting.md).[submitOnChange](_pages_section_setting_d_.sectionsetting.md#submitonchange)*

Causes the page to be submitted and re-rendered any time the value of the setting is changed, rather than
requiring the user to tap Next or Done. This behavior is useful when the the presence or enabled/disabled
status of some settings depend on the value of other settings.

**Parameters:**

Name | Type |
------ | ------ |
`value` | boolean |

**Returns:** *[DeviceSetting](_pages_device_setting_d_.devicesetting.md)*

___

###  translateDefaultValue

▸ **translateDefaultValue**(`value`: string): *[DeviceSetting](_pages_device_setting_d_.devicesetting.md)*

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

**Returns:** *[DeviceSetting](_pages_device_setting_d_.devicesetting.md)*
