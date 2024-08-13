/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Address } from '../models/Address';
import type { SetupIntentResponse } from '../models/SetupIntentResponse';
import type { StripeCard } from '../models/StripeCard';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import { OmitReadonly } from '../core/utils/OmitReadonly';

export class ManageBillingService {

    /**
     * @returns void
     * @throws ApiError
     */
    public static deleteCard({
        requestBody,
    }: {
        requestBody: OmitReadonly<StripeCard>,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/accounts/v2/manage_billing/delete_card/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns Address
     * @throws ApiError
     */
    public static getBillingAddress(): CancelablePromise<Address> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/accounts/v2/manage_billing/get_address/',
        });
    }

    /**
     * @returns StripeCard
     * @throws ApiError
     */
    public static listPaymentMethods(): CancelablePromise<StripeCard> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/accounts/v2/manage_billing/payment_methods/',
        });
    }

    /**
     * @returns SetupIntentResponse
     * @throws ApiError
     */
    public static getSetupIntentSecret(): CancelablePromise<SetupIntentResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/accounts/v2/manage_billing/setup_intent_secret/',
        });
    }

    /**
     * @returns Address
     * @throws ApiError
     */
    public static updateBillingAddress({
        requestBody,
    }: {
        requestBody?: OmitReadonly<Address>,
    }): CancelablePromise<Address> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/accounts/v2/manage_billing/update_address/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
