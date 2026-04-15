/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateWorkspaceInvitation } from '../models/CreateWorkspaceInvitation';
import type { Invitation } from '../models/Invitation';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import type { OmitReadonly } from '../core/utils/OmitReadonly';

export class WorkspaceInvitesService {

    /**
     * Get workspace invitation list
     * @returns Invitation
     * @throws ApiError
     */
    public static listWorkspaceInvitationsV2({
        workspaceUniqueKey,
        ordering,
    }: {
        workspaceUniqueKey: string,
        /**
         * Which field to use when ordering the results.
         */
        ordering?: string,
    }): CancelablePromise<Array<Invitation>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/workspaces/{workspace_unique_key}/invites/',
            path: {
                'workspace_unique_key': workspaceUniqueKey,
            },
            query: {
                'ordering': ordering,
            },
        });
    }

    /**
     * Create workspace invitation
     * @returns Invitation
     * @throws ApiError
     */
    public static createWorkspaceInvitationV2({
        workspaceUniqueKey,
        requestBody,
    }: {
        workspaceUniqueKey: string,
        requestBody: OmitReadonly<CreateWorkspaceInvitation>,
    }): CancelablePromise<Invitation> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/workspaces/{workspace_unique_key}/invites/',
            path: {
                'workspace_unique_key': workspaceUniqueKey,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete workspace invitation
     * @returns void
     * @throws ApiError
     */
    public static deleteWorkspaceInvitationV2({
        id,
        workspaceUniqueKey,
    }: {
        /**
         * A unique integer value identifying this invitation.
         */
        id: number,
        workspaceUniqueKey: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/workspaces/{workspace_unique_key}/invites/{id}/',
            path: {
                'id': id,
                'workspace_unique_key': workspaceUniqueKey,
            },
        });
    }

    /**
     * Resend workspace invitation
     * @returns Invitation
     * @throws ApiError
     */
    public static resendWorkspaceInvitationV2({
        id,
        workspaceUniqueKey,
    }: {
        /**
         * A unique integer value identifying this invitation.
         */
        id: number,
        workspaceUniqueKey: string,
    }): CancelablePromise<Invitation> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/workspaces/{workspace_unique_key}/invites/{id}/resend_invitation/',
            path: {
                'id': id,
                'workspace_unique_key': workspaceUniqueKey,
            },
        });
    }

}
