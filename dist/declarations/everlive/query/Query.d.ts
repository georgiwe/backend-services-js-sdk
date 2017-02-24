import { Expression } from '../Expression';
import { Query as CommonQuery } from '../../common/query/Query';
export declare class Query extends CommonQuery {
    filter: any;
    fields: any;
    sort: any;
    toskip: any;
    totake: any;
    expandExpression: any;
    expr: Expression;
    aggregateExpression: any;
    /**
     * @class Query
     * @classdesc A query class used to describe a request that will be made to the {{site.TelerikBackendServices}} JavaScript API.
     * @param {object} [filter] A [filter expression](http://docs.telerik.com/platform/backend-services/rest/queries/queries-filtering) definition.
     * @param {object} [fields] A [fields expression](http://docs.telerik.com/platform/backend-services/rest/queries/queries-subset-fields) definition.
     * @param {object} [sort] A [sort expression](http://docs.telerik.com/platform/backend-services/rest/queries/queries-sorting) definition.
     * @param {number} [skip] Number of items to skip. Used for paging.
     * @param {number} [take] Number of items to take. Used for paging.
     * @param {object} [expand] An [expand expression](http://docs.telerik.com/platform/backend-services/rest/data/relations/relations-defining) definition.
     */
    constructor(filter?: any, fields?: any, sort?: any, skip?: any, take?: any, expand?: any);
    /** Applies a filter to the current query. This allows you to retrieve only a subset of the items based on various filtering criteria.
     * @memberOf Query.prototype
     * @method where
     * @name where
     * @param {object} filter A [filter expression](http://docs.telerik.com/platform/backend-services/rest/queries/queries-filtering) definition.
     * @returns {Query}
     */
    /** Defines a filter definition for the current query.
     * @memberOf Query.prototype
     * @method where
     * @name where
     * @returns {WhereQuery}
     */
    where(filter?: any): any;
    /** Applies a fields selection to the current query. This allows you to retrieve only a subset of all available item fields.
     * @memberOf Query.prototype
     * @method select
     * @param {object} fieldsExpression A [fields expression](http://docs.telerik.com/platform/backend-services/rest/queries/queries-subset-fields) definition.
     * @returns {Query}
     */
    select(...args: any[]): Query;
    /** Sorts the items in the current query in descending order by the specified field.
     * @memberOf Query.prototype
     * @method orderDesc
     * @param {string} field The field name to order by in descending order.
     * @returns {Query}
     */
    order(field: any): Query;
    /** Skips a certain number of items from the beginning before returning the rest of the items. Used for paging.
     * @memberOf Query.prototype
     * @method skip
     * @see [query.take]{@link query.take}
     * @param {number} value The number of items to skip.
     * @returns {Query}
     */
    orderDesc(field: any): Query;
    /** Takes a specified number of items from the query result. Used for paging.
     * @memberOf Query.prototype
     * @method take
     * @see [query.skip]{@link query.skip}
     * @param {number} value The number of items to take.
     * @returns {Query}
     */
    skip(value: any): Query;
    /** Sets an expand expression for the current query. This allows you to retrieve complex data sets using a single query based on relations between data types.
     * @memberOf Query.prototype
     * @method expand
     * @param {object} expandExpression An [expand expression](http://docs.telerik.com/platform/backend-services/rest/data/relations/relations-defining) definition.
     * @returns {Query}
     */
    take(value: any): Query;
    /** Builds an object containing the different expressions that will be sent to {{site.TelerikBackendServices}}. It basically translates any previously specified expressions into standard queries that {{site.bs}} can understand.
     * @memberOf Query.prototype
     * @method build
     * @returns {{$where,$select,$sort,$skip,$take,$expand}}
     */
    expand(expandExpression: any): Query;
    build(): {
        $where: any;
        $select: any;
        $sort: any;
        $skip: any;
        $take: any;
        $expand: any;
        $aggregate: any;
    };
    _simple(op: any, oprs: any): Query;
}
