/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CloneTool } from '../models/CloneTool';
import type { ExecuteToolResponse } from '../models/ExecuteToolResponse';
import type { PaginatedToolList } from '../models/PaginatedToolList';
import type { PatchedTool } from '../models/PatchedTool';
import type { Tool } from '../models/Tool';
import type { ToolConfig } from '../models/ToolConfig';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import type { OmitReadonly } from '../core/utils/OmitReadonly';

export class ToolsService {

    /**
     * Get tools
     * @returns PaginatedToolList
     * @throws ApiError
     */
    public static listTools({
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
    }): CancelablePromise<PaginatedToolList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/dashboard/tools/',
            query: {
                'ordering': ordering,
                'page': page,
                'search': search,
            },
        });
    }

    /**
     * Create tool
     * @returns Tool
     * @throws ApiError
     */
    public static createTool({
        requestBody,
    }: {
        requestBody: OmitReadonly<Tool>,
    }): CancelablePromise<Tool> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/dashboard/tools/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get tool
     * @returns Tool
     * @throws ApiError
     */
    public static getTool({
        id,
    }: {
        id: string,
    }): CancelablePromise<Tool> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/dashboard/tools/{id}/',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Edit tool
     * @returns Tool
     * @throws ApiError
     */
    public static updateTool({
        id,
        requestBody,
    }: {
        id: string,
        requestBody: OmitReadonly<Tool>,
    }): CancelablePromise<Tool> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/dashboard/tools/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns Tool
     * @throws ApiError
     */
    public static toolsPartialUpdate({
        id,
        requestBody,
    }: {
        id: string,
        requestBody?: OmitReadonly<PatchedTool>,
    }): CancelablePromise<Tool> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/dashboard/tools/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete tool
     * @returns void
     * @throws ApiError
     */
    public static deleteTool({
        id,
    }: {
        id: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/dashboard/tools/{id}/',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Archive tool
     * @returns Tool
     * @throws ApiError
     */
    public static archiveTool({
        id,
        requestBody,
    }: {
        id: number,
        requestBody: any,
    }): CancelablePromise<Tool> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/dashboard/tools/{id}/archive/',
            path: {
                'id': id,
            },
            body: requestBody,
        });
    }

    /**
     * Clone tool
     * @returns Tool
     * @throws ApiError
     */
    public static cloneTool({
        id,
        requestBody,
    }: {
        id: number,
        requestBody?: OmitReadonly<CloneTool>,
    }): CancelablePromise<Tool> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/dashboard/tools/{id}/clone/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Permanently delete archived tool
     * @returns void
     * @throws ApiError
     */
    public static permanentDeleteTool({
        id,
    }: {
        id: number,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/dashboard/tools/{id}/permanent_delete/',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Unarchive tool
     * @returns Tool
     * @throws ApiError
     */
    public static unarchiveTool({
        id,
        requestBody,
    }: {
        id: number,
        requestBody: any,
    }): CancelablePromise<Tool> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/dashboard/tools/{id}/unarchive/',
            path: {
                'id': id,
            },
            body: requestBody,
        });
    }

    /**
     * Get tool config by unique id
     * @returns ToolConfig
     * @throws ApiError
     */
    public static getToolConfigByUniqueId({
        toolUnique,
        workspaceUnique,
    }: {
        toolUnique: string,
        workspaceUnique: string,
    }): CancelablePromise<ToolConfig> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/dashboard/tools/{workspace_unique}/{tool_unique}/config/',
            path: {
                'tool_unique': toolUnique,
                'workspace_unique': workspaceUnique,
            },
        });
    }

    /**
     * Execute tool by unique id
     * @returns ExecuteToolResponse
     * @throws ApiError
     */
    public static executeToolByUniqueId({
        toolUnique,
        workspaceUnique,
        requestBody,
    }: {
        toolUnique: string,
        workspaceUnique: string,
        requestBody?: Record<string, any>,
    }): CancelablePromise<ExecuteToolResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/dashboard/tools/{workspace_unique}/{tool_unique}/execute/',
            path: {
                'tool_unique': toolUnique,
                'workspace_unique': workspaceUnique,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
