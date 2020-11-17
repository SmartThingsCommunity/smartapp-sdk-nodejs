[SmartApp](../classes/_smart_app_d_.smartapp.md)

### Namespaces

* [AppEvent](_lifecycle_events_d_.md#appevent)
* [DeviceHealthEvent](_lifecycle_events_d_.md#devicehealthevent)
* [HubHealthEvent](_lifecycle_events_d_.md#hubhealthevent)
* [SecurityArmStateEvent](_lifecycle_events_d_.md#securityarmstateevent)

## Namespaces

###  AppEvent

• **AppEvent**:

###  ClientDetails

• **ClientDetails**:

###  DisplayModeEnum

• **DisplayModeEnum**:

###  DARK

• **DARK**: = "DARK"

###  LIGHT

• **LIGHT**: = "LIGHT"

###  SupportedTemplatesEnum

• **SupportedTemplatesEnum**:

###  V1

• **V1**: = "BASIC_V1"

###  V2

• **V2**: = "BASIC_V2"

###  displayMode

• **displayMode**: *[DisplayModeEnum](_lifecycle_events_d_.md#displaymodeenum)*

The display mode of the operating system of the client.

###  language

• **language**: *string*

Language header representing the client's preferred language. The format of the `Accept-Language` header follows what is defined in [RFC 7231, section 5.3.5](https://tools.ietf.org/html/rfc7231#section-5.3.5)

###  os

• **os**: *string*

The operating system of the client application initiating the request.

###  supportedTemplates

• **supportedTemplates**: *Array‹[SupportedTemplatesEnum](_lifecycle_events_d_.md#supportedtemplatesenum)›*

Templates that could be renderable in the client

###  version

• **version**: *string*

The version of the client application initiating the request.

###  AppLifecycle

• **AppLifecycle**:

###  CONFIGURATION

• **CONFIGURATION**: = "CONFIGURATION"

###  CONFIRMATION

• **CONFIRMATION**: = "CONFIRMATION"

###  EVENT

• **EVENT**: = "EVENT"

###  EXECUTE

• **EXECUTE**: = "EXECUTE"

###  INSTALL

• **INSTALL**: = "INSTALL"

###  OAUTH_CALLBACK

• **OAUTH_CALLBACK**: = "OAUTH_CALLBACK"

###  PING

• **PING**: = "PING"

###  UNINSTALL

• **UNINSTALL**: = "UNINSTALL"

###  UPDATE

• **UPDATE**: = "UPDATE"

###  ConfigurationType

• **ConfigurationType**:

###  INITIALIZE

• **INITIALIZE**: = "INITIALIZE"

###  PAGE

• **PAGE**: = "PAGE"

###  DeviceLifecycle

• **DeviceLifecycle**:

###  CREATE

• **CREATE**: = "CREATE"

###  DELETE

• **DELETE**: = "DELETE"

###  MOVE_FROM

• **MOVE_FROM**: = "MOVE_FROM"

###  MOVE_TO

• **MOVE_TO**: = "MOVE_TO"

###  UPDATE

• **UPDATE**: = "UPDATE"

###  EventType

• **EventType**:

###  DEVICE_COMMANDS_EVENT

• **DEVICE_COMMANDS_EVENT**: = "DEVICE_COMMANDS_EVENT"

###  DEVICE_EVENT

• **DEVICE_EVENT**: = "DEVICE_EVENT"

###  DEVICE_HEALTH_EVENT

• **DEVICE_HEALTH_EVENT**: = "DEVICE_HEALTH_EVENT"

###  DEVICE_LIFECYCLE_EVENT

• **DEVICE_LIFECYCLE_EVENT**: = "DEVICE_LIFECYCLE_EVENT"

###  HUB_HEALTH_EVENT

• **HUB_HEALTH_EVENT**: = "HUB_HEALTH_EVENT"

###  INSTALLED_APP_LIFECYCLE_EVENT

• **INSTALLED_APP_LIFECYCLE_EVENT**: = "INSTALLED_APP_LIFECYCLE_EVENT"

###  MODE_EVENT

• **MODE_EVENT**: = "MODE_EVENT"

###  SECURITY_ARM_STATE_EVENT

• **SECURITY_ARM_STATE_EVENT**: = "SECURITY_ARM_STATE_EVENT"

###  TIMER_EVENT

• **TIMER_EVENT**: = "TIMER_EVENT"

###  SceneLifecycle

• **SceneLifecycle**:

###  CREATE

• **CREATE**: = "CREATE"

###  DELETE

• **DELETE**: = "DELETE"

###  UPDATE

• **UPDATE**: = "UPDATE"

###  ValueTypeEnum

• **ValueTypeEnum**:

###  BOOLEAN_VALUE

• **BOOLEAN_VALUE**: = "BOOLEAN_VALUE"

###  DOUBLE_VALUE

• **DOUBLE_VALUE**: = "DOUBLE_VALUE"

###  INT_VALUE

• **INT_VALUE**: = "INT_VALUE"

###  NULL_VALUE

• **NULL_VALUE**: = "NULL_VALUE"

###  STRING_VALUE

• **STRING_VALUE**: = "STRING_VALUE"

###  DeviceCommandsEventCommand

• **DeviceCommandsEventCommand**:

###  arguments

• **arguments**: *Array‹any›*

###  capability

• **capability**: *string*

###  command

• **command**: *string*

###  componentId

• **componentId**: *string*

###  ConfigurationData

• **ConfigurationData**:

###  config

• **config**: *[ConfigMap](_lifecycle_events_d_.md#configmap)*

###  installedAppId

• **installedAppId**: *string*

The id of the installed app.

###  pageId

• **pageId**: *string*

A developer defined page ID. Must be URL safe characters.

###  phase

• **phase**: *string*

###  previousPageId

• **previousPageId**: *string*

The previous page the user completed. Must be URL safe characters.

###  ConfirmationData

• **ConfirmationData**:

###  appId

• **appId**: *string*

A globally unique identifier for an app.

###  confirmationUrl

• **confirmationUrl**: *string*

An HTTPS url that may be visited to confirm / activate an App registration.

###  DashboardData

• **DashboardData**:

###  authToken

• **authToken**: *string*

An OAuth token to use when calling into SmartThings API's.

###  installedApp

• **installedApp**: *[InstalledApp](_lifecycle_events_d_.md#installedapp)*

###  DeviceCommandsEvent

• **DeviceCommandsEvent**:

###  commands

• **commands**: *Array‹[DeviceCommandsEventCommand](_lifecycle_events_d_.md#devicecommandseventcommand)›*

###  deviceId

• **deviceId**: *string*

The guid of the device that the commands are for.

###  eventId

• **eventId**: *string*

The id of the event.

###  externalId

• **externalId**: *string*

The external ID that was set during install of a device.

###  profileId

• **profileId**: *string*

The device profile ID of the device instance.

###  DeviceEvent

• **DeviceEvent**:

###  attribute

• **attribute**: *string*

The name of the DEVICE_EVENT. This typically corresponds to an attribute name of the device-handler’s capabilities.

###  capability

• **capability**: *string*

The name of the capability associated with the DEVICE_EVENT.

###  componentId

• **componentId**: *string*

The name of the component on the device that the event is associated with.

###  data

• **data**: *any*

json map as defined by capability data schema

###  deviceId

• **deviceId**: *string*

The ID of the device associated with the DEVICE_EVENT.

###  eventId

• **eventId**: *string*

The ID of the event.

###  locationId

• **locationId**: *string*

The ID of the location in which the event was triggered.

###  stateChange

• **stateChange**: *boolean*

Whether or not the state of the device has changed as a result of the DEVICE_EVENT.

###  subscriptionName

• **subscriptionName**: *string*

The name of subscription that caused delivery.

###  value

• **value**: *any*

The value of the event. The type of the value is dependent on the capability's attribute type.

###  valueType

• **valueType**: *string*

The root level data type of the value field. The data types are representative of standard JSON data types.

###  DeviceHealthEvent

• **DeviceHealthEvent**:

###  deviceId

• **deviceId**: *string*

The id of the device.

###  eventId

• **eventId**: *string*

The id of the event.

###  hubId

• **hubId**: *string*

The id of the hub.

###  locationId

• **locationId**: *string*

The id of the location in which the event was triggered.

###  reason

• **reason**: *[ReasonEnum](_lifecycle_events_d_.md#reasonenum)*

The reason the device is offline.

###  status

• **status**: *[StatusEnum](_lifecycle_events_d_.md#statusenum)*

The status of the device.

###  DeviceLifecycleEvent

• **DeviceLifecycleEvent**:

###  deviceId

• **deviceId**: *string*

The id of the device.

###  deviceName

• **deviceName**: *string*

The name of the device

###  eventId

• **eventId**: *string*

The id of the event.

###  lifecycle

• **lifecycle**: *[DeviceLifecycle](_lifecycle_events_d_.md#devicelifecycle)*

###  locationId

• **locationId**: *string*

The id of the location in which the event was triggered.

###  principal

• **principal**: *string*

The principal that made the change

###  Event

• **Event**:

###  deviceCommandsEvent

• **deviceCommandsEvent**: *[DeviceCommandsEvent](_lifecycle_events_d_.md#devicecommandsevent)*

###  deviceEvent

• **deviceEvent**: *[DeviceEvent](_lifecycle_events_d_.md#deviceevent)*

###  deviceHealthEvent

• **deviceHealthEvent**: *[DeviceHealthEvent](_lifecycle_events_d_.md#devicehealthevent)*

###  deviceLifecycleEvent

• **deviceLifecycleEvent**: *[DeviceLifecycleEvent](_lifecycle_events_d_.md#devicelifecycleevent)*

###  eventTime

• **eventTime**: *Date*

The IS0-8601 date time string in UTC that this event was created.

###  eventType

• **eventType**: *[EventType](_lifecycle_events_d_.md#eventtype)*

###  modeEvent

• **modeEvent**: *[ModeEvent](_lifecycle_events_d_.md#modeevent)*

###  sceneLifecycleEvent

• **sceneLifecycleEvent**: *[SceneLifecycleEvent](_lifecycle_events_d_.md#scenelifecycleevent)*

###  securityArmStateEvent

• **securityArmStateEvent**: *[SecurityArmStateEvent](_lifecycle_events_d_.md#securityarmstateevent)*

###  timerEvent

• **timerEvent**: *[TimerEvent](_lifecycle_events_d_.md#timerevent)*

###  EventData

• **EventData**:

###  authToken

• **authToken**: *string*

###  events

• **events**: *Array‹[Event](_lifecycle_events_d_.md#event)›*

###  installedApp

• **installedApp**: *[InstalledApp](_lifecycle_events_d_.md#installedapp)*

###  ExecuteData

• **ExecuteData**:

###  authToken

• **authToken**: *string*

An OAuth token to use when calling into SmartThings API's.

###  installedApp

• **installedApp**: *[InstalledApp](_lifecycle_events_d_.md#installedapp)*

###  parameters

• **parameters**: *object*

An arbitrary map of input parameters which the SmartApp can use to build a custom response.

#### Type declaration:

* \[ **key**: *string*\]: string

###  ExecutionRequest

• **ExecutionRequest**:

###  appId

• **appId**: *string*

###  client

• **client**: *[ClientDetails](_lifecycle_events_d_.md#clientdetails)*

###  configurationData

• **configurationData**: *[ConfigurationData](_lifecycle_events_d_.md#configurationdata)*

###  confirmationData

• **confirmationData**: *[ConfirmationData](_lifecycle_events_d_.md#confirmationdata)*

###  dashboardData

• **dashboardData**: *[DashboardData](_lifecycle_events_d_.md#dashboarddata)*

###  eventData

• **eventData**: *[EventData](_lifecycle_events_d_.md#eventdata)*

###  executeData

• **executeData**: *[ExecuteData](_lifecycle_events_d_.md#executedata)*

###  executionId

• **executionId**: *string*

###  installData

• **installData**: *[InstallData](_lifecycle_events_d_.md#installdata)*

###  lifecycle

• **lifecycle**: *[AppLifecycle](_lifecycle_events_d_.md#applifecycle)*

###  locale

• **locale**: *string*

An IETF BCP 47 language tag representing the chosen locale for this account.

###  oauthCallbackData

• **oauthCallbackData**: *[OAuthCallbackData](_lifecycle_events_d_.md#oauthcallbackdata)*

###  pingData

• **pingData**: *[PingData](_lifecycle_events_d_.md#pingdata)*

###  uninstallData

• **uninstallData**: *[UninstallData](_lifecycle_events_d_.md#uninstalldata)*

###  updateData

• **updateData**: *[UpdateData](_lifecycle_events_d_.md#updatedata)*

###  version

• **version**: *string*

###  HubHealthEvent

• **HubHealthEvent**:

###  eventId

• **eventId**: *string*

The id of the event.

###  hubId

• **hubId**: *string*

The id of the hub.

###  locationId

• **locationId**: *string*

The id of the location in which the event was triggered.

###  reason

• **reason**: *[ReasonEnum](_lifecycle_events_d_.md#reasonenum)*

The reason the hub is offline.

###  status

• **status**: *[StatusEnum](_lifecycle_events_d_.md#statusenum)*

The status of the hub.

###  InstallData

• **InstallData**:

###  authToken

• **authToken**: *string*

An OAuth token to use when calling into SmartThings API's.

###  installedApp

• **installedApp**: *[InstalledApp](_lifecycle_events_d_.md#installedapp)*

###  refreshToken

• **refreshToken**: *string*

A refresh token which maybe used to obtain authorization to SmartThings API after expiration of the authToken. An integration will need to use this refreshToken to support calling the SmartThings API outside the context of an event.

###  InstalledApp

• **InstalledApp**:

###  config

• **config**: *[ConfigMap](_lifecycle_events_d_.md#configmap)*

###  installedAppId

• **installedAppId**: *string*

###  locationId

• **locationId**: *string*

###  permissions

• **permissions**: *[Permissions](_lifecycle_events_d_.md#permissions)*

###  ModeEvent

• **ModeEvent**:

###  eventId

• **eventId**: *string*

The id of the event.

###  locationId

• **locationId**: *string*

The id of the location in which the event was triggered.

###  modeId

• **modeId**: *string*

The ID of the mode associated with a MODE_EVENT.

###  OAuthCallbackData

• **OAuthCallbackData**:

###  installedAppId

• **installedAppId**: *string*

The id of the installed app.

###  urlPath

• **urlPath**: *string*

A relative URL containing all of the query string parameters as returned by the third party oauth system. A SmartApp can parse the `urlPath` property to extract any sensitive auth codes/tokens which can then be used to access the third party system.

###  PingData

• **PingData**:

###  challenge

• **challenge**: *string*

A challenge phrase that the SmartApp must echo back to validate itself.

###  SceneLifecycleEvent

• **SceneLifecycleEvent**:

###  eventId

• **eventId**: *string*

The id of the event.

###  lifecycle

• **lifecycle**: *[SceneLifecycle](_lifecycle_events_d_.md#scenelifecycle)*

###  locationId

• **locationId**: *string*

The id of the location in which the event was triggered.

###  sceneId

• **sceneId**: *string*

The id of the scene.

###  SecurityArmStateEvent

• **SecurityArmStateEvent**:

###  armState

• **armState**: *[ArmStateEnum](_lifecycle_events_d_.md#armstateenum)*

The arm state of a security system.

###  eventId

• **eventId**: *string*

The id of the event.

###  locationId

• **locationId**: *string*

The id of the location in which the event was triggered.

###  optionalArguments

• **optionalArguments**: *object*

A set of key / value pairs useful for passing any optional arguments.

#### Type declaration:

* \[ **key**: *string*\]: [SimpleValue](_lifecycle_events_d_.md#simplevalue)

###  SimpleValue

• **SimpleValue**:

###  boolValue

• **boolValue**: *boolean*

###  doubleValue

• **doubleValue**: *number*

###  intValue

• **intValue**: *number*

###  stringValue

• **stringValue**: *string*

###  valueType

• **valueType**: *[ValueTypeEnum](_lifecycle_events_d_.md#valuetypeenum)*

The type of the value.

###  TimerEvent

• **TimerEvent**:

###  eventId

• **eventId**: *string*

The ID of the event.

###  expression

• **expression**: *string*

The CRON expression if the schedule was of type CRON.

###  name

• **name**: *string*

The name of the schedule that caused this event.

###  time

• **time**: *Date*

The IS0-8601 date time strings in UTC that this event was scheduled for.

###  type

• **type**: *string*

###  UninstallData

• **UninstallData**:

###  installedApp

• **installedApp**: *[InstalledApp](_lifecycle_events_d_.md#installedapp)*

###  UpdateData

• **UpdateData**:

###  authToken

• **authToken**: *string*

###  installedApp

• **installedApp**: *[InstalledApp](_lifecycle_events_d_.md#installedapp)*

###  previousConfig

• **previousConfig**: *[ConfigMap](_lifecycle_events_d_.md#configmap)*

###  previousPermissions

• **previousPermissions**: *[Permissions](_lifecycle_events_d_.md#permissions)*

###  refreshToken

• **refreshToken**: *string*

###  ConfigMap

Ƭ **ConfigMap**: *object*

#### Type declaration:

* \[ **name**: *string*\]: ConfigEntry[]

###  Permissions

Ƭ **Permissions**: *string | string[]*

___

###  DeviceHealthEvent

• **DeviceHealthEvent**:

###  ReasonEnum

• **ReasonEnum**:

###  BLUETOOTH_OFFLINE

• **BLUETOOTH_OFFLINE**: = "BLUETOOTH_OFFLINE"

###  HUB_DISCONNECTED

• **HUB_DISCONNECTED**: = "HUB_DISCONNECTED"

###  HUB_OFFLINE

• **HUB_OFFLINE**: = "HUB_OFFLINE"

###  NONE

• **NONE**: = "NONE"

###  SERVICE_UNAVAILABLE

• **SERVICE_UNAVAILABLE**: = "SERVICE_UNAVAILABLE"

###  ZIGBEE_OFFLINE

• **ZIGBEE_OFFLINE**: = "ZIGBEE_OFFLINE"

###  ZWAVE_OFFLINE

• **ZWAVE_OFFLINE**: = "ZWAVE_OFFLINE"

###  StatusEnum

• **StatusEnum**:

###  OFFLINE

• **OFFLINE**: = "OFFLINE"

###  ONLINE

• **ONLINE**: = "ONLINE"

###  UNHEALTHY

• **UNHEALTHY**: = "UNHEALTHY"

___

###  HubHealthEvent

• **HubHealthEvent**:

###  ReasonEnum

• **ReasonEnum**:

###  DISCONNECTED

• **DISCONNECTED**: = "DISCONNECTED"

###  INACTIVE

• **INACTIVE**: = "INACTIVE"

###  NONE

• **NONE**: = "NONE"

###  StatusEnum

• **StatusEnum**:

###  BLUETOOTH_OFFLINE

• **BLUETOOTH_OFFLINE**: = "BLUETOOTH_OFFLINE"

###  BLUETOOTH_ONLINE

• **BLUETOOTH_ONLINE**: = "BLUETOOTH_ONLINE"

###  OFFLINE

• **OFFLINE**: = "OFFLINE"

###  ONLINE

• **ONLINE**: = "ONLINE"

###  ZIGBEE_OFFLINE

• **ZIGBEE_OFFLINE**: = "ZIGBEE_OFFLINE"

###  ZIGBEE_ONLINE

• **ZIGBEE_ONLINE**: = "ZIGBEE_ONLINE"

###  ZWAVE_OFFLINE

• **ZWAVE_OFFLINE**: = "ZWAVE_OFFLINE"

###  ZWAVE_ONLINE

• **ZWAVE_ONLINE**: = "ZWAVE_ONLINE"

___

###  SecurityArmStateEvent

• **SecurityArmStateEvent**:

###  ArmStateEnum

• **ArmStateEnum**:

###  ARMED_AWAY

• **ARMED_AWAY**: = "ARMED_AWAY"

###  ARMED_STAY

• **ARMED_STAY**: = "ARMED_STAY"

###  DISARMED

• **DISARMED**: = "DISARMED"

###  UNKNOWN

• **UNKNOWN**: = "UNKNOWN"
