/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelSubscriptionSurvey } from '../models/CancelSubscriptionSurvey';
import type { CancelSubscriptionSurveyResponse } from '../models/CancelSubscriptionSurveyResponse';
import type { ChargebeeSubscription } from '../models/ChargebeeSubscription';
import type { HostedPage } from '../models/HostedPage';
import type { PaginatedInvoiceList } from '../models/PaginatedInvoiceList';
import type { PatchedSubscriptionScheduleChange } from '../models/PatchedSubscriptionScheduleChange';
import type { PayUnpaidInvoices } from '../models/PayUnpaidInvoices';
import type { RenewSubscription } from '../models/RenewSubscription';
import type { Subscription } from '../models/Subscription';
import type { SubscriptionScheduleChange } from '../models/SubscriptionScheduleChange';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import type { OmitReadonly } from '../core/utils/OmitReadonly';

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
     * Extend trial
     * @returns void
     * @throws ApiError
     */
    public static extendTrial(): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/accounts/v2/subscription/extend_trial/',
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
     * @returns Subscription
     * @throws ApiError
     */
    public static cancelNewSubscription(): CancelablePromise<Subscription> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/accounts/v2/subscription/new/cancel_subscription/',
        });
    }

    /**
     * @returns CancelSubscriptionSurveyResponse
     * @throws ApiError
     */
    public static newSubscriptionCancelSubscriptionSurvey({
        requestBody,
    }: {
        requestBody: OmitReadonly<CancelSubscriptionSurvey>,
    }): CancelablePromise<CancelSubscriptionSurveyResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/accounts/v2/subscription/new/cancel_subscription_survey/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns Subscription
     * @throws ApiError
     */
    public static getNewSubscriptionDetails(): CancelablePromise<Subscription> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/accounts/v2/subscription/new/details/',
        });
    }

    /**
     * @returns binary
     * @throws ApiError
     */
    public static downloadNewSubscriptionInvoice({
        invoiceId,
    }: {
        invoiceId: string,
    }): CancelablePromise<Blob> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/accounts/v2/subscription/new/invoice/{invoice_id}/download/',
            path: {
                'invoice_id': invoiceId,
            },
        });
    }

    /**
     * @returns Subscription
     * @throws ApiError
     */
    public static getNewSubscriptionInvoicePreview({
        invoiceId,
    }: {
        invoiceId: string,
    }): CancelablePromise<Subscription> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/accounts/v2/subscription/new/invoice/{invoice_id}/preview/',
            path: {
                'invoice_id': invoiceId,
            },
        });
    }

    /**
     * @returns PaginatedInvoiceList
     * @throws ApiError
     */
    public static getNewSubscriptionInvoices({
        ordering,
        page,
        search,
        status,
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
        /**
         * Filter invoices by status (e.g., "paid", "unpaid").
         */
        status?: string,
    }): CancelablePromise<PaginatedInvoiceList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/accounts/v2/subscription/new/invoices/',
            query: {
                'ordering': ordering,
                'page': page,
                'search': search,
                'status': status,
            },
        });
    }

    /**
     * @returns any
     * @throws ApiError
     */
    public static payUnpaidInvoices({
        requestBody,
    }: {
        requestBody: OmitReadonly<PayUnpaidInvoices>,
    }): CancelablePromise<{
        success?: boolean;
        message?: string;
        paid_invoices?: Array<number>;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/accounts/v2/subscription/new/pay-invoices/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns SubscriptionScheduleChange
     * @throws ApiError
     */
    public static getNewSubscriptionScheduledChange(): CancelablePromise<SubscriptionScheduleChange> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/accounts/v2/subscription/new/scheduled_change/',
        });
    }

    /**
     * @returns SubscriptionScheduleChange
     * @throws ApiError
     */
    public static cancelScheduledSubscriptionChange({
        changeId,
        requestBody,
    }: {
        changeId: string,
        requestBody?: OmitReadonly<PatchedSubscriptionScheduleChange>,
    }): CancelablePromise<SubscriptionScheduleChange> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/accounts/v2/subscription/new/scheduled_change/{change_id}/cancel/',
            path: {
                'change_id': changeId,
            },
            body: requestBody,
            mediaType: 'application/json',
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

    /**
     * @returns any
     * @throws ApiError
     */
    public static resumeSubscription(): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/accounts/v2/subscription/resume/',
        });
    }

    /**
     * @returns HostedPage
     * @throws ApiError
     */
    public static getChargebeeUnpaidInvoices(): CancelablePromise<HostedPage> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/accounts/v2/subscription/unpaid_invoices/',
        });
    }

    /**
     * @returns HostedPage
     * @throws ApiError
     */
    public static getChargebeeUnpaidInvoices(): CancelablePromise<HostedPage> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/accounts/v2/subscription/unpaid_invoices/',
        });
    }

}
