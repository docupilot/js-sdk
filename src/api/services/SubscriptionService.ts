/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ChargebeeSubscription } from '../models/ChargebeeSubscription';
import type { PatchedSubscriptionChange } from '../models/PatchedSubscriptionChange';
import type { RenewSubscription } from '../models/RenewSubscription';
import type { Subscription } from '../models/Subscription';
import type { SubscriptionChange } from '../models/SubscriptionChange';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import { OmitReadonly } from '../core/utils/OmitReadonly';

export class SubscriptionService {

    /**
     * @returns ChargebeeSubscription
     * @throws ApiError
     */
    public static getSubscriptionCurrentVersion(): CancelablePromise<ChargebeeSubscription> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/accounts/v2/subscription/current_version/',
        });
    }

    /**
     * @returns ChargebeeSubscription
     * @throws ApiError
     */
    public static getSubscriptionDetails(): CancelablePromise<ChargebeeSubscription> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/accounts/v2/subscription/details/',
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
            url: '/accounts/v2/subscription/hosted_page/',
            query: {
                'plan_id': planId,
            },
        });
    }

    /**
     * @returns SubscriptionChange
     * @throws ApiError
     */
    public static getNewSubscriptionChanges(): CancelablePromise<SubscriptionChange> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/accounts/v2/subscription/new/changes/',
        });
    }

    /**
     * @returns SubscriptionChange
     * @throws ApiError
     */
    public static updateNewSubscriptionChanges({
        changeId,
        requestBody,
    }: {
        changeId: string,
        requestBody?: OmitReadonly<PatchedSubscriptionChange>,
    }): CancelablePromise<SubscriptionChange> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/accounts/v2/subscription/new/changes/{change_id}/cancel/',
            path: {
                'change_id': changeId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns Subscription
     * @throws ApiError
     */
    public static getNewSubscriptionDetails2(): CancelablePromise<Subscription> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/accounts/v2/subscription/new/details/',
        });
    }

    /**
     * @returns ChargebeeSubscription
     * @throws ApiError
     */
    public static getChargebeePortalSession(): CancelablePromise<ChargebeeSubscription> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/accounts/v2/subscription/portal_session/',
        });
    }

    /**
     * @returns void
     * @throws ApiError
     */
    public static subscriptionRenewRequestCreate({
        requestBody,
    }: {
        requestBody?: OmitReadonly<RenewSubscription>,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/accounts/v2/subscription/renew_request/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
