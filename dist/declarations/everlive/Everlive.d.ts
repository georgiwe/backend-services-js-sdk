import { Setup } from './Setup';
import { Data } from './types/Data';
import { Users } from './types/Users';
import { Files } from './types/Files';
import { Constants } from './constants';
import { Utils } from './utils';
import { Push } from './Push';
import Authentication from './auth/Authentication';
import { Request } from './Request';
import { EverliveErrors } from './EverliveError';
import { BusinessLogic } from './business-logic/BusinessLogic';
import { DataQueryBuilder } from './dataQuery/DataQueryBuilder';
import { QueryBuilder } from './query/QueryBuilder';
import { OfflineStorageModule } from './offline/OfflineStorageModule';
import { CacheModule } from './caching/CacheModule';
import { Query } from './query/Query';
import { AggregateQuery } from './query/AggregateQuery';
import { GeoPoint } from './GeoPoint';
import { LocalStoragePersister, FileSystemPersister } from './offline/offlinePersisters';
import { KendoSdk } from './kendo/kendo.everlive';
import { AuthInfoResult } from './interfaces/AuthInfoResult';
import { RequestOptions } from './interfaces/RequestOptions';
import { Item } from "./interfaces/Item";
import { ErrorCallback } from "./interfaces/ErrorCallback";
import { SuccessCallback } from "./interfaces/SuccessCallback";
export declare class Everlive extends KendoSdk {
    /**
     * Adds an event listener to the SDK.
     * @method addListener
     * @param {String} eventName The name of the event to which to subscribe.
     * @param {Function} eventListener An event listener which will be called once the event is raised.
     * @memberOf Everlive.prototype
     */
    /**
     * Adds an event listener to the SDK.
     * @method on
     * @param {String} eventName The name of the event to which to subscribe.
     * @param {Function} eventListener An event listener which will be called once the event is raised.
     * @memberOf Everlive.prototype
     */
    /**
     * Removes an SDK event listener.
     * @method removeListener
     * @param {String} eventName The name of the event for which to stop listening.
     * @param {Function} eventListener The event listener to remove.
     * @memberOf Everlive.prototype
     */
    /**
     * Removes an SDK event listener.
     * @method off
     * @param {String} eventName The name of the event for which to stop listening.
     * @param {Function} eventListener The event listener to remove.
     * @memberOf Everlive.prototype
     */
    /**
     * Adds an event listener to the SDK which will be called only the first time the event is emitted.
     * @method once
     * @param {String} eventName The name of the event to which to subscribe.
     * @param {Function} eventListener An event listener which will be called once the event is raised.
     * @memberOf Everlive.prototype
     */
    /**
     * Removes all SDK event listeners.
     * @memberOf Everlive.prototype
     * @method removeAllListeners
     * @param {string} eventName Removes all event listeners for the specified event.
     * @returns {void}
     */
    /** Reference to the current {{site.TelerikBackendServices}} (Everlive) JavaScript SDK.
     * @memberOf Everlive
     * @type {Everlive}
     * @static
     */
    static $: Everlive;
    static PushCallbacks: any;
    static Offline: any;
    static Query: typeof Query;
    static AggregateQuery: typeof AggregateQuery;
    static QueryBuilder: typeof QueryBuilder;
    static GeoPoint: typeof GeoPoint;
    static Constants: typeof Constants;
    static Request: typeof Request;
    static EverliveErrors: typeof EverliveErrors;
    static Data: typeof Data;
    static _utils: typeof Utils;
    static _traverseAndRevive: (data: any, reviver?: any) => any;
    static _common: {
        _: UnderscoreStatic;
        rsvp: {
            Promise: typeof Promise;
            all: any;
            hashSettled: (obj: any) => Promise<any>;
            allSettled: (promises: Promise<any>[]) => Promise<any>;
            hash: (obj: any) => Promise<any>;
        };
        Promise: typeof Promise;
        reqwest: any;
    };
    static persister: {
        LocalStorage: typeof LocalStoragePersister;
        FileSystem: typeof FileSystemPersister;
    };
    static version: string;
    static commit: string;
    static createDataSource: (options: any) => any;
    static createHierarchicalDataSource: (options: any) => any;
    static idField: string;
    /** An array of functions that are invoked during instantiation of the {{site.TelerikBackendServices}} (Everlive) JavaScript SDK.
     * @memberOf Everlive
     * @type {Function[]}
     * @static
     * @private
     */
    static initializations: any[];
    static AuthStatus: {
        unauthenticated: string;
        masterKey: string;
        invalidAuthentication: string;
        authenticated: string;
        expiredAuthentication: string;
        authenticating: string;
    };
    static init(options: any): Everlive;
    static disableRequestCache(): any;
    setup: Setup;
    files: Files;
    Files: Files;
    users: Users;
    Users: Users;
    helpers: any;
    push: Push;
    businessLogic: BusinessLogic;
    offlineStorage: OfflineStorageModule;
    cache: CacheModule;
    dataQueryBuilder: DataQueryBuilder;
    appId: string;
    apiKey: string;
    authentication: Authentication;
    /**
     * @class Everlive
     * @classdesc The constructor of the {{site.bs}} (Everlive) JavaScript SDK. This is the entry point for the SDK.
     * @param {object|string} options - An object containing configuration options for the Setup object. Alternatively, you can pass a string representing your App ID.
     * @param {string} options.apiKey - Your API Key. *Deprecated*: use options.appId instead.
     * @param {string} options.appId - Your Telerik Platform app's App ID.
     * @param {string} [options.url=//api.everlive.com/v1/] - The {{site.TelerikBackendServices}} URL.
     * @param {string} [options.token] - An authentication token. The instance will be associated with the provided previously obtained token.
     * @param {string} [options.tokenType=bearer] - The type of the token that is used for authentication.
     * @param {string} [options.masterKey] - The master key of the Telerik Platform app. Use this authorization scheme for operations that require it or to override you app's access control. Use only for development purposes. Do not deploy it with your app.
     * @param {string} [options.scheme=http] - The URI scheme used to make requests. Supported values: http, https
     * @param {boolean} [options.parseOnlyCompleteDateTimeObjects=false] - If set to true, the SDK will parse only complete date strings (according to the ISO 8601 standard).
     * @param {boolean} [options.emulatorMode=false] - Set this option to true to set the SDK in emulator mode.
     * @param {object|boolean} [options.offline] - Set this option to true to enable Offline Support using the default offline settings.
     * @param {boolean} [options.offline.enabled=false] - When using an object to initialize Offline Support with non-default settings, set this option to enable or disable Offline Support.
     * @param {boolean} [options.offline.isOnline=true] - Whether the storage is in online mode initially.
     * @param {ConflictResolutionStrategy|function} [options.offline.conflicts.strategy=ConflictResolutionStrategy.ClientWins] - A constant specifying the conflict resolution strategy or a function used to resolve the conflicts.
     * @param {boolean} [options.offline.syncUnmodified=false] - Whether to synchronize items updated or deleted on the server but not on the device.
     * @param {object} [options.offline.storage] - An object specifying settings for the offline storage.
     * @param {string} [options.offline.storage.provider=_platform dependant_] - Allows you to select an offline storage provider. Possible values: Everlive.Constants.StorageProvider.LocalStorage, Everlive.Constants.StorageProvider.FileSystem, Everlive.Constants.StorageProvider.Custom. Default value: Cordova, Web: Everlive.Constants.StorageProvider.LocalStorage; NativeScript, Node.js: Everlive.Constants.StorageProvider.FileSystem.
     * @param {string} [options.offline.storage.storagePath=el_store] - A relative path specifying where data will be saved if the FileSystem provider is used.
     * @param {number} [options.offline.storage.requestedQuota=10485760] - How much memory (in bytes) to be requested when using FileSystem for persistence. This option is only valid for Chrome as the other platforms use all the available space.
     * @param {object} [options.offline.storage.implementation] - When storage.provider is set to custom, use this object to specify your custom offline storage implementation.
     * @param {string} [options.offline.encryption.key] - A key that will be used to encrypt the data stored offline.
     * @param {string} [options.offline.files.storagePath=el_file_store] - A relative path specifying where the files will be saved if file system is used for persistence of files in offline mode.
     * @param {string} [options.offline.files.metaPath=el_file_mapping] - A relative path specifying where the metadata file will be saved if file system is used for persistence of files in offline mode.
     * @param {object|boolean} [options.offline.files] - Set this option to true to enable support for files in offline mode.
     * @param {number} [options.offline.files.maxConcurrentDownloads] - The maximum amount of files that can be downloaded simultaneously.
     * @param {boolean} [options.authentication.persist=false] - Indicates whether the current user's authentication will be persisted.
     * @param {Function} [options.authentication.onAuthenticationRequired] - Invoked when the user's credentials have expired. Allowing you to perform custom logic.
     * @param {object} [options.helpers] - An object holding options for all Everlive helper components.
     * @param {object} [options.helpers.html] - HTML Helper configuration objects.
     * @param {boolean} [options.helpers.html.processOnLoad=false] - Whether to process all HTML elements when the window loads.
     * @param {boolean} [options.helpers.html.processOnResize=false] - Whether to process all HTML elements when the window resizes.
     * @param {string} [options.helpers.html.loadingImageUrl] - The image to be displayed while the original image is being processed.
     * @param {string} [options.helpers.html.errorImageUrl] - The image to be displayed when the original image processing fails.
     * @param {object} [options.helpers.html.attributes] - HTML Helper attributes configuration object.
     * @param {object} [options.helpers.html.attributes.loadingImage=data-loading-image] - A custom name for the attribute to be used to set a loading image.
     * @param {object} [options.helpers.html.attributes.errorImage=data-error-image] - A custom name for the attribute to be used to set an error image.
     * @param {object} [options.helpers.html.attributes.dpi=data-dpi] - A custom name for the attribute to be used to specify DPI settings.
     * @param {object} [options.helpers.html.attributes.imageSource=data-src] - A custom name for the attribute to be used to set the image source.
     * @param {object} [options.helpers.html.attributes.fileSource=data-href] - A custom name for the attribute to be used to set the anchor source.
     * @param {object} [options.helpers.html.attributes.enableOffline=data-offline] - A custom name for the attribute to be used to control offline processing.
     * @param {object} [options.helpers.html.attributes.enableResponsive=data-responsive] - A custom name for the attribute to be used to control Responsive Images processing.
     * @param {object|boolean} [options.caching=false] - Set this option to true to enable caching using the default cache settings.
     * @param {number} [options.caching.maxAge=60] - Global setting for maximum age of cached items in minutes.
     * @param {boolean} [options.caching.enabled=false] - Global setting for enabling or disabling cache.
     * @param {object} [options.caching.typeSettings] - Specify per-content-type settings that override the global settings.
     */
    constructor(options: any);
    /**
     * Returns the URL to the {{site.bs}} application endpoint that the SDK uses.
     * @memberOf Everlive.prototype
     * @method buildUrl
     * @returns {string} The generated URL.
     */
    buildUrl(): string;
    /**
     * Generates the Authorization headers that are used by the {{site.TelerikBackendServices}} (Everlive) JavaScript SDK to make requests to the {{site.bs}} servers.
     * @memberOf Everlive
     * @returns {Object} AuthorizationHeaders The generated Authorization headers object.
     */
    buildAuthHeader(): {
        authorization: string;
    };
    /**
     * Gets the current authentication status of the {{site.TelerikBackendServices}} JavaScript SDK instance.
     * @memberOf Everlive.prototype
     * @method authInfo
     * @name authInfo
     * @deprecated
     * @see [authentication.getAuthenticationStatus]{@link ../Authentication/authentication.getAuthenticationStatus}
     * @returns {Promise} A promise to the authentication status.
     */
    /**
     * Gets the current authentication status of the {{site.TelerikBackendServices}} JavaScript SDK instance.
     * @memberOf Everlive.prototype
     * @method authInfo
     * @name authInfo
     * @deprecated
     * @see [authentication.getAuthenticationStatus]{@link ../Authentication/authentication.getAuthenticationStatus}
     * @param {Function} [success] A success callback.
     * @param {Function} [error] An error callback.
     */
    authInfo(success?: SuccessCallback<AuthInfoResult>, error?: ErrorCallback): Promise<AuthInfoResult>;
    /**
     * Make a request to the current {{site.bs}} JavaScript SDK instance.
     * @method request
     * @memberOf Everlive.prototype
     * @param {object} options Object used to configure the request.
     * @param {object} options.endpoint The endpoint of the {{site.bs}} JavaScript API relative to the App ID section. (For example, options.endpoint = MyType will make a request to the MyType type.)
     * @param {HttpMethod} [options.method] HTTP request method.
     * @param {object} [options.data] Data to be sent with the request.
     * @param {Function} [options.success] Success callback that will be called when the request finishes successfully.
     * @param {Function} [options.error] Error callback to be called in case of an error.
     * @param {object} [options.headers] Additional headers to be included in the request.
     * @param {Query|object} [options.filter] This is either a {@link Query} or a [filter](http://docs.telerik.com/platform/backend-services/rest/queries/queries-filtering) expression.
     * @param {boolean} [options.authHeaders=true] When set to false, no Authorization headers will be sent with the request.
     * @returns {function} The request configuration object containing the `send` function that sends the request.
     */
    request(options: RequestOptions): Request;
    /**
     * Sets the SDK to work in offline mode. Defaults to true.
     * @method offline
     * @memberOf Everlive.prototype
     * @param {boolean} [isOffline = true] Boolean parameter for setting the SDK to online or offline mode.
     */
    offline(isOffline?: boolean): void;
    /**
     * Sets the SDK to work in online mode. Defaults to true.
     * @method online
     * @memberOf Everlive.prototype
     * @param {boolean} [isOnline = true] Boolean parameter for setting the SDK to online or offline mode.
     */
    online(isOnline?: boolean): void;
    /**
     * Check if the SDK is in offline mode.
     * @method isOffline
     * @memberOf Everlive.prototype
     * @returns {boolean} Returns true if the SDK is in offline mode.
     */
    isOffline(): boolean;
    /**
     * Check if the SDK is in online mode.
     * @method isOnline
     * @memberOf Everlive.prototype
     * @returns {boolean} Returns true if the SDK is in online mode.
     */
    isOnline(): boolean;
    /**
     * Starts the synchronization procedure. Emits the 'syncStart' event when started and the 'syncEnd' event when the procedure finishes. 'syncEnd' contains information about the completed sync operation that you can use to find out how many items were synchronized.
     * @method sync
     * @memberOf Everlive.prototype
     */
    sync(): void;
    _isOfflineStorageEnabled(): boolean;
    /**
     * Creates a new {@link Data} class.
     * @memberOf Everlive.prototype
     * @instance
     * @param {String} collectionName The name of the collection to be used.
     * @returns {Data}
     */
    protected _getData<T extends Item>(collectionName: any): Data<T>;
    protected _getDataQueryBuilder(): DataQueryBuilder;
    protected _getSetup(options: any): Setup;
    protected _getUsers(): Users;
    protected _getAuthentication(): Authentication;
    protected _getPush(): Push;
    protected _getFiles(): Files;
    protected _getBusinessLogic(): BusinessLogic;
}
