/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { StripeCard } from '../models/StripeCard';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import { OmitReadonly } from '../core/utils/OmitReadonly';

export class PaymentMethodsService {

    /**
     * @returns StripeCard
     * @throws ApiError
     */
    public static listPaymentMethods({
        ordering,
        search,
    }: {
        /**
         * Which field to use when ordering the results.
         */
        ordering?: string,
        /**
         * A search term.
         */
        search?: string,
    }): CancelablePromise<Array<StripeCard>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/accounts/v2/payment-methods/',
            query: {
                'ordering': ordering,
                'search': search,
            },
        });
    }

    /**
     * @returns StripeCard
     * @throws ApiError
     */
    public static getSetupIntentSecret(): CancelablePromise<StripeCard> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/accounts/v2/payment-methods/setup_intent_secret/',
        });
    }

}
