'use strict';

const SmartApp = require('@smartthings/smartapp');
const st = require('./lib/st');

const smartapp = new SmartApp()
    .appId(process.env.ST_APP_ID)
    .configureLogger(console, 2, true)
    // .configureI18n()
    .disableCustomDisplayName(true)
    .disableRemoveApp(false)
    .permissions(['r:devices:*', 'x:devices:*', 'w:devices:*', 'i:deviceprofiles', 'r:locations:*'])
    .page('mainPage', (context, page, configData) => {
        page.name('SmartApp SDK Configuration Test')

        page.section('Common configuration options', section => {
            section
                .paragraphSetting('paragraphSetting1')
                .name('SectionSetting')
                .description('name(), description(), defaultValue(), required(), disabled(), submitOnChange()');
        });

        page.section('Enum Setting Section', section => {

            section
                .enumSetting('enumSetting1')
                .name('EnumSetting #1')
                .description('Set weekday or weekend')
                .options(['Weekday', 'Weekend'])
                .defaultValue('Weekday')
                .style('DEFAULT')
                .multiple(false)
                .required(false);

            section
                .paragraphSetting('paragraph-enumsetting1')
                .name('')
                .description('.defaultValue(\'Weekday\') .style(\'DEFAULT\') .multiple(false) .required(false)');

            section
                .enumSetting('enumSetting2')
                .name('EnumSetting #2')
                .description('Select a day')
                .options(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'])
                .defaultValue('Saturday')
                .style('DROPDOWN')
                .multiple(false)
                .required(false);

            section
                .paragraphSetting('paragraph-enumsetting2')
                .name('')
                .description('.defaultValue(\'Saturday\') .style(\'DROPDOWN\') .multiple(false) .required(false)');

            section
                .enumSetting('enumSetting3')
                .name('EnumSetting #3')
                .description('Select a day')
                .options(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'])
                .defaultValue(['Monday', 'Tuesday'])
                .style('COMPLETE')
                .multiple(true)
                .required(false);

            section
                .paragraphSetting('paragraph-enumsetting3')
                .name('')
                .description('.defaultValue(\'Saturday\') .style(\'COMPLETE\') .multiple(false) .required(false)');

        });

        page.section('Boolean Setting Section', section => {
            section
                .booleanSetting('booleanSetting1')
                .name('BooleanSetting #1')
                .description('.defaultValue(true) .submitOnChange(true) .required(true) .')
                .defaultValue(true)
                .submitOnChange(true)
                .required(true);

            section
                .booleanSetting('booleanSetting2')
                .name('BooleanSetting #2')
                .description('.defaultValue(false) .submitOnChange(false) .required(false) .')
                .defaultValue(false)
                .submitOnChange(false)
                .required(false);

            section
                .booleanSetting('booleanSetting3')
                .name('BooleanSetting #3')
                .description('.defaultValue(true) .disabled(true)')
                .defaultValue(true)
                .disabled(true)
                .required(false);

            section
                .booleanSetting('booleanSetting4')
                .name('BooleanSetting #4')
                .description('.defaultValue(false) .disabled(true)')
                .defaultValue(false)
                .disabled(true)
                .required(false);
        });

        page.section('Color Setting Section', section => {
            section
                .colorSetting('colorSetting1')
                .name('ColorSetting #1')
                .defaultValue('ff0000')
                .required(true);
        });

        page.section('Action', section => {
            section
                .deviceSetting('device_to_turn_off')
                .name('Devices to turn off')
                .capabilities(['switch'])
                .multiple(true)
                .required(true)
                .preselect(true)
                .permissions('rx');
        });

        page.section('', section => {
            section
                .booleanSetting('pushEnabled')
                .name('Send notification to members')
                .description('_addtional description_')
                .submitOnChange(true)
                .required(true);

            const pushEnabled = context.configBooleanValue('pushEnabled');
            if (pushEnabled) {
                section
                    .textSetting('pushTextMessage')
                    .name('알림 받을 메세지를 입력하세요')
                    .description('')
                    .required(true);
            }

        });

        page.section('_None_', section => {
            section
                .booleanSetting('deactivate')
                .name('Deactivate')
                .description('')
                .required(true);
        });

        page.section('Description Link Test', section => {
            section
                .paragraphSetting('desc-paragraph')
                .name('description paragraph')
                .description('asdf \nhttp://www.google.com/ \nasdf');
        });

        page.section('Link Setting Test', section => {
            section
                .linkSetting('linkSetting')
                .name('Link Setting')
                .description('This is link setting, link to https://www.google.com/')
                .url('https://www.google.com');
        });
    });

exports.handler = (event, context, callback) => {
    smartapp.handleLambdaCallback(event, context, callback);
};