/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PatchedSAMLProviderUpdate } from '../models/PatchedSAMLProviderUpdate';
import type { SAMLProviderCreate } from '../models/SAMLProviderCreate';
import type { SAMLProviderList } from '../models/SAMLProviderList';
import type { SAMLProviderRetrieve } from '../models/SAMLProviderRetrieve';
import type { SAMLProviderUpdate } from '../models/SAMLProviderUpdate';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import type { OmitReadonly } from '../core/utils/OmitReadonly';

export class SamlService {

    /**
     * Get list of SAML providers
     * @returns SAMLProviderList
     * @throws ApiError
     */
    public static listSamlProviders({
        ordering,
    }: {
        /**
         * Which field to use when ordering the results.
         */
        ordering?: string,
    }): CancelablePromise<Array<SAMLProviderList>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/accounts/saml/',
            query: {
                'ordering': ordering,
            },
        });
    }

    /**
     * Create SAML provider
     * @returns SAMLProviderCreate
     * @throws ApiError
     */
    public static createSamlProvider({
        requestBody,
    }: {
        requestBody: OmitReadonly<SAMLProviderCreate>,
    }): CancelablePromise<SAMLProviderCreate> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/accounts/saml/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Retrieve SAML provider
     * @returns SAMLProviderRetrieve
     * @throws ApiError
     */
    public static retrieveSamlProvider({
        id,
    }: {
        /**
         * A unique integer value identifying this social application.
         */
        id: number,
    }): CancelablePromise<SAMLProviderRetrieve> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/accounts/saml/{id}/',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Update SAML provider
     * @returns SAMLProviderUpdate
     * @throws ApiError
     */
    public static updateSamlProvider({
        id,
        requestBody,
    }: {
        /**
         * A unique integer value identifying this social application.
         */
        id: number,
        requestBody: OmitReadonly<SAMLProviderUpdate>,
    }): CancelablePromise<SAMLProviderUpdate> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/accounts/saml/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns SAMLProviderUpdate
     * @throws ApiError
     */
    public static samlPartialUpdate({
        id,
        requestBody,
    }: {
        /**
         * A unique integer value identifying this social application.
         */
        id: number,
        requestBody?: OmitReadonly<PatchedSAMLProviderUpdate>,
    }): CancelablePromise<SAMLProviderUpdate> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/accounts/saml/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete SAML provider
     * @returns void
     * @throws ApiError
     */
    public static deleteSamlProvider({
        id,
    }: {
        /**
         * A unique integer value identifying this social application.
         */
        id: number,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/accounts/saml/{id}/',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Toggle SAML provider active status
     * @returns SAMLProviderRetrieve
     * @throws ApiError
     */
    public static toggleSamlProvider({
        id,
    }: {
        /**
         * A unique integer value identifying this social application.
         */
        id: number,
    }): CancelablePromise<SAMLProviderRetrieve> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/accounts/saml/{id}/toggle_active/',
            path: {
                'id': id,
            },
        });
    }

}
