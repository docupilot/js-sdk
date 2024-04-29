/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Domain } from '../models/Domain';
import type { PatchedDomain } from '../models/PatchedDomain';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import { OmitReadonly } from '../core/utils/OmitReadonly';

export class DomainService {

    /**
     * Get one domain
     * @returns Domain
     * @throws ApiError
     */
    public static getDomain({
        id,
    }: {
        /**
         * A unique integer value identifying this domain.
         */
        id: number,
    }): CancelablePromise<Domain> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/domain/{id}/',
            path: {
                'id': id,
            },
        });
    }

    /**
     * verify domain
     * @returns Domain
     * @throws ApiError
     */
    public static verifyDomain({
        id,
        requestBody,
    }: {
        /**
         * A unique integer value identifying this domain.
         */
        id: number,
        requestBody?: OmitReadonly<PatchedDomain>,
    }): CancelablePromise<Domain> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v2/domain/{id}/verify/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
