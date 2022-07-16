/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Folder } from '../models/Folder';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import { OmitReadonly } from '../core/utils/OmitReadonly';

export class FoldersService {

    /**
     * Get list of folders
     * @returns Folder
     * @throws ApiError
     */
    public static listFolders({
        ordering,
    }: {
        /**
         * Which field to use when ordering the results.
         */
        ordering?: string,
    }): CancelablePromise<Array<Folder>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/folders/',
            query: {
                'ordering': ordering,
            },
        });
    }

    /**
     * Create a folder
     * @returns Folder
     * @throws ApiError
     */
    public static createFolder({
        requestBody,
    }: {
        requestBody: OmitReadonly<Folder>,
    }): CancelablePromise<Folder> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/folders/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Updates a folder
     * @returns Folder
     * @throws ApiError
     */
    public static updateFolder({
        id,
        requestBody,
    }: {
        /**
         * A unique integer value identifying this folder.
         */
        id: number,
        requestBody: OmitReadonly<Folder>,
    }): CancelablePromise<Folder> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/folders/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete a folder.
     * This operation moves all templates under this folder to home directory.
     * @returns void
     * @throws ApiError
     */
    public static deleteFolder({
        id,
    }: {
        /**
         * A unique integer value identifying this folder.
         */
        id: number,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/folders/{id}/',
            path: {
                'id': id,
            },
        });
    }

}
