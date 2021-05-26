import { ConfigEntry } from '@smartthings/core-sdk'

export namespace DeviceHealthEvent {
	export enum StatusEnum {
		OFFLINE = 'OFFLINE',
		ONLINE = 'ONLINE',
		UNHEALTHY = 'UNHEALTHY' // TODO is this correct or is it the core API definition?
	}
	export enum ReasonEnum {
		NONE = 'NONE',
		SERVICE_UNAVAILABLE = 'SERVICE_UNAVAILABLE',
		HUB_OFFLINE = 'HUB_OFFLINE',
		ZWAVE_OFFLINE = 'ZWAVE_OFFLINE',
		ZIGBEE_OFFLINE = 'ZIGBEE_OFFLINE',
		BLUETOOTH_OFFLINE = 'BLUETOOTH_OFFLINE',
		HUB_DISCONNECTED = 'HUB_DISCONNECTED'
	}
}

export namespace HubHealthEvent {
	export enum StatusEnum {
		OFFLINE = 'OFFLINE',
		ONLINE = 'ONLINE',
		ZWAVE_OFFLINE = 'ZWAVE_OFFLINE',
		ZWAVE_ONLINE = 'ZWAVE_ONLINE',
		ZIGBEE_OFFLINE = 'ZIGBEE_OFFLINE',
		ZIGBEE_ONLINE = 'ZIGBEE_ONLINE',
		BLUETOOTH_OFFLINE = 'BLUETOOTH_OFFLINE',
		BLUETOOTH_ONLINE = 'BLUETOOTH_ONLINE'
	}
	export enum ReasonEnum {
		NONE = 'NONE',
		DISCONNECTED = 'DISCONNECTED',
		INACTIVE = 'INACTIVE'
	}
}

export namespace SecurityArmStateEvent {
	export enum ArmStateEnum {
		UNKNOWN = 'UNKNOWN',
		ARMED_STAY = 'ARMED_STAY',
		ARMED_AWAY = 'ARMED_AWAY',
		DISARMED = 'DISARMED'
	}
}

export namespace AppEvent {
	export enum ValueTypeEnum {
		NULL_VALUE = 'NULL_VALUE',
		INT_VALUE = 'INT_VALUE',
		DOUBLE_VALUE = 'DOUBLE_VALUE',
		STRING_VALUE = 'STRING_VALUE',
		BOOLEAN_VALUE = 'BOOLEAN_VALUE'
	}

	export interface DeviceEvent {
		/**
		 * The ID of the event.
		 */
		eventId: string
		/**
		 * The ID of the location in which the event was triggered.
		 */
		locationId: string
		/**
		 * The ID of the device associated with the DEVICE_EVENT.
		 */
		deviceId: string
		/**
		 * The name of the component on the device that the event is associated with.
		 */
		componentId: string
		/**
		 * The name of the capability associated with the DEVICE_EVENT.
		 */
		capability: string
		/**
		 * The name of the DEVICE_EVENT. This typically corresponds to an attribute name of the device-handler’s capabilities.
		 */
		attribute: string
		/**
		 * The value of the event. The type of the value is dependent on the capability's attribute type.
		 */
		value: any
		/**
		 * The root level data type of the value field. The data types are representative of standard JSON data types.
		 */
		valueType: string
		/**
		 * Whether or not the state of the device has changed as a result of the DEVICE_EVENT.
		 */
		stateChange: boolean
		/**
		 * json map as defined by capability data schema
		 */
		data: any
		/**
		 * The name of subscription that caused delivery.
		 */
		subscriptionName: string
	}

	export enum DeviceLifecycle {
		CREATE = 'CREATE',
		DELETE = 'DELETE',
		UPDATE = 'UPDATE',
		MOVE_FROM = 'MOVE_FROM',
		MOVE_TO = 'MOVE_TO',
	}

	export interface DeviceLifecycleEvent {
		lifecycle: DeviceLifecycle;
		/**
		 * The id of the event.
		 */
		eventId: string
		/**
		 * The id of the location in which the event was triggered.
		 */
		locationId: string
		/**
		 * The id of the device.
		 */
		deviceId: string
		/**
		 * The name of the device
		 */
		deviceName: string
		/**
		 * The principal that made the change
		 */
		principal: string

		// TODO -- figure this out
		// create: DeviceLifecycleCreate;
		// _delete: DeviceLifecycleDelete;
		// update: DeviceLifecycleUpdate;
		// moveFrom: DeviceLifecycleMove;
		// moveTo: DeviceLifecycleMove;
	}

	export interface DeviceHealthEvent {
		/**
		 * The id of the event.
		 */
		eventId: string
		/**
		 * The id of the location in which the event was triggered.
		 */
		locationId: string
		/**
		 * The id of the device.
		 */
		deviceId: string
		/**
		 * The id of the hub.
		 */
		hubId: string
		/**
		 * The status of the device.
		 */
		status: DeviceHealthEvent.StatusEnum
		/**
		 * The reason the device is offline.
		 */
		reason: DeviceHealthEvent.ReasonEnum
	}

	export interface HubHealthEvent {
		/**
		 * The id of the event.
		 */
		eventId: string;
		/**
		 * The id of the location in which the event was triggered.
		 */
		locationId: string;
		/**
		 * The id of the hub.
		 */
		hubId: string;
		/**
		 * The status of the hub.
		 */
		status: HubHealthEvent.StatusEnum;
		/**
		 * The reason the hub is offline.
		 */
		reason: HubHealthEvent.ReasonEnum;
	}

	export class DeviceCommandsEventCommand {
		componentId: string
		capability: string
		command: string
		arguments: any[]
	}

	export interface DeviceCommandsEvent {
		/**
		 * The id of the event.
		 */
		eventId: string
		/**
		 * The guid of the device that the commands are for.
		 */
		deviceId: string
		/**
		 * The device profile ID of the device instance.
		 */
		profileId: string
		/**
		 * The external ID that was set during install of a device.
		 */
		externalId: string
		commands: DeviceCommandsEventCommand[]
	}

	export interface ModeEvent {
		/**
		 * The id of the event.
		 */
		eventId: string
		/**
		 * The id of the location in which the event was triggered.
		 */
		locationId: string
		/**
		 * The ID of the mode associated with a MODE_EVENT.
		 */
		modeId: string
	}

	export interface TimerEvent {
		/**
		 * The ID of the event.
		 */
		eventId: string
		/**
		 * The name of the schedule that caused this event.
		 */
		name: string
		type: string // TimerType; TODO - what types?
		/**
		 * The IS0-8601 date time strings in UTC that this event was scheduled for.
		 */
		time: Date
		/**
		 * The CRON expression if the schedule was of type CRON.
		 */
		expression: string
	}

	export enum SceneLifecycle {
		CREATE = 'CREATE',
		DELETE = 'DELETE',
		UPDATE = 'UPDATE',
	}

	export interface SceneLifecycleEvent {
		lifecycle: SceneLifecycle
		/**
		 * The id of the event.
		 */
		eventId: string
		/**
		 * The id of the location in which the event was triggered.
		 */
		locationId: string
		/**
		 * The id of the scene.
		 */
		sceneId: string

		// TODO - what are these?
		// 'create': SceneLifecycleCreate;
		// 'update': SceneLifecycleUpdate;
		// '_delete': SceneLifecycleDelete;
	}

	export interface SimpleValue {
		/**
		 * The type of the value.
		 */
		valueType: ValueTypeEnum
		intValue: number
		doubleValue: number
		stringValue: string
		boolValue: boolean
	}

	export interface SecurityArmStateEvent {
		/**
		 * The id of the event.
		 */
		eventId: string
		/**
		 * The id of the location in which the event was triggered.
		 */
		locationId: string
		/**
		 * The arm state of a security system.
		 */
		armState: SecurityArmStateEvent.ArmStateEnum
		/**
		 * A set of key / value pairs useful for passing any optional arguments.
		 */
		optionalArguments: { [key: string]: SimpleValue }
	}

	export interface Event {
		/**
		 * The IS0-8601 date time string in UTC that this event was created.
		 */
		eventTime: Date
		eventType: EventType
		deviceEvent: DeviceEvent
		deviceLifecycleEvent: DeviceLifecycleEvent
		deviceHealthEvent: DeviceHealthEvent
		deviceCommandsEvent: DeviceCommandsEvent
		modeEvent: ModeEvent
		timerEvent: TimerEvent
		sceneLifecycleEvent: SceneLifecycleEvent
		securityArmStateEvent: SecurityArmStateEvent
	}

	export interface EventData {
		authToken: string
		installedApp: InstalledApp
		events: Event[]
	}

	export type ConfigMap = {[name: string]: ConfigEntry[]}

	export type Permissions = string | string[]

	export interface InstalledApp {
		installedAppId: string
		locationId: string
		config: ConfigMap
		permissions: Permissions
	}

	export interface UpdateData {
		authToken: string
		refreshToken: string
		installedApp: InstalledApp
		previousConfig: ConfigMap
		previousPermissions: Permissions
	}

	export enum AppLifecycle {
		PING = 'PING',
		CONFIGURATION = 'CONFIGURATION',
		OAUTH_CALLBACK = 'OAUTH_CALLBACK',
		INSTALL = 'INSTALL',
		UPDATE = 'UPDATE',
		UNINSTALL = 'UNINSTALL',
		EVENT = 'EVENT',
		EXECUTE = 'EXECUTE',
		CONFIRMATION = 'CONFIRMATION',
	}

	export enum ConfigurationType {
		INITIALIZE = 'INITIALIZE',
		PAGE = 'PAGE'
	}

	export enum EventType {
		DEVICE_EVENT = 'DEVICE_EVENT',
		TIMER_EVENT = 'TIMER_EVENT',
		DEVICE_COMMANDS_EVENT = 'DEVICE_COMMANDS_EVENT',
		DEVICE_LIFECYCLE_EVENT = 'DEVICE_LIFECYCLE_EVENT',
		DEVICE_HEALTH_EVENT = 'DEVICE_HEALTH_EVENT',
		HUB_HEALTH_EVENT = 'HUB_HEALTH_EVENT',
		MODE_EVENT = 'MODE_EVENT',
		SECURITY_ARM_STATE_EVENT = 'SECURITY_ARM_STATE_EVENT',
		INSTALLED_APP_LIFECYCLE_EVENT = 'INSTALLED_APP_LIFECYCLE_EVENT',
	}

	export namespace ClientDetails {
		export enum DisplayModeEnum {
			DARK = 'DARK',
			LIGHT = 'LIGHT'
		}

		export enum SupportedTemplatesEnum {
			V1 = 'BASIC_V1',
			V2 = 'BASIC_V2'
		}
	}

	export interface ClientDetails {
		/**
		 * The operating system of the client application initiating the request.
		 */
		os: string
		/**
		 * The version of the client application initiating the request.
		 */
		version: string
		/**
		 * Language header representing the clients preferred language. The format of the `Accept-Language` header follows what is defined in [RFC 7231, section 5.3.5](https://tools.ietf.org/html/rfc7231#section-5.3.5)
		 */
		language: string
		/**
		 * The display mode of the operating system of the client.
		 */
		displayMode: ClientDetails.DisplayModeEnum
		/**
		 * Templates that could be renderable in the client
		 */
		supportedTemplates: ClientDetails.SupportedTemplatesEnum[]
	}

	export interface InstallData {
		/**
		 * An OAuth token to use when calling into SmartThings APIs.
		 */
		authToken: string
		/**
		 * A refresh token which maybe used to obtain authorization to SmartThings API after expiration of the authToken. An integration will need to use this refreshToken to support calling the SmartThings API outside the context of an event.
		 */
		refreshToken: string
		installedApp: InstalledApp
	}

	export interface UninstallData {
		installedApp: InstalledApp
	}

	export interface ConfigurationData {
		/**
		 * The id of the installed app.
		 */
		installedAppId: string
		phase: string // ConfigurationPhase TODO - what are these
		/**
		 * A developer defined page ID. Must be URL safe characters.
		 */
		pageId: string
		/**
		 * The previous page the user completed. Must be URL safe characters.
		 */
		previousPageId: string
		config: ConfigMap
	}

	export interface PingData {
		/**
		 * A challenge phrase that the SmartApp must echo back to validate itself.
		 */
		challenge: string
	}

	export interface OAuthCallbackData {
		/**
		 * The id of the installed app.
		 */
		installedAppId: string
		/**
		 * A relative URL containing all of the query string parameters as returned by the third party oauth system. A SmartApp can parse the `urlPath` property to extract any sensitive auth codes/tokens which can then be used to access the third party system.
		 */
		urlPath: string
	}

	export interface ExecuteData {
		/**
		 * An OAuth token to use when calling into SmartThings APIs.
		 */
		authToken: string
		installedApp: InstalledApp
		/**
		 * An arbitrary map of input parameters which the SmartApp can use to build a custom response.
		 */
		parameters: { [key: string]: string }
	}

	export interface DashboardData {
		/**
		 * An OAuth token to use when calling into SmartThings APIs.
		 */
		authToken: string
		installedApp: InstalledApp
	}

	export interface ConfirmationData {
		/**
		 * A globally unique identifier for an app.
		 */
		appId: string
		/**
		 * An HTTPS url that may be visited to confirm / activate an App registration.
		 */
		confirmationUrl: string
	}

	export interface ExecutionRequest {
		lifecycle: AppLifecycle
		executionId: string
		appId: string
		/**
		 * An IETF BCP 47 language tag representing the chosen locale for this account.
		 */
		locale: string
		version: string
		client: ClientDetails
		eventData: EventData
		installData: InstallData
		updateData: UpdateData
		uninstallData: UninstallData
		configurationData: ConfigurationData
		pingData: PingData
		oauthCallbackData: OAuthCallbackData
		executeData: ExecuteData
		dashboardData: DashboardData
		confirmationData: ConfirmationData
	}
}
