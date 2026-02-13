/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ExchangeSessionResponse } from '../models/ExchangeSessionResponse';
import type { InitiateAuthorizationSequence } from '../models/InitiateAuthorizationSequence';
import type { MigrateSessionResponse } from '../models/MigrateSessionResponse';
import type { PatchedUpdateUser } from '../models/PatchedUpdateUser';
import type { User } from '../models/User';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import type { OmitReadonly } from '../core/utils/OmitReadonly';

export class UsersService {

    /**
     * Exchange session for a migration code
     * Generates a short-lived UUID code linked to the current session key for cross-domain migration.
     * @returns ExchangeSessionResponse
     * @throws ApiError
     */
    public static getExchangeSessionCode(): CancelablePromise<ExchangeSessionResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/dashboard/accounts/v2/users/exchange_session/',
        });
    }

    /**
     * Initiate a re-authorization sequence that would verify authenticity of logged-in userin order to allow performing high security operations like delete workspace
     * @returns void
     * @throws ApiError
     */
    public static initiateAuthorizationSequence({
        requestBody,
    }: {
        requestBody?: OmitReadonly<InitiateAuthorizationSequence>,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/dashboard/accounts/v2/users/initiate_authorization_sequence/',
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
            url: '/dashboard/accounts/v2/users/me/',
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
            url: '/dashboard/accounts/v2/users/migrate_session/',
            query: {
                'org': org,
                'session_exchange_code': sessionExchangeCode,
            },
        });
    }

    /**
     * Update User Profile
     * @returns any No response body
     * @throws ApiError
     */
    public static updateUserProfile({
        requestBody,
    }: {
        requestBody?: OmitReadonly<PatchedUpdateUser>,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/dashboard/accounts/v2/users/update_user_profile/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
