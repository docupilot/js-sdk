/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddonPricingInfo } from '../models/AddonPricingInfo';
import type { AddonPurchase } from '../models/AddonPurchase';
import type { ChargebeeSubscription } from '../models/ChargebeeSubscription';
import type { HostedPage } from '../models/HostedPage';
import type { RenewSubscription } from '../models/RenewSubscription';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import type { OmitReadonly } from '../core/utils/OmitReadonly';

export class WorkspaceSubscriptionService {

    /**
     * @returns AddonPricingInfo
     * @throws ApiError
     */
    public static addonPricingInfo({
        workspaceUniqueKey,
        ordering,
    }: {
        workspaceUniqueKey: string,
        /**
         * Which field to use when ordering the results.
         */
        ordering?: string,
    }): CancelablePromise<Array<AddonPricingInfo>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/workspaces/{workspace_unique_key}/subscription/addon_pricing_info/',
            path: {
                'workspace_unique_key': workspaceUniqueKey,
            },
            query: {
                'ordering': ordering,
            },
        });
    }

    /**
     * @returns any
     * @throws ApiError
     */
    public static purchaseAddon({
        workspaceUniqueKey,
        requestBody,
    }: {
        workspaceUniqueKey: string,
        requestBody: OmitReadonly<AddonPurchase>,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/workspaces/{workspace_unique_key}/subscription/buy_addon/',
            path: {
                'workspace_unique_key': workspaceUniqueKey,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns ChargebeeSubscription
     * @throws ApiError
     */
    public static getSubscriptionDetails({
        workspaceUniqueKey,
    }: {
        workspaceUniqueKey: string,
    }): CancelablePromise<ChargebeeSubscription> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/workspaces/{workspace_unique_key}/subscription/details/',
            path: {
                'workspace_unique_key': workspaceUniqueKey,
            },
        });
    }

    /**
     * Extend trial
     * @returns void
     * @throws ApiError
     */
    public static extendTrial({
        workspaceUniqueKey,
    }: {
        workspaceUniqueKey: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/workspaces/{workspace_unique_key}/subscription/extend_trial/',
            path: {
                'workspace_unique_key': workspaceUniqueKey,
            },
        });
    }

    /**
     * @returns any
     * @throws ApiError
     */
    public static getChargebeeHostedPage({
        workspaceUniqueKey,
        planId,
    }: {
        workspaceUniqueKey: string,
        planId?: string,
    }): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/workspaces/{workspace_unique_key}/subscription/hosted_page/',
            path: {
                'workspace_unique_key': workspaceUniqueKey,
            },
            query: {
                'plan_id': planId,
            },
        });
    }

    /**
     * @returns ChargebeeSubscription
     * @throws ApiError
     */
    public static getChargebeePortalSession({
        workspaceUniqueKey,
    }: {
        workspaceUniqueKey: string,
    }): CancelablePromise<ChargebeeSubscription> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/workspaces/{workspace_unique_key}/subscription/portal_session/',
            path: {
                'workspace_unique_key': workspaceUniqueKey,
            },
        });
    }

    /**
     * @returns any
     * @throws ApiError
     */
    public static getSubscriptionRemainingMonths({
        workspaceUniqueKey,
    }: {
        workspaceUniqueKey: string,
    }): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/workspaces/{workspace_unique_key}/subscription/remaining_months/',
            path: {
                'workspace_unique_key': workspaceUniqueKey,
            },
        });
    }

    /**
     * @returns void
     * @throws ApiError
     */
    public static workspacesSubscriptionRenewRequestCreate({
        workspaceUniqueKey,
        requestBody,
    }: {
        workspaceUniqueKey: string,
        requestBody?: OmitReadonly<RenewSubscription>,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/workspaces/{workspace_unique_key}/subscription/renew_request/',
            path: {
                'workspace_unique_key': workspaceUniqueKey,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns any
     * @throws ApiError
     */
    public static resumeSubscription({
        workspaceUniqueKey,
    }: {
        workspaceUniqueKey: string,
    }): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/workspaces/{workspace_unique_key}/subscription/resume/',
            path: {
                'workspace_unique_key': workspaceUniqueKey,
            },
        });
    }

    /**
     * @returns HostedPage
     * @throws ApiError
     */
    public static getChargebeeUnpaidInvoices({
        workspaceUniqueKey,
    }: {
        workspaceUniqueKey: string,
    }): CancelablePromise<HostedPage> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/workspaces/{workspace_unique_key}/subscription/unpaid_invoices/',
            path: {
                'workspace_unique_key': workspaceUniqueKey,
            },
        });
    }

}
