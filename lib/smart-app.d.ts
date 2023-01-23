import { Context } from 'aws-lambda'
import { IncomingHttpHeaders } from 'http'
import { i18n } from './i18n'
import ConfigurationOptions = i18n.ConfigurationOptions
import { Logger } from './util/log'
import { DeviceCommand, InstalledAppConfiguration } from '@smartthings/core-sdk'
import { Page } from './pages/page'
import { SmartAppContext } from './util/smart-app-context'
import { AppEvent } from './lifecycle-events'
import DeviceEvent = AppEvent.DeviceEvent
import DeviceHealthEvent = AppEvent.DeviceHealthEvent
import DeviceLifecycleEvent = AppEvent.DeviceLifecycleEvent
import HubHealthEvent = AppEvent.HubHealthEvent
import ModeEvent = AppEvent.ModeEvent
import SceneLifecycleEvent = AppEvent.SceneLifecycleEvent
import TimerEvent = AppEvent.TimerEvent
import DeviceCommandsEvent = AppEvent.DeviceCommandsEvent
import SecurityArmStateEvent = AppEvent.SecurityArmStateEvent
import ExecuteData = AppEvent.ExecuteData
import UninstallData = AppEvent.UninstallData
import { Initialization } from './util/initialization'

/**
 * Configuration options for SmartApps. These can either be passed into the constructor
 * as an option map or set individually with their corresponding setters in a
 * chained builder pattern, e.g. `new SmartApp({clientId: 'xxx', clientSecret: 'yyy}`
 * or `new SmartApp().clientId('xxx').clientSecret('yyy')`.
 */
export interface SmartAppOptions {

	/**
	* The client id used to refresh expired tokens
	*/
	clientId?: string

	/**
	* The client secret used to refresh expired tokens
	*/
	clientSecret?: string

	/**
	* The OAuth2 redirect uri used for API access integrations to SmartThings
	*/
	redirectUri?: string

	/**
	* The `App.appId` or unique `App.appName` field of your SmartApp. This field
	* is necessary for any app that requires permissions in addition to those implied
	* by the app configuration settings.
	*/
	appId?: string

	/**
	* Overrides the default Winston event and error logger that writes to the console
	*/
	logger?: Logger

	/**
	* The number of spaces to indent pretty-printed JSON log output. Setting this value to zero disables
	* pretty-printing
	*/
	jsonSpace?: number

	/**
	* Enables logging of all lifecycle events and responses
	*/
	enableEventLogging?: boolean

	/**
	* List of scopes explicitly required by this app. For example `['r:devices:*', and 'x:devices:*']
	* to be able to read and control all devices in the location. Note that you do not have to
	* provide this list for devices selected by the user in configuration settings.
	*/
	permissions?: string | string[]

	/**
	* Disables the ability for users to rename the installed app instance in the configuration page.
	* This may be desirable for singleton apps that can only be installed once per location. Apps
	* that can be installed multiple times per location should not disable renaming, or the result
	* will be multiple apps with the same name.
	*/
	disableCustomDisplayName?: boolean

	/**
	* Disables the button that allows users to remove the app from the configuration page.
	*/
	disableRemoveApp?: boolean

	/**
	* Specify an alternate base URL for SmartThings API calls. This value is only necessary for testing new
	* API versions or non-production environments.
	*/
	apiUrl?: string

	/**
	* Specify an alternate OAuth2 refresh URL for API access apps. This value is only necessary for testing new
	* API versions or non-production environments.
	*/
	refreshUrl?: string

	/**
	* Specify an alternate key host URL for use in validating request signatures. This value is only necessary for
	* testing new API versions or non-production environments.
	*/
	keyApiHost?: string

	/**
	* The public key to be used for signature verification of lifecycle event calls. Not necessary for apps that
	* use ST_PADLOCK signatures.
	*/
	publicKey?: string

	/**
	* Time-to-live of the ST_PADLOCK keys in milliseconds. The default value is 86400000 (24 hours).
	*/
	keyCacheTTL?: number

	/**
	* Catch and log any unhandled rejections. Defaults to true
	*/
	logUnhandledRejections?: boolean

	/**
	* Sets the initial configuration page to be rendered when an app is installed or updated.
	* If not specified then the first page defined will be rendered.
	*/
	firstPageId?: string
}

/**
 * Data structure that stores the context of an installed app. The installed app context is provided in all
 * lifecycle event requests but must be stored by apps that initial API calls in response to external conditions.
 */
export interface ContextRecord {

	/**
	* UUID of the installed app instance
	*/
	installedAppId: string

	/**
	* Token used for calls to the SmartThings API
	*/
	authToken: string

	/**
	* Token used to refresh expired authTokens
	*/
	refreshToken: string

	/**
	* The UUID of the location of the installed app instance. Included in the context so that an API isn't
	* required to retrieve the location of the installed app.
	*/
	locationId?: string

	/**
	* Configuration settings of the smartapp, i.e. device selections and other settings chosen by the user
	* during app installation. Does not apply to API Access apps.
	*/
	config?: InstalledAppConfiguration
}

/**
 * Interface for storing and retrieving installed app context. There are multiple implementations of context stores,
 * including DynamoDB
 */
export interface ContextStore {
	get(installedAppId: string): Promise<ContextRecord>
	put(contextRecord: ContextRecord): Promise<ContextRecord>
}

/**
 * Request object for WEBHOOK_SMART_APPs
 */
export interface WebHookRequest {
	headers: IncomingHttpHeaders
	body: any
}

/**
 * Response object for WEBHOOK_SMART_APPs
 */
export interface WebHookResponse {
	status(code: number): WebHookResponse
	send(data: any): WebHookResponse
	json(data: any): WebHookResponse
}

/**
 * Return type of lifecycle event handlers
 */
export type HandlerResponse = void | Promise<void>

/**
 * An instance of the SmartApp class is created to handle lifecycle events for WEBHOOK_SMART_APP, LAMBDA_SMART_APP,
 * and API_ONLY apps. Options can either be passed in as parameters to the
 * to the constructor, for example:
 * ```
 * import {SmartApp} from '@smartthings/smartapp'
 * ...
 * const smartApp = new SmartApp({
 *     appId: 'xxx',
 *     disableCustomDisplayName: true
 * })
 * ```
 * or set with individual chained configuration method calls, for example:
 * ```
 * const smartApp = new SmartAll()
 *     .appId('xxx')
 *     .disableCustomDisplayName()
 * ```
 */
export class SmartApp {
	/**
	* Create a SmartApp instance
	* @param options configuration object defining SmartApp options
	*/
	constructor(options?: SmartAppOptions)

	/**
	* Specify an alternate base URL for SmartThings API calls. This value is only necessary for testing new
	* API versions or non-production environments.
	* @param url base URL of the alternate API
	*/
	apiUrl(url: string): SmartApp

	/**
	* Set the app that this SmartApp object is implementing. This field
	* is necessary for any app that requires [[permissions]] in addition to those implied
	* by the app configuration settings.
	*
	* @param id either the `App.appId` or `App.appName` field of your SmartApp
	*/
	appId(id: string): SmartApp

	/**
	* Set the client id, which together with the client secret, enables apps that make proactive calls to the
	* SmartThings API to refresh their access tokens. Does not need to be set for apps that only respond
	* to lifecycle events because those event requests contain valid tokens.
	* @param id the clientId that was generated when the App was created
	*/
	clientId(id: string): SmartApp

	/**
	* Set the client secret, which together with the client id, enables apps that make proactive calls to the
	* SmartThings API to refresh their access tokens. Does not need to be set for apps that only respond
	* to lifecycle events because those event requests contain valid tokens.
	* @param secret the clientSecret that was generated when the App was created
	*/
	clientSecret(secret: string): SmartApp

	/**
	* Configure the i18n localization framework used to translate app installation pages.
	* The most commonly used option is `{updateFiles: true}` which will automatically add keys
	* to the localization file for new configuration page settings. The use of the i18n framework
	* is recommended even if you are not planning to support multiple languages in your app because
	* it nicely separates user-visible text from the app logic, allowing that text to be changed without
	* changing the app code itself.
	* @param options settings of the i18n localization module
	*/
	configureI18n(options?: ConfigurationOptions): SmartApp

	/**
	* Override the default Winston event and error logger. You may want to do this to integrate
	* with your logging infrastructure. The default logger writes to the console.
	* @param logger your logging implementation
	*/
	configureLogger(logger: Logger): SmartApp

	/**
	* Sets the context store implementation for saving and retrieving installed app context.
	* A context store is required for apps that make SmartThings API calls in response to
	* external trigger and conditions. Apps that only response to lifecycle events from
	* SmartThings do not require a context store because the installed app context is
	* provided in the call.
	* @param contextStore a service implementing the context store interface
	*/
	contextStore(contextStore: ContextStore): SmartApp

	/**
	* Defines a handler to be called for any device command event that does not have a handler
	* defined for that specific command. The default implementation of this handler simply logs a
	* message about the missing command handler. Note that only C2C connector SmartApps that create
	* devices will receive command events.
	*/
	defaultDeviceCommandHandler(
		callback: (
			context: SmartAppContext,
			deviceId: string,
			cmd: DeviceCommand) => HandlerResponse): SmartApp

	/**
	* Defines a handler that is called for any configuration page that does not have a specific page handler
	* mapped to that page id. Default page handlers are typically used when an app has a variable number
	* of configuration pages. For example, an app that has a separate configuration page for each room
	* of a location.
	*/
	defaultPage(callback: (
		context: SmartAppContext,
		page: Page,
		configData?: InstalledAppConfiguration) => HandlerResponse): SmartApp

	/**
	* Defines a handler for a specific device command.
	* @param command the command path in the form `[component]/capability/command`. If the component is not
	* specified then the handler will be called for all components.
	* @param callback the handler called when the specified command is received
	*/
	deviceCommand(command: string, callback: (
		context: SmartAppContext,
		deviceId: string,
		cmd: DeviceCommand,
		eventTime?: string) => HandlerResponse): SmartApp

	/**
	* Defines a single command handler for all device commands. Its use should be exclusive with the
	* `deviceCommand()` method that defines handlers for specific commands because those handlers
	* will not be called if a handler is defined here. To define a handler that's called only when
	* no specific device command handler exists use `defaultDeviceCommandHandler`
	*/
	deviceCommandHandler(
		callback: (
			context: SmartAppContext,
			deviceId: string,
			eventData: DeviceCommandsEvent,
			eventTime?: string) => HandlerResponse): SmartApp

	/**
	* Disable the ability for users to rename the installed app instance in the configuration page.
	* This behavior may be desirable for singleton apps that can only be installed once per location. Apps
	* that can be installed multiple times per location should not disable renaming, or the result
	* will be multiple apps with the same name.
	*/
	disableCustomDisplayName(value: boolean): SmartApp

	/**
	* Disable the button that allows users to remove the app from the configuration page. Apps can still be removed
	* using the delete menu options.
	*/
	disableRemoveApp(value: boolean): SmartApp

	/**
	* Turns on the logging of lifecycle events and responses.
	* @param jsonSpace the number of spaces to use for indentation in pretty-printed output. Setting this value
	* to zero disables pretty printing
	* @param enableEvents whether or not to enable logging. Defaults to true
	*/
	enableEventLogging(jsonSpace?: number, enableEvents?: boolean): SmartApp

	/**
	* Defines a handler for EXECUTE lifecycle events
	*/
	executeHandler(callback: (context: SmartAppContext, executeData: ExecuteData) => Promise<any>): SmartApp

	/**
	* Sets the initial configuration page to be rendered when an app is installed or updated.
	* If not specified then the first page defined will be rendered.
	*/
	firstPageId(id: string): SmartApp

	/**
	* To be called by the web server to handle lifecycle events from WEBHOOK_SMART_APPs
	*/
	handleHttpCallback(request: WebHookRequest, response: WebHookResponse): Promise<void>

	/**
	* Bypasses event signature verification of WEBHOOK_SMART_APP requests. This method can be useful
	* for testing apps with the APP_RSA signature type but is not needed for apps with the
	* ST_PADLOCK signature type (which is now the default). Do not use in production apps.
	*/
	handleHttpCallbackUnverified(request: WebHookRequest, response: WebHookResponse): Promise<void>

	/**
	* To be called by AWS Lambda functions to handle LAMBDA_APP lifecycle events.
	*/
	handleLambdaCallback(event: any, context: Context, callback: () => any): void;

	/**
	* To be called by test scripts
	*/
	handleMockCallback(body: any): Promise<void>

	/**
	* To be called by the web server of an API access app when it receives an OAuth2 callback.
	* Redeems the code for access and refresh tokens.
	*/
	handleOAuthCallback(request: WebHookRequest): Promise<ContextRecord>

	/**
	* Defines a handler to be called before configuration the first time a SmartApp is installed.
	*/
	initialized(callback: (
		context: SmartAppContext,
		initialization: Initialization,
		configData: AppEvent.ConfigurationData) =>
	HandlerResponse): SmartApp

	/**
	* Defines a handler to be called after configuration the first time a SmartApp is installed. If not specified then the
	* `updated()` handler will be called on the initial installation as well as updates.
	*/
	installed(callback: (context: SmartAppContext, installData: AppEvent.InstallData) => HandlerResponse): SmartApp

	/**
	* Specify an alternate OAuth2 refresh URL for API access apps. This value is only necessary for testing new
	* API versions or non-production environments.
	*/
	keyApiHost(url: string): SmartApp

	/**
	* Defines a handler to be called when the user completes the OAuth2 sign in process to a third party cloud
	* that has been initiated from an app installation page.
	*/
	oauthHandler(callback: () => HandlerResponse): SmartApp

	/**
	* Defines a configuration page that is displayed during app installation and update.
	* You can create as many pages as needed to satisfy your configuration needs. See the documentation on
	* [how to design pages](https://developer.smartthings.com/docs/connected-services/configuration#page-phase)
	* for your automation.
	*/
	page(id: string,
		callback: (
			context: SmartAppContext,
			page: Page,
			configData?: InstalledAppConfiguration) => HandlerResponse): SmartApp

	/**
	* Specify the [OAuth2 scopes](https://developer.smartthings.com/docs/connected-services/oauth-integrations)
	* explicitly required by this app. For example `['r:devices:*', and 'x:devices:*']
	* to be able to read and control all devices in the location. You do not have to
	* provide this list for devices selected by the user in configuration settings.
	*
	* If permissions are specified, [[appId]] is also required.
	*/
	permissions(value: string | string[]): SmartApp

	/**
	* Set the public key to be used for signature verification of lifecycle event calls. Not necessary for apps that
	* use ST_PADLOCK signatures.
	*/
	publicKey(value: string): SmartApp

	/**
	* Set the OAuth2 redirect uri used for API Access integrations to SmartThings
	*/
	redirectUri(uri: string): SmartApp

	/**
	* Specify an alternate OAuth2 refresh URL for API Access apps. This value is only necessary for testing new
	* API versions or non-production environments.
	*/
	refreshUrl(url: string): SmartApp

	/**
	* Defines a handler for scheduled events. The name corresponds the the name specified when the event is
	* scheduled by the `context.api.schedules.create()` call or any of its other variants. There can be
	* multiple scheduled event handlers in one app.
	* @param name the name used when the event to be handled was scheduled
	* @param callback the handler to be called with the event
	*/
	scheduledEventHandler(
		name: string,
		callback: (
			context: SmartAppContext,
			eventData: TimerEvent,
			eventTime?: string) => HandlerResponse): SmartApp

	/**
	* Defines a handler for device event subscriptions. Device events occur whenever one
	* of the attributes of a device changes state, such as when a switch turns on or off.
	* The name corresponds to the name specified when the subscription
	* is created with the `context.api.subscriptions.subscribeToDevices()` call. There can be
	* multiple subscribed device event handlers in one app.
	* @param name the name used when the subscription was created
	* @param callback the handler to be called with the event
	*/
	subscribedDeviceEventHandler(
		name: string,
		callback: (
			context: SmartAppContext,
			deviceEvent: DeviceEvent,
			eventTime?: string) => HandlerResponse): SmartApp

	/**
	* Defines a handler for device health event subscriptions. Device health events occur
	* whenever a device goes online or offline, or fails for some other reason.
	* The name corresponds to the name specified when the subscription
	* is created by the `context.api.subscriptions.subscribeToDeviceHealth()`. There can only
	* be one device health event handler for an app.
	* @param name the name used when the subscription was created
	* @param callback the handler to be called with the event
	*/
	subscribedDeviceHealthEventHandler(
		name: string,
		callback: (
			context: SmartAppContext,
			eventData: DeviceHealthEvent,
			eventTime?: string) => HandlerResponse): SmartApp

	/**
	* Defines a handler for device lifecycle event subscriptions. Device lifecycle events
	* occur whenever a device is created, deleted, updated, or moved to another room.
	* The name argument corresponds to the name specified when the subscription
	* is created by the `context.api.subscriptions.subscribeToDeviceHealth()` call. There can only
	* be one device lifecycle event handler for an app.
	* @param name the name used when the subscription was created
	* @param callback the handler to be called with the event
	*/
	subscribedDeviceLifecycleEventHandler(
		name: string,
		callback: (
			context: SmartAppContext,
			eventData: DeviceLifecycleEvent,
			eventTime?: string) => HandlerResponse): SmartApp

	/**
	* Defines a handler for any subscribed event. If the type of event is not specified
	* it defaults to DEVICE_EVENT.
	* @param name the name used when the subscription was created
	* @param callback the handler to be called with the event
	* @param type the type of event being subscribed to
	*/
	subscribedEventHandler(
		name: string,
		callback: (
			context: SmartAppContext,
			eventData: DeviceEvent,
			eventTime: string) => HandlerResponse,
		type?: AppEvent.EventType): SmartApp

	/**
	* Defines a handler for hub health event subscriptions. Hub health events occur
	* whenever a hub goes online or offline, or fails for some other reason.
	* The name argument corresponds to the name specified when the subscription
	* is created by the `context.api.subscriptions.subscribeToHubHealth()` call. There can only
	* be one hub health event handler for an app.
	* @param name the name used when the subscription was created
	* @param callback the handler to be called with the event
	*/
	subscribedHubHealthEventHandler(
		name: string,
		callback: (
			context: SmartAppContext,
			eventData: HubHealthEvent,
			eventTime?: string) => HandlerResponse): SmartApp

	/**
	* Defines a handler for location mode change subscriptions. The location mode can be changed
	* manually by the user or automatically with an automation or another SmartApp.
	* The name argument corresponds to the name specified when the subscription
	* is created by the `context.api.subscriptions.subscribeToModeChange()` call. There can only
	* be one mode change event handler for an app.
	* @param name the name used when the subscription was created
	* @param callback the handler to be called with the event
	*/
	subscribedModeEventHandler(
		name: string,
		callback: (
			context: SmartAppContext,
			eventData: ModeEvent,
			eventTime?: string) => HandlerResponse): SmartApp

	/**
	* Defines a handler for security system subscriptions. The handler will be called
	* whenever the SmartThings Home Monitor application is armed or disarmed.
	* The name argument corresponds to the name specified when the subscription
	* is created by the `context.api.subscriptions.subscribeToSecuritySystem()` call. There can only
	* be one security system event handler for an app.
	* @param name the name used when the subscription was created
	* @param callback the handler to be called with the event
	*/
	subscribedSecurityArmStateEventHandler(
		name: string,
		callback: (
			context: SmartAppContext,
			eventData: SecurityArmStateEvent,
			eventTime?: string) => HandlerResponse): SmartApp

	/**
	* Defines a handler for scene lifecycle event subscriptions. Scene lifecycle events
	* occur whenever a scene is created, deleted, or updated.
	* The name argument corresponds the the name specified when the subscription
	* is created by the `context.api.subscriptions.subscribeToSceneLifecycle()` call. There can only
	* be one scene lifecycle event handler for an app.
	* @param name the name used when the subscription was created
	* @param callback the handler to be called with the event
	*/
	subscribedSceneLifecycleEventHandler(
		name: string,
		callback: (
			context: SmartAppContext,
			eventData: SceneLifecycleEvent,
			eventTime?: string) => HandlerResponse): SmartApp

	/**
	* Specify a function to be call if an unhandled rejection is encountered. The default
	* handler logs the stack trace of the error
	*/
	unhandledRejectionHandler(callback: (reason: Error) => void): SmartApp

	/**
	* Defines a handler to be called when an instance of this app is uninstalled
	*/
	uninstalled(callback: (context: SmartAppContext, uninstallData: UninstallData) => HandlerResponse): SmartApp

	/**
	* Defines a handler to be called whenever the app configuration is updated by the user. If no separate
	* `installed()` handler is defined, then this handler will also be called the first time the app
	* is installed
	*/
	updated(callback: (context: SmartAppContext, updateData: AppEvent.UpdateData) => HandlerResponse): SmartApp

	/**
	* Returns a context object corresponding to the specified installedAppId or context record. If a context
	* record is supplied, then the resulting SmartApp context is constructed from its properties. If
	* an installed app UUID is specified, then the context for that installed instance will be read from
	* the context store.
	* @param installedAppIdOrObject either an installed app uuid or an object specifying the installed app id
	* along with the auth and refresh tokens for the installed instance.
	*/
	withContext(installedAppIdOrObject: string | ContextRecord): Promise<SmartAppContext>
}
