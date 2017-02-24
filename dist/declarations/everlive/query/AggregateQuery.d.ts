import { Query } from '../query/Query';
export interface AggregateExpression {
    GroupBy: any[];
    Aggregate: any;
}
/**
 * @class AggregateQuery
 * @classdesc A query class used to describe a aggregation request that will be made to the {{site.TelerikBackendServices}} JavaScript API. Inherits from Query.
 */
export declare class AggregateQuery extends Query {
    aggregateExpression: AggregateExpression;
    constructor(filter?: any, fields?: any, sort?: any, skip?: any, take?: any, expand?: any, aggregateExpressionParam?: any);
    _aggregateFunc(funcName: any, fieldName: any, destName: any): AggregateQuery;
    /** Applies a groupBy to the current query. This allows you to group results by
     * @memberOf AggregateQuery.prototype
     * @method groupBy
     * @name groupBy
     * @param {String} field to group by
     * @param {Array} array of strings with fields to group by
     * @returns {AggregateQuery}
     */
    groupBy(data: any): this;
    /** Adds aggregation function 'avg' (average) to the current query. Could set [resultFieldName]
     * @memberOf AggregateQuery.prototype
     * @method avg
     * @name avg
     * @param {String} field to apply aggregate function on
     * @param {String} [resultFieldName] (Optional) Name of resulting field
     * @returns {AggregateQuery}
     */
    avg(...args: any[]): any;
    /** Adds aggregation function 'count' to the current query. Could set [resultFieldName]
     * @memberOf AggregateQuery.prototype
     * @method count
     * @name count
     * @param {String} field to apply aggregate function on
     * @param {String} [resultFieldName] (Optional) Name of resulting field
     * @returns {AggregateQuery}
     */
    count(resultFieldName: any): AggregateQuery;
    /** Adds aggregation function 'max' to the current query. Could set [resultFieldName]
     * @memberOf AggregateQuery.prototype
     * @method max
     * @name max
     * @param {String} field to apply aggregate function on
     * @param {String} [resultFieldName] (Optional) Name of resulting field
     * @returns {AggregateQuery}
     */
    max(...args: any[]): any;
    /** Adds aggregation function 'min' to the current query. Could set [resultFieldName]
     * @memberOf AggregateQuery.prototype
     * @method min
     * @name min
     * @param {String} field to apply aggregate function on
     * @param {String} [resultFieldName] (Optional) Name of resulting field
     * @returns {AggregateQuery}
     */
    min(...args: any[]): any;
    /** Adds aggregation function 'sum' to the current query. Could set [resultFieldName]
     * @memberOf AggregateQuery.prototype
     * @method sum
     * @name sum
     * @param {String} field to apply aggregate function on
     * @param {String} [resultFieldName] (Optional) Name of resulting field
     * @returns {AggregateQuery}
     */
    sum(...args: any[]): any;
    average(...args: any[]): any;
    private static throwNotSupportedException(operationName);
    skip(): never;
    take(): never;
    select(): never;
    order(): never;
}
