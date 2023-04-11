/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DeleteCurrentWorkspace } from '../models/DeleteCurrentWorkspace';
import type { PaginatedWorkspaceList } from '../models/PaginatedWorkspaceList';
import type { Workspace } from '../models/Workspace';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import { OmitReadonly } from '../core/utils/OmitReadonly';

export class WorkspacesService {

    /**
     * Get list of Workspaces
     * @returns PaginatedWorkspaceList
     * @throws ApiError
     */
    public static listWorkspaces({
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
    }): CancelablePromise<PaginatedWorkspaceList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/accounts/v2/workspaces/',
            query: {
                'ordering': ordering,
                'page': page,
                'search': search,
            },
        });
    }

    /**
     * Create Workspace
     * @returns Workspace
     * @throws ApiError
     */
    public static createWorkspace({
        requestBody,
    }: {
        requestBody?: OmitReadonly<Workspace>,
    }): CancelablePromise<Workspace> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/accounts/v2/workspaces/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * get current workspace details
     * @returns Workspace
     * @throws ApiError
     */
    public static getCurrentWorkspace(): CancelablePromise<Workspace> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/accounts/v2/workspaces/current/',
        });
    }

    /**
     * update current workspace details
     * @returns Workspace
     * @throws ApiError
     */
    public static updateCurrentWorkspace({
        requestBody,
    }: {
        requestBody?: OmitReadonly<Workspace>,
    }): CancelablePromise<Workspace> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/accounts/v2/workspaces/current/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete a workspace and other related data permanently
     * @returns any No response body
     * @throws ApiError
     */
    public static deleteCurrentWorkspace({
        requestBody,
    }: {
        requestBody: OmitReadonly<DeleteCurrentWorkspace>,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/accounts/v2/workspaces/current/delete/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
