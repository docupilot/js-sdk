/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AcceptInvite } from '../models/AcceptInvite';
import type { CreateInvitation } from '../models/CreateInvitation';
import type { Invitation } from '../models/Invitation';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import type { OmitReadonly } from '../core/utils/OmitReadonly';

export class InvitationService {

    /**
     * Get list of Invitation
     * @returns Invitation
     * @throws ApiError
     */
    public static listInvitation(): CancelablePromise<Array<Invitation>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/accounts/invitation/',
        });
    }

    /**
     * Create Invitation
     * @returns Invitation
     * @throws ApiError
     */
    public static createInvitation({
        requestBody,
    }: {
        requestBody: OmitReadonly<CreateInvitation>,
    }): CancelablePromise<Invitation> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/accounts/invitation/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete Invitation
     * @returns void
     * @throws ApiError
     */
    public static deleteInvitation({
        id,
    }: {
        /**
         * A unique integer value identifying this invitation.
         */
        id: number,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/accounts/invitation/{id}/',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Accept workspace invitation
     * @returns AcceptInvite
     * @throws ApiError
     */
    public static acceptInvitation({
        id,
    }: {
        /**
         * A unique integer value identifying this invitation.
         */
        id: number,
    }): CancelablePromise<AcceptInvite> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/accounts/invitation/{id}/accept_workspace_invitation/',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Decline workspace invitation
     * @returns void
     * @throws ApiError
     */
    public static declineWorkspaceInvitation({
        id,
    }: {
        /**
         * A unique integer value identifying this invitation.
         */
        id: number,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/accounts/invitation/{id}/decline_workspace_invitation/',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Resend invitation
     * @returns Invitation
     * @throws ApiError
     */
    public static resendInvitation({
        id,
    }: {
        /**
         * A unique integer value identifying this invitation.
         */
        id: number,
    }): CancelablePromise<Invitation> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/accounts/invitation/{id}/resend_invitation/',
            path: {
                'id': id,
            },
        });
    }

    /**
     * List pending workspace invitations for the current user
     * @returns Invitation
     * @throws ApiError
     */
    public static listWorkspaceInvitations(): CancelablePromise<Array<Invitation>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/accounts/invitation/list_workspace_invitations/',
        });
    }

}
