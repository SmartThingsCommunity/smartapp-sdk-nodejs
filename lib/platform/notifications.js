'use strict'

const Base = require('./base')

module.exports = class Notifications extends Base {
	/**
    * @typedef NotificationMessage
    * @property {String} title Key is locale and value is the string value for that locale
    * @property {String} body
    */

	/**
    * @typedef Replacement
    * @property {String} key Variable name
    * @property {String} value Value of variable that will be replaced
    */

	/**
    * @typedef NotificationRequest
    * @property {String} [locationId] The target location of sending push message. Defaults to installedApp's locationId but override if desired
    * @property {("ALERT"|"SUGGESTED_ACTION"|"EVENT_LOGGING"|"AUTOMATION_INFO")} type The notification indicator type. The type determines the type of alerts the user sees on the device.
    * @property {Array<Object.<string, NotificationMessage>>} messages The title and content that you want to display with the push message. Individual supported language sets may be added in the form of ISO standard {language code}_{country code} and are shown to a user according to the settings of the mobile device. If you add a default set here, you can set the default language when it does not match with the actual setting.
    * @property {String} [imageUrl] Notification image url.
    * @property {String} [deepLink] Supports the ability to launch the specific plugin on your SmartThings app.
    * @property {Array<Replacement>} [replacements] Supports the ability to replace the custom variable in a title or body. The format of 'key' must be of the form ${...}. If you want to show the location nickname that the platform has, put it as the form of ${System.locationNickname} in the title or body.
    */

	/**
    *
    * @param {NotificationRequest} options Notification request object
    * @returns {Response}
    * @example
    * const notification = {
    *  "locationId": "59f21333-c2cc-513e-a4a1-5377be8c878a",
    *  "type": "ALERT",
    *  "messages": [
    *    {
    *      "default": {
    *           "title": "${System.locationNickname}",
    *           "body": "The job is now ${progress}% in progress."
    *       }
    *    },
    *    {
    *      "en_US":  {
    *           "title": "${System.locationNickname}",
    *           "body": "The job is now ${progress}% in progress."
    *       }
    *    },
    *    {
    *      "ko": {
    *           "title": "${System.locationNickname}",
    *           "body": "작업이 ${progress}% 진행 중입니다."
    *       }
    *    }
    *  ],
    *  "imageUrl": "https://via.placeholder.com/256x256.png?text=LocationNickname",
    *  "deepLink": "locationid:59f21333-c2cc-513e-a4a1-5377be8c878a",
    *  "replacements": [
    *    {
    *      "key": "${progress}",
    *      "value": "37"
    *    }
    *  ]
    * }
    */
	create(options) {
		options.locationId = options.locationId || this.st.locationId
		return this.st.client.request('notification', 'POST', options)
	}
}
