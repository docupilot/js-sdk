/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Organization } from '../models/Organization';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import type { OmitReadonly } from '../core/utils/OmitReadonly';

export class OrganizationService {

    /**
     * get current organization details
     * @returns Organization
     * @throws ApiError
     */
    public static getCurrentOrganization(): CancelablePromise<Organization> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/dashboard/accounts/v2/organization/current/',
        });
    }

}
