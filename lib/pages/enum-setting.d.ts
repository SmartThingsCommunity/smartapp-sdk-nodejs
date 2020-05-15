import {Section} from './section'
import {SectionSetting} from './section-setting'

export interface OptionItem {
    id: string
    name: string
}

export type OptionList = string[] | OptionItem[] | {[key: string]: string}

export interface OptionGroup {
    name: string,
    options: OptionList
}

export enum OptionsStyle {
    COMPLETE = 'COMPLETE',
    ERROR = 'ERROR',
    DROPDOWN = 'DROPDOWN',
    DEFAULT = 'DEFAULT'
}

/**
 * An enum setting creates an control that allows for the selection from among a list of options. Both single and
 * multiple selections are supported. Grouped options are also supported. The options can be specified as a
 * simple list of strings, a map of key/value pairs, or a list of OptionItems. The simplest case of specifying
 * options as a list of strings is often the best approach:
 * ```
 * section.enumSetting('simpleEnum')
 *     .options(['red','yellow','green','blue'])
 * ```
 * In this case the string values are used as both the labels and the value of the option. However if you are
 * using the i18n localization option you can define translated strings for each of these options in the localization
 * files. For example, the entries to provide English strings for the above setting might look like:
 * ```
 * 	"pages.page1.settings.simpleEnum.options.red.name": "Red",
 *  "pages.page1.settings.simpleEnum.options.yellow.name": "Yellow",
 *  "pages.page1.settings.simpleEnum.options.green.name": "Green",
 *  "pages.page1.settings.simpleEnum.options.blue.name": "Blue",
 * ```
 * If you are not using the i18n localization framework or don't want to use it for a particular set of options you
 * can provide option labels that are distinct from the option values by specifying the options as a map, where the
 * map keys are the option values and the map values are the labels:
 * ```
 * section.enumSetting('mapEnum')
 *     .translateOptions(false)
 *     .options({on: 'Turn On', off: 'Turn Off', noop: 'Leave As Is'})
 * ```
 * A drawback of specifying the options as a map, however, is that the order of the options in the list cannot
 * necessarily be controlled. To specify options in a controlled order you can specify them as a list of id/name
 * OptionItems:
 * ```
 * section.enumSetting('opjectListEnum')
 *     .translateOptions(false)
 *     .options([
 *         {id: 25, name: '25 %'},
 *         {id: 50, name: '50 %'},
 *         {id: 75, name: '75 %'},
 *         {id: 100, name: '100 %'}])
 * ```
 * It's also possible to group options into multiple named groups in selector control:
 * ```
 * section.enumSetting('groupedEnum')
 *     .groupedOptions([
 *         {name: 'primaryColors', options: [
 *             {id:'red', name:'Red'},
 *             {id:'yellow', name:'Yellow'},
 *             {id:'blue', name:'Blue'}]},
 *         {name: 'primaryColors', options: [
 *             {id:'green', name:'Green'},
 *             {id:'orange', name:'Orange'},
 *             {id:'purple', name:'Purple'}]},
 *     ])
 * ```
 */
export class EnumSetting extends SectionSetting<EnumSetting> {
    constructor(section: Section, id: string)

    /**
     * Specifies whether this input should close on selection.
     */
    closeOnSelection(value: boolean): EnumSetting

    /**
     * Sets the possible values as named groups of options
     */
    groupedOptions(groups: OptionGroup[]): EnumSetting

    /**
     * Specifies whether this device setting can have multiple values.
     */
    multiple(value: boolean): EnumSetting

    /**
     * Sets the possible values as one list of options
     */
    options(options: OptionList): EnumSetting

    /**
     * Set the style of the setting in the UI.
     */
    style(value: OptionsStyle): EnumSetting

    /**
     * Dtermines whether options are translated, which developers may want to disable if the labels are
     * values generated by the app and already in the language of the user.
     */
    translateOptions(value: boolean): EnumSetting

    /**
     * Returns the localization property file key for the specified OptionGroup name
     */
    i18nOptionGroupKey(groupName: string): string

    /**
     * REturnes the localization property file key for the specified grouped option property
     * @param groupName the OptionsGroup name
     * @param optionItemName the OptionItem name
     */
    i18nOptionGroupOptionKey(groupName: string, optionItemName: string): string

    /**
     * Returns the localization property file key for the specified OptionItem name
     */
    i18nOptionKey(optionItemName: string): string
}
