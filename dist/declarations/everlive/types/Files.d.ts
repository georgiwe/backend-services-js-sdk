import { SingleResult } from "../interfaces/SingleResult";
import { File } from '../interfaces/File';
import { Data } from '../types/Data';
import { FileContent } from "../interfaces/FileContent";
import { SuccessCallback } from "../interfaces/SuccessCallback";
import { ErrorCallback } from "../interfaces/ErrorCallback";
import { CordovaFileUploadOptions } from "../interfaces/CordovaFileUploadOptions";
import { CordovaFileEntry } from "../interfaces/CordovaFileEntry";
export declare class Files extends Data<File> {
    /**
     * @class Files
     * @protected
     * @extends Data
     */
    constructor(sdk: any);
    /**
     * Get a URL that can be used as an endpoint for uploading a file. It is specific to each {{site.TelerikBackendServices}} app.
     * @memberof Files.prototype
     * @method getUploadUrl
     * @returns {string}
     */
    getUploadUrl(): string;
    /**
     * Get the download URL for a file.
     * @memberof Files.prototype
     * @method getDownloadUrl
     * @deprecated
     * @see [files.getDownloadUrlById]{@link ../Files/files.getDownloadUrlById}
     * @param {string} fileId The ID of the file.
     * @returns {string} url The download URL.
     */
    getDownloadUrl(fileId: string): string;
    /**
     * Get a URL that can be used as an endpoint for updating the file content. It is specific to each {{site.TelerikBackendServices}} app.
     * @memberof Files.prototype
     * @method getUpdateUrl
     * @param {string} fileId The ID of the file.
     * @returns {string} url The update URL.
     */
    getUpdateUrl(fileId: string): string;
    /**
     * Updates a file's content
     * @memberof Files.prototype
     * @method updateContent
     * @param {string} fileId File ID.
     * @param {Object} file The file metadata and the base64 encoded file content.
     * @param {Function} [success] A success callback.
     * @param {Function} [error] An error callback.
     * @returns {Promise} The promise for the request
     */
    updateContent(fileId: string, file: FileContent, success?: SuccessCallback<SingleResult<number>>, error?: ErrorCallback): Promise<SingleResult<number>>;
    /**
     * Gets the download URL for a file by ID.
     * @memberof Files.prototype
     * @method getDownloadUrlById
     * @param {string} fileId File ID.
     * @returns {Promise} The promise for the request
     */
    /**
     * Gets the download URL for a file by ID.
     * @memberof Files.prototype
     * @method getDownloadUrlById
     * @see [files.getDownloadUrlById]{@link ../Files/files.getDownloadUrlById}
     * @param {string} fileId File ID.
     * @param {Function} [success] A success callback.
     * @param {Function} [error] An error callback.
     */
    getDownloadUrlById(fileId: string, success?: SuccessCallback<string>, error?: ErrorCallback): Promise<string>;
    /**
     * Downloads a file to the device's file system. Wraps the Apache Cordova "download()" [FileTransfer](http://cordova.apache.org/docs/en/2.7.0/cordova_file_file.md.html#FileTransfer) method. Note that the signatures of these methods differ.
     * @memberof Files.prototype
     * @method download
     * @param {string} fileId A Backend Services File ID.
     * @param {string} localPath An Apache Cordova FileSystem URL representing the local path on the device where the downloaded file will be saved. Maps to the "target" FileTransfer plugin parameter.
     * @param {object} [options] Additional request options. Maps to the "options" FileTransfer plugin parameter.
     * @param {object} [options.headers] A JSON object containing headers to send along with the request.
     * @param {boolean} [trustAllHosts=false] Whether to accept all security certificates including self-signed certificates. Maps to the "trustAllHosts" FileTransfer plugin parameter.
     * @returns {Promise} The promise for the request.
     */
    /**
     * Downloads a file to the device's file system. Wraps the Apache Cordova "download()" [FileTransfer](http://cordova.apache.org/docs/en/2.7.0/cordova_file_file.md.html#FileTransfer) method. Note that the signatures of these methods differ.
     * @memberof Files.prototype
     * @method download
     * @param {string} fileId A Backend Services File ID.
     * @param {string} localPath An Apache Cordova FileSystem URL representing the local path on the device where the downloaded file will be saved. Maps to the "target" FileTransfer plugin parameter.
     * @param {object} [options] Additional request options. Maps to the "options" FileTransfer plugin parameter.
     * @param {object} [options.headers] A JSON object containing headers to send along with the request.
     * @param {boolean} [trustAllHosts=false] Whether to accept all security certificates including self-signed certificates. Maps to the "trustAllHosts" FileTransfer plugin parameter.
     * @param {Function} [success] A success callback that is passed an Apache Cordova [FileEntry](https://cordova.apache.org/docs/en/3.3.0/cordova_file_file.md.html#FileEntry) object. Maps to the "successCallback" FileTransfer plugin parameter.
     * @param {Function} [error] An error callback that is passed an Apache Cordova [FileTransferError](https://github.com/apache/cordova-plugin-file-transfer#filetransfererror) object. Maps to the "errorCallback" FileTransfer plugin parameter.
     */
    download(fileId: string, localPath: string, options?: {
        headers?: any;
    }, trustAllHosts?: boolean, success?: SuccessCallback<CordovaFileEntry>, error?: ErrorCallback): Promise<CordovaFileEntry>;
    /**
     * Uploads a file from the device's file system to Backend Services. Wraps the Apache Cordova "upload()" [FileTransfer](http://cordova.apache.org/docs/en/2.7.0/cordova_file_file.md.html#FileTransfer) method. Note that the signatures of these methods differ.
     * @memberof Files.prototype
     * @method upload
     * @param {string} localPath An Apache Cordova FileSystem URL representing the full path to the file on the device.
     * @param {object} [options] Additional request options. Maps to the "options" FileTransfer plugin parameter.
     * @param {string} [options.fileKey] The name of the form element. Defaults to 'file' in the FileTransfer plugin parameter.
     * @param {string} [options.fileName] The file name to use when uploading the file. Defaults to 'image.jpg' in the FileTransfer plugin.
     * @param {string} [options.httpMethod] The HTTP method to use, either POST or PUT. Defaults to 'POST' in the FileTransfer plugin parameter.
     * @param {string} [options.mimeType] The mime type of the uploaded data. Defaults to 'image/jpeg' in the FileTransfer plugin parameter.
     * @param {object} [options.params] A set of optional key/value pairs to pass in the HTTP request.
     * @param {boolean} [options.chunkedMode] Whether to upload the data in chunked streaming mode. Defaults to 'true' in the FileTransfer plugin parameter.
     * @param {object} [options.headers] A JSON object for the headers to send along with the request.
     * @param {boolean} [trustAllHosts=false] Whether to accept all security certificates including self-signed certificates. Maps to the "trustAllHosts" FileTransfer plugin parameter.
     * @returns {Promise} The promise for the request.
     */
    /**
     * Uploads a file from the device's file system to Backend Services. Wraps the Apache Cordova "upload()" [FileTransfer](http://cordova.apache.org/docs/en/2.7.0/cordova_file_file.md.html#FileTransfer) method. Note that the signatures of these methods differ.
     * @memberof Files.prototype
     * @method upload
     * @param {string} localPath An Apache Cordova FileSystem URL representing the full path to the file on the device.
     * @param {object} [options] Additional request options. Maps to the "options" FileTransfer plugin parameter.
     * @param {string} [options.fileKey] The name of the form element. Defaults to 'file' in the FileTransfer plugin parameter.
     * @param {string} [options.fileName] The file name to use when uploading the file. Defaults to 'image.jpg' in the FileTransfer plugin parameter.
     * @param {string} [options.httpMethod] The HTTP method to use, either POST or PUT. Defaults to 'POST' in the FileTransfer plugin parameter.
     * @param {string} [options.mimeType] The mime type of the uploaded data. Defaults to 'image/jpeg' in the FileTransfer plugin parameter.
     * @param {object} [options.params] A set of optional key/value pairs to pass in the HTTP request.
     * @param {boolean} [options.chunkedMode] Whether to upload the data in chunked streaming mode. Defaults to 'true' in the FileTransfer plugin parameter.
     * @param {object} [options.headers] A JSON object for the headers to send along with the request.
     * @param {boolean} [trustAllHosts=false] Whether to accept all security certificates including self-signed certificates. Maps to the "trustAllHosts" FileTransfer plugin parameter.
     * @param {Function} [success] A success callback that is passed an Apache Cordova [FileUploadResult](https://github.com/apache/cordova-plugin-file-transfer#fileuploadresult) object. Maps to the "successCallback" FileTransfer plugin parameter.
     * @param {Function} [error] An error callback that is passed an Apache Cordova [FileTransferError](https://github.com/apache/cordova-plugin-file-transfer#filetransfererror) object. Maps to the "errorCallback" FileTransfer plugin parameter.
     */
    upload(localPath: string, options: CordovaFileUploadOptions, trustAllHosts?: boolean, success?: SuccessCallback<CordovaFileEntry>, error?: ErrorCallback): Promise<CordovaFileEntry>;
    private _getUpdateUrl(fileId);
}
