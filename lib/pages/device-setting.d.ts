import {Section} from './section'
import {SectionSetting} from './section-setting'

export enum PermissionsEnum {
    R = 'r',
    X = 'x',
    W = 'w'
}

/**
 * A device setting creates a control that allows the user to select one or more devices. The list of
 * devices presented is filtered by the capabilities specified in the setting definition. For example
 * ```
 * section.deviceSetting("motionSensors")
 *     .capability("motionSensor")
 *     .multiple(true)
 * ```
 */
export class DeviceSetting extends SectionSetting<DeviceSetting> {
    constructor(section: Section, id: string)

    /**
     * Sets the required capabilities for the devices in the select options.
     * To appear in the select list devices must have all of these
     * capabilities.
     */
    capabilities(items: string[]): DeviceSetting

    /**
     * Sets the required capability for the devices in the select options.
     */
    capability(item: string): DeviceSetting

    /**
     * Specifies whether this input should close on selection.
     */
    closeOnSelection(value: boolean): DeviceSetting

    /**
     * Devices with these capabilities will be excluded from the select options
     * even though they match the criteria specified in the `capabilities()` method
     */
    excludeCapabilities(items: string[]): DeviceSetting

    /**
     * Devices with this capability will be excluded from the select options
     * even though they match the criteria specified in the `capabilities()` method
     */
    excludeCapability(item: string): DeviceSetting

    /**
     * Specifies whether this device setting can have multiple values.
     */
    multiple(value: boolean): DeviceSetting

    /**
     * The required permissions for the selected device(s). This value can be
     * specified as a string (`rwx`), and array of strings(`['r','w','x']`), or
     * and array of typescript enum values (`[PermissionsEnum.R, PermissionsEnum.W, PermissionsEnum.X]`)
     */
    permissions(value: string | string[] | PermissionsEnum[]): DeviceSetting

    /**
     * Specifies whether the first device in the list of options should be pre selected.
     */
    preselect(value: boolean): DeviceSetting
}
