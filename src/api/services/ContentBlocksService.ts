/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ContentBlock } from '../models/ContentBlock';
import type { ContentBlockSharing } from '../models/ContentBlockSharing';
import type { CopyContentBlock } from '../models/CopyContentBlock';
import type { NewContentBlock } from '../models/NewContentBlock';
import type { PaginatedContentBlockList } from '../models/PaginatedContentBlockList';
import type { PatchedUpdateContentBlockSharing } from '../models/PatchedUpdateContentBlockSharing';
import type { PatchedUpdateNewContentBlock } from '../models/PatchedUpdateNewContentBlock';
import type { TemplateSchema } from '../models/TemplateSchema';
import type { TestContentBlock } from '../models/TestContentBlock';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import type { OmitReadonly } from '../core/utils/OmitReadonly';

export class ContentBlocksService {

    /**
     * Get list of content blocks
     * @returns PaginatedContentBlockList
     * @throws ApiError
     */
    public static listContentBlocks({
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
    }): CancelablePromise<PaginatedContentBlockList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/content_blocks/',
            query: {
                'ordering': ordering,
                'page': page,
                'search': search,
            },
        });
    }

    /**
     * Create content_block
     * @returns ContentBlock
     * @throws ApiError
     */
    public static createContentBlock({
        requestBody,
    }: {
        requestBody: OmitReadonly<NewContentBlock>,
    }): CancelablePromise<ContentBlock> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/content_blocks/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get all shared permissions for specific content block
     * @returns ContentBlockSharing
     * @throws ApiError
     */
    public static listContentBlockSharing({
        contentBlockId,
        ordering,
        search,
    }: {
        contentBlockId: number,
        /**
         * Which field to use when ordering the results.
         */
        ordering?: string,
        /**
         * A search term.
         */
        search?: string,
    }): CancelablePromise<Array<ContentBlockSharing>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/content_blocks/{content_block_id}/permissions/',
            path: {
                'content_block_id': contentBlockId,
            },
            query: {
                'ordering': ordering,
                'search': search,
            },
        });
    }

    /**
     * Create content block sharing permission
     * @returns ContentBlockSharing
     * @throws ApiError
     */
    public static createContentBlockSharingPermission({
        contentBlockId,
        requestBody,
    }: {
        contentBlockId: number,
        requestBody: OmitReadonly<ContentBlockSharing>,
    }): CancelablePromise<ContentBlockSharing> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/content_blocks/{content_block_id}/permissions/',
            path: {
                'content_block_id': contentBlockId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get specific permission details for given content block
     * @returns ContentBlockSharing
     * @throws ApiError
     */
    public static getContentBlockSharing({
        contentBlockId,
        id,
    }: {
        contentBlockId: number,
        /**
         * A unique integer value identifying this content block sharing setting.
         */
        id: number,
    }): CancelablePromise<ContentBlockSharing> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/content_blocks/{content_block_id}/permissions/{id}/',
            path: {
                'content_block_id': contentBlockId,
                'id': id,
            },
        });
    }

    /**
     * Update content block content partially
     * @returns ContentBlockSharing
     * @throws ApiError
     */
    public static updateContentBlockSharingPermissionContent({
        contentBlockId,
        id,
        requestBody,
    }: {
        contentBlockId: number,
        /**
         * A unique integer value identifying this content block sharing setting.
         */
        id: number,
        requestBody?: OmitReadonly<PatchedUpdateContentBlockSharing>,
    }): CancelablePromise<ContentBlockSharing> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v2/content_blocks/{content_block_id}/permissions/{id}/',
            path: {
                'content_block_id': contentBlockId,
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Revoke content block sharing permission
     * @returns void
     * @throws ApiError
     */
    public static revokeContentBlockSharingPermission({
        contentBlockId,
        id,
    }: {
        contentBlockId: number,
        /**
         * A unique integer value identifying this content block sharing setting.
         */
        id: number,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/content_blocks/{content_block_id}/permissions/{id}/',
            path: {
                'content_block_id': contentBlockId,
                'id': id,
            },
        });
    }

    /**
     * Get one content_block
     * @returns ContentBlock
     * @throws ApiError
     */
    public static getContentBlock({
        id,
    }: {
        /**
         * A unique integer value identifying this content block.
         */
        id: number,
    }): CancelablePromise<ContentBlock> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/content_blocks/{id}/',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Update content_block
     * @returns ContentBlock
     * @throws ApiError
     */
    public static updateContentBlock({
        id,
        requestBody,
    }: {
        /**
         * A unique integer value identifying this content block.
         */
        id: number,
        requestBody: OmitReadonly<ContentBlock>,
    }): CancelablePromise<ContentBlock> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/content_blocks/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Update content block data
     * @returns ContentBlock
     * @throws ApiError
     */
    public static updateContentBlockData({
        id,
        requestBody,
    }: {
        /**
         * A unique integer value identifying this content block.
         */
        id: number,
        requestBody?: OmitReadonly<PatchedUpdateNewContentBlock>,
    }): CancelablePromise<ContentBlock> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v2/content_blocks/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete a content block
     * @returns void
     * @throws ApiError
     */
    public static deleteContentBlock({
        id,
    }: {
        /**
         * A unique integer value identifying this content block.
         */
        id: number,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/content_blocks/{id}/',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Copy content block
     * @returns ContentBlock
     * @throws ApiError
     */
    public static copyContentBlock({
        id,
        requestBody,
    }: {
        /**
         * A unique integer value identifying this content block.
         */
        id: number,
        requestBody: OmitReadonly<CopyContentBlock>,
    }): CancelablePromise<ContentBlock> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/content_blocks/{id}/copy/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Download content block file
     * @returns binary
     * @throws ApiError
     */
    public static downloadContentBlockFile({
        id,
    }: {
        /**
         * A unique integer value identifying this content block.
         */
        id: number,
    }): CancelablePromise<Blob> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/content_blocks/{id}/download/',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Get content block schema
     * @returns TemplateSchema
     * @throws ApiError
     */
    public static getContentBlockSchema({
        id,
    }: {
        /**
         * A unique integer value identifying this content block.
         */
        id: number,
    }): CancelablePromise<TemplateSchema> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/content_blocks/{id}/schema/',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Test a content block
     * @returns TestContentBlock
     * @throws ApiError
     */
    public static testContentBlock({
        id,
        requestBody,
    }: {
        /**
         * A unique integer value identifying this content block.
         */
        id: number,
        requestBody?: Record<string, any>,
    }): CancelablePromise<TestContentBlock> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/content_blocks/{id}/test/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get test data used for testing content block
     * @returns ContentBlock
     * @throws ApiError
     */
    public static getTestDataForContentBlock({
        id,
    }: {
        /**
         * A unique integer value identifying this content block.
         */
        id: number,
    }): CancelablePromise<ContentBlock> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/content_blocks/{id}/test_data/',
            path: {
                'id': id,
            },
        });
    }

}
