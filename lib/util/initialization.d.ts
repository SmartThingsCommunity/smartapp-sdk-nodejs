export class Initialization {
	/***
	 * @see {@link SmartApp.firstPageId}
	 */
	firstPageId(value: string): Initialization

	/***
	 * @see {@link SmartApp.permissions}
	 */
	permissions(value: string | string[]): Initialization

	/***
	 * @see {@link SmartApp.disableCustomDisplayName}
	 */
	disableCustomDisplayName(value?: boolean): Initialization

	/***
	 * @see {@link SmartApp.disableRemoveApp}
	 */
	disableRemoveApp(value?: boolean): Initialization
}
