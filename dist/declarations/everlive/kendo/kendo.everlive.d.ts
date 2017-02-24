import { Sdk } from '../../common/Sdk';
/**
 * Creates a new Kendo UI [DataSource](http://docs.telerik.com/kendo-ui/api/javascript/data/datasource) that manages a certain Backend Services content type.
 * Kendo UI [DataSource](http://docs.telerik.com/kendo-ui/api/javascript/data/datasource) is used in conjunction with other Kendo UI widgets (such as [ListView](http://docs.telerik.com/kendo-ui/web/listview/overview) and [Grid](http://docs.telerik.com/kendo-ui/web/grid/overview)) to provide an easy way to render data from Backend Services.
 * *including Kendo UI scripts is required*.
 * @param options data source options. See the Kendo UI documentation for [DataSource](http://docs.telerik.com/kendo-ui/api/javascript/data/datasource) for more information.
 * @param options.transport.typeName The content type name in Backend Services that will be managed.
 * @returns {DataSource} A new instance of Kendo UI DataSource. See the Kendo UI documentation for [DataSource](http://docs.telerik.com/kendo-ui/api/javascript/data/datasource) for more information.
 * @example ```js
 * var booksDataSource = Everlive.createDataSource({
     *   transport: {
     *     typeName: 'Books'
     *   }
     * });
 * ```
 */
declare var createDataSource: (options?: any) => any;
/**
 * Creates a new Kendo UI [HierarchicalDataSource](http://docs.telerik.com/kendo-ui/api/javascript/data/hierarchicaldatasource) that manages a certain Backend Services content type and can expand a chain of relations.
 * Kendo UI [HierarchicalDataSource](http://docs.telerik.com/kendo-ui/api/javascript/data/hierarchicaldatasource) is used in conjunction with other Kendo UI widgets (such as [TreeView](http://docs.telerik.com/kendo-ui/web/treeview/overview)) to render data from Backend Services in a structured way.
 * The chain of relations is defined by specifying the field names that contain the relation on each level. For example a generic hierarchy chain is a content type 'Continents' with relation to 'Countries', which in turn contains a relation to 'Towns'.
 * *including Kendo UI scripts is required*.
 * @param options data source Options for [HierarchicalDataSource](http://docs.telerik.com/kendo-ui/api/javascript/data/hierarchicaldatasource).
 * @param options.typeName Name of the main content type for the data source.
 * @param {ExpandDefinition[]} options.expand An array of expand definitions. It defines the levels of hierarchy by specifying the relation fields. An expand definition can either be the field name as a **string**, or an **object** that allows additional options.
 * @param {string} ExpandDefinition - The field name of the relation that will be expanded. Only supported in online mode.
 * @param {string} ExpandDefinition.relation - *Required*. The field name of the relation that will be expanded.
 * @param {string} ExpandDefinition.typeName - *Required in offline mode*. The type name of the relation that will be expanded.
 * @param {object} ExpandDefinition.filter - An object specifying the filter expression.
 * @param {object} ExpandDefinition.sort - An object specifying the sort expression.
 * @param {object} ExpandDefinition.skip - A number specifying the skip value.
 * @param {object} ExpandDefinition.take - A number specifying the take value.
 * @param {object} ExpandDefinition.fields - An object specifying the fields expression.
 * @returns {HierarchicalDataSource} A new instance of Kendo UI HierarchicalDataSource. See the Kendo UI documentation for [HierarchicalDataSource](http://docs.telerik.com/kendo-ui/api/javascript/data/hierarchicaldatasource).
 * @example ```js
 * var el = new Everlive('your-api-key-here');
 * var continents = Everlive.createHierarchicalDataSource({
 *   'typeName': 'Continents',
 *   'expand': ['Countries', 'Towns']
 * });
 *
 * ...
 * ('#treeview').kendoTreeView({
 *   dataSource: continents,
 *   dataTextField: ['ContinentName', 'CountryName', 'TownName']
 * });
 * ```
 */
declare var createHierarchicalDataSource: (options?: any) => any;
declare class KendoSdk extends Sdk {
    /**
     * Get a Kendo UI DataSource that is attached to the current instance of the SDK with default options.
     * @method getKendoDataSource
     * @memberOf Everlive.prototype
     * @param {String} typeName The corresponding type name for the DataSource.
     * @param {Object} [options] Additional DataSource options.
     * @returns {DataSource}
     */
    getKendoDataSource(typeName: string, options?: any): any;
    /**
     * Get a Kendo UI HierarchicalDataSource that is attached to the current instance of the SDK with default options.
     * @method getHierarchicalDataSource
     * @memberOf Everlive.prototype
     * @param {String} typeName The corresponding type name for the DataSource.
     * @param {Object} [dataSourceOptions] Additional DataSource options that describe the hierarchical structure.
     * @returns {HierarchicalDataSource}
     */
    getHierarchicalDataSource(typeName: string, dataSourceOptions?: any): any;
    createDataSource(options?: any): any;
    createHierarchicalDataSource(options?: any): any;
}
export { KendoSdk, createDataSource, createHierarchicalDataSource };
