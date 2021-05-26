export namespace i18n {
	interface ConfigurationOptions {
		/**
		 * Setup some locales - other locales default to en silently
		 * @default []
		 */
		locales?: string[];

		/**
		 * Language fallback map
		 * @default {}
		 */
		fallbacks?: {
			[locale: string]: string;
		};

		/**
		 * Alter a site wide default locale
		 * @default "en"
		 */
		defaultLocale?: string;

		/**
		 * Sets a custom cookie name to parse locale settings from
		 * @default null
		 */
		cookie?: string;

		/**
		 * Query parameter to switch locale (ie. /home?lang=ch)
		 * @default null
		 */
		queryParameter?: string;

		/**
		 * Where to store json files, relative to modules directory
		 * @default "./locales"
		 */
		directory?: string;

		/**
		 * Control mode on directory creation. Setting has no effect on win.
		 * @default null
		 */
		directoryPermissions?: string;

		/**
		 * Watch for changes in json files to reload locale on updates
		 * @default false
		 */
		autoReload?: boolean;

		/**
		 * Whether to write new locale information to disk
		 * @default true
		 */
		updateFiles?: boolean;

		/**
		 * Sync locale information across all files
		 * @default false
		 */
		syncFiles?: boolean;

		/**
		 * What to use as the indentation unit
		 * @default "\t"
		 */
		indent?: string;

		/**
		 * Setting extension of json files (you might want to set this to '.js' according to webtranslateit)
		 * @default ".json"
		 */
		extension?: string;

		/**
		 * Setting prefix of json files name (in case you use different locale files naming scheme (webapp-en.json), rather then just en.json)
		 * @default ""
		 */
		prefix?: string;

		/**
		 * Enable object notation
		 * @default false
		 */
		objectNotation?: boolean;

		/**
		 * Setting of log level DEBUG
		 * @default require("debug")("i18n:debug")
		 */
		logDebugFn?: (msg: string) => void;

		/**
		 * Setting of log level WARN
		 * @default require("debug")("i18n:warn")
		 */
		logWarnFn?: (msg: string) => void;

		/**
		 * Setting of log level ERROR
		 * @default require("debug")("i18n:error")
		 */
		logErrorFn?: (msg: string) => void;

		/**
		 * object or [obj1, obj2] to bind the i18n api and current locale to
		 * @default null
		 */
		register?: any;

		/**
		 * Hash to specify different aliases for i18n's internal methods to apply on the request/response objects (method -> alias).
		 * Note that this will *not* overwrite existing properties with the same name.
		 * @default undefined
		 */
		api?: {
			[method: string]: string;
		};

		/**
		 * Downcase locale when passed on queryParam; e.g. lang=en-US becomes en-us.
		 * When set to false, the queryParam value will be used as passed; e.g. lang=en-US remains en-US.
		 * @default true
		 */
		preserveLegacyCase?: boolean;
	}
}
