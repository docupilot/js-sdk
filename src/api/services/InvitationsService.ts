/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
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
            url: '/dashboard/accounts/v2/invitations/',
            query: {
                'is_accepted': isAccepted,
                'ordering': ordering,
                'search': search,
            },
        });
    }

}
