/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DeleteWorkspace } from '../models/DeleteWorkspace';
import type { PatchedUpdateWorkspace } from '../models/PatchedUpdateWorkspace';
import type { PatchedWorkspace } from '../models/PatchedWorkspace';
import type { Workspace } from '../models/Workspace';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import type { OmitReadonly } from '../core/utils/OmitReadonly';

export class WorkspacesService {

    /**
     * Get list of Workspaces
     * @returns Workspace
     * @throws ApiError
     */
    public static listWorkspaces({
        active,
        ordering,
    }: {
        active?: boolean,
        /**
         * Which field to use when ordering the results.
         */
        ordering?: string,
    }): CancelablePromise<Array<Workspace>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/workspaces/',
            query: {
                'active': active,
                'ordering': ordering,
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
        requestBody: OmitReadonly<Workspace>,
    }): CancelablePromise<Workspace> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/workspaces/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * get workspace details
     * @returns Workspace
     * @throws ApiError
     */
    public static getWorkspace({
        uniqueKey,
    }: {
        uniqueKey: string,
    }): CancelablePromise<Workspace> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/workspaces/{unique_key}/',
            path: {
                'unique_key': uniqueKey,
            },
        });
    }

    /**
     * update workspace details
     * @returns PatchedWorkspace
     * @throws ApiError
     */
    public static updateWorkspace({
        uniqueKey,
        requestBody,
    }: {
        uniqueKey: string,
        requestBody?: OmitReadonly<PatchedUpdateWorkspace>,
    }): CancelablePromise<PatchedWorkspace> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/workspaces/{unique_key}/',
            path: {
                'unique_key': uniqueKey,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete workspace permanently
     * @returns void
     * @throws ApiError
     */
    public static deleteWorkspace({
        uniqueKey,
        requestBody,
    }: {
        uniqueKey: string,
        requestBody: OmitReadonly<DeleteWorkspace>,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/workspaces/{unique_key}/delete/',
            path: {
                'unique_key': uniqueKey,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
