import { OfflineQueryProcessor } from './OfflineQueryProcessor';
export declare class OfflineSQLiteQueryProcessor extends OfflineQueryProcessor {
    processQuery(dataQuery: any): any;
    update(dataQuery: any, filter: any): any;
    updateFileContent(dataQuery: any): Promise<any>;
    _getById(typeName: any, itemId: any): Promise<{}>;
    _updateItems(dataQuery: any, updateExpression: any, filter: any, isSync: any): any;
    _getUpdatePromise(collectionName: any, updateExpression: any, filter: any, isSync?: any, modifiedAt?: any): Promise<number>;
    _applyUpdateOperation(contentType: any, originalUpdateExpression: any, filter: any, state: any, isSync?: any, modifiedAt?: any): Promise<{}>;
    readById(dataQuery: any, expand: any): Promise<{
        result: any;
        count: any;
    }>;
    remove(dataQuery: any, filter: any): Promise<{
        result: any;
        count: any;
    }>;
    _purgeFiles(filter: any, success: any, error: any): void;
    _removeItems(dataQuery: any, filter: any, isSync: any): Promise<{
        result: any;
        count: any;
    }>;
    count(dataQuery: any, filter: any): Promise<{}>;
    _persistData(contentType: any, items?: any): Promise<{}>;
    read(dataQuery: any, filter: any, sort: any, skip: any, limit: any, select: any, expand: any): Promise<any>;
    private static _validateSelectMode(select);
    private static _handleIdInSelect(select);
    _readInternal(tableName: any, filter?: any, sort?: any, skip?: any, limit?: any, select?: any, expand?: any): Promise<{}>;
    create(dataQuery: any): Promise<{
        result: any;
    }>;
    _createItems(contentType: any, items: any, isSync: any, preserveState: any): Promise<any[]>;
    _getAllCollections(): Promise<{}>;
}
