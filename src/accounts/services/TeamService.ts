/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TeamMember } from '../models/TeamMember';
import type { TransferOwnership } from '../models/TransferOwnership';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import type { OmitReadonly } from '../core/utils/OmitReadonly';

export class TeamService {

    /**
     * List all team members
     * @returns TeamMember
     * @throws ApiError
     */
    public static listAllTeamMembers({
        ordering,
        role,
    }: {
        /**
         * Which field to use when ordering the results.
         */
        ordering?: string,
        role?: 'member' | 'owner',
    }): CancelablePromise<Array<TeamMember>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/accounts/team/',
            query: {
                'ordering': ordering,
                'role': role,
            },
        });
    }

    /**
     * Activate or Deactivate a User
     * @returns TeamMember
     * @throws ApiError
     */
    public static toggleUserStatus({
        id,
    }: {
        id: number,
    }): CancelablePromise<TeamMember> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/accounts/team/{id}/toggle_user_status/',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Transfer Ownership To Admin User
     * @returns void
     * @throws ApiError
     */
    public static transferOwnershipToAdminUser({
        requestBody,
    }: {
        requestBody: OmitReadonly<TransferOwnership>,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/accounts/team/transfer_ownership/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
