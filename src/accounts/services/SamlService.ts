/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PatchedSAMLProviderUpdate } from '../models/PatchedSAMLProviderUpdate';
import type { SAMLProvider } from '../models/SAMLProvider';
import type { SAMLProviderCreate } from '../models/SAMLProviderCreate';
import type { SAMLProviderUpdate } from '../models/SAMLProviderUpdate';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import type { OmitReadonly } from '../core/utils/OmitReadonly';

export class SamlService {

    /**
     * Get list of SAML providers
     * @returns SAMLProvider
     * @throws ApiError
     */
    public static listSamlProviders(): CancelablePromise<Array<SAMLProvider>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/accounts/saml/',
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
     * Update SAML provider
     * @returns SAMLProviderUpdate
     * @throws ApiError
     */
    public static updateSamlProvider({
        id,
        formData,
    }: {
        /**
         * A unique integer value identifying this social application.
         */
        id: number,
        formData: OmitReadonly<SAMLProviderUpdate>,
    }): CancelablePromise<SAMLProviderUpdate> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/accounts/saml/{id}/',
            path: {
                'id': id,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * @returns SAMLProviderUpdate
     * @throws ApiError
     */
    public static samlPartialUpdate({
        id,
        formData,
    }: {
        /**
         * A unique integer value identifying this social application.
         */
        id: number,
        formData?: OmitReadonly<PatchedSAMLProviderUpdate>,
    }): CancelablePromise<SAMLProviderUpdate> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/accounts/saml/{id}/',
            path: {
                'id': id,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
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
     * @returns SAMLProvider
     * @throws ApiError
     */
    public static toggleSamlProvider({
        id,
    }: {
        /**
         * A unique integer value identifying this social application.
         */
        id: number,
    }): CancelablePromise<SAMLProvider> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/accounts/saml/{id}/toggle_active/',
            path: {
                'id': id,
            },
        });
    }

}
