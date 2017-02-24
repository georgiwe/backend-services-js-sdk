import { Device } from "./CurrentDevice";
/**
 * @class CurrentDevice
 * @deprecated
 * @protected
 * @param pushHandler
 * @constructor
 */
declare class CurrentDevice implements Device {
    _pushHandler: any;
    _initSuccessCallback: any;
    _initErrorCallback: any;
    _globalFunctionSuffix: any;
    pushSettings: any;
    pushToken: any;
    isInitialized: any;
    isInitializing: any;
    emulatorMode: any;
    constructor(pushHandler: any);
    private readonly pushPlugin;
    static ensurePushIsAvailable: () => void;
    /**
     * Initializes the current device for push notifications. This method requests a push token from the device vendor and enables the push notification functionality on the device. Once this is done, you can register the device in {{site.TelerikBackendServices}} using the register() method.
     * @method enableNotifications
     * @name enableNotifications
     * @memberOf CurrentDevice.prototype
     * @param {PushSettings} pushSettings An object specifying various settings for the initialization.
     * @returns {Object} The promise for the request.
     */
    /**
     * Initializes the current device for push notifications. This method requests a push token from the device vendor and enables the push notification functionality on the device. Once this is done, you can register the device in Everlive using the register() method.
     * @method enableNotifications
     * @name enableNotifications
     * @memberOf CurrentDevice.prototype
     * @param {PushSettings} pushSettings An object specifying various settings for the initialization.
     * @param {Function} [success] Callback to invoke on success.
     * @param {Function} [error] Callback to invoke on error.
     */
    enableNotifications(pushSettings: any, success?: Function, error?: Function): Promise<{}>;
    /**
     * Disables push notifications for the current device. This method invalidates any push tokens that were obtained for the device from the current application.
     * @method disableNotifications
     * @name disableNotifications
     * @memberOf CurrentDevice.prototype
     * @returns {Object} The promise for the request.
     */
    /**
     * Disables push notifications for the current device. This method invalidates any push tokens that were obtained for the device from the current application.
     * @method disableNotifications
     * @name disableNotifications
     * @memberOf CurrentDevice.prototype
     * @param {Function} [success] Callback to invoke on success.
     * @param {Function} [error] Callback to invoke on error.
     */
    disableNotifications(successCb?: Function, errorCb?: Function): any;
    /**
     * Returns the push registration for the current device.
     * @memberOf CurrentDevice.prototype
     * @method getRegistration
     * @name getRegistration
     * @returns {Object} The promise for the request.
     */
    /**
     * Returns the push registration for the current device.
     * @memberOf CurrentDevice.prototype
     * @method getRegistration
     * @name getRegistration
     * @param {Function} success Callback to invoke on success.
     * @param {Function} error Callback to invoke on error.
     */
    getRegistration(success?: Function, error?: Function): any;
    /**
     * Registers the current device for push notifications in {{site.TelerikBackendServices}}. This method can be called only after [enableNotifications()]{@link currentDevice.enableNotifications} has completed successfully.
     * @memberOf CurrentDevice.prototype
     * @method register
     * @name register
     * @param {Object} customParameters Custom parameters for the registration.
     * @returns {Object} The promise for the request.
     */
    /**
     * Registers the current device for push notifications in {{site.TelerikBackendServices}}. This method can be called only after [enableNotifications()]{@link currentDevice.enableNotifications} has completed successfully.
     * @memberOf CurrentDevice.prototype
     * @method register
     * @name register
     * @param {Object} customParameters Custom parameters for the registration.
     * @param {Function} [success] Callback to invoke on success.
     * @param {Function} [error] Callback to invoke on error.
     */
    register(customParameters: any, success?: Function, error?: any): Promise<any>;
    /**
     * Unregisters the current device from push notifications in {{site.TelerikBackendServices}}. After this call completes successfully, {{site.bs}} will no longer send notifications to this device. Note that this does not prevent the device from receiving notifications and does not invalidate push tokens.
     * @memberOf CurrentDevice.prototype
     * @method unregister
     * @name unregister
     * @returns {Object} The promise for the request.
     */
    /**
     * Unregisters the current device from push notifications in {{site.TelerikBackendServices}}. After this call completes successfully, {{site.bs}} will no longer send notifications to this device. Note that this does not prevent the device from receiving notifications and does not invalidate push tokens.
     * @memberOf CurrentDevice.prototype
     * @method unregister
     * @name unregister
     * @param {Function} [success] Callback to invoke on success.
     * @param {Function} [error] Callback to invoke on error.
     */
    unregister(success?: Function, error?: Function): any;
    /**
     * Updates the registration of the current device.
     * @memberOf CurrentDevice.prototype
     * @method updateRegistration
     * @name updateRegistration
     * @param {Object} customParameters Custom parameters for the registration. If undefined, customParameters are not updated.
     * @returns {Object} The promise for the request.
     */
    /**
     * Updates the registration for the current device.
     * @memberOf CurrentDevice.prototype
     * @method updateRegistration
     * @name updateRegistration
     * @param {Object} customParameters Custom parameters for the registration. If undefined, customParameters are not updated.
     * @param {Function} [success] Callback to invoke on success.
     * @param {Function} [error] Callback to invoke on error.
     */
    updateRegistration(customParameters: any, success?: Function, error?: any): Promise<any>;
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
    areNotificationsEnabled(options: any, onSuccess?: Function, onError?: Function): Promise<{}>;
    _initializeInteractivePush(iOSSettings: any, success?: Function, error?: Function): void;
    _initialize(success?: Function, error?: Function): void;
    _validateAndroidSettings(androidSettings: any): void;
    _cleanPlatformsPushSettings(pushSettings: any): any;
    _populateRegistrationObject(deviceRegistration: any, success?: Function, error?: Function): Promise<{}>;
    _getLocaleName(success?: Function, error?: Function): any;
    _getDeviceId(): any;
    _getPlatformType(): number;
    _deviceRegistrationFailed(error: any): void;
    _deviceRegistrationSuccess(token: any): void;
    _successfulRegistrationAPN(token: any): void;
    _failedRegistrationAPN(error: any): void;
    _successSentRegistrationGCM(token: any): void;
    _errorSentRegistrationGCM(error: any): void;
    notificationProcessed(): void;
    _onNotificationAPN(e: any): void;
    _onNotificationGCM(e: any): void;
    _raiseNotificationEventAndroid(e: any): void;
    _raiseNotificationEventIOS(e: any): void;
}
export = CurrentDevice;
