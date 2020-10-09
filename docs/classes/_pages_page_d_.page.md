[Reference](../index.md) › [SmartApp](_smart_app_d_.smartapp.md) › [Page](_pages_page_d_.page.md)

# Page

Defines an app installation page. App pages are composed of one or more sections, with each section
being composed of one or more settings.

## Methods

* [complete](_pages_page_d_.page.md#complete)
* [defaultRequired](_pages_page_d_.page.md#defaultrequired)
* [name](_pages_page_d_.page.md#name)
* [nextPageId](_pages_page_d_.page.md#nextpageid)
* [nextText](_pages_page_d_.page.md#nexttext)
* [previousPageId](_pages_page_d_.page.md#previouspageid)
* [section](_pages_page_d_.page.md#section)
* [style](_pages_page_d_.page.md#style)


###  complete

▸ **complete**(`value`: boolean): *[Page](_pages_page_d_.page.md)*

Mark this page as complete, which renders a Done button that initiates the installation or update process.

**Parameters:**

Name | Type |
------ | ------ |
`value` | boolean |

**Returns:** *[Page](_pages_page_d_.page.md)*

___

###  defaultRequired

▸ **defaultRequired**(`value`: boolean): *[Page](_pages_page_d_.page.md)*

Make all settings on this page required by default. Individual settings can be made optional.

**Parameters:**

Name | Type |
------ | ------ |
`value` | boolean |

**Returns:** *[Page](_pages_page_d_.page.md)*

___

###  name

▸ **name**(`value`: string): *[Page](_pages_page_d_.page.md)*

Sets the name of the page. Not normally necessary when using the i18n localization framework unless
you need to set to set the name of the page to a non-localized value such as a room name.

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *[Page](_pages_page_d_.page.md)*

___

###  nextPageId

▸ **nextPageId**(`value`: string): *[Page](_pages_page_d_.page.md)*

Sets the next page in a multi-page app configuration

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *[Page](_pages_page_d_.page.md)*

___

###  nextText

▸ **nextText**(`value`: string): *[Page](_pages_page_d_.page.md)*

Set the text of the next page link. Defaults to "Next"

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *[Page](_pages_page_d_.page.md)*

___

###  previousPageId

▸ **previousPageId**(`value`: string): *[Page](_pages_page_d_.page.md)*

Sets the previous page in a multi-page app configuration

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *[Page](_pages_page_d_.page.md)*

___

###  section

▸ **section**(`name`: string, `closure`: function): *[Page](_pages_page_d_.page.md)*

Create a new page section

**Parameters:**

▪ **name**: *string*

the name of the section. All page section names should be unique. The section name is used in
generating an i18n key to support localized section names

▪ **closure**: *function*

code block that defines the settings within the section

▸ (`section`: [Section](_pages_section_d_.section.md)): *void | Promise‹void›*

**Parameters:**

Name | Type |
------ | ------ |
`section` | [Section](_pages_section_d_.section.md) |

**Returns:** *[Page](_pages_page_d_.page.md)*

___

###  style

▸ **style**(`value`: [PageStyle](../enums/_pages_page_d_.pagestyle.md)): *[Page](_pages_page_d_.page.md)*

Set the style of this page

**Parameters:**

Name | Type |
------ | ------ |
`value` | [PageStyle](../enums/_pages_page_d_.pagestyle.md) |

**Returns:** *[Page](_pages_page_d_.page.md)*

