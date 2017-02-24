export declare class Utils {
    static guardUnset(value: any, name: any, message?: any): void;
    static isGuid(str: any): boolean;
    static cloneDate(d: any): Date;
    static parseUtilities: {
        getReviver: (parseOnlyCompleteDateTimeString?: boolean) => (key: any, value: any) => any;
        parseIsoDateString: (string: any) => Date;
        parseOnlyCompleteDateTimeString: (string: any) => Date;
        traverse: (obj: any, func: any) => any;
        traverseAndRevive: (data: any, reviver?: any) => any;
        parseError: (reviver: any, error: any) => any;
        _parseInternal: (reviver: any, data: any) => any;
        _transformResult: (data: any, additionalProperties?: any) => any;
        parseResult: (reviver: any, data: any) => any;
        parseSingleResult: (reviver: any, data: any) => any;
        parseUpdateResult: (reviver: any, data: any) => any;
        parseJSON: (json: any) => any;
        parseXhrResponse: (xhrRequest: any) => any;
        parseXhrError: (reviver: any, xhrRequest: any) => any;
        parseErrorOrResponse: (error: any) => any;
    };
    static buildPromise<T>(operation: any, success: any, error: any): Promise<T>;
    static getCallbacks<T>(success?: any, error?: any): {
        promise: Promise<T>;
        success: (T);
        error: (Error);
    };
    static isDate(date: any): boolean;
    static successfulPromise(data?: any): Promise<any>;
    static rejectedPromise(err: any): Promise<any>;
    static uuid(): string;
}
