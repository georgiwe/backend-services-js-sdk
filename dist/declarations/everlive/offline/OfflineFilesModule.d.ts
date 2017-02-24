import { Everlive } from '../Everlive';
/**
 * @class OfflineFilesModule
 * @classdesc A class that provides the means to operate with files in offline mode.
 * @protected
 */
export declare class OfflineFilesModule {
    private _offlineFilesProcessor;
    private _everlive;
    private _downloadsQueue;
    constructor(_offlineFilesProcessor: any, _everlive: Everlive, downloadsConcurrency: number | string);
    _getFilenameMetadata(location: any, offlineFileInfo: any): Promise<{}>;
    /**
     * Updates a file's content.
     * @memberof OfflineFilesModule.prototype
     * @method downloadOffline
     * @param {string} location A file location or the id of a file stored in Backend Services.
     * @param {boolean} overwrite Boolean option that indicates whether the file should be overwritten if it already exists offline.
     * @returns {Promise} The promise for the request
     */
    /**
     * Updates a file's content.
     * @memberof OfflineFilesModule.prototype
     * @method downloadOffline
     * @param {string} location A file location or the id of a file stored in Backend Services.
     * @param {boolean} overwrite Boolean option that indicates whether the file should be overwritten if it already exists offline.
     * @param {Function} [success] A success callback.
     * @param {Function} [error] An error callback.
     */
    downloadOffline(location: any, overwrite: any, success: any, error: any): Promise<{}>;
    _saveFile(location: any, filename: any, id: any, cacheKey: any): Promise<any>;
    /**
     * Physically deletes the offline copies of all files.
     * @memberof OfflineFilesModule.prototype
     * @method purgeAll
     * @returns {Promise} The promise for the request.
     */
    /**
     * Physically deletes the offline copies of all files.
     * @memberof OfflineFilesModule.prototype
     * @method purgeAll
     * @param {Function} [success] A success callback.
     * @param {Function} [error] An error callback.
     */
    purgeAll(success: any, error: any): Promise<{}>;
    _getOfflineLocation(fileInfo: any): any;
    _downloadFile(url: any, name: any): Promise<{}>;
    _sanitizeUrl(url: any): any;
    _getFileUrlForId(fileId: any, filename: any): any;
    /**
     * Checks if a file exists offline.
     * @memberof OfflineFilesModule.prototype
     * @method exists
     * @param {String} location The location or file id to check.
     * @returns {Promise} The promise for the request
     */
    /**
     * Checks if a file exists offline.
     * @memberof OfflineFilesModule.prototype
     * @method exists
     * @param {String} location The location or file id to check.
     * @param {Function} [success] A success callback.
     * @param {Function} [error] An error callback.
     */
    existsOffline(location: any, success?: any, error?: any): Promise<{}>;
    /**
     * Physically deletes the offline copy of a file.
     * @memberof OfflineFilesModule.prototype
     * @method purge
     * @param {String} location The location or file id to remove.
     * @returns {Promise} The promise for the request.
     */
    /**
     * Physically deletes the offline copy of a file.
     * @memberof OfflineFilesModule.prototype
     * @method purge
     * @param {String} location The location or file id to check.
     * @param {Function} [success] A success callback.
     * @param {Function} [error] An error callback.
     */
    purge(location: any, success: any, error: any): Promise<{}>;
    /**
     * Gets the native URL for a file that is stored offline.
     * @memberof OfflineFilesModule.prototype
     * @method getOfflineLocation
     * @param {String} location The location or file id to process.
     * @returns {Promise} The promise for the request
     */
    /**
     * Gets the native URL for a file that is stored offline.
     * @memberof OfflineFilesModule.prototype
     * @method getOfflineLocation
     * @param {String} location The location or file id to process.
     * @param {Function} [success] A success callback.
     * @param {Function} [error] An error callback.
     */
    getOfflineLocation(location: any, success?: any, error?: any): Promise<{}>;
    _getOfflineFileInfo(location: any): Promise<{}>;
    changeFileExtensionById(id: any, extension: any): any;
    _changeExtension(id: any, newExtension: any): any;
}
