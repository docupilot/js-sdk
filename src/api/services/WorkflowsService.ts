/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MoveWorkflow } from '../models/MoveWorkflow';
import type { MoveWorkflowResponse } from '../models/MoveWorkflowResponse';
import type { PaginatedWorkflowList } from '../models/PaginatedWorkflowList';
import type { PatchedWorkflowFolder } from '../models/PatchedWorkflowFolder';
import type { PatchedWorkflowUpdate } from '../models/PatchedWorkflowUpdate';
import type { Workflow } from '../models/Workflow';
import type { WorkflowBlueprint } from '../models/WorkflowBlueprint';
import type { WorkflowConfig } from '../models/WorkflowConfig';
import type { WorkflowExecuteResponse } from '../models/WorkflowExecuteResponse';
import type { WorkflowFolder } from '../models/WorkflowFolder';
import type { WorkflowRunList } from '../models/WorkflowRunList';
import type { WorkflowRunRetrieve } from '../models/WorkflowRunRetrieve';
import type { WorkflowVersion } from '../models/WorkflowVersion';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import type { OmitReadonly } from '../core/utils/OmitReadonly';

export class WorkflowsService {

    /**
     * Get workflows
     * @returns PaginatedWorkflowList
     * @throws ApiError
     */
    public static listWorkflows({
        folder,
        ordering,
        page,
        search,
        status,
    }: {
        /**
         * Filter by folder id. Use null, home, or an empty value for the home folder.
         */
        folder?: string,
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
        /**
         * Filter workflows by status.
         */
        status?: 'active' | 'all' | 'archived' | 'draft' | 'paused',
    }): CancelablePromise<PaginatedWorkflowList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/dashboard/workflows/',
            query: {
                'folder': folder,
                'ordering': ordering,
                'page': page,
                'search': search,
                'status': status,
            },
        });
    }

    /**
     * Create workflow
     * @returns Workflow
     * @throws ApiError
     */
    public static createWorkflow({
        requestBody,
    }: {
        requestBody: OmitReadonly<Workflow>,
    }): CancelablePromise<Workflow> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/dashboard/workflows/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get workflow
     * @returns Workflow
     * @throws ApiError
     */
    public static getWorkflow({
        id,
    }: {
        id: number,
    }): CancelablePromise<Workflow> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/dashboard/workflows/{id}/',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Edit workflow
     * @returns Workflow
     * @throws ApiError
     */
    public static updateWorkflow({
        id,
        requestBody,
    }: {
        id: number,
        requestBody?: OmitReadonly<PatchedWorkflowUpdate>,
    }): CancelablePromise<Workflow> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/dashboard/workflows/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Permanently delete workflow
     * @returns void
     * @throws ApiError
     */
    public static permanentDeleteWorkflow({
        id,
    }: {
        id: number,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/dashboard/workflows/{id}/',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Activate workflow
     * @returns Workflow
     * @throws ApiError
     */
    public static activateWorkflow({
        id,
    }: {
        id: number,
    }): CancelablePromise<Workflow> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/dashboard/workflows/{id}/activate/',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Archive workflow
     * @returns Workflow
     * @throws ApiError
     */
    public static archiveWorkflow({
        id,
    }: {
        id: number,
    }): CancelablePromise<Workflow> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/dashboard/workflows/{id}/archive/',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Pause workflow
     * @returns Workflow
     * @throws ApiError
     */
    public static pauseWorkflow({
        id,
    }: {
        id: number,
    }): CancelablePromise<Workflow> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/dashboard/workflows/{id}/pause/',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Unarchive workflow
     * @returns Workflow
     * @throws ApiError
     */
    public static unarchiveWorkflow({
        id,
    }: {
        id: number,
    }): CancelablePromise<Workflow> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/dashboard/workflows/{id}/unarchive/',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Get workflow runs
     * @returns WorkflowRunList
     * @throws ApiError
     */
    public static listWorkflowRuns({
        workflowId,
        ordering,
        search,
    }: {
        workflowId: number,
        /**
         * Which field to use when ordering the results.
         */
        ordering?: string,
        /**
         * A search term.
         */
        search?: string,
    }): CancelablePromise<Array<WorkflowRunList>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/dashboard/workflows/{workflow_id}/runs/',
            path: {
                'workflow_id': workflowId,
            },
            query: {
                'ordering': ordering,
                'search': search,
            },
        });
    }

    /**
     * Get workflow run
     * @returns WorkflowRunRetrieve
     * @throws ApiError
     */
    public static getWorkflowRun({
        runId,
        workflowId,
    }: {
        runId: string,
        workflowId: number,
    }): CancelablePromise<WorkflowRunRetrieve> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/dashboard/workflows/{workflow_id}/runs/{run_id}/',
            path: {
                'run_id': runId,
                'workflow_id': workflowId,
            },
        });
    }

    /**
     * Get workflow versions
     * @returns WorkflowVersion
     * @throws ApiError
     */
    public static listWorkflowVersions({
        workflowId,
        ordering,
        search,
    }: {
        workflowId: number,
        /**
         * Which field to use when ordering the results.
         */
        ordering?: string,
        /**
         * A search term.
         */
        search?: string,
    }): CancelablePromise<Array<WorkflowVersion>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/dashboard/workflows/{workflow_id}/versions/',
            path: {
                'workflow_id': workflowId,
            },
            query: {
                'ordering': ordering,
                'search': search,
            },
        });
    }

    /**
     * Create workflow version
     * @returns WorkflowVersion
     * @throws ApiError
     */
    public static createWorkflowVersion({
        workflowId,
        requestBody,
    }: {
        workflowId: number,
        requestBody?: OmitReadonly<WorkflowVersion>,
    }): CancelablePromise<WorkflowVersion> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/dashboard/workflows/{workflow_id}/versions/',
            path: {
                'workflow_id': workflowId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get workflow version
     * @returns WorkflowVersion
     * @throws ApiError
     */
    public static getWorkflowVersion({
        id,
        workflowId,
    }: {
        /**
         * A unique integer value identifying this workflow version.
         */
        id: number,
        workflowId: number,
    }): CancelablePromise<WorkflowVersion> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/dashboard/workflows/{workflow_id}/versions/{id}/',
            path: {
                'id': id,
                'workflow_id': workflowId,
            },
        });
    }

    /**
     * Archive workflow version
     * @returns WorkflowVersion
     * @throws ApiError
     */
    public static archiveWorkflowVersion({
        id,
        workflowId,
    }: {
        id: number,
        workflowId: number,
    }): CancelablePromise<WorkflowVersion> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/dashboard/workflows/{workflow_id}/versions/{id}/archive/',
            path: {
                'id': id,
                'workflow_id': workflowId,
            },
        });
    }

    /**
     * Publish workflow version
     * @returns WorkflowVersion
     * @throws ApiError
     */
    public static publishWorkflowVersion({
        id,
        workflowId,
    }: {
        id: number,
        workflowId: number,
    }): CancelablePromise<WorkflowVersion> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/dashboard/workflows/{workflow_id}/versions/{id}/publish/',
            path: {
                'id': id,
                'workflow_id': workflowId,
            },
        });
    }

    /**
     * Unarchive workflow version
     * @returns WorkflowVersion
     * @throws ApiError
     */
    public static unarchiveWorkflowVersion({
        id,
        workflowId,
    }: {
        id: number,
        workflowId: number,
    }): CancelablePromise<WorkflowVersion> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/dashboard/workflows/{workflow_id}/versions/{id}/unarchive/',
            path: {
                'id': id,
                'workflow_id': workflowId,
            },
        });
    }

    /**
     * Get workflow blueprint
     * @returns WorkflowBlueprint
     * @throws ApiError
     */
    public static getWorkflowBlueprint({
        workflowId,
        workflowVersionId,
    }: {
        workflowId: number,
        workflowVersionId: number,
    }): CancelablePromise<WorkflowBlueprint> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/dashboard/workflows/{workflow_id}/versions/{workflow_version_id}/blueprint/',
            path: {
                'workflow_id': workflowId,
                'workflow_version_id': workflowVersionId,
            },
        });
    }

    /**
     * Save workflow blueprint
     * @returns WorkflowVersion
     * @throws ApiError
     */
    public static saveWorkflowBlueprint({
        workflowId,
        workflowVersionId,
        requestBody,
    }: {
        workflowId: number,
        workflowVersionId: number,
        requestBody: OmitReadonly<WorkflowBlueprint>,
    }): CancelablePromise<WorkflowVersion> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/dashboard/workflows/{workflow_id}/versions/{workflow_version_id}/blueprint/',
            path: {
                'workflow_id': workflowId,
                'workflow_version_id': workflowVersionId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get workflow config by unique id
     * @returns WorkflowConfig
     * @throws ApiError
     */
    public static getWorkflowConfigByUniqueId({
        workflowUnique,
        workspaceUnique,
    }: {
        workflowUnique: string,
        workspaceUnique: string,
    }): CancelablePromise<WorkflowConfig> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/dashboard/workflows/{workspace_unique}/{workflow_unique}/config/',
            path: {
                'workflow_unique': workflowUnique,
                'workspace_unique': workspaceUnique,
            },
        });
    }

    /**
     * Execute workflow by unique id
     * @returns WorkflowExecuteResponse
     * @throws ApiError
     */
    public static runWorkflowByUniqueId({
        workflowUnique,
        workspaceUnique,
        requestBody,
    }: {
        workflowUnique: string,
        workspaceUnique: string,
        requestBody?: Record<string, any>,
    }): CancelablePromise<WorkflowExecuteResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/dashboard/workflows/{workspace_unique}/{workflow_unique}/execute/',
            path: {
                'workflow_unique': workflowUnique,
                'workspace_unique': workspaceUnique,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get workflow folders
     * @returns WorkflowFolder
     * @throws ApiError
     */
    public static listWorkflowFolders({
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
    }): CancelablePromise<Array<WorkflowFolder>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/dashboard/workflows/folders/',
            query: {
                'ordering': ordering,
                'search': search,
            },
        });
    }

    /**
     * Create workflow folder
     * @returns WorkflowFolder
     * @throws ApiError
     */
    public static createWorkflowFolder({
        requestBody,
    }: {
        requestBody: OmitReadonly<WorkflowFolder>,
    }): CancelablePromise<WorkflowFolder> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/dashboard/workflows/folders/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Edit workflow folder
     * @returns WorkflowFolder
     * @throws ApiError
     */
    public static updateWorkflowFolder({
        id,
        requestBody,
    }: {
        id: number,
        requestBody?: OmitReadonly<PatchedWorkflowFolder>,
    }): CancelablePromise<WorkflowFolder> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/dashboard/workflows/folders/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete workflow folder
     * This operation moves all workflows under this folder to the home folder.
     * @returns void
     * @throws ApiError
     */
    public static deleteWorkflowFolder({
        id,
    }: {
        id: number,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/dashboard/workflows/folders/{id}/',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Move workflows to folder
     * @returns MoveWorkflowResponse
     * @throws ApiError
     */
    public static moveWorkflowsToFolder({
        requestBody,
    }: {
        requestBody: OmitReadonly<MoveWorkflow>,
    }): CancelablePromise<MoveWorkflowResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/dashboard/workflows/move/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
