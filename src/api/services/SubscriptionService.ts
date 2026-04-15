/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddonPricingInfo } from '../models/AddonPricingInfo';
import type { ChargebeeSubscription } from '../models/ChargebeeSubscription';
import type { HostedPage } from '../models/HostedPage';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import type { OmitReadonly } from '../core/utils/OmitReadonly';

export class SubscriptionService {

    /**
     * @returns AddonPricingInfo
     * @throws ApiError
     */
    public static addonPricingInfo({
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
    }): CancelablePromise<Array<AddonPricingInfo>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/dashboard/accounts/v2/subscription/addon_pricing_info/',
            query: {
                'ordering': ordering,
                'search': search,
            },
        });
    }

    /**
     * @returns ChargebeeSubscription
     * @throws ApiError
     */
    public static getSubscriptionDetails(): CancelablePromise<ChargebeeSubscription> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/dashboard/accounts/v2/subscription/details/',
        });
    }

    /**
     * @returns any
     * @throws ApiError
     */
    public static getChargebeeHostedPage({
        planId,
    }: {
        planId?: string,
    }): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/dashboard/accounts/v2/subscription/hosted_page/',
            query: {
                'plan_id': planId,
            },
        });
    }

    /**
     * @returns ChargebeeSubscription
     * @throws ApiError
     */
    public static getChargebeePortalSession(): CancelablePromise<ChargebeeSubscription> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/dashboard/accounts/v2/subscription/portal_session/',
        });
    }

    /**
     * @returns any
     * @throws ApiError
     */
    public static getSubscriptionRemainingMonths(): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/dashboard/accounts/v2/subscription/remaining_months/',
        });
    }

    /**
     * @returns HostedPage
     * @throws ApiError
     */
    public static getChargebeeUnpaidInvoices(): CancelablePromise<HostedPage> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/dashboard/accounts/v2/subscription/unpaid_invoices/',
        });
    }

}
