/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CSMDetails } from '../models/CSMDetails';
import type { DeleteCurrentWorkspace } from '../models/DeleteCurrentWorkspace';
import type { PatchedWorkspace } from '../models/PatchedWorkspace';
import type { RetentionPreference } from '../models/RetentionPreference';
import type { Workspace } from '../models/Workspace';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import { OmitReadonly } from '../core/utils/OmitReadonly';

export class WorkspacesService {

    /**
     * Get list of Workspaces
     * @returns Workspace
     * @throws ApiError
     */
    public static listWorkspaces({
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
    }): CancelablePromise<Array<Workspace>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/accounts/v2/workspaces/',
            query: {
                'ordering': ordering,
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
        requestBody: OmitReadonly<Workspace>,
    }): CancelablePromise<Workspace> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/accounts/v2/workspaces/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Returns csm details for given workspace
     * @returns CSMDetails
     * @throws ApiError
     */
    public static getCsmDetails(): CancelablePromise<CSMDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/accounts/v2/workspaces/csm_details/',
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
     * @returns PatchedWorkspace
     * @throws ApiError
     */
    public static updateCurrentWorkspace({
        requestBody,
    }: {
        requestBody?: OmitReadonly<PatchedWorkspace>,
    }): CancelablePromise<PatchedWorkspace> {
        return __request(OpenAPI, {
            method: 'PATCH',
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

    /**
     * get workspace data retention preference
     * @returns RetentionPreference
     * @throws ApiError
     */
    public static getWorkspaceDataRetentionPreference(): CancelablePromise<RetentionPreference> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/accounts/v2/workspaces/retention_preference/',
        });
    }

    /**
     * update workspace data retention preference
     * @returns RetentionPreference
     * @throws ApiError
     */
    public static updateWorkspaceDataRetentionPreference({
        requestBody,
    }: {
        requestBody?: OmitReadonly<RetentionPreference>,
    }): CancelablePromise<RetentionPreference> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/accounts/v2/workspaces/retention_preference/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
