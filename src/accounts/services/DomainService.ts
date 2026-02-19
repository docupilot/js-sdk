/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Domain } from '../models/Domain';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import type { OmitReadonly } from '../core/utils/OmitReadonly';

export class DomainService {

    /**
     * List domains
     * @returns Domain
     * @throws ApiError
     */
    public static listDomains({
        ordering,
    }: {
        /**
         * Which field to use when ordering the results.
         */
        ordering?: string,
    }): CancelablePromise<Array<Domain>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/accounts/domain/',
            query: {
                'ordering': ordering,
            },
        });
    }

    /**
     * Create domain
     * @returns Domain
     * @throws ApiError
     */
    public static createDomain({
        requestBody,
    }: {
        requestBody: OmitReadonly<Domain>,
    }): CancelablePromise<Domain> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/accounts/domain/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Destroy domain
     * @returns void
     * @throws ApiError
     */
    public static destroyDomain({
        id,
    }: {
        /**
         * A unique integer value identifying this domain.
         */
        id: number,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/accounts/domain/{id}/',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Toggle domain lock
     * @returns Domain
     * @throws ApiError
     */
    public static toggleDomainLock({
        id,
    }: {
        /**
         * A unique integer value identifying this domain.
         */
        id: number,
    }): CancelablePromise<Domain> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/accounts/domain/{id}/toggle_lock/',
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
    }: {
        /**
         * A unique integer value identifying this domain.
         */
        id: number,
    }): CancelablePromise<Domain> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/accounts/domain/{id}/verify/',
            path: {
                'id': id,
            },
        });
    }

}
