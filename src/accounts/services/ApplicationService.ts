/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Application } from '../models/Application';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import type { OmitReadonly } from '../core/utils/OmitReadonly';

export class ApplicationService {

    /**
     * List all applications
     * @returns Application
     * @throws ApiError
     */
    public static listAllApplications({
        ordering,
    }: {
        /**
         * Which field to use when ordering the results.
         */
        ordering?: string,
    }): CancelablePromise<Array<Application>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/accounts/application/',
            query: {
                'ordering': ordering,
            },
        });
    }

}
