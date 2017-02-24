import { Everlive } from '../../Everlive';
import { EventEmitterExtended } from '../../../common/EventEmitterExtended';
/**
 * @typedef Helpers.html
 * @description Everlive helper for html related operations, such as processing html elements with specific tags.
 */
export declare class HtmlHelper extends EventEmitterExtended {
    sdk: Everlive;
    settings: any;
    options: any;
    responsive: any;
    offline: any;
    constructor(sdk: Everlive, config: any);
    _init(): void;
    _triggerOnProcessed(args: any): void;
    _defaultProcessSettings(settings: any): any;
    _setLoadingUrl(element: any): Promise<any>;
    _getBackgroundSrc(el: any): any;
    _setErrorUrl(element: any): Promise<any>;
    _setUrl(element: any, url: any, apply?: boolean): Promise<{}>;
    _getAttr(element: any): any;
    _getUrl(element: any): any;
    _wrapElements(elements: any): {
        item: any;
        tag: any;
        operations: {
            responsive: any;
            offline: any;
        };
    }[];
    /**
     * @method process
     * @memberOf Helpers.html
     * @param {HtmlElement|HtmlElement[]} elements
     * @param {Object} settings A settings specifying custom behavior.
     * @param {boolean} [settings.responsive] Whether to process the data-responsive attributes that help implement Responsive Images.
     * @param {boolean} [settings.offline] Whether to process the data-offline attributes that help implement offline files.
     * @param {Function} [success] A success callback.
     * @param {Function} [error] An error callback.
     */
    /**
     * @method process
     * @memberOf Helpers.html
     * @param {HtmlElement|HtmlElement[]} elements
     * @param {Object} settings A settings specifying custom behavior.
     * @param {boolean} [settings.responsive] Whether to process the data-responsive attributes that help implement Responsive Images.
     * @param {boolean} [settings.offline] Whether to process the data-offline attributes that help implement offline files.
     * @returns {Promise} A promise to the process state.
     */
    process(elements: any, settings: any, success?: Function, error?: Function): Promise<{}>;
    /**
     * @method processAll
     * @memberOf Helpers.html
     * @param {Object} settings A settings specifying custom behavior.
     * @param {boolean} [settings.responsive] Whether to process the data-responsive attributes that help implement Responsive Images.
     * @param {boolean} [settings.offline] Whether to process the data-offline attributes that help implement offline files.
     * @param {Function} [success] A success callback.
     * @param {Function} [error] An error callback.
     */
    /**
     * @method processAll
     * @memberOf Helpers.html
     * @param {Object} settings A settings specifying custom behavior.
     * @param {boolean} [settings.responsive] Whether to process the data-responsive attributes that help implement Responsive Images.
     * @param {boolean} [settings.offline] Whether to process the data-offline attributes that help implement offline files.
     * @returns {Promise} A promise to the process state.
     */
    processAll(settings: any, success?: Function, error?: Function): Promise<{}>;
}
