/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ESignSettings } from '../models/ESignSettings';
import type { ESignWebhook } from '../models/ESignWebhook';
import type { ESignWebhookEventLog } from '../models/ESignWebhookEventLog';
import type { GenerateHMACSecretResponse } from '../models/GenerateHMACSecretResponse';
import type { PaginatedESignWebhookEventLogList } from '../models/PaginatedESignWebhookEventLogList';
import type { PaginatedESignWebhookList } from '../models/PaginatedESignWebhookList';
import type { PatchedESignSettings } from '../models/PatchedESignSettings';
import type { PatchedESignWebhook } from '../models/PatchedESignWebhook';
import type { TestWebhookEventResponse } from '../models/TestWebhookEventResponse';
import type { TestWebhookPayload } from '../models/TestWebhookPayload';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import type { OmitReadonly } from '../core/utils/OmitReadonly';

export class EsignSettingsService {

    /**
     * Get signature general settings
     * @returns ESignSettings
     * @throws ApiError
     */
    public static getSignatureGeneralSettings(): CancelablePromise<Array<ESignSettings>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/dashboard/esign/global-settings/general/',
        });
    }

    /**
     * Update signature general settings
     * @returns ESignSettings
     * @throws ApiError
     */
    public static updateSignatureGeneralSettings({
        requestBody,
    }: {
        requestBody?: OmitReadonly<PatchedESignSettings>,
    }): CancelablePromise<ESignSettings> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/dashboard/esign/global-settings/general/update/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get list of webhooks
     * @returns PaginatedESignWebhookList
     * @throws ApiError
     */
    public static listEsignWebhooks({
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
    }): CancelablePromise<PaginatedESignWebhookList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/dashboard/esign/global-settings/webhooks/',
            query: {
                'ordering': ordering,
                'page': page,
                'search': search,
            },
        });
    }

    /**
     * Create a new webhook
     * @returns ESignWebhook
     * @throws ApiError
     */
    public static createEsignWebhook({
        requestBody,
    }: {
        requestBody: OmitReadonly<ESignWebhook>,
    }): CancelablePromise<ESignWebhook> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/dashboard/esign/global-settings/webhooks/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Partial update of an webhook
     * @returns ESignWebhook
     * @throws ApiError
     */
    public static updateEsignWebhook({
        id,
        requestBody,
    }: {
        id: string,
        requestBody?: OmitReadonly<PatchedESignWebhook>,
    }): CancelablePromise<ESignWebhook> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/dashboard/esign/global-settings/webhooks/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete an webhook
     * @returns void
     * @throws ApiError
     */
    public static deleteEsignWebhook({
        id,
    }: {
        id: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/dashboard/esign/global-settings/webhooks/{id}/',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Get list of webhook events
     * @returns PaginatedESignWebhookEventLogList
     * @throws ApiError
     */
    public static listEsignWebhookEvents({
        webhookId,
        event,
        ordering,
        page,
        search,
        statusCode,
    }: {
        webhookId: string,
        /**
         * Filter by event
         */
        event?: Array<'envelope_completed' | 'envelope_expired' | 'envelope_voided' | 'recipient_declined' | 'recipient_signed' | 'recipient_viewed'>,
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
         * Filter by status code
         */
        statusCode?: 'failure' | 'success',
    }): CancelablePromise<PaginatedESignWebhookEventLogList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/dashboard/esign/global-settings/webhooks/{webhook_id}/events/',
            path: {
                'webhook_id': webhookId,
            },
            query: {
                'event': event,
                'ordering': ordering,
                'page': page,
                'search': search,
                'status_code': statusCode,
            },
        });
    }

    /**
     * Retry webhook event
     * @returns ESignWebhookEventLog
     * @throws ApiError
     */
    public static retryWebhookEvent({
        id,
        webhookId,
    }: {
        id: string,
        webhookId: string,
    }): CancelablePromise<ESignWebhookEventLog> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/dashboard/esign/global-settings/webhooks/{webhook_id}/events/{id}/retry/',
            path: {
                'id': id,
                'webhook_id': webhookId,
            },
        });
    }

    /**
     * Generate HMAC secret
     * @returns GenerateHMACSecretResponse
     * @throws ApiError
     */
    public static generateHmacSecret(): CancelablePromise<GenerateHMACSecretResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/dashboard/esign/global-settings/webhooks/generate-hmac-secret/',
        });
    }

    /**
     * Send test event to webhook
     * @returns TestWebhookEventResponse
     * @throws ApiError
     */
    public static sendTestEvent({
        requestBody,
    }: {
        requestBody: OmitReadonly<TestWebhookPayload>,
    }): CancelablePromise<TestWebhookEventResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/dashboard/esign/global-settings/webhooks/send-test-event/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
