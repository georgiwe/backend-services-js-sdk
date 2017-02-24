import { DataQueryOperation } from '../constants';
import { DataQuery as CommonDataQuery } from '../../common/dataQuery/DataQuery';
import CommonData from '../../common/Data';
import { Everlive } from '../Everlive';
import { OfflineStorageModule } from '../offline/OfflineStorageModule';
import { MultipleResult } from '../interfaces/MultipleResult';
import { SuccessCallback } from '../interfaces/SuccessCallback';
import { ErrorCallback } from '../interfaces/ErrorCallback';
import { Item } from '../interfaces/Item';
import { SingleResult } from '../interfaces/SingleResult';
import { CreateItemResult } from '../interfaces/CreateItemResult';
import { UpdateItemResult } from '../interfaces/UpdateItemResult';
import { SaveItemResult } from '../interfaces/SaveItemResult';
import { Setup } from '../Setup';
/**
 * @class Data
 * @classdesc A class that provides methods for all CRUD operations to a given {{site.bs}} data type. Covers advanced scenarios with custom headers and special server-side functionality.
 * @param {object} collectionName
 * @param {object} sdk
 * @protected
 */
export declare class Data<T extends Item> extends CommonData {
    collectionName: string;
    setup: Setup;
    options: any;
    sdk: Everlive;
    constructor(sdk: Everlive, collectionName: string);
    readonly offlineStorage: OfflineStorageModule;
    private _isOnline();
    private _getOfflineCreateData(query, requestResponse);
    private _destroy(attrs, filterOrQuery, single, success, error);
    private _setOption(key, value);
    private _update(attrs, filterOrQuery, single, replace, success, error);
    private _invalidIdErrorResponse(errorHandler);
    applyQueryOffline(query: any, requestResponse: any): Promise<any>;
    /**
     * Modifies whether the query should be invoked on the offline storage.
     * @memberOf Data.prototype
     * @method useOffline
     * @name useOffline
     * @param {boolean} useOffline
     * @returns {Data} Returns the same instance of the Data object.
     */
    useOffline(useOffline: boolean): this;
    /**
     * Does not use the cache when retrieving the data.
     * Only valid when caching is enabled.
     * @memberOf Data.prototype
     * @method ignoreCache
     * @name ignoreCache
     * @returns {Data}
     * */
    ignoreCache(): this;
    /**
     * Forces the request to get the data from the cache even if the data is already expired.
     * Only valid when caching is enabled.
     * @memberOf Data.prototype
     * @method forceCache
     * @name forceCache
     * @returns {Data}
     * */
    forceCache(): this;
    /**
     * Sets cache expiration specifically for the current query.
     * Only valid when caching is enabled.
     * @memberOf Data.prototype
     * @method maxAge
     * @name maxAge
     * @param maxAgeInMinutes {Number}
     * @returns {Data}
     * */
    maxAge(maxAgeInMinutes: number): this;
    isSync(isSync: boolean): this;
    /**
     * Modifies whether the query should try to authenticate if the security token has expired.
     * Default is false.
     * Only valid when the authentication module has an onAuthenticationRequired function.
     * @memberOf Data.prototype
     * @method skipAuth
     * @param skipAuth {Boolean}
     * @returns {Data}
     * */
    skipAuth(skipAuth: boolean): this;
    /**
     * Modifies whether the query should be applied offline, if the sdk is currently working online.
     * Default is true.
     * Only valid when offlineStorage is enabled.
     * @memberOf Data.prototype
     * @method applyOffline
     * @param applyOffline {Boolean} Whether the operation should be applied offline or not
     * @returns {Data}
     * */
    applyOffline(applyOffline: boolean): this;
    /**
     * Sets additional non-standard HTTP headers in the current data request. See [List of Request Parameters](http://docs.telerik.com/platform/backend-services/rest/apireference/RESTfulAPI/custom_headers) for more information.
     * @memberOf Data.prototype
     * @method withHeaders
     * @param {object} headers Additional headers to be sent with the data request.
     * @returns {Data}
     */
    withHeaders(headers: any): this;
    /**
     * Sets an expand expression to be used in the data request. This allows you to retrieve complex data sets using a single query based on relations between data types.
     * @memberOf Data.prototype
     * @method expand
     * @param {object} expandExpression An [expand expression](http://docs.telerik.com/platform/backend-services/rest/data/relations/relations-defining) definition.
     * @returns {Data}
     */
    expand(expandExpression: any): this;
    buildDataQuery(data: any, op: DataQueryOperation): CommonDataQuery;
    /**
     * Gets all data items that match the filter. This allows you to retrieve a subset of the items based on various filtering criteria.
     * @memberOf Data.prototype
     * @method get
     * @name get
     * @param {object|null} filter A [filter expression](http://docs.telerik.com/platform/backend-services/rest/queries/queries-filtering) definition.
     * @returns {Promise} The promise for the request.
     */
    /**
     * Gets all data items that match the filter. This allows you to retrieve a subset of the items based on various filtering criteria.
     * @memberOf Data.prototype
     * @method get
     * @name get
     * @param {object|null} query A [filter expression](http://docs.telerik.com/platform/backend-services/rest/queries/queries-filtering) definition.
     * @param {Function} [success] A success callback.
     * @param {Function} [error] An error callback.
     */
    get(query?: any, success?: SuccessCallback<MultipleResult<T>>, error?: ErrorCallback): Promise<MultipleResult<T>>;
    /**
     * Gets a data item by ID.
     * @memberOf Data.prototype
     * @method getById
     * @name getById
     * @param {string} id ID of the item.
     * @returns {Promise} The promise for the request.
     */
    /**
     * Gets an item by ID.
     * @memberOf Data.prototype
     * @method getById
     * @name getById
     * @param {string} id ID of the item.
     * @param {Function} [success] A success callback.
     * @param {Function} [error] An error callback.
     * */
    getById(id: string, success?: SuccessCallback<MultipleResult<T>>, error?: ErrorCallback): Promise<SingleResult<T>>;
    /**
     *  A fluent API aggregation / grouping data from server. Can accept aggregationExpression or fluent chaining rules.
     * @memberOf Data.prototype
     * @method aggregate
     * @name aggregate
     * @param {object} aggregateQuery fields / Aggregation functions [aggregationExpression].
     * @returns {Promise} The promise for the request.
     */
    /**
     *  A fluent API aggregation / grouping data from server. Can accept aggregationExpression or fluent chaining rules.
     * @memberOf Data.prototype
     * @method aggregate
     * @name aggregate
     * @param {object} aggregateQuery fields / Aggregation functions [aggregationExpression].
     * @param {Function} [success] A success callback.
     * @param {Function} [error] An error callback.
     * */
    aggregate(aggregateQuery: any, success?: SuccessCallback<any[]>, error?: ErrorCallback): Promise<{}>;
    /**
     * Gets the count of the data items that match the filter.
     * @memberOf Data.prototype
     * @method count
     * @name count
     * @param {object|null} filter A [filter expression](http://docs.telerik.com/platform/backend-services/rest/queries/queries-filtering) definition.
     * @returns {Promise} The promise for the request.
     */
    /**
     * Gets the count of the items that match the filter.
     * @memberOf Data.prototype
     * @method count
     * @name count
     * @param {object|null} filter A [filter expression](http://docs.telerik.com/platform/backend-services/rest/queries/queries-filtering) definition.
     * @param {Function} [success] A success callback.
     * @param {Function} [error] An error callback.
     */
    count(filter: any, success?: SuccessCallback<SingleResult<number>>, error?: ErrorCallback): Promise<SingleResult<number>>;
    /**
     * Creates a data item.
     * @memberOf Data.prototype
     * @method create
     * @name create
     * @param {object|object[]} data Item or items that will be created.
     * @returns {Promise} The promise for the request.
     */
    /**
     * Creates an item.
     * @memberOf Data.prototype
     * @method create
     * @name create
     * @param {object|object[]} data The item or items that will be created.
     * @param {Function} [success] A success callback.
     * @param {Function} [error] An error callback.
     */
    create(data: any, success?: SuccessCallback<CreateItemResult>, error?: ErrorCallback): Promise<CreateItemResult>;
    /**
     * Updates all objects that match a filter with the specified update expression.
     * @memberOf Data.prototype
     * @method rawUpdate
     * @name rawUpdate
     * @param {object} updateObject Update object that contains the new values.
     * @param {object|null} filter A [filter expression](http://docs.telerik.com/platform/backend-services/rest/queries/queries-filtering) definition.
     * @returns {Promise} The promise for the request.
     */
    /**
     * Updates all objects that match a filter with the specified update expression.
     * @memberOf Data.prototype
     * @method rawUpdate
     * @name rawUpdate
     * @param {object} updateObject Update object that contains the new values.
     * @param {object|null} filter A [filter expression](http://docs.telerik.com/platform/backend-services/rest/queries/queries-filtering) definition.
     * @param {Function} [success] A success callback.
     * @param {Function} [error] An error callback.
     */
    /**
     * Updates an object by ID with the specified update expression.
     * @memberOf Data.prototype
     * @method rawUpdate
     * @name rawUpdate
     * @param {object} updateObject Updated object that contains the new values.
     * @param {string} filterOrId The ID of the item.
     * @returns {Promise} The promise for the request.
     */
    /**
     * Updates an object by ID with the specified update expression.
     * @memberOf Data.prototype
     * @method rawUpdate
     * @name rawUpdate
     * @param {object} updateObject Updated object that contains the new values.
     * @param {string} filterOrId The ID of the item.
     * @param {Function} [success] A success callback.
     * @param {Function} [error] An error callback.
     */
    rawUpdate(updateObject: any, filterOrId: any | string, success?: SuccessCallback<UpdateItemResult>, error?: ErrorCallback): Promise<UpdateItemResult>;
    /**
     * Updates a single data item. This operation takes an object that specifies both the data item to be updated and the updated values.
     * @memberOf Data.prototype
     * @method updateSingle
     * @name updateSingle
     * @param item {object} The item that will be updated. Note: the ID property of the item will be used to determine which item will be updated.
     * @returns {Promise} The promise for the request.
     */
    /**
     * Updates the provided item.
     * @memberOf Data.prototype
     * @method updateSingle
     * @name updateSingle
     * @param item {object} The item that will be updated. Note: the ID property of the item will be used to determine which item will be updated.
     * @param {Function} [success] A success callback.
     * @param {Function} [error] An error callback.
     */
    updateSingle(item: T | {
        Id: string | number;
    }, success?: SuccessCallback<UpdateItemResult>, error?: ErrorCallback): Promise<UpdateItemResult>;
    /**
     * Updates all items that match a filter with the specified update object.
     * @memberOf Data.prototype
     * @method update
     * @name update
     * @param {object} updateObject The update object.
     * @param {object|null} filter A [filter expression](http://docs.telerik.com/platform/backend-services/rest/queries/queries-filtering) definition.
     * @returns {Promise} The promise for the request.
     */
    /**
     * Updates all items that match the filter with the specified update object.
     * @memberOf Data.prototype
     * @method update
     * @name update
     * @param {object} updateObject The update object.
     * @param {object|null} filter A [filter expression](http://docs.telerik.com/platform/backend-services/rest/queries/queries-filtering) definition.
     * @param {Function} [success] A success callback.
     * @param {Function} [error] An error callback.
     */
    update(updateObject: any, filter: any, success?: SuccessCallback<UpdateItemResult>, error?: ErrorCallback): Promise<UpdateItemResult>;
    /**
     * Deletes a single data item by ID.
     * @memberOf Data.prototype
     * @method destroySingle
     * @name destroySingle
     * @param {string} itemId The ID of the item to delete.
     * @returns {Promise} The promise for the request.
     */
    /**
     * Deletes a single data item by ID.
     * @memberOf Data.prototype
     * @method destroySingle
     * @name destroySingle
     * @param {string} itemId The ID of the item to delete.
     * @param {Function} [success] A success callback.
     * @param {Function} [error] An error callback.
     */
    /**
     * Deletes a single data item by ID.
     * @memberOf Data.prototype
     * @method destroySingle
     * @name destroySingle
     * @param {object} item Object containing the item ID to be deleted.
     * @returns {Promise} The promise for the request.
     */
    /**
     * Deletes a single data item by ID.
     * @memberOf Data.prototype
     * @method destroySingle
     * @name destroySingle
     * @param {object} model Object containing the item ID to be deleted.
     * @param {Function} [success] A success callback.
     * @param {Function} [error] An error callback.
     */
    destroySingle(model: any, success?: SuccessCallback<SingleResult<number>>, error?: ErrorCallback): Promise<SingleResult<number>>;
    /**
     * Deletes all data items that match a filter.
     * @memberOf Data.prototype
     * @method destroy
     * @name destroy
     * @param {object|null} filter A [filter expression](http://docs.telerik.com/platform/backend-services/rest/queries/queries-filtering) definition.
     * @returns {Promise} The promise for the request.
     */
    /**
     * Deletes all items that match the filter.
     * @memberOf Data.prototype
     * @method destroy
     * @name destroy
     * @param {object|null} filter A [filter expression](http://docs.telerik.com/platform/backend-services/rest/queries/queries-filtering) definition.
     * @param {Function} [success] A success callback.
     * @param {Function} [error] An error callback.
     */
    destroy(filter: any, success?: SuccessCallback<SingleResult<T>>, error?: ErrorCallback): Promise<SingleResult<number>>;
    /**
     * Sets the Access Control List (ACL) of a specified data item.
     * @memberOf Data.prototype
     * @method setAcl
     * @name setAcl
     * @param {object} acl The acl object.
     * @param {object} item The item whose ACL will be updated. Note: the ID property of the item will be used to determine which item will be updated.
     * @returns {Promise} The promise for the request.
     */
    /**
     * Sets the Access Control List (ACL) of a specified data item.
     * @memberOf Data.prototype
     * @method setAcl
     * @name setAcl
     * @param {object} acl The acl object.
     * @param {string} filter The ID of the item.
     * @returns {Promise} The promise for the request.
     */
    /**
     * Sets the Access Control List (ACL) of an item with a specified ID.
     * @memberOf Data.prototype
     * @method setAcl
     * @name setAcl
     * @param {object} acl The acl object.
     * @param {string} filter The ID of the item or item.
     * @param {Function} [success] A success callback.
     * @param {Function} [error] An error callback.
     */
    setAcl(acl: any, id: string, success?: SuccessCallback<SingleResult<number>>, error?: ErrorCallback): Promise<SingleResult<number>>;
    setAcl(acl: any, id: number, success?: SuccessCallback<SingleResult<number>>, error?: ErrorCallback): Promise<SingleResult<number>>;
    setAcl(acl: any, item: T, success?: SuccessCallback<SingleResult<number>>, error?: ErrorCallback): Promise<SingleResult<number>>;
    /**
     * Sets the owner of the specified data item.
     * @memberOf Data.prototype
     * @method setOwner
     * @name setOwner
     * @param {string} acl The new owner ID.
     * @param {object} item The item whose owner will be updated. Note: the ID property of the item will be used to determine which item will be updated.
     * @returns {Promise} The promise for the request.
     */
    /**
     * Sets the owner of the specified data item.
     * @memberOf Data.prototype
     * @method setOwner
     * @name setOwner
     * @param {string} ownerId The new owner ID.
     * @param {string} id The ID of the item.
     * @returns {Promise} The promise for the request.
     */
    /**
     * Sets the owner of the specified data item.
     * @memberOf Data.prototype
     * @method setOwner
     * @name setOwner
     * @param {string} ownerId The new owner ID.
     * @param {string} filter The ID of the item or item.
     * @param {Function} [success] A success callback.
     * @param {Function} [error] An error callback.
     */
    setOwner(ownerId: string, itemId: string, success?: SuccessCallback<SingleResult<number>>, error?: ErrorCallback): Promise<SingleResult<number>>;
    setOwner(ownerId: string, itemId: number, success?: SuccessCallback<SingleResult<number>>, error?: ErrorCallback): Promise<SingleResult<number>>;
    setOwner(ownerId: string, item: T, success?: SuccessCallback<SingleResult<number>>, error?: ErrorCallback): Promise<SingleResult<number>>;
    /**
     * Saves the provided data item. This operation will create or update the item depending on whether it is new or existing.
     * @memberOf Data.prototype
     * @method save
     * @name save
     * @param {object} item An object containing the item that is being saved.
     * @returns {Promise} The promise for the request.
     */
    /**
     * Saves the provided data item. This operation will create or update the item depending on whether it is new or existing.
     * @memberOf Data.prototype
     * @method save
     * @name save
     * @param {object} model An object containing the item that is being saved.
     * @param {Function} [success] A success callback.
     * @param {Function} [error] An error callback.
     */
    save(model: any, success?: SuccessCallback<SaveItemResult>, error?: ErrorCallback): Promise<SaveItemResult>;
    /**
     * Checks if the specified data item is new or not.
     * @memberOf Data.prototype
     * @method isNew
     * @param model Item to check.
     * @returns {boolean}
     */
    isNew(model: any): boolean;
}
