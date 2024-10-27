/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AcceptInvite } from '../models/AcceptInvite';
import type { Invitation } from '../models/Invitation';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import type { OmitReadonly } from '../core/utils/OmitReadonly';

export class InvitationsService {

    /**
     * Get list of Invitation
     * @returns Invitation
     * @throws ApiError
     */
    public static listInvitation({
        isAccepted,
        ordering,
        search,
    }: {
        isAccepted?: boolean,
        /**
         * Which field to use when ordering the results.
         */
        ordering?: string,
        /**
         * A search term.
         */
        search?: string,
    }): CancelablePromise<Array<Invitation>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/accounts/v2/invitations/',
            query: {
                'is_accepted': isAccepted,
                'ordering': ordering,
                'search': search,
            },
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
        requestBody: OmitReadonly<Invitation>,
    }): CancelablePromise<Invitation> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/accounts/v2/invitations/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get Invitation
     * @returns Invitation
     * @throws ApiError
     */
    public static retrieveInvitationByKey({
        inviteKey,
    }: {
        inviteKey: string,
    }): CancelablePromise<Invitation> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/accounts/v2/invitations/{invite_key}/get_by_key/',
            path: {
                'invite_key': inviteKey,
            },
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
            url: '/accounts/v2/invitations/{id}/',
            path: {
                'id': id,
            },
        });
    }

    /**
     * retrieve invitation for accept
     * @returns Invitation
     * @throws ApiError
     */
    public static retrieveInvitationForAccept({
        id,
    }: {
        /**
         * A unique integer value identifying this invitation.
         */
        id: number,
    }): CancelablePromise<Invitation> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/accounts/v2/invitations/{id}/accept_invitation/',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Accept invitation
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
            url: '/accounts/v2/invitations/{id}/accept_invitation/',
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
            url: '/accounts/v2/invitations/{id}/resend_invitation/',
            path: {
                'id': id,
            },
        });
    }

}
