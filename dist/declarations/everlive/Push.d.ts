import { Data } from './types/Data';
import { Device } from './push/CurrentDevice';
import { Everlive } from "./Everlive";
import { SingleResult } from "./interfaces/SingleResult";
import { SuccessCallback } from "./interfaces/SuccessCallback";
import { ErrorCallback } from "./interfaces/ErrorCallback";
/**
 * @class Push
 * @classdesc A class for managing push notifications in your application. Supported are push notifications for hybrid apps on Android and iOS.
 * @protected
 * @param el {Everlive} Everlive Object
 */
export declare class Push {
    private el;
    notifications: Data<any>;
    devices: Data<any>;
    private _currentDevice;
    constructor(el: Everlive);
    /**
     * Ensures that the Telerik Push Notifications plug-in has been loaded and is ready to use. An {EverliveError} is returned if the plug-in is not available.
     * @method ensurePushIsAvailable
     * @memberOf Push.prototype
     */
    ensurePushIsAvailable(): void;
    /**
      * Returns the current device for sending push notifications
      * @deprecated since version 1.2.7
      * @see [Push.register]{@link push.register}
      * @memberOf Push.prototype
      * @method currentDevice
      * @name currentDevice
      * @param [emulatorMode] {Boolean} If set to true, emulator mode is enabled meaning you cannot send push notifications.
      * @returns {CurrentDevice} Returns an instance of CurrentDevice.
      */
    currentDevice(emulatorMode?: boolean): Device;
    /**
     * Enables push notifications on the device and registers it for the feature with {{site.TelerikBackendServices}} if it hasn't already been registered. If it has been registered, the registration details are updated.
     * @method register
     * @name register
     * @memberOf Push.prototype
     * @param {Object} settings An object containing settings for the registration. It can include custom parameters to be stored by {{site.bs}}.
     * @param {Object} settings.iOS=null iOS-specific settings.
     * @param {Boolean} settings.iOS.alert=true If set to true, the push notification will display as a standard iOS alert.
     * @param {String|Number} settings.iOS.badge='+1' Specifies the badge counter to be displayed on the device.
     * @param {Boolean} settings.iOS.clearBadge=false Specifies whether to reset the badge count to 0.
     * @param {Boolean} settings.iOS.sound=true If set to true, the device will play a notification sound.
     * @param {Object} settings.android=null Android-specific settings.
     * @param {String} settings.android.senderID=null Your Google API project number. It is required when obtaining a push token for an Android device.
     * @param {String} settings.android.projectNumber=null Synonym for android.senderID. Available in JavaScript SDK versions 1.2.7 and later.
     * @param {Object} settings.wp8=null Windows Phone specific settings.
     * @param {String} settings.wp8.channelName=null The name of the push channel that the device is registering to.
     * @param {Function} settings.notificationCallbackIOS Specifies a custom callback to be used when a push notification is received on iOS.
     * @param {Function} settings.notificationCallbackAndroid Specifies a custom callback to be used when a push notification is received on Android.
     * @param {Function} settings.notificationCallbackWP8 Specifies a custom callback to be used when a push notification is received on Windows Phone 8.
     * @param {Object} settings.customParameters=null Specifies optional custom registration parameters that will be saved in Telerik Backend Services.
     * @returns {Promise} The promise for the request.
     */
    /**
     * Enables push notifications on the device and registers it for the feature with {{site.TelerikBackendServices}} if it hasn't already been registered. If it has been registered, the registration details are updated.
     * Telerik Backend Services if it hasn't already been registered.
     * If it was registered the registration details are updated.
     * @method register
     * @name register
     * @memberOf Push.prototype
     * @param {Object} settings Settings for the registration. Can include custom parameters to be saved in backend services.
     * @param {Object} settings.iOS=null iOS specific settings
     * @param {Boolean} settings.iOS.alert=true Specifies whether the device will display an alert message.
     * @param {String|Number} settings.iOS.badge='+1' Specifies the badge counter to be displayed on the device.
     * @param {Boolean} settings.iOS.clearBadge=false Specifies whether to reset the badge count to 0.
     * @param {Boolean} settings.iOS.sound=true Specifies whether the device will play a sound.
     * @param {Object} settings.android=null Android specific settings
     * @param {String} settings.android.senderID=null This is your Google API project number. It is required when obtaining a push token for an Android device.
     * @param {String} settings.android.projectNumber=null Synonym for android.senderID. Available in JavaScript SDK versions 1.2.7 and later.
     * @param {Object} settings.wp8=null Windows Phone specific settings
     * @param {String} settings.wp8.channelName=null The name of the push channel that the device is registering to.
     * @param {Function} settings.notificationCallbackIOS Specifies a custom callback to be used when a push notification is received on iOS.
     * @param {Function} settings.notificationCallbackAndroid Specifies a custom callback to be used when a push notification is received on Android.
     * @param {Function} settings.notificationCallbackWP8 Specifies a custom callback to be used when a push notification is received on Windows Phone 8.
     * @param {Object} settings.customParameters=null Specifies optional custom registration parameters that will be saved in Telerik Backend Services.
     * @param {Function} [success] Callback to invoke on success.
     * @param {Function} [error] Callback to invoke on error.
     */
    register(settings: any, success?: SuccessCallback<any>, error?: ErrorCallback): Promise<any>;
    /**
     * Disables push notifications for the current device. This method invalidates any push tokens that were obtained for the device from the current application. The device will also be unregistered from {{site.TelerikBackendServices}}.
     * @method unregister
     * @name unregister
     * @memberOf Push.prototype
     * @returns {Promise} The promise for the request.
     */
    /**
     * Disables push notifications for the current device. This method invalidates any push tokens that were obtained for the device from the current application. The device will also be unregistered from {{site.TelerikBackendServices}}.
     * This method invalidates any push tokens that were obtained for the device from the current application.
     * The device will also be unregistered from Telerik Backend Services.
     * @method unregister
     * @name unregister
     * @memberOf Push.prototype
     * @param {Function} [onSuccess] Callback to invoke on success.
     * @param {Function} [onError] Callback to invoke on error.
     */
    unregister(onSuccess?: SuccessCallback<any>, onError?: ErrorCallback): Promise<any>;
    /**
     * Updates the registration of the current device.
     * @method updateRegistration
     * @name updateRegistration
     * @memberOf Push.prototype
     * @param {Object} customParameters Custom parameters for the registration. If {undefined}, customParameters are not updated.
     * @returns {Promise} The promise for the request.
     */
    /**
     * Updates the registration for the current device.
     * @method updateRegistration
     * @name updateRegistration
     * @memberOf Push.prototype
     * @param {Object} customParameters Custom parameters for the registration. If {undefined}, customParameters are not updated.
     * @param {Function} [onSuccess] Callback to invoke on success.
     * @param {Function} [onError] Callback to invoke on error.
     */
    updateRegistration(customParameters: any, onSuccess?: SuccessCallback<any>, onError?: ErrorCallback): Promise<any>;
    /**
     * Sets the badge number on the {{site.TelerikBackendServices}} server.
     * @method setBadgeNumber
     * @name setBadgeNumber
     * @memberOf Push.prototype
     * @param {Number|String} badge The number to be set as a badge.
     * @returns {Promise} The promise for the request.
     */
    /**
     * Sets the badge number on the server
     * @method setBadgeNumber
     * @name setBadgeNumber
     * @memberOf Push.prototype
     * @param {Number|String} badge The number to be set as a badge.
     * @param {Function} [onSuccess] Callback to invoke on success.
     * @param {Function} [onError] Callback to invoke on error.
     */
    setBadgeNumber(badge: string, onSuccess?: SuccessCallback<any>, onError?: ErrorCallback): Promise<any>;
    setBadgeNumber(badge: number, onSuccess?: SuccessCallback<any>, onError?: ErrorCallback): Promise<any>;
    /**
     * Resets the badge number on the {{site.TelerikBackendServices}} server to 0.
     * @method clearBadgeNumber
     * @name clearBadgeNumber
     * @memberOf Push.prototype
     * @returns {Promise} The promise for the request.
     */
    /**
     * Clears the badge number on the server by setting it to 0
     * @method clearBadgeNumber
     * @name clearBadgeNumber
     * @memberOf Push.prototype
     * @param {Function} [onSuccess] Callback to invoke on success.
     * @param {Function} [onError] Callback to invoke on error.
     */
    clearBadgeNumber(onSuccess?: SuccessCallback<any>, onError?: ErrorCallback): Promise<any>;
    /**
     * Returns the push notifications registration for the current device.
     * @method getRegistration
     * @name getRegistration
     * @memberOf Push.prototype
     * @returns {Promise} The promise for the request.
     */
    /**
     * Returns the push registration for the current device.
     * @method getRegistration
     * @name getRegistration
     * @memberOf Push.prototype
     * @param {Function} [onSuccess] Callback to invoke on success.
     * @param {Function} [onError] Callback to invoke on error.
     */
    getRegistration(onSuccess?: SuccessCallback<SingleResult<any>>, onError?: ErrorCallback): Promise<SingleResult<any>>;
    /**
     * Sends a push notification.
     * @method send
     * @name send
     * @memberOf Push.prototype
     * @param {Object} notification The push notification object
     * @returns {Promise} The promise for request.
     */
    /**
     * Sends a push message
     * @method send
     * @name send
     * @memberOf Push.prototype
     * @param {Object} notification The push notification object
     * @param {Function} [onSuccess] Callback to invoke on success.
     * @param {Function} [onError] Callback to invoke on error.
     */
    send(notification: any, onSuccess?: Function, onError?: Function): any;
    /**
     * This method provides a different operation on each supported platform:
     *
     * - On iOS: Checks if Notifications is enabled for this application in the device's Notification Center.
     * - On Windows Phone: Checks if the application has an active open channel for communication with the Microsoft Push Notification Service. The outcome does not depend on the device's notification settings.
     * - On Android: Checks if the application has established a connection with Google Cloud Messaging. The outcome does not depend on the device's notification settings.
     * @method areNotificationsEnabled
     * @name areNotificationsEnabled
     * @memberOf Push.prototype
     * @param {Object} options An object passed to the Push Notification plugin's areNotificationsEnabled method
     * @returns {Promise} The promise for the request.
     */
    /**
     * iOS: Checks if the Notifications are enabled for this Application in the Device's Notification Center.
     * Windows Phone: Checks if the Application has an active opened Channel for communication with the Notification Service. Not relying on the device notification settings.
     * Android: Checks if the Application has established connection with the Notification Service. Not relying on the device notification settings.
     * @method areNotificationsEnabled
     * @name areNotificationsEnabled
     * @memberOf Push.prototype
     * @param {Object} options an object passed to the Push Notification plugin's areNotificationsEnabled method.
     * @param {Function} [onSuccess] Callback to invoke on successful check. Passes a single boolean value: true or false.
     * @param {Function} [onError] Callback to invoke when an error in the push plugin has occurred.
     */
    areNotificationsEnabled(options: any, onSuccess?: Function, onError?: Function): any;
    /**
     * Currently available only for iOS
     * Use this method in case you are working with iOS interactive push notifications in background mode, including TextInput, or iOS silent push notifications.
     * Call it once you are done with processing your push notification in notificationCallbackIOS.
     * @method notificationProcessed
     * @name notificationProcessed
     * @memberOf Push.prototype
     */
    notificationProcessed(): void;
}
