/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PatchedTeam } from '../models/PatchedTeam';
import type { Team } from '../models/Team';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import { OmitReadonly } from '../core/utils/OmitReadonly';

export class TeamService {

    /**
     * List all team members
     * @returns Team
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
    }): CancelablePromise<Array<Team>> {
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
     * Partial Update team member
     * @returns Team
     * @throws ApiError
     */
    public static updateTeamMember({
        id,
        requestBody,
    }: {
        id: string,
        requestBody?: OmitReadonly<PatchedTeam>,
    }): CancelablePromise<Team> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/accounts/v2/team/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * delete team member
     * @returns void
     * @throws ApiError
     */
    public static deleteTeamMember({
        id,
        transferTo,
    }: {
        id: string,
        transferTo?: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/accounts/v2/team/{id}/',
            path: {
                'id': id,
            },
            query: {
                'transfer_to': transferTo,
            },
        });
    }

}
