/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DemoGraphic } from '../models/DemoGraphic';
import type { VerifyDomain } from '../models/VerifyDomain';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import { OmitReadonly } from '../core/utils/OmitReadonly';

export class DemographicService {

    /**
     * Create Demographic
     * @returns void
     * @throws ApiError
     */
    public static createDemographic({
        requestBody,
    }: {
        requestBody?: OmitReadonly<DemoGraphic>,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/accounts/v2/demographic/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Verify domain
     * @returns void
     * @throws ApiError
     */
    public static verifyDomain({
        requestBody,
    }: {
        requestBody: OmitReadonly<VerifyDomain>,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/accounts/v2/demographic/verify_domain/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
