/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DemoGraphic } from '../models/DemoGraphic';
import type { ShowDemographicPrompt } from '../models/ShowDemographicPrompt';
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
     * Show prompt
     * @returns ShowDemographicPrompt
     * @throws ApiError
     */
    public static showPrompt(): CancelablePromise<ShowDemographicPrompt> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/accounts/v2/demographic/show_prompt/',
        });
    }

    /**
     * Verify domain and set demographic
     * @returns VerifyDomain
     * @throws ApiError
     */
    public static validateDomainAndSetDemographic({
        requestBody,
    }: {
        requestBody: OmitReadonly<VerifyDomain>,
    }): CancelablePromise<VerifyDomain> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/accounts/v2/demographic/validate_domain_and_set_demographic/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
