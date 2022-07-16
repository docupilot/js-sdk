/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AuthToken } from '../models/AuthToken';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AuthTokensService {

    /**
     * @returns AuthToken
     * @throws ApiError
     */
    public static listAuthTokens({
        ordering,
        search,
    }: {
        /**
         * Which field to use when ordering the results.
         */
        ordering?: string,
        /**
         * A search term.
         */
        search?: string,
    }): CancelablePromise<Array<AuthToken>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/accounts/v2/auth_tokens/',
            query: {
                'ordering': ordering,
                'search': search,
            },
        });
    }

    /**
     * @returns AuthToken
     * @throws ApiError
     */
    public static createAuthToken({
        requestBody,
    }: {
        requestBody: AuthToken,
    }): CancelablePromise<AuthToken> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/accounts/v2/auth_tokens/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns AuthToken
     * @throws ApiError
     */
    public static updateAuthToken({
        id,
        requestBody,
    }: {
        /**
         * A unique integer value identifying this auth token.
         */
        id: number,
        requestBody: AuthToken,
    }): CancelablePromise<AuthToken> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/accounts/v2/auth_tokens/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns void
     * @throws ApiError
     */
    public static deleteAuthToken({
        id,
    }: {
        /**
         * A unique integer value identifying this auth token.
         */
        id: number,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/accounts/v2/auth_tokens/{id}/',
            path: {
                'id': id,
            },
        });
    }

}
