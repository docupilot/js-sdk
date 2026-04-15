/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WorkspaceChangeRole } from '../models/WorkspaceChangeRole';
import type { WorkspaceTeamMember } from '../models/WorkspaceTeamMember';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import type { OmitReadonly } from '../core/utils/OmitReadonly';

export class WorkspaceTeamsService {

    /**
     * List all workspace team members
     * @returns WorkspaceTeamMember
     * @throws ApiError
     */
    public static listWorkspaceTeamMembers({
        workspaceUniqueKey,
        ordering,
        role,
    }: {
        workspaceUniqueKey: string,
        /**
         * Which field to use when ordering the results.
         */
        ordering?: string,
        role?: 'admin' | 'billing_manager' | 'manager' | 'member' | 'owner',
    }): CancelablePromise<Array<WorkspaceTeamMember>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/workspaces/{workspace_unique_key}/teams/',
            path: {
                'workspace_unique_key': workspaceUniqueKey,
            },
            query: {
                'ordering': ordering,
                'role': role,
            },
        });
    }

    /**
     * Change role of workspace member
     * @returns WorkspaceTeamMember
     * @throws ApiError
     */
    public static changeWorkspaceMemberRole({
        id,
        workspaceUniqueKey,
        requestBody,
    }: {
        id: string,
        workspaceUniqueKey: string,
        requestBody: OmitReadonly<WorkspaceChangeRole>,
    }): CancelablePromise<WorkspaceTeamMember> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/workspaces/{workspace_unique_key}/teams/{id}/change_role/',
            path: {
                'id': id,
                'workspace_unique_key': workspaceUniqueKey,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Activate or deactivate a workspace member
     * @returns WorkspaceTeamMember
     * @throws ApiError
     */
    public static toggleWorkspaceMemberStatus({
        id,
        workspaceUniqueKey,
    }: {
        id: number,
        workspaceUniqueKey: string,
    }): CancelablePromise<WorkspaceTeamMember> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/workspaces/{workspace_unique_key}/teams/{id}/toggle_user_status/',
            path: {
                'id': id,
                'workspace_unique_key': workspaceUniqueKey,
            },
        });
    }

}
