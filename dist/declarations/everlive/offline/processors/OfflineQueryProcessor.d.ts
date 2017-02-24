import { Persister } from '../persisters/Persister';
import { CryptographicProvider } from '../../encryption/CryptographicProvider';
import { OfflineFilesProcessor } from '../OfflineFilesProcessor';
import { Everlive } from '../../Everlive';
export declare class OfflineQueryProcessor {
    persister: Persister;
    _encryptionProvider: CryptographicProvider;
    offlineFilesProcessor: OfflineFilesProcessor;
    everlive: Everlive;
    setup: any;
    constructor(persister: Persister, _encryptionProvider: CryptographicProvider, offlineFilesProcessor: OfflineFilesProcessor, everlive: Everlive, setup: any);
    processQuery(dataQuery: any): Promise<any>;
    _persistData(contentType: any, items?: any): void;
    _shouldAutogenerateIdForContentType(contentType: any): boolean;
    _getAllCollections(): Promise<any>;
    purgeAll(success: any, error: any): Promise<{}>;
    purge(contentType: any, success: any, error: any): Promise<{}>;
    purgeById(contentType: any, itemId: any): Promise<any>;
    checkSupportedQuery(dataQuery: any): {
        message: string;
        code: number;
    };
    _setItemDates(currentItem: any, itemToCreate: any, contentType: any): void;
    _transformPersistedData(contentType: any, contentTypeData: any): void;
    _overwriteFile(itemId: any, itemForUpdate: any, isSync: any): any;
    _getCreateResult(createdItems: any, returnFullItem: any): {
        result: any;
    };
    protected _prepareExpand(expand: any, dataQuery: any, isArray: any): Promise<{}>;
    protected _expandResult(prepareExpandResult: any, result: any): Promise<{}>;
    getDownloadUrlById(dataQuery: any): Promise<{
        result: {
            Uri: any;
        };
    }>;
    _transformOfflineResult(resultSet: any, count?: any, dataQuery?: any, additionalTransformations?: any): {
        result: any;
        count: any;
    };
    _applyTransformations(transformedResult: any, transformations: any): void;
    _getDirtyItems(collection: any): any;
    _getWithoutDeletedFilter(filter: any, checkNull?: boolean): {
        $and: any[];
    };
}
