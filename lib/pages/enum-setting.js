'use strict'

const SectionSetting = require('./section-setting.js')

module.exports = class EnumSetting extends SectionSetting {
	constructor(section, id) {
		super(section, id)
		this._type = 'ENUM'
		this._description = 'Tap to set'
	}

	/**
	 * @typedef GroupedOption
	 * @property {String} name The display name of this group of enum options. Max length 128 characters.
	 * @property {Array<Option>} options The enum options.
	 */

	/**
	 * @typedef Option
	 * @property {String} id The unique ID for this option. Max length 128 characters.
	 * @property {String} name The display name for this option. Max length 128 characters.
	 */

	/**
	 * Indicates if this enum setting can have multiple values.
	 *
	 * @param {Boolean} value Multiple values
	 * @default false
	 * @returns {EnumSetting} Enum Setting instance
	 */
	multiple(value) {
		this._multiple = value
		return this
	}

	/**
	 * Indicates if this input should close on selection.
	 *
	 * @param {Boolean} value Close on selection value
	 * @default true
	 * @returns {EnumSetting} Enum Setting instance
	 */
	closeOnSelection(value) {
		this._closeOnSelection = value
		return this
	}

	i18nOptionKey(property) {
		return this._section._page.i18nKey(`settings.${this._id}.options.${property}.name`)
	}

	i18nOptionGroupKey(property) {
		return this._section._page.i18nKey(`settings.${this._id}.groups.${property}.name`)
	}

	i18nOptionGroupOptionKey(groupName, property) {
		return this._section._page.i18nKey(`settings.${this._id}.groups.${groupName}.options.${property}.name`)
	}

	/**
	 * Display the enum options as named groups.
	 *
	 * @param {Array<GroupedOption>} groups Array of grouped options
	 * @returns {EnumSetting} Enum Setting instance
	 * @example
	 * const groups = [{
	 *         name: 'First Group',
	 *         options: [{
	 *             id: 'option-001',
	 *             name: 'Option 1'
	 *         }]
	 *     },
	 *     {
	 *         name: 'Second Group',
	 *         options: [{
	 *             id: 'option-002',
	 *             name: 'Option 2'
	 *         }]
	 *     }
	 * ]
	 * section.enumSetting('id').groupedOptions(groups)
	 */
	groupedOptions(groups) {
		this._groupedOptions = groups
		if (Array.isArray(groups)) {
			for (const group of groups) {
				if (group instanceof Object) {
					const groupName = group.name
					group.name = this.i18nOptionGroupKey(group.name)
					for (const option of group.options) {
						option.name = this.i18nOptionGroupOptionKey(groupName, option.name)
					}
				} else {
					throw new TypeError(`${typeof group} not valid for options group item`)
				}
			}
		} else {
			throw new TypeError(`${typeof groups} not valid for options group`)
		}

		this._groupedOptions = groups
		return this
	}

	/**
	 * The enum options.
	 *
	 * @param {Option | Array.<Option>} options Single or array of options
	 * @returns {EnumSetting} Enum Setting instance
	 * @example
	 * const options = [{
	 *         id: 'option-001',
	 *         name: 'Option 1'
	 *     },
	 *     {
	 *         id: 'option-002',
	 *         name: 'Option 2'
	 *     }
	 * ]
	 * section.enumSetting('id').options(options)
	 */
	options(options) {
		const values = []
		if (Array.isArray(options)) {
			for (const it of options) {
				it.name = this.i18nOptionKey(it.name)
				values.push(it)
			}
		} else if (options instanceof Object) {
			for (const property in options) {
				if (Object.prototype.hasOwnProperty.call(options, property)) {
					this.i18nOptionKey(options[property])
					values.push({id: property, name: options[property]})
				}
			}
		} else {
			throw new TypeError(`${typeof options} not valid for options`)
		}

		this._options = values
		return this
	}

	/**
	 * Indicates if this input should refresh configs after a change in value.
	 *
	 * @param {Boolean} value Submit on change value
	 * @default false
	 * @returns {EnumSetting} Enum Setting instance
	 */
	submitOnChange(value) {
		this._submitOnChange = value
		return this
	}

	/**
	 * Style of the setting.
	 *
	 * @param {('COMPLETE'|'ERROR'|'DEFAULT'|'DROPDOWN')} value
	 * @returns {EnumSetting} Enum Setting instance
	 */
	style(value) {
		this._style = value
		return this
	}

	toJson() {
		const result = super.toJson()
		if (this._multiple) {
			result.multiple = this._multiple
		}

		if (this._closeOnSelection) {
			result.closeOnSelection = this._closeOnSelection
		}

		if (Array.isArray(this._groupedOptions)) {
			result.groupedOptions = this._groupedOptions
			for (let i = 0; i < this._groupedOptions.length; i++) {
				const group = this._groupedOptions[i]
				result.groupedOptions[i].name = this.translate(group.name)
				for (let g = 0; g < this._groupedOptions[i].options.length; g++) {
					const option = this._groupedOptions[i].options[g]
					result.groupedOptions[i].options[g].name = this.translate(option.name)
				}
			}
		} else {
			result.groupedOptions = this._groupedOptions
		}

		if (Array.isArray(this._options)) {
			result.options = this._options
			for (let i = 0; i < this._options.length; i++) {
				const it = this._options[i]
				result.options[i].name = this.translate(it.name)
			}
		} else {
			result.options = this._options
		}

		if (this._style) {
			result.style = this._style
		}

		return result
	}
}
