/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OnboardingStatus } from '../models/OnboardingStatus';
import type { PatchedOnboardingStatus } from '../models/PatchedOnboardingStatus';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import type { OmitReadonly } from '../core/utils/OmitReadonly';

export class OrganizationOnboardingService {

    /**
     * @returns OnboardingStatus
     * @throws ApiError
     */
    public static organizationOnboardingRetrieve(): CancelablePromise<OnboardingStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/accounts/organization_onboarding/',
        });
    }

    /**
     * @returns OnboardingStatus
     * @throws ApiError
     */
    public static organizationOnboardingPartialUpdate({
        requestBody,
    }: {
        requestBody?: OmitReadonly<PatchedOnboardingStatus>,
    }): CancelablePromise<OnboardingStatus> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/accounts/organization_onboarding/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
