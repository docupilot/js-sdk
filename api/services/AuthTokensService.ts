/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AuthToken } from '../models/AuthToken';
import { request as __request } from '../core/request';

export class AuthTokensService {

    /**
     * @returns AuthToken
     * @throws ApiError
     */
    public static async listAuthTokens({
        ordering,
        search,
    }: {
        /** Which field to use when ordering the results. **/
        ordering?: string,
        /** A search term. **/
        search?: string,
    }): Promise<Array<AuthToken>> {
        const result = await __request({
            method: 'GET',
            path: `/accounts/v2/auth_tokens/`,
            query: {
                'ordering': ordering,
                'search': search,
            },
        });
        return result.body;
    }

    /**
     * @returns AuthToken
     * @throws ApiError
     */
    public static async createAuthToken({
        requestBody,
    }: {
        requestBody: AuthToken,
    }): Promise<AuthToken> {
        const result = await __request({
            method: 'POST',
            path: `/accounts/v2/auth_tokens/`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * @returns AuthToken
     * @throws ApiError
     */
    public static async updateAuthToken({
        id,
        requestBody,
    }: {
        /** A unique integer value identifying this auth token. **/
        id: number,
        requestBody: AuthToken,
    }): Promise<AuthToken> {
        const result = await __request({
            method: 'PUT',
            path: `/accounts/v2/auth_tokens/${id}/`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * @returns any No response body
     * @throws ApiError
     */
    public static async deleteAuthToken({
        id,
    }: {
        /** A unique integer value identifying this auth token. **/
        id: number,
    }): Promise<any> {
        const result = await __request({
            method: 'DELETE',
            path: `/accounts/v2/auth_tokens/${id}/`,
        });
        return result.body;
    }

}