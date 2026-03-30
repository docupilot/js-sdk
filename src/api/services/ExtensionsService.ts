/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CloneExtension } from '../models/CloneExtension';
import type { Extension } from '../models/Extension';
import type { ExtensionConfig } from '../models/ExtensionConfig';
import type { ExtensionRunResponse } from '../models/ExtensionRunResponse';
import type { PaginatedExtensionList } from '../models/PaginatedExtensionList';
import type { PatchedExtension } from '../models/PatchedExtension';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import type { OmitReadonly } from '../core/utils/OmitReadonly';

export class ExtensionsService {

    /**
     * Get extensions
     * @returns PaginatedExtensionList
     * @throws ApiError
     */
    public static listExtensions({
        ordering,
        page,
        search,
    }: {
        /**
         * Which field to use when ordering the results.
         */
        ordering?: string,
        /**
         * A page number within the paginated result set.
         */
        page?: number,
        /**
         * A search term.
         */
        search?: string,
    }): CancelablePromise<PaginatedExtensionList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/dashboard/extensions/',
            query: {
                'ordering': ordering,
                'page': page,
                'search': search,
            },
        });
    }

    /**
     * Create extension
     * @returns Extension
     * @throws ApiError
     */
    public static createExtension({
        requestBody,
    }: {
        requestBody: OmitReadonly<Extension>,
    }): CancelablePromise<Extension> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/dashboard/extensions/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get extension
     * @returns Extension
     * @throws ApiError
     */
    public static getExtension({
        id,
    }: {
        id: number,
    }): CancelablePromise<Extension> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/dashboard/extensions/{id}/',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Edit extension
     * @returns Extension
     * @throws ApiError
     */
    public static updateExtension({
        id,
        requestBody,
    }: {
        id: number,
        requestBody: OmitReadonly<Extension>,
    }): CancelablePromise<Extension> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/dashboard/extensions/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns Extension
     * @throws ApiError
     */
    public static extensionsPartialUpdate({
        id,
        requestBody,
    }: {
        id: number,
        requestBody?: OmitReadonly<PatchedExtension>,
    }): CancelablePromise<Extension> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/dashboard/extensions/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete extension
     * @returns void
     * @throws ApiError
     */
    public static deleteExtension({
        id,
    }: {
        id: number,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/dashboard/extensions/{id}/',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Archive extension
     * @returns Extension
     * @throws ApiError
     */
    public static archiveExtension({
        id,
    }: {
        id: number,
    }): CancelablePromise<Extension> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/dashboard/extensions/{id}/archive/',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Clone extension
     * @returns Extension
     * @throws ApiError
     */
    public static cloneExtension({
        id,
        requestBody,
    }: {
        id: number,
        requestBody?: OmitReadonly<CloneExtension>,
    }): CancelablePromise<Extension> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/dashboard/extensions/{id}/clone/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Permanently delete archived extension
     * @returns void
     * @throws ApiError
     */
    public static permanentDeleteExtension({
        id,
    }: {
        id: number,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/dashboard/extensions/{id}/permanent_delete/',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Unarchive extension
     * @returns Extension
     * @throws ApiError
     */
    public static unarchiveExtension({
        id,
    }: {
        id: number,
    }): CancelablePromise<Extension> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/dashboard/extensions/{id}/unarchive/',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Get extension config by unique id
     * @returns ExtensionConfig
     * @throws ApiError
     */
    public static getExtensionConfigByUniqueId({
        extensionUnique,
        workspaceUnique,
    }: {
        extensionUnique: string,
        workspaceUnique: string,
    }): CancelablePromise<ExtensionConfig> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/dashboard/extensions/{workspace_unique}/{extension_unique}/config/',
            path: {
                'extension_unique': extensionUnique,
                'workspace_unique': workspaceUnique,
            },
        });
    }

    /**
     * Execute extension by unique id
     * @returns ExtensionRunResponse
     * @throws ApiError
     */
    public static runExtensionByUniqueId({
        extensionUnique,
        workspaceUnique,
        requestBody,
    }: {
        extensionUnique: string,
        workspaceUnique: string,
        requestBody?: Record<string, any>,
    }): CancelablePromise<ExtensionRunResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/dashboard/extensions/{workspace_unique}/{extension_unique}/execute/',
            path: {
                'extension_unique': extensionUnique,
                'workspace_unique': workspaceUnique,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
