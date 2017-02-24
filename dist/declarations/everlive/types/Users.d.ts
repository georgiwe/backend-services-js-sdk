import { Data } from '../types/Data';
import { User } from '../interfaces/User';
import { UserInfo } from '../interfaces/UserInfo';
import { SingleResult } from "../interfaces/SingleResult";
import { SuccessCallback } from "../interfaces/SuccessCallback";
import { CreateItemResult } from "../interfaces/CreateItemResult";
import { ErrorCallback } from "../interfaces/ErrorCallback";
import { UserLoginResult } from "../interfaces/UserLoginResult";
import { SocialLoginResult } from "../interfaces/SocialLoginResult";
import { SetUserPasswordBySecretAnswerPayload } from "../interfaces/SetUserPasswordBySecretAnswerPayload";
import { SetUserPasswordByResetCodePayload } from "../interfaces/SetUserPasswordByResetCodePayload";
export declare class Users extends Data<User> {
    /**
     * @class Users
     * @extends Data
     * @protected
     */
    constructor(sdk: any);
    /**
     * Registers a new user with username and password.
     * @memberOf Users.prototype
     * @method register
     * @name register
     * @param {string} username The new user's username.
     * @param {string} password The new user's password.
     * @param {object} userInfo Additional information for the user (ex. DisplayName, Email, etc.)
     * @returns {Promise} The promise for the request.
     */
    /**
     * Registers a new user using a username and a password.
     * @memberOf Users.prototype
     * @method register
     * @name register
     * @param {string} username The new user's username.
     * @param {string} password The new user's password.
     * @param attrs
     * @param {Function} [success] A success callback.
     * @param {Function} [error] An error callback.
     */
    register(username: string, password: string, attrs?: UserInfo, success?: SuccessCallback<CreateItemResult>, error?: ErrorCallback): Promise<CreateItemResult>;
    /**
     * Gets information about the user that is currently authenticated to the {{site.bs}} JavaScript SDK. The success function is called with [Users.ResultTypes.currentUserResult]{@link Users.ResultTypes.currentUserResult}.
     * @memberOf Users.prototype
     * @method currentUser
     * @name currentUser
     * @returns {Promise} The promise for the request.
     */
    /**
     * Gets information about the user that is currently authenticated to the {{site.bs}} JavaScript SDK. The success function is called with [Users.ResultTypes.currentUserResult]{@link Users.ResultTypes.currentUserResult}.
     * @memberOf Users.prototype
     * @method currentUser
     * @name currentUser
     * @param {Function} [success] A success callback.
     * @param {Function} [error] An error callback.
     */
    currentUser(success?: any, error?: any): Promise<SingleResult<User>>;
    /**
     * Changes the password of a user.
     * @memberOf Users.prototype
     * @method changePassword
     * @name changePassword
     * @param {string} username The user's username.
     * @param {string} password The user's password.
     * @param {string} newPassword The user's new password.
     * @param {boolean=false} [keepTokens] If set to true, the user tokens will be preserved even after the password change.
     * @returns {Promise} The promise for the request.
     */
    /**
     * Changes the password of a user.
     * @memberOf Users.prototype
     * @method changePassword
     * @name changePassword
     * @param {string} username The user's username.
     * @param {string} password The user's password.
     * @param {string} newPassword The user's new password.
     * @param {boolean=false} [keepTokens] If set to true, the user tokens will be preserved even after the password change.
     * @param {Function} [success] A success callback.
     * @param {Function} [error] An error callback.
     */
    changePassword(username: string, password: string, newPassword: string, keepTokens?: boolean, success?: SuccessCallback<SingleResult<boolean>>, error?: ErrorCallback): Promise<SingleResult<boolean>>;
    /**
     *
     * Logs in a user using a username and a password to the current {{site.bs}} JavaScript SDK instance. All requests initiated by the current {{site.bs}} JavaScript SDK instance will be authenticated with that user's credentials.
     * @memberOf Users.prototype
     * @method login
     * @name login
     * @deprecated
     * @see [authentication.login]{@link ../Authentication/authentication.login}
     * @param {string} username The user's username.
     * @param {string} password The user's password.
     * @returns {Promise} The promise for the request.
     */
    /**
     * Logs in a user using a username and a password to the current {{site.bs}} JavaScript SDK instance. All requests initiated by the current {{site.bs}} JavaScript SDK instance will be authenticated with that user's credentials.
     * @memberOf Users.prototype
     * @method login
     * @name login
     * @deprecated
     * @see [authentication.login]{@link ../Authentication/authentication.login}
     * @param {string} username The user's username.
     * @param {string} password The user's password.
     * @param {Function} [success] A success callback.
     * @param {Function} [error] An error callback.
     */
    login(username: string, password: string, success?: SuccessCallback<UserLoginResult>, error?: ErrorCallback): Promise<UserLoginResult>;
    /**
     * Log out the user who is currently logged in.
     * @memberOf Users.prototype
     * @method logout
     * @name logout
     * @deprecated
     * @see [authentication.login]{@link ../Authentication/authentication.logout}
     * @returns {Promise} The promise for the request.
     */
    /**
     * Log out the user who is currently logged in.
     * @memberOf Users.prototype
     * @method logout
     * @name logout
     * @deprecated
     * @see [authentication.login]{@link ../Authentication/authentication.logout}
     * @param {Function} [success] A success callback.
     * @param {Function} [error] An error callback.
     */
    logout(success?: SuccessCallback<{}>, error?: ErrorCallback): Promise<{}>;
    /**
     * Log in a user using an Facebook access token.
     * @memberOf Users.prototype
     * @method loginWithFacebook
     * @name loginWithFacebook
     * @deprecated
     * @see [authentication.login]{@link ../Authentication/authentication.loginWithFacebook}
     * @param {string} accessToken Facebook access token.
     * @returns {Promise} The promise for the request.
     */
    /**
     * Log in a user using an Facebook access token.
     * @memberOf Users.prototype
     * @method loginWithFacebook
     * @name loginWithFacebook
     * @deprecated
     * @see [authentication.login]{@link ../Authentication/authentication.loginWithFacebook}
     * @param {string} accessToken Facebook access token.
     * @param {Function} [success] A success callback.
     * @param {Function} [error] An error callback.
     */
    loginWithFacebook(accessToken: string, success?: SuccessCallback<SocialLoginResult>, error?: ErrorCallback): Promise<SocialLoginResult>;
    /**
     * Links a {{site.TelerikBackendServices}} user account to a Facebook access token.
     * @memberOf Users.prototype
     * @method linkWithFacebook
     * @name linkWithFacebook
     * @param {string} userId The user's ID in {{site.bs}}.
     * @param {string} accessToken The Facebook access token that will be linked to the {{site.bs}} user account.
     * @returns {Promise} The promise for the request.
     */
    /**
     * Links a Backend Services user with a Facebook access token.
     * @memberOf Users.prototype
     * @method linkWithFacebook
     * @name linkWithFacebook
     * @param {string} userId The user's ID in {{site.bs}}.
     * @param {string} accessToken The Facebook access token that will be linked to the {{site.bs}} user account.         * @param {Function} [success] a success callback.
     * @param {Function} [success] A success callback.
     * @param {Function} [error] An error callback.
     */
    linkWithFacebook(userId: string, accessToken: string, success?: SuccessCallback<{}>, error?: ErrorCallback): Promise<{}>;
    /**
     * Unlinks a {{site.TelerikBackendServices}} user account from the Facebook token that it is linked to.
     * @memberOf Users.prototype
     * @method unlinkFromFacebook
     * @name unlinkFromFacebook
     * @param {string} userId The user's ID in {{site.bs}}.
     * @returns {Promise} The promise for the request.
     */
    /**
     * Unlinks a {{site.TelerikBackendServices}} user account from the Facebook token that it is linked to.
     * @memberOf Users.prototype
     * @method unlinkFromFacebook
     * @name unlinkFromFacebook
     * @param {string} userId The user's ID in {{site.bs}}.
     * @param {Function} [success] A success callback.
     * @param {Function} [error] An error callback.
     */
    unlinkFromFacebook(userId: string, success?: SuccessCallback<{}>, error?: ErrorCallback): Promise<{}>;
    /**
     * Log in a user using an ADFS access token.
     * @memberOf Users.prototype
     * @method loginWithADFS
     * @name loginWithADFS
     * @deprecated
     * @see [authentication.login]{@link ../Authentication/authentication.loginWithADFS}
     * @param {string} accessToken ADFS access token.
     * @returns {Promise} The promise for the request.
     */
    /**
     * Log in a user using an ADFS access token.
     * @memberOf Users.prototype
     * @method loginWithADFS
     * @name loginWithADFS
     * @deprecated
     * @see [authentication.login]{@link ../Authentication/authentication.loginWithADFS}
     * @param {string} accessToken ADFS access token.
     * @param {Function} [success] A success callback.
     * @param {Function} [error] An error callback.
     */
    loginWithADFS(accessToken: string, success?: SuccessCallback<any>, error?: ErrorCallback): Promise<any>;
    /**
     * Links a {{site.TelerikBackendServices}} user account to an ADFS access token.
     * @memberOf Users.prototype
     * @method linkWithADFS
     * @name linkWithADFS
     * @param {string} userId The user's ID in {{site.bs}}.
     * @param {string} accessToken The ADFS access token that will be linked to the {{site.bs}} user account.
     * @returns {Promise} The promise for the request.
     */
    /**
     * Links a {{site.TelerikBackendServices}} user account to an ADFS access token.
     * @memberOf Users.prototype
     * @method linkWithADFS
     * @name linkWithADFS
     * @param {string} userId The user's ID in {{site.bs}}.
     * @param {string} accessToken The ADFS access token that will be linked to the {{site.bs}} user account.
     * @param {Function} [success] A success callback.
     * @param {Function} [error] An error callback.
     */
    linkWithADFS(userId: string, accessToken: string, success?: SuccessCallback<any>, error?: ErrorCallback): Promise<any>;
    /**
     * Unlinks a {{site.TelerikBackendServices}} user account from the ADFS token that it is linked to.
     * @memberOf Users.prototype
     * @method unlinkFromADFS
     * @name unlinkFromADFS
     * @param {string} userId The user's ID in {{site.bs}}.
     * @returns {Promise} The promise for the request.
     */
    /**
     * Unlinks a {{site.TelerikBackendServices}} user account from the ADFS token that it is linked to.
     * @memberOf Users.prototype
     * @method unlinkFromADFS
     * @name unlinkFromADFS
     * @param {string} userId The user's ID in {{site.bs}}.
     * @param {Function} [success] A success callback.
     * @param {Function} [error] An error callback.
     */
    unlinkFromADFS(userId: string, success?: SuccessCallback<any>, error?: ErrorCallback): Promise<any>;
    /**
     * Links a {{site.TelerikBackendServices}} user account to an SAML access token.
     * @memberOf Users.prototype
     * @method linkWithSAML
     * @name linkWithSAML
     * @param {string} userId The user's ID in {{site.bs}}.
     * @param {string} accessToken The SAML access token that will be linked to the {{site.bs}} user account.
     * @returns {Promise} The promise for the request.
     */
    /**
     * Links a {{site.TelerikBackendServices}} user account to an SAML access token.
     * @memberOf Users.prototype
     * @method linkWithSAML
     * @name linkWithSAML
     * @param {string} userId The user's ID in {{site.bs}}.
     * @param {string} accessToken The SAML access token that will be linked to the {{site.bs}} user account.
     * @param {Function} [success] A success callback.
     * @param {Function} [error] An error callback.
     */
    linkWithSAML(userId: string, accessToken: string, success?: SuccessCallback<any>, error?: ErrorCallback): Promise<any>;
    /**
     * Unlinks a {{site.TelerikBackendServices}} user account from the SAML token that it is linked to.
     * @memberOf Users.prototype
     * @method unlinkFromSAML
     * @name unlinkFromSAML
     * @param {string} userId The user's ID in {{site.bs}}.
     * @returns {Promise} The promise for the request.
     */
    /**
     * Unlinks a {{site.TelerikBackendServices}} user account from the SAML token that it is linked to.
     * @memberOf Users.prototype
     * @method unlinkFromSAML
     * @name unlinkFromSAML
     * @param {string} userId The user's ID in {{site.bs}}.
     * @param {Function} [success] A success callback.
     * @param {Function} [error] An error callback.
     */
    unlinkFromSAML(userId: string, success?: SuccessCallback<any>, error?: ErrorCallback): Promise<any>;
    /**
     * Log in a user using a Microsoft Account access token.
     * @memberOf Users.prototype
     * @method loginWithLiveID
     * @name loginWithLiveID
     * @deprecated
     * @see [authentication.login]{@link ../Authentication/authentication.loginWithLiveID}
     * @param {string} accessToken Microsoft Account access token.
     * @returns {Promise} The promise for the request.
     */
    /**
     * Log in a user using a Microsoft Account access token.
     * @memberOf Users.prototype
     * @method loginWithLiveID
     * @name loginWithLiveID
     * @deprecated
     * @see [authentication.login]{@link ../Authentication/authentication.loginWithLiveID}
     * @param {string} accessToken Microsoft Account access token.
     * @param {Function} [success] A success callback.
     * @param {Function} [error] An error callback.
     */
    loginWithLiveID(accessToken: string, success?: SuccessCallback<any>, error?: ErrorCallback): Promise<any>;
    /**
     * Links a {{site.TelerikBackendServices}} user account to a Microsoft Account access token.
     * @memberOf Users.prototype
     * @method linkWithLiveID
     * @name linkWithLiveID
     * @param {string} userId The user's ID in {{site.bs}}.
     * @param {string} accessToken The Microsoft Account access token that will be linked to the {{site.bs}} user account.
     * @returns {Promise} The promise for the request.
     */
    /**
     * Links a {{site.TelerikBackendServices}} user account to a Microsoft Account access token.
     * @memberOf Users.prototype
     * @method linkWithLiveID
     * @name linkWithLiveID
     * @param {string} userId The user's ID in {{site.bs}}.
     * @param {string} accessToken The Microsoft Account access token that will be linked to the {{site.bs}} user account.
     * @param {Function} [success] A success callback.
     * @param {Function} [error] An error callback.
     */
    linkWithLiveID(userId: string, accessToken: string, success?: SuccessCallback<any>, error?: ErrorCallback): Promise<any>;
    /**
     * Unlinks a {{site.TelerikBackendServices}} user account from the Microsoft Account access token that it is linked to.
     * @memberOf Users.prototype
     * @method unlinkFromLiveID
     * @name unlinkFromLiveID
     * @param {string} userId The user's ID in {{site.bs}}.
     * @returns {Promise} The promise for the request.
     */
    /**
     * Unlinks a {{site.TelerikBackendServices}} user account from the Microsoft Account access token that it is linked to.
     * @memberOf Users.prototype
     * @method unlinkFromLiveID
     * @name unlinkFromLiveID
     * @param {string} userId The user's ID in {{site.bs}}.
     * @param {Function} [success] A success callback.
     * @param {Function} [error] An error callback.
     */
    unlinkFromLiveID(userId: string, success?: SuccessCallback<any>, error?: ErrorCallback): Promise<any>;
    /**
     * Log in a user using a Google access token.
     * @memberOf Users.prototype
     * @method loginWithGoogle
     * @name loginWithGoogle
     * @deprecated
     * @see [authentication.login]{@link ../Authentication/authentication.loginWithGoogle}
     * @param {string} accessToken Google access token.
     * @returns {Promise} The promise for the request.
     */
    /**
     * Log in a user using a Google access token.
     * @memberOf Users.prototype
     * @method loginWithGoogle
     * @name loginWithGoogle
     * @deprecated
     * @see [authentication.login]{@link ../Authentication/authentication.loginWithGoogle}
     * @param {string} accessToken Google access token.
     * @param {Function} [success] A success callback.
     * @param {Function} [error] An error callback.
     */
    loginWithGoogle(accessToken: string, success?: SuccessCallback<any>, error?: ErrorCallback): Promise<any>;
    /**
     * Links a {{site.TelerikBackendServices}} user account to a Google access token.
     * @memberOf Users.prototype
     * @method linkWithGoogle
     * @name linkWithGoogle
     * @param {string} userId The user's ID in {{site.bs}}.
     * @param {string} accessToken The Google access token that will be linked to the {{site.bs}} user account.
     * @returns {Promise} The promise for the request.
     */
    /**
     * Links a {{site.TelerikBackendServices}} user account to a Google access token.
     * @memberOf Users.prototype
     * @method linkWithGoogle
     * @name linkWithGoogle
     * @param {string} userId The user's ID in {{site.bs}}.
     * @param {string} accessToken The Google access token that will be linked to the {{site.bs}} user account.
     * @param {Function} [success] A success callback.
     * @param {Function} [error] An error callback.
     */
    linkWithGoogle(userId: string, accessToken: string, success?: SuccessCallback<any>, error?: ErrorCallback): Promise<any>;
    /**
     * Unlinks a {{site.TelerikBackendServices}} user account from the Google access token that it is linked to.
     * @memberOf Users.prototype
     * @method unlinkFromGoogle
     * @name unlinkFromGoogle
     * @param {string} userId The user's ID in {{site.bs}}.
     * @returns {Promise} The promise for the request.
     */
    /**
     * Unlinks a {{site.TelerikBackendServices}} user account from the Google access token that it is linked to.
     * @memberOf Users.prototype
     * @method unlinkFromGoogle
     * @name unlinkFromGoogle
     * @param {string} userId The user's ID in {{site.bs}}.
     * @param {Function} [success] A success callback.
     * @param {Function} [error] An error callback.
     */
    unlinkFromGoogle(userId: string, success?: SuccessCallback<any>, error?: ErrorCallback): Promise<any>;
    /**
     * Log in a user with a Twitter token. A secret token needs to be provided.
     * @memberOf Users.prototype
     * @method loginWithTwitter
     * @name loginWithTwitter
     * @param {string} token Twitter token.
     * @param {string} tokenSecret Twitter secret token.
     * @returns {Promise} The promise for the request.
     */
    /**
     * Log in a user with a Twitter token. A secret token needs to be provided.
     * @memberOf Users.prototype
     * @method loginWithTwitter
     * @name loginWithTwitter
     * @param {string} token Twitter token.
     * @param {string} tokenSecret Twitter secret token.
     * @param {Function} [success] A success callback.
     * @param {Function} [error] An error callback.
     */
    loginWithTwitter(token: string, tokenSecret: string, success?: SuccessCallback<any>, error?: ErrorCallback): Promise<any>;
    /**
     * Links a {{site.TelerikBackendServices}} user to a Twitter token. A secret token needs to be provided.
     * @memberOf Users.prototype
     * @method linkWithTwitter
     * @name linkWithTwitter
     * @param {string} userId The user's ID in {{site.bs}}.
     * @param {string} token The Twitter access token that will be linked to the {{site.bs}} user account.
     * @param {string} tokenSecret The Twitter secret token.
     * @returns {Promise} The promise for the request.
     */
    /**
     * Links a {{site.TelerikBackendServices}} user to a Twitter token. A secret token needs to be provided.         * Links a Backend Services user with a Twitter token. A secret token needs to be provided.
     * @memberOf Users.prototype
     * @method linkWithTwitter
     * @name linkWithTwitter
     * @param {string} userId The user's ID in {{site.bs}}.
     * @param {string} token The Twitter access token that will be linked to the {{site.bs}} user account.
     * @param {string} tokenSecret The Twitter secret token.
     * @param {Function} [success] A success callback.
     * @param {Function} [error] An error callback.
     */
    linkWithTwitter(userId: string, token: string, tokenSecret: string, success?: SuccessCallback<any>, error?: ErrorCallback): Promise<any>;
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
    loginWithSAML(accessToken: string, success?: SuccessCallback<any>, error?: ErrorCallback): Promise<any>;
    /**
     * Unlinks a {{site.TelerikBackendServices}} user account from the Twitter access token that it is linked to.
     * @memberOf Users.prototype
     * @method unlinkFromTwitter
     * @name unlinkFromTwitter
     * @param {string} userId The user's ID in {{site.bs}}.
     * @returns {Promise} The promise for the request.
     */
    /**
     * Unlinks a {{site.TelerikBackendServices}} user account from the Twitter access token that it is linked to.
     * @memberOf Users.prototype
     * @method unlinkFromTwitter
     * @name unlinkFromTwitter
     * @param {string} userId The user's ID in {{site.bs}}.
     * @param {Function} [success] A success callback.
     * @param {Function} [error] An error callback.
     */
    unlinkFromTwitter(userId: string, success?: SuccessCallback<any>, error?: ErrorCallback): Promise<any>;
    /**
     * Sets the token and token type that the {{site.TelerikBackendServices}} JavaScript SDK will use for authorization.
     * @memberOf Users.prototype
     * @method setAuthorization
     * @deprecated
     * @see [authentication.login]{@link ../Authentication/authentication.setAuthorization}
     * @param {string} token Token that will be used for authorization.
     * @param {Everlive.TokenType} tokenType Token type. Currently only 'bearer' token is supported.
     * @param {string} principalId The id of the user that is logged in.
     */
    setAuthorization(token: string, tokenType: string, principalId: string): void;
    /**
     * Clears the authentication token that the {{site.bs}} JavaScript SDK currently uses. Note that this is different than logging out, because the current authorization token is not invalidated.
     * @method clearAuthorization
     * @deprecated
     * @see [authentication.login]{@link ../Authentication/authentication.clearAuthorization}
     * @memberOf Users.prototype
     */
    clearAuthorization(): void;
    /**
     * Sends a password reset email to a specified user.
     * @memberOf Users.prototype
     * @method resetPassword
     * @name resetPassword
     * @param {Object} user The user object, which must contain either username or email address.
     * @returns {Promise} The promise for the request.
     */
    /**
     * Sends a password reset email to a specified user.
     * @memberOf Users.prototype
     * @method resetPassword
     * @name resetPassword
     * @param {Object} user The user object, which must contain either username or email address.
     * @param {Function} [success] A success callback.
     * @param {Function} [error] An error callback.
     */
    resetPassword(user: {
        Email?: string;
        Username: string;
    }, success?: SuccessCallback<SingleResult<boolean>>, error?: ErrorCallback): Promise<SingleResult<boolean>>;
    /**
     * Set a new password for a user using a password reset code.
     * @memberOf Users.prototype
     * @method setPassword
     * @name setPassword
     * @param {object} setPasswordObject The object, which contains information necessary for changing the user password.
     * @param {string} setPasswordObject.Username The username that the password will be changed.
     * @param {number} setPasswordObject.SecretQuestionId The id of the secret question.
     * @param {string} setPasswordObject.SecretAnswer The answer to the secret question.
     * @param {string} setPasswordObject.NewPassword The new password for the user.
     * @returns {Promise} The promise for the request.
     */
    /**
     * Set a new password for a user using a password reset code.
     * @memberOf Users.prototype
     * @method setPassword
     * @name setPassword
     * @param {object} setPasswordObject The object, which contains information necessary for changing the user password.
     * @param {string} setPasswordObject.Username The username that the password will be changed.
     * @param {number} setPasswordObject.SecretQuestionId The id of the secret question.
     * @param {string} setPasswordObject.SecretAnswer The answer to the secret question.
     * @param {string} setPasswordObject.NewPassword The new password for the user.
     * @param {Function} [success] A success callback.
     * @param {Function} [error] An error callback.
     */
    /**
     * Set a new password for a user using a password reset code.
     * @memberOf Users.prototype
     * @method setPassword
     * @name setPassword
     * @param {object} setPasswordObject The object, which contains information necessary for changing the user password.
     * @param {string} setPasswordObject.ResetCode The reset code obtained using a password reset email.
     * @param {string} setPasswordObject.NewPassword The new password for the user.
     * @returns {Promise} The promise for the request.
     */
    /**
     * Set a new password for a user using a password reset code.
     * @memberOf Users.prototype
     * @method setPassword
     * @name setPassword
     * @param {object} setPasswordObject The object, which contains information necessary for changing the user password.
     * @param {string} setPasswordObject.ResetCode The reset code obtained using a password reset email.
     * @param {string} setPasswordObject.NewPassword The new password for the user.
     * @param {Function} [success] A success callback.
     * @param {Function} [error] An error callback.
     */
    setPassword(setPasswordObject: SetUserPasswordBySecretAnswerPayload, success?: SuccessCallback<SingleResult<boolean>>, error?: ErrorCallback): Promise<SingleResult<boolean>>;
    setPassword(setPasswordObject: SetUserPasswordByResetCodePayload, success?: SuccessCallback<SingleResult<boolean>>, error?: ErrorCallback): Promise<SingleResult<boolean>>;
    skipAuth(options: boolean): this;
    private _linkWithProvider(identity, userId, success?, error?);
    private _unlinkFromProvider(providerName, userId, success?, error?);
}
