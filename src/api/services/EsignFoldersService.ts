/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EnvelopeFolder } from '../models/EnvelopeFolder';
import type { PatchedEnvelopeFolder } from '../models/PatchedEnvelopeFolder';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import type { OmitReadonly } from '../core/utils/OmitReadonly';

export class EsignFoldersService {

    /**
     * Get list of signature folders
     * @returns EnvelopeFolder
     * @throws ApiError
     */
    public static listEsignFolders({
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
    }): CancelablePromise<Array<EnvelopeFolder>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/dashboard/esign/folders/',
            query: {
                'ordering': ordering,
                'search': search,
            },
        });
    }

    /**
     * Create signature folder
     * @returns EnvelopeFolder
     * @throws ApiError
     */
    public static createEsignFolder({
        requestBody,
    }: {
        requestBody: OmitReadonly<EnvelopeFolder>,
    }): CancelablePromise<EnvelopeFolder> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/dashboard/esign/folders/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns EnvelopeFolder
     * @throws ApiError
     */
    public static esignFoldersUpdate({
        id,
        requestBody,
    }: {
        id: string,
        requestBody: OmitReadonly<EnvelopeFolder>,
    }): CancelablePromise<EnvelopeFolder> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/dashboard/esign/folders/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns EnvelopeFolder
     * @throws ApiError
     */
    public static esignFoldersPartialUpdate({
        id,
        requestBody,
    }: {
        id: string,
        requestBody?: OmitReadonly<PatchedEnvelopeFolder>,
    }): CancelablePromise<EnvelopeFolder> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/dashboard/esign/folders/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete signature folder
     * @returns void
     * @throws ApiError
     */
    public static deleteEsignFolder({
        id,
    }: {
        id: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/dashboard/esign/folders/{id}/',
            path: {
                'id': id,
            },
        });
    }

}
