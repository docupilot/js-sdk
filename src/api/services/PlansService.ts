/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CartValidateResponse } from '../models/CartValidateResponse';
import type { CartValidation } from '../models/CartValidation';
import type { CustomPlanRequest } from '../models/CustomPlanRequest';
import type { CustomPlanResponse } from '../models/CustomPlanResponse';
import type { PaginatedPlansList } from '../models/PaginatedPlansList';
import type { PlanSubscription } from '../models/PlanSubscription';
import type { StripeCheckoutResponse } from '../models/StripeCheckoutResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import { OmitReadonly } from '../core/utils/OmitReadonly';

export class PlansService {

    /**
     * @returns PaginatedPlansList
     * @throws ApiError
     */
    public static listPlans({
        ordering,
        page,
        search,
    }: {
        /**
         * Which field to use when ordering the results.
         */
        ordering?: string,
        /**
         * A page number within the paginated result set.
         */
        page?: number,
        /**
         * A search term.
         */
        search?: string,
    }): CancelablePromise<PaginatedPlansList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/accounts/v2/plans/',
            query: {
                'ordering': ordering,
                'page': page,
                'search': search,
            },
        });
    }

    /**
     * @returns StripeCheckoutResponse
     * @throws ApiError
     */
    public static stripeCheckout({
        id,
        requestBody,
    }: {
        /**
         * A unique integer value identifying this plan template.
         */
        id: number,
        requestBody: OmitReadonly<PlanSubscription>,
    }): CancelablePromise<StripeCheckoutResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/accounts/v2/plans/{id}/stripe_checkout/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns CartValidateResponse
     * @throws ApiError
     */
    public static validateCart({
        id,
        requestBody,
    }: {
        /**
         * A unique integer value identifying this plan template.
         */
        id: number,
        requestBody: OmitReadonly<CartValidation>,
    }): CancelablePromise<CartValidateResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/accounts/v2/plans/{id}/validate_cart/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns CustomPlanResponse
     * @throws ApiError
     */
    public static customPlanRequest({
        requestBody,
    }: {
        requestBody: OmitReadonly<CustomPlanRequest>,
    }): CancelablePromise<CustomPlanResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/accounts/v2/plans/custom-plan-request/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
