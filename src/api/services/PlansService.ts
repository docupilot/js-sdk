/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginatedPlansList } from '../models/PaginatedPlansList';
import type { Plans } from '../models/Plans';
import type { PlanSubscription } from '../models/PlanSubscription';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import { OmitReadonly } from '../core/utils/OmitReadonly';

export class PlansService {

    /**
     * @returns PaginatedPlansList
     * @throws ApiError
     */
    public static plansList({
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
     * @returns Plans
     * @throws ApiError
     */
    public static plansRetrieve({
        id,
    }: {
        /**
         * A unique integer value identifying this plan template.
         */
        id: number,
    }): CancelablePromise<Plans> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/accounts/v2/plans/{id}/',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @returns PlanSubscription
     * @throws ApiError
     */
    public static plansStripeCheckoutCreate({
        id,
        requestBody,
    }: {
        /**
         * A unique integer value identifying this plan template.
         */
        id: number,
        requestBody: OmitReadonly<PlanSubscription>,
    }): CancelablePromise<PlanSubscription> {
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

}
