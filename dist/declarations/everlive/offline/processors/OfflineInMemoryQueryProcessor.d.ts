import { Persister } from '../persisters/Persister';
import { CryptographicProvider } from '../../encryption/CryptographicProvider';
import { OfflineFilesProcessor } from '../OfflineFilesProcessor';
import { Everlive } from '../../Everlive';
import { OfflineQueryProcessor } from './OfflineQueryProcessor';
export declare class OfflineInMemoryQueryProcessor extends OfflineQueryProcessor {
    persister: Persister;
    _encryptionProvider: CryptographicProvider;
    offlineFilesProcessor: OfflineFilesProcessor;
    everlive: Everlive;
    setup: any;
    private _collectionCache;
    constructor(persister: Persister, _encryptionProvider: CryptographicProvider, offlineFilesProcessor: OfflineFilesProcessor, everlive: Everlive, setup: any);
    processQuery(dataQuery: any): Promise<any>;
    create(dataQuery: any): Promise<{
        result: any;
    }>;
    read(dataQuery: any, filter: any, sort: any, skip: any, limit: any, select: any, expand: any): Promise<{}>;
    _readInternal(collection: any, filter?: any, sort?: any, skip?: any, limit?: any, select?: any): any[];
    readById(dataQuery: any, expand: any): Promise<{
        result: any;
        count: any;
    }>;
    _getById(collection: any, id: any): any;
    _getUpdateItemsResult(updateItems: any): {
        ModifiedAt: any;
        result: any;
    };
    update(dataQuery: any, filter: any): Promise<{
        ModifiedAt: any;
        result: any;
    }>;
    remove(dataQuery: any, filter: any): Promise<{
        result: any;
        count: any;
    }>;
    count(dataQuery: any, filter: any): Promise<{}>;
    _mapCreateItem(currentItem: any, collection: any, isSync: any, preserveState: any, contentType: any): any;
    _createItems(contentType: any, items: any, isSync: any, preserveState: any): Promise<any[]>;
    _applyUpdateOperation(originalUpdateExpression: any, itemToUpdate: any, collection: any, isSync?: any, modifiedAt?: any): void;
    updateFileContent(dataQuery: any): Promise<any>;
    _updateItems(dataQuery: any, updateExpression: any, filter: any, isSync: any): Promise<any>;
    _getAllCollections(): Promise<{}>;
    _getCollection(contentType: any): Promise<{}>;
    _setItem(collection: any, item: any, state: any): void;
    _persistData(contentType: any, items?: any): Promise<{}>;
    _shouldAutogenerateIdForContentType(contentType: any): boolean;
    _clearItem(collection: any, item: any): void;
    _mapRemoveItem(itemToRemove: any, collection: any, isSync: any, collectionName: any): Promise<void>;
    _removeItems(dataQuery: any, filter: any, isSync: any): Promise<{
        result: any;
        count: any;
    }>;
    aggregate(dataQuery: any, queryParams: any): Promise<{
        result: any;
        count: any;
    }>;
    purgeAll(success: any, error: any): Promise<{}>;
    purge(contentType: any, success: any, error: any): Promise<{}>;
    purgeById(contentType: any, itemId: any): Promise<{}>;
}
