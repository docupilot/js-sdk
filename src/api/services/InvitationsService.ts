/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Invitation } from '../models/Invitation';
import type { PaginatedInvitationList } from '../models/PaginatedInvitationList';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import { OmitReadonly } from '../core/utils/OmitReadonly';

export class InvitationsService {

    /**
     * Get list of Invitation
     * @returns PaginatedInvitationList
     * @throws ApiError
     */
    public static listInvitation({
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
    }): CancelablePromise<PaginatedInvitationList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/accounts/v2/invitations/',
            query: {
                'ordering': ordering,
                'page': page,
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
    public static retrieveInvitation({
        inviteKey,
    }: {
        inviteKey: string,
    }): CancelablePromise<Invitation> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/accounts/v2/invitations/{invite_key}/',
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
        inviteKey,
    }: {
        inviteKey: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/accounts/v2/invitations/{invite_key}/',
            path: {
                'invite_key': inviteKey,
            },
        });
    }

    /**
     * @returns Invitation
     * @throws ApiError
     */
    public static invitationsAcceptInvitationRetrieve({
        inviteKey,
    }: {
        inviteKey: string,
    }): CancelablePromise<Invitation> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/accounts/v2/invitations/{invite_key}/accept_invitation/',
            path: {
                'invite_key': inviteKey,
            },
        });
    }

    /**
     * Accept invitation
     * @returns any No response body
     * @throws ApiError
     */
    public static acceptInvitation({
        inviteKey,
    }: {
        inviteKey: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/accounts/v2/invitations/{invite_key}/accept_invitation/',
            path: {
                'invite_key': inviteKey,
            },
        });
    }

    /**
     * Resend invitation
     * @returns Invitation
     * @throws ApiError
     */
    public static resendInvitation({
        inviteKey,
    }: {
        inviteKey: string,
    }): CancelablePromise<Invitation> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/accounts/v2/invitations/{invite_key}/resend_invitation/',
            path: {
                'invite_key': inviteKey,
            },
        });
    }

}
