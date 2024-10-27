/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ChangeRole } from '../models/ChangeRole';
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
    }): CancelablePromise<Array<TeamMember>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/accounts/v2/team/',
            query: {
                'ordering': ordering,
                'search': search,
            },
        });
    }

    /**
     * delete team member
     * @returns void
     * @throws ApiError
     */
    public static deleteTeamMember({
        id,
    }: {
        id: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/accounts/v2/team/{id}/',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Change role of team member.
     * @returns TeamMember
     * @throws ApiError
     */
    public static changeRoleOfTeamMember({
        id,
        requestBody,
    }: {
        id: string,
        requestBody: OmitReadonly<ChangeRole>,
    }): CancelablePromise<TeamMember> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/accounts/v2/team/{id}/change_role/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
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
            url: '/accounts/v2/team/transfer_ownership/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
