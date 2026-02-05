/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ChangeEmail } from '../models/ChangeEmail';
import type { ChangePassword } from '../models/ChangePassword';
import type { ExchangeSessionResponse } from '../models/ExchangeSessionResponse';
import type { MigrateSessionResponse } from '../models/MigrateSessionResponse';
import type { Organization } from '../models/Organization';
import type { PatchedUser } from '../models/PatchedUser';
import type { SendAuthorizationOTP } from '../models/SendAuthorizationOTP';
import type { User } from '../models/User';
import type { UserMeta } from '../models/UserMeta';
import type { VerifyAuthorizationOTP } from '../models/VerifyAuthorizationOTP';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import type { OmitReadonly } from '../core/utils/OmitReadonly';

export class UserService {

    /**
     * @returns void
     * @throws ApiError
     */
    public static changeEmail({
        requestBody,
    }: {
        requestBody: OmitReadonly<ChangeEmail>,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/accounts/user/change_email/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns void
     * @throws ApiError
     */
    public static changePassword({
        requestBody,
    }: {
        requestBody: OmitReadonly<ChangePassword>,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/accounts/user/change_password/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * User config meta
     * @returns UserMeta
     * @throws ApiError
     */
    public static userConfigMeta(): CancelablePromise<UserMeta> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/accounts/user/config_meta/',
        });
    }

    /**
     * get logged in user details
     * @returns User
     * @throws ApiError
     */
    public static getUseByGuid({
        guid,
    }: {
        guid: string,
    }): CancelablePromise<User> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/accounts/user/detail/{guid}/',
            path: {
                'guid': guid,
            },
        });
    }

    /**
     * Exchange session for a migration code
     * Generates a short-lived UUID code linked to the current session key for cross-domain migration.
     * @returns ExchangeSessionResponse
     * @throws ApiError
     */
    public static getExchangeSessionCode(): CancelablePromise<ExchangeSessionResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/accounts/user/exchange_session/',
        });
    }

    /**
     * @returns void
     * @throws ApiError
     */
    public static initiateAuthorizationSequence({
        requestBody,
    }: {
        requestBody: OmitReadonly<SendAuthorizationOTP>,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/accounts/user/initiate_authorization_sequence/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * get logged in user details
     * @returns User
     * @throws ApiError
     */
    public static getMe(): CancelablePromise<User> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/accounts/user/me/',
        });
    }

    /**
     * update logged in user details
     * @returns User
     * @throws ApiError
     */
    public static updateMe({
        requestBody,
    }: {
        requestBody?: OmitReadonly<User>,
    }): CancelablePromise<User> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/accounts/user/me/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * partial update user details
     * @returns User
     * @throws ApiError
     */
    public static partialUpdateUserDetails({
        requestBody,
    }: {
        requestBody?: OmitReadonly<PatchedUser>,
    }): CancelablePromise<User> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/accounts/user/me/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Migrate session to API domain
     * Endpoint called on the API domain to exchange a short-lived code for a session cookie.
     * @returns MigrateSessionResponse
     * @throws ApiError
     */
    public static attachSessionFromExchangeCode({
        org,
        sessionExchangeCode,
    }: {
        /**
         * The organization subdomain (e.g., 'rush')
         */
        org: string,
        /**
         * The one-time UUID exchange code obtained from /exchange_session/
         */
        sessionExchangeCode: string,
    }): CancelablePromise<MigrateSessionResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/accounts/user/migrate_session/',
            query: {
                'org': org,
                'session_exchange_code': sessionExchangeCode,
            },
        });
    }

    /**
     * Get all organizations for the current user
     * @returns Organization
     * @throws ApiError
     */
    public static getUserOrganizations(): CancelablePromise<Array<Organization>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/accounts/user/organizations/',
        });
    }

    /**
     * @returns void
     * @throws ApiError
     */
    public static verifyAuthorization({
        requestBody,
    }: {
        requestBody: OmitReadonly<VerifyAuthorizationOTP>,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/accounts/user/verify_authorization/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
