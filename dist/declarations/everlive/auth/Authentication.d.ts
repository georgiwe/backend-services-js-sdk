import { LocalStore } from '../storages/LocalStore';
import { Data } from '../types/Data';
import { Everlive } from "../Everlive";
import { UserLoginResult } from "../interfaces/UserLoginResult";
import { SuccessCallback } from "../interfaces/SuccessCallback";
import { ErrorCallback } from "../interfaces/ErrorCallback";
import { SocialLoginResult } from "../interfaces/SocialLoginResult";
import { AuthInfoResult } from "../interfaces/AuthInfoResult";
export default class Authentication extends Data<any> {
    authSetup: any;
    _authenticationCallbacks: any;
    _localStore: LocalStore;
    /**
     * @class Authentication
     * @classdesc A class for managing authentication of a user in your application.
     * @protected
     * @param sdk {Everlive} Everlive Object
     */
    constructor(sdk: Everlive);
    _getLocalStoreKey(): string;
    /** Ensures that authentication is completed before continuing.
     * @memberOf Authentication.prototype
     * @private
     * @returns {Promise} A promise that will be resolved when the authentication is complete. See {{@link Everlive.prototype.completeAuthentication}}.
     * @throws throws an error if no onAuthenticationRequired handler is provided to the options.
     */
    _ensureAuthentication(): any;
    _loginSuccess(data: any): void;
    _logoutSuccess(): void;
    _loginWithProvider(identity: any, success: any, error: any): Promise<{}>;
    /**
     * Logs in a user using a username and a password to the current {{site.bs}} JavaScript SDK instance. All requests initiated by the current {{site.bs}} JavaScript SDK instance will be authenticated with that user's credentials.
     * @memberOf Authentication.prototype
     * @method login
     * @name login
     * @param {string} username The user's username.
     * @param {string} password The user's password.
     * @returns {Promise} The promise for the request.
     */
    /**
     * Logs in a user using a username and a password to the current {{site.bs}} JavaScript SDK instance. All requests initiated by the current {{site.bs}} JavaScript SDK instance will be authenticated with that user's credentials.
     * @memberOf Authentication.prototype
     * @method login
     * @name login
     * @param {string} username The user's username.
     * @param {string} password The user's password.
     * @param {Function} [success] A success callback.
     * @param {Function} [error] An error callback.
     */
    login(username: string, password: string, success?: SuccessCallback<UserLoginResult>, error?: ErrorCallback): Promise<UserLoginResult>;
    /**
     * Log out the user who is currently logged in.
     * @memberOf Authentication.prototype
     * @method logout
     * @name logout
     * @returns {Promise} The promise for the request.
     */
    /**
     * Log out the user who is currently logged in.
     * @memberOf Authentication.prototype
     * @method logout
     * @name logout
     * @param {Function} [success] A success callback.
     * @param {Function} [error] An error callback.
     */
    logout(success?: SuccessCallback<{}>, error?: ErrorCallback): Promise<{}>;
    /**
     * Log in a user using an Facebook access token.
     * @memberOf Authentication.prototype
     * @method loginWithFacebook
     * @name loginWithFacebook
     * @param {string} accessToken Facebook access token.
     * @returns {Promise} The promise for the request.
     */
    /**
     * Log in a user using an Facebook access token.
     * @memberOf Authentication.prototype
     * @method loginWithFacebook
     * @name loginWithFacebook
     * @param {string} accessToken Facebook access token.
     * @param {Function} [success] A success callback.
     * @param {Function} [error] An error callback.
     */
    loginWithFacebook(accessToken: string, success?: SuccessCallback<SocialLoginResult>, error?: ErrorCallback): Promise<SocialLoginResult>;
    /**
     * Log in a user using an ADFS access token.
     * @memberOf Authentication.prototype
     * @method loginWithADFS
     * @name loginWithADFS
     * @param {string} accessToken ADFS access token.
     * @returns {Promise} The promise for the request.
     */
    /**
     * Log in a user using an ADFS access token.
     * @memberOf Authentication.prototype
     * @method loginWithADFS
     * @name loginWithADFS
     * @param {string} accessToken ADFS access token.
     * @param {Function} [success] A success callback.
     * @param {Function} [error] An error callback.
     */
    loginWithADFS(accessToken: string, success?: SuccessCallback<any>, error?: ErrorCallback): Promise<any>;
    /**
     * Log in a user using an SAML access token.
     * @memberOf Authentication.prototype
     * @method loginWithSAML
     * @name loginWithSAML
     * @param {string} accessToken SAML access token.
     * @returns {Promise} The promise for the request.
     */
    /**
     * Log in a user using an SAML access token.
     * @memberOf Authentication.prototype
     * @method loginWithSAML
     * @name loginWithSAML
     * @param {string} accessToken SAML access token.
     * @param {Function} [success] A success callback.
     * @param {Function} [error] An error callback.
     */
    loginWithSAML(accessToken: any, success: any, error: any): Promise<{}>;
    /**
     * Log in a user using a LiveID access token.
     * @memberOf Authentication.prototype
     * @method loginWithLiveID
     * @name loginWithLiveID
     * @param {string} accessToken LiveID access token.
     * @returns {Promise} The promise for the request.
     */
    /**
     * Log in a user using a LiveID access token.
     * @memberOf Authentication.prototype
     * @method loginWithLiveID
     * @name loginWithLiveID
     * @param {string} accessToken LiveID access token.
     * @param {Function} [success] A success callback.
     * @param {Function} [error] An error callback.
     */
    loginWithLiveID(accessToken: string, success?: SuccessCallback<any>, error?: ErrorCallback): Promise<any>;
    /**
     * Log in a user using a Google access token.
     * @memberOf Authentication.prototype
     * @method loginWithGoogle
     * @name loginWithGoogle
     * @param {string} accessToken Google access token.
     * @returns {Promise} The promise for the request.
     */
    /**
     * Log in a user using a Google access token.
     * @memberOf Authentication.prototype
     * @method loginWithGoogle
     * @name loginWithGoogle
     * @param {string} accessToken Google access token.
     * @param {Function} [success] A success callback.
     * @param {Function} [error] An error callback.
     */
    loginWithGoogle(accessToken: string, success?: SuccessCallback<any>, error?: ErrorCallback): Promise<any>;
    /**
     * Log in a user with a Twitter token. A secret token needs to be provided.
     * @memberOf Authentication.prototype
     * @method loginWithTwitter
     * @name loginWithTwitter
     * @param {string} token Twitter token.
     * @param {string} tokenSecret Twitter secret token.
     * @returns {Promise} The promise for the request.
     */
    /**
     * Log in a user with a Twitter token. A secret token needs to be provided.
     * @memberOf Authentication.prototype
     * @method loginWithTwitter
     * @name loginWithTwitter
     * @param {string} token Twitter token.
     * @param {string} tokenSecret Twitter secret token.
     * @param {Function} [success] A success callback.
     * @param {Function} [error] An error callback.
     */
    loginWithTwitter(token: string, tokenSecret: string, success?: SuccessCallback<any>, error?: ErrorCallback): Promise<any>;
    /**
     * Sets the token and token type that the {{site.TelerikBackendServices}} JavaScript SDK will use for authorization.
     * @memberOf Authentication.prototype
     * @method setAuthorization
     * @param {string} token Token that will be used for authorization.
     * @param {Everlive.TokenType} tokenType Token type. Currently only 'bearer' token is supported.
     * @param {string} principalId The id of the user that is logged in.
     */
    setAuthorization(token: string, tokenType: string, principalId: string): void;
    /**
     * Clears the authentication token that the {{site.bs}} JavaScript SDK currently uses. Note that this is different than logging out, because the authorization token that was used, will not be invalidated.
     * @method clearAuthorization
     * @memberOf Authentication.prototype
     */
    clearAuthorization(): void;
    /**
     * Clears the current persisted authentication from the local store for the current {{site.bs}} JavaScript SDK instance. Will not logout or modify the current authentication of the Javascript SDK.
     * @method clearPersistedAuthentication
     * @memberOf Authentication.prototype
     */
    clearPersistedAuthentication(): void;
    /**
     * @memberOf Authentication.prototype
     * Returns whether authentication requirement is enabled for the current instance of the {{site.bs}} JavaScript SDK.
     * @returns {boolean} whether an onAuthenticationRequired function is provided
     */
    isAuthenticationInProgress(): boolean;
    /**
     * A method that should be called with the authentication result.
     * @memberOf Authentication.prototype
     * @param authentication authentication object containing information about the
     * @param authentication.access_token
     * @param authentication.token_type
     * @param authentication.principal_id
     */
    completeAuthentication(authentication: any): void;
    /**
     * Gets the current authentication status of the {{site.TelerikBackendServices}} JavaScript SDK instance.
     * @memberOf Authentication.prototype
     * @method getAuthenticationStatus
     * @name getAuthenticationStatus
     * @returns {Promise} A promise to the authentication status.
     */
    /**
     * Gets the current authentication status of the {{site.TelerikBackendServices}} JavaScript SDK instance.
     * @memberOf Authentication.prototype
     * @method getAuthenticationStatus
     * @name getAuthenticationStatus
     * @param {Everlive.Callbacks.authenticationStatusSuccess} [success] A success callback.
     * @param {Function} [error] An error callback.
     */
    getAuthenticationStatus(success?: SuccessCallback<AuthInfoResult>, error?: ErrorCallback): Promise<AuthInfoResult>;
    /** Returns whether the {{site.TelerikBackendServices}} is currently waiting for authentication to be completed. See {{@link Everlive.prototype.completeAuthentication}}.
     * @memberOf Everlive.prototype
     * @returns {boolean}
     */
    isAuthenticating(): boolean;
}
