/**
 * @classdesc A class representing a value for the {{site.TelerikBackendServices}} GeoPoint field.
 * @class GeoPoint
 * @param longitude Longitude of the GeoPoint in decimal degrees (range: -180 to 180). Example: `123.3239467`
 * @param latitude Latitude of the GeoPoint in decimal degrees (range: -90 to 90). Example: `42.6954322`
 */
export declare class GeoPoint {
    longitude: number;
    latitude: number;
    constructor(longitude?: number, latitude?: number);
}
