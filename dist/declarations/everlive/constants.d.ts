import { Constants as CommonConstants, DataQueryOperation } from '../common/Constants';
export { DataQueryOperation };
/**
 * Constants used by the SDK* @typedef {Object} Everlive.Constants
 */
export declare class Constants extends CommonConstants {
    static idField: string;
    static guidEmpty: string;
    static cloudFuncsEndpoint: string;
    static sqlProceduresEndpoint: string;
    static everliveUrl: string;
    static DataQueryOperation: typeof DataQueryOperation;
    /**
     * A class used to represent the conflict resolution strategies.
     * @property {string} ClientWins
     * @property {string} ServerWins
     * @property {string} Custom
     * @typedef {string} Everlive.Constants.ConflictResolutionStrategy
     */
    static ConflictResolutionStrategy: {
        ClientWins: string;
        ServerWins: string;
        Custom: string;
    };
    static ConflictResolution: {
        KeepServer: string;
        KeepClient: string;
        Custom: string;
        Skip: string;
    };
    /**
     * A class used to represent the available storage providers.
     * @property {string} LocalStorage
     * @property {string} FileSystem
     * @property {string} Custom
     * @typedef {string} Everlive.Constants.StorageProvider
     */
    static StorageProvider: {
        LocalStorage: string;
        FileSystem: string;
        SQLite: string;
        Custom: string;
    };
    static DefaultStoragePath: string;
    static DefaultFilesStoragePath: string;
    static DefaultFilesMetadataPath: string;
    static EncryptionProvider: {
        Default: string;
        Custom: string;
    };
    static Headers: {
        ContentType: string;
        filter: string;
        select: string;
        sort: string;
        skip: string;
        take: string;
        expand: string;
        singleField: string;
        includeCount: string;
        powerFields: string;
        debug: string;
        overrideSystemFields: string;
        sdk: string;
        sync: string;
        aggregate: string;
        customParameters: string;
    };
    static Platform: {
        WindowsPhone: number;
        Windows: number;
        Android: number;
        iOS: number;
        OSX: number;
        Blackberry: number;
        Nokia: number;
        Unknown: number;
    };
    static OperatorType: {
        query: number;
        where: number;
        filter: number;
        and: number;
        or: number;
        not: number;
        equal: number;
        not_equal: number;
        lt: number;
        lte: number;
        gt: number;
        gte: number;
        isin: number;
        notin: number;
        all: number;
        size: number;
        regex: number;
        contains: number;
        startsWith: number;
        endsWith: number;
        nearShpere: number;
        withinBox: number;
        withinPolygon: number;
        withinShpere: number;
        select: number;
        exclude: number;
        order: number;
        order_desc: number;
        skip: number;
        take: number;
        expand: number;
    };
    /**
     * A class used to represent the current authentication status of the {{site.TelerikBackendServices}} JavaScript SDK instance.
     * @property {string} unauthenticated Indicates that no user is authenticated.
     * @property {string} masterKey Indicates that a master key authentication is used.
     * @property {string} invalidAuthentication Indicates an authentication has been attempted, but it was invalid.
     * @property {string} authenticated Indicates that a user is authenticated.
     * @property {string} authenticating Indicates that a user is currently authenticating. Some requests might be pending and waiting for the user to authenticate.
     * @property {string} expiredAuthentication Indicates that a user's authentication has expired and that the user must log back in.
     * @typedef {string} Everlive.AuthStatus
     */
    static AuthStatus: {
        unauthenticated: string;
        masterKey: string;
        invalidAuthentication: string;
        authenticated: string;
        expiredAuthentication: string;
        authenticating: string;
    };
    static offlineItemStates: {
        created: string;
        modified: string;
        deleted: string;
    };
    /**
     * HTTP Methods
     * @typedef {string} constants.HttpMethod
     * @property {string} GET
     * @property {string} POST
     * @property {string} PUT
     * @property {string} DELETE
     */
    static HttpMethod: {
        GET: string;
        POST: string;
        PUT: string;
        DELETE: string;
    };
    static maxDistanceConsts: {
        radians: string;
        km: string;
        miles: string;
    };
    static radiusConsts: {
        radians: string;
        km: string;
        miles: string;
    };
    static offlineItemsStateMarker: string;
    static SyncErrors: {
        generalError: string;
        itemSyncError: string;
    };
    static syncBatchSize: number;
    static AuthStoreKey: string;
    static CachingStoreKey: string;
    static defaultSyncInterval: number;
    static fileUploadKey: string;
    static fileUploadDelimiter: string;
    static FilesTypeNameLegacy: string;
    static FilesTypeName: string;
    static MaxConcurrentDownloadTasks: number;
    static DefaultFilesystemStorageQuota: number;
    static Events: {
        SyncStart: string;
        SyncEnd: string;
        Processed: string;
        ItemProcessed: string;
        BeforeExecute: string;
    };
    static Aggregation: {
        MaxDocumentsCount: number;
    };
    static Push: {
        NotificationsType: string;
        DevicesType: string;
    };
    static EncodableHeaders: string[];
    static SqliteTypes: {
        Text: string;
        Number: string;
        Float: string;
    };
    static SqliteUnsupportedTypes: {
        ARRAY: string;
        OBJECT: string;
        DATE: string;
        BOOLEAN: string;
        NULL: string;
    };
}
