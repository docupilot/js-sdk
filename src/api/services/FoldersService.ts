/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Folder } from '../models/Folder';
import type { FolderSharing } from '../models/FolderSharing';
import type { PatchedUpdateFolderSharing } from '../models/PatchedUpdateFolderSharing';
import type { SharingInfoFolder } from '../models/SharingInfoFolder';

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
     * Get all shared permissions for specific folder
     * @returns FolderSharing
     * @throws ApiError
     */
    public static listFolderSharing({
        folderId,
        ordering,
        search,
    }: {
        folderId: number,
        /**
         * Which field to use when ordering the results.
         */
        ordering?: string,
        /**
         * A search term.
         */
        search?: string,
    }): CancelablePromise<Array<FolderSharing>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/folders/{folder_id}/permissions/',
            path: {
                'folder_id': folderId,
            },
            query: {
                'ordering': ordering,
                'search': search,
            },
        });
    }

    /**
     * Create folder sharing permission
     * @returns FolderSharing
     * @throws ApiError
     */
    public static createFolderSharingPermission({
        folderId,
        requestBody,
    }: {
        folderId: number,
        requestBody: OmitReadonly<FolderSharing>,
    }): CancelablePromise<FolderSharing> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/folders/{folder_id}/permissions/',
            path: {
                'folder_id': folderId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get specific permission details for given folder
     * @returns FolderSharing
     * @throws ApiError
     */
    public static getFolderSharing({
        folderId,
        id,
    }: {
        folderId: number,
        /**
         * A unique integer value identifying this folder sharing setting.
         */
        id: number,
    }): CancelablePromise<FolderSharing> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/folders/{folder_id}/permissions/{id}/',
            path: {
                'folder_id': folderId,
                'id': id,
            },
        });
    }

    /**
     * Update folder content partially
     * @returns FolderSharing
     * @throws ApiError
     */
    public static updateFolderSharingPermissionContent({
        folderId,
        id,
        requestBody,
    }: {
        folderId: number,
        /**
         * A unique integer value identifying this folder sharing setting.
         */
        id: number,
        requestBody?: OmitReadonly<PatchedUpdateFolderSharing>,
    }): CancelablePromise<FolderSharing> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v2/folders/{folder_id}/permissions/{id}/',
            path: {
                'folder_id': folderId,
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Revoke folder sharing permission
     * @returns void
     * @throws ApiError
     */
    public static revokeFolderSharingPermission({
        folderId,
        id,
    }: {
        folderId: number,
        /**
         * A unique integer value identifying this folder sharing setting.
         */
        id: number,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/folders/{folder_id}/permissions/{id}/',
            path: {
                'folder_id': folderId,
                'id': id,
            },
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

    /**
     * @returns SharingInfoFolder
     * @throws ApiError
     */
    public static foldersSharingRetrieve(): CancelablePromise<SharingInfoFolder> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/folders/sharing/',
        });
    }

}
