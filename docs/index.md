# SmartApp SDK Reference

The [SmartApp](classes/_smart_app_d_.smartapp.md) class handles all SmartApp 
[lifecycle events](https://smartthings.developer.samsung.com/docs/smartapps/lifecycles.html)
and callbacks. It is instantiated and configured with handlers for appropriate and invoked
in response to either web-server HTTP requests or AWS Lambda function calls. 

## Instantiation and Initialization

```.javascript
const smartapp = new SmartApp()
    .enableEventLogging(2)
    .configureI18n()
    ....
```
* [SmartApp](classes/_smart_app_d_.smartapp.md)
    * [apiUrl](classes/_smart_app_d_.smartapp.md#apiurl)
    * [appId](classes/_smart_app_d_.smartapp.md#appid)
    * [clientId](classes/_smart_app_d_.smartapp.md#clientid)
    * [clientSecret](classes/_smart_app_d_.smartapp.md#clientsecret)
    * [configureI18n](classes/_smart_app_d_.smartapp.md#configurei18n)
    * [configureLogger](classes/_smart_app_d_.smartapp.md#configurelogger)
    * [contextStore](classes/_smart_app_d_.smartapp.md#contextstore)
    * [disableCustomDisplayName](classes/_smart_app_d_.smartapp.md#disablecustomdisplayname)
    * [disableRemoveApp](classes/_smart_app_d_.smartapp.md#disableremoveapp)
    * [enableEventLogging](classes/_smart_app_d_.smartapp.md#enableeventlogging)
    * [permissions](classes/_smart_app_d_.smartapp.md#permissions)
    * [redirectUri](classes/_smart_app_d_.smartapp.md#redirecturi)
    * [refreshUrl](classes/_smart_app_d_.smartapp.md#refreshurl)

## Configuration Page Definition
```.javascript
    .page('mainPage', (context, page, configData) => {
        page.section('sensors', section => {
            section.deviceSetting('contactSensor')
                   .capabilities(['contactSensor'])
                   .required(false);
        })
    })
```
* [Page](classes/_pages_page_d_.page.md)
    * [Section](classes/_pages_section_d_.section.md)
        *  [BooleanSetting](classes/_pages_boolean_setting_d_.booleansetting.md)
        *  [DecimalSetting](classes/_pages_decimal_setting_d_.decimalsetting.md)
        *  [DeviceSetting](classes/_pages_device_setting_d_.devicesetting.md)
        *  [EmailSetting](classes/_pages_email_setting_d_.emailsetting.md)
        *  [EnumSetting](classes/_pages_enum_setting_d_.enumsetting.md)
        *  [ImageSetting](classes/_pages_image_setting_d_.imagesetting.md)
        *  [ImagesSetting](classes/_pages_images_setting_d_.imagessetting.md)
        *  [LinkSetting](classes/_pages_link_setting_d_.linksetting.md)
        *  [ModeSetting](classes/_pages_mode_setting_d_.modesetting.md)
        *  [NumberSetting](classes/_pages_number_setting_d_.numbersetting.md)
        *  [OAuthSetting](classes/_pages_oauth_setting_d_.oauthsetting.md)
        *  [PageSetting](classes/_pages_page_setting_d_.pagesetting.md)
        *  [ParagraphSetting](classes/_pages_paragraph_setting_d_.paragraphsetting.md)
        *  [PasswordSetting](classes/_pages_password_setting_d_.passwordsetting.md)
        *  [PhoneSetting](classes/_pages_phone_setting_d_.phonesetting.md)
        *  [SceneSetting](classes/_pages_scene_setting_d_.scenesetting.md)
        *  [SectionSetting](classes/_pages_section_setting_d_.sectionsetting.md)
        *  [SecuritySetting](classes/_pages_security_setting_d_.securitysetting.md)
        *  [SoundSetting](classes/_pages_sound_setting_d_.soundsetting.md)
        *  [TextSetting](classes/_pages_text_setting_d_.textsetting.md)
        *  [TimeSetting](classes/_pages_time_setting_d_.timesetting.md)
        *  [VideoSetting](classes/_pages_video_setting_d_.videosetting.md)

## Event Handler Definition
### Installation Events
```.javascript
    .updated(async (context, updateData) => {
        await context.api.subscriptions.unsubscribeAll()
        await context.api.subscriptions.subscribeToDevices(
            context.config.contactSensor, 'contactSensor', 'contact', 'deviceEventHandler');
    })
```
* [installed](classes/_smart_app_d_.smartapp.md#installed)
* [uninstalled](classes/_smart_app_d_.smartapp.md#uninstalled)
* [updated](classes/_smart_app_d_.smartapp.md#updated)

### Subscribed and Scheduled Events
```.javascript
    .subscribedEventHandler('myDeviceEventHandler', (context, event) => {
        const value = event.value === 'open' ? 'on' : 'off';
        context.api.devices.sendCommands(context.config.lights, 'switch', value);
    })
```
* [defaultDeviceCommandHandler](classes/_smart_app_d_.smartapp.md#defaultdevicecommandhandler)
* [deviceCommand](classes/_smart_app_d_.smartapp.md#devicecommand)
* [deviceCommandHandler](classes/_smart_app_d_.smartapp.md#devicecommandhandler)
* [oauthHandler](classes/_smart_app_d_.smartapp.md#oauthhandler)
* [scheduledEventHandler](classes/_smart_app_d_.smartapp.md#scheduledeventhandler)
* [subscribedDeviceEventHandler](classes/_smart_app_d_.smartapp.md#subscribeddeviceeventhandler)
* [subscribedDeviceHealthEventHandler](classes/_smart_app_d_.smartapp.md#subscribeddevicehealtheventhandler)
* [subscribedDeviceLifecycleEventHandler](classes/_smart_app_d_.smartapp.md#subscribeddevicelifecycleeventhandler)
* [subscribedEventHandler](classes/_smart_app_d_.smartapp.md#subscribedeventhandler)
* [subscribedHubHealthEventHandler](classes/_smart_app_d_.smartapp.md#subscribedhubhealtheventhandler)
* [subscribedModeEventHandler](classes/_smart_app_d_.smartapp.md#subscribedmodeeventhandler)
* [subscribedSceneLifecycleEventHandler](classes/_smart_app_d_.smartapp.md#subscribedscenelifecycleeventhandler)
* [subscribedSecurityArmStateEventHandler](classes/_smart_app_d_.smartapp.md#subscribedsecurityarmstateeventhandler)

## Invocation from Web-Servers and Lambda Functions
```javascript
server.post('/', (req, res) => {
  smartapp.handleHttpCallback(req, res);
});
```
* [handleHttpCallback](classes/_smart_app_d_.smartapp.md#handlehttpcallback)
* [handleLambdaCallback](classes/_smart_app_d_.smartapp.md#handlelambdacallback)
* [handleOAuthCallback](classes/_smart_app_d_.smartapp.md#handleoauthcallback)
