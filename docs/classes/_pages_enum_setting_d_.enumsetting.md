[Reference](../index.md) › [SmartApp](_smart_app_d_.smartapp.md) › [Page](_pages_page_d_.page.md) › [Section](_pages_section_d_.section.md) ›  [EnumSetting](_pages_enum_setting_d_.enumsetting.md)

# EnumSetting

An enum setting creates an control that allows for the selection from among a list of options. Both single and
multiple selections are supported. Grouped options are also supported. The options can be specified as a
simple list of strings, a map of key/value pairs, or a list of OptionItems. The simplest case of specifying
options as a list of strings is often the best approach:
```
section.enumSetting('simpleEnum')
    .options(['red','yellow','green','blue'])
```
In this case the string values are used as both the labels and the value of the option. However if you are
using the i18n localization option you can define translated strings for each of these options in the localization
files. For example, the entries to provide English strings for the above setting might look like:
```
	"pages.page1.settings.simpleEnum.options.red.name": "Red",
 "pages.page1.settings.simpleEnum.options.yellow.name": "Yellow",
 "pages.page1.settings.simpleEnum.options.green.name": "Green",
 "pages.page1.settings.simpleEnum.options.blue.name": "Blue",
```
If you are not using the i18n localization framework or don't want to use it for a particular set of options you
can provide option labels that are distinct from the option values by specifying the options as a map, where the
map keys are the option values and the map values are the labels:
```
section.enumSetting('mapEnum')
    .translateOptions(false)
    .options({on: 'Turn On', off: 'Turn Off', noop: 'Leave As Is'})
```
A drawback of specifying the options as a map, however, is that the order of the options in the list cannot
necessarily be controlled. To specify options in a controlled order you can specify them as a list of id/name
OptionItems:
```
section.enumSetting('opjectListEnum')
    .translateOptions(false)
    .options([
        {id: 25, name: '25 %'},
        {id: 50, name: '50 %'},
        {id: 75, name: '75 %'},
        {id: 100, name: '100 %'}])
```
It's also possible to group options into multiple named groups in selector control:
```
section.enumSetting('groupedEnum')
    .groupedOptions([
        {name: 'primaryColors', options: [
            {id:'red', name:'Red'},
            {id:'yellow', name:'Yellow'},
            {id:'blue', name:'Blue'}]},
        {name: 'primaryColors', options: [
            {id:'green', name:'Green'},
            {id:'orange', name:'Orange'},
            {id:'purple', name:'Purple'}]},
    ])
```

## Methods

* [closeOnSelection](_pages_enum_setting_d_.enumsetting.md#closeonselection)
* [defaultValue](_pages_enum_setting_d_.enumsetting.md#defaultvalue)
* [description](_pages_enum_setting_d_.enumsetting.md#description)
* [disabled](_pages_enum_setting_d_.enumsetting.md#disabled)
* [groupedOptions](_pages_enum_setting_d_.enumsetting.md#groupedoptions)
* [i18nOptionGroupKey](_pages_enum_setting_d_.enumsetting.md#i18noptiongroupkey)
* [i18nOptionGroupOptionKey](_pages_enum_setting_d_.enumsetting.md#i18noptiongroupoptionkey)
* [i18nOptionKey](_pages_enum_setting_d_.enumsetting.md#i18noptionkey)
* [multiple](_pages_enum_setting_d_.enumsetting.md#multiple)
* [name](_pages_enum_setting_d_.enumsetting.md#name)
* [options](_pages_enum_setting_d_.enumsetting.md#options)
* [required](_pages_enum_setting_d_.enumsetting.md#required)
* [style](_pages_enum_setting_d_.enumsetting.md#style)
* [submitOnChange](_pages_enum_setting_d_.enumsetting.md#submitonchange)
* [translateDefaultValue](_pages_enum_setting_d_.enumsetting.md#translatedefaultvalue)
* [translateOptions](_pages_enum_setting_d_.enumsetting.md#translateoptions)


###  closeOnSelection

▸ **closeOnSelection**(`value`: boolean): *[EnumSetting](_pages_enum_setting_d_.enumsetting.md)*

Specifies whether this input should close on selection.

**Parameters:**

Name | Type |
------ | ------ |
`value` | boolean |

**Returns:** *[EnumSetting](_pages_enum_setting_d_.enumsetting.md)*

___

###  defaultValue

▸ **defaultValue**(`value`: string | number): *[EnumSetting](_pages_enum_setting_d_.enumsetting.md)*

*Inherited from [SectionSetting](_pages_section_setting_d_.sectionsetting.md).[defaultValue](_pages_section_setting_d_.sectionsetting.md#defaultvalue)*

Sets the initial value displayed in the setting when first shown to the user.

**Parameters:**

Name | Type |
------ | ------ |
`value` | string &#124; number |

**Returns:** *[EnumSetting](_pages_enum_setting_d_.enumsetting.md)*

___

###  description

▸ **description**(`value`: string): *[EnumSetting](_pages_enum_setting_d_.enumsetting.md)*

*Inherited from [SectionSetting](_pages_section_setting_d_.sectionsetting.md).[description](_pages_section_setting_d_.sectionsetting.md#description)*

Sets value displayed in the setting control. Defaults to 'Tap to Set' for most types of settings.

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *[EnumSetting](_pages_enum_setting_d_.enumsetting.md)*

___

###  disabled

▸ **disabled**(`value`: boolean): *[EnumSetting](_pages_enum_setting_d_.enumsetting.md)*

*Inherited from [SectionSetting](_pages_section_setting_d_.sectionsetting.md).[disabled](_pages_section_setting_d_.sectionsetting.md#disabled)*

Disables the ability to use the control

**Parameters:**

Name | Type |
------ | ------ |
`value` | boolean |

**Returns:** *[EnumSetting](_pages_enum_setting_d_.enumsetting.md)*

___

###  groupedOptions

▸ **groupedOptions**(`groups`: [OptionGroup](../interfaces/_pages_enum_setting_d_.optiongroup.md)[]): *[EnumSetting](_pages_enum_setting_d_.enumsetting.md)*

Sets the possible values as named groups of options

**Parameters:**

Name | Type |
------ | ------ |
`groups` | [OptionGroup](../interfaces/_pages_enum_setting_d_.optiongroup.md)[] |

**Returns:** *[EnumSetting](_pages_enum_setting_d_.enumsetting.md)*

___

###  i18nOptionGroupKey

▸ **i18nOptionGroupKey**(`groupName`: string): *string*

Returns the localization property file key for the specified OptionGroup name

**Parameters:**

Name | Type |
------ | ------ |
`groupName` | string |

**Returns:** *string*

___

###  i18nOptionGroupOptionKey

▸ **i18nOptionGroupOptionKey**(`groupName`: string, `optionItemName`: string): *string*

REturnes the localization property file key for the specified grouped option property

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`groupName` | string | the OptionsGroup name |
`optionItemName` | string | the OptionItem name  |

**Returns:** *string*

___

###  i18nOptionKey

▸ **i18nOptionKey**(`optionItemName`: string): *string*

Returns the localization property file key for the specified OptionItem name

**Parameters:**

Name | Type |
------ | ------ |
`optionItemName` | string |

**Returns:** *string*

___

###  multiple

▸ **multiple**(`value`: boolean): *[EnumSetting](_pages_enum_setting_d_.enumsetting.md)*

Specifies whether this device setting can have multiple values.

**Parameters:**

Name | Type |
------ | ------ |
`value` | boolean |

**Returns:** *[EnumSetting](_pages_enum_setting_d_.enumsetting.md)*

___

###  name

▸ **name**(`value`: string): *[EnumSetting](_pages_enum_setting_d_.enumsetting.md)*

*Inherited from [SectionSetting](_pages_section_setting_d_.sectionsetting.md).[name](_pages_section_setting_d_.sectionsetting.md#name)*

Sets the name of this setting. Used to reference the setting value during the processing of events. Also
used as part of the i18n key for translating the displayed name and description of the setting. All settings
on a page must have unique names.

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *[EnumSetting](_pages_enum_setting_d_.enumsetting.md)*

___

###  options

▸ **options**(`options`: [OptionList](../modules/_pages_enum_setting_d_.md#optionlist)): *[EnumSetting](_pages_enum_setting_d_.enumsetting.md)*

Sets the possible values as one list of options

**Parameters:**

Name | Type |
------ | ------ |
`options` | [OptionList](../modules/_pages_enum_setting_d_.md#optionlist) |

**Returns:** *[EnumSetting](_pages_enum_setting_d_.enumsetting.md)*

___

###  required

▸ **required**(`value`: boolean): *[EnumSetting](_pages_enum_setting_d_.enumsetting.md)*

*Inherited from [SectionSetting](_pages_section_setting_d_.sectionsetting.md).[required](_pages_section_setting_d_.sectionsetting.md#required)*

Specifies that the control must be set in order to save the configuration page

**Parameters:**

Name | Type |
------ | ------ |
`value` | boolean |

**Returns:** *[EnumSetting](_pages_enum_setting_d_.enumsetting.md)*

___

###  style

▸ **style**(`value`: [OptionsStyle](../enums/_pages_enum_setting_d_.optionsstyle.md)): *[EnumSetting](_pages_enum_setting_d_.enumsetting.md)*

Set the style of the setting in the UI.

**Parameters:**

Name | Type |
------ | ------ |
`value` | [OptionsStyle](../enums/_pages_enum_setting_d_.optionsstyle.md) |

**Returns:** *[EnumSetting](_pages_enum_setting_d_.enumsetting.md)*

___

###  submitOnChange

▸ **submitOnChange**(`value`: boolean): *[EnumSetting](_pages_enum_setting_d_.enumsetting.md)*

*Inherited from [SectionSetting](_pages_section_setting_d_.sectionsetting.md).[submitOnChange](_pages_section_setting_d_.sectionsetting.md#submitonchange)*

Causes the page to be submitted and re-rendered any time the value of the setting is changed, rather than
requiring the user to tap Next or Done. This behavior is useful when the the presence or enabled/disabled
status of some settings depend on the value of other settings.

**Parameters:**

Name | Type |
------ | ------ |
`value` | boolean |

**Returns:** *[EnumSetting](_pages_enum_setting_d_.enumsetting.md)*

___

###  translateDefaultValue

▸ **translateDefaultValue**(`value`: string): *[EnumSetting](_pages_enum_setting_d_.enumsetting.md)*

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

**Returns:** *[EnumSetting](_pages_enum_setting_d_.enumsetting.md)*

___

###  translateOptions

▸ **translateOptions**(`value`: boolean): *[EnumSetting](_pages_enum_setting_d_.enumsetting.md)*

Dtermines whether options are translated, which developers may want to disable if the labels are
values generated by the app and already in the language of the user.

**Parameters:**

Name | Type |
------ | ------ |
`value` | boolean |

**Returns:** *[EnumSetting](_pages_enum_setting_d_.enumsetting.md)*

