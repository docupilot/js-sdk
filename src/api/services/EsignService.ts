/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateEnvelope } from '../models/CreateEnvelope';
import type { Envelope } from '../models/Envelope';
import type { EnvelopeDetails } from '../models/EnvelopeDetails';
import type { EnvelopeHistory } from '../models/EnvelopeHistory';
import type { EnvelopeResponses } from '../models/EnvelopeResponses';
import type { EnvelopeStatusCountResponse } from '../models/EnvelopeStatusCountResponse';
import type { EnvelopeUpdate } from '../models/EnvelopeUpdate';
import type { EnvelopeVoid } from '../models/EnvelopeVoid';
import type { PaginatedEnvelopeList } from '../models/PaginatedEnvelopeList';
import type { PatchedEnvelopeUpdate } from '../models/PatchedEnvelopeUpdate';
import type { SendEnvelopeViaEmail } from '../models/SendEnvelopeViaEmail';
import type { SigningLinkResponse } from '../models/SigningLinkResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import type { OmitReadonly } from '../core/utils/OmitReadonly';

export class EsignService {

    /**
     * Get list of envelopes
     * @returns PaginatedEnvelopeList
     * @throws ApiError
     */
    public static listEnvelopes({
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
         * Filter by status
         */
        status?: Array<'completed' | 'created' | 'declined' | 'pending' | 'voided' | 'waiting_for_me'>,
    }): CancelablePromise<PaginatedEnvelopeList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/dashboard/esign/envelopes/',
            query: {
                'ordering': ordering,
                'page': page,
                'search': search,
                'status': status,
            },
        });
    }

    /**
     * Create a new envelope
     * @returns Envelope
     * @throws ApiError
     */
    public static createEnvelope({
        formData,
    }: {
        formData: OmitReadonly<CreateEnvelope>,
    }): CancelablePromise<Envelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/dashboard/esign/envelopes/',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Update envelope config
     * @returns Envelope
     * @throws ApiError
     */
    public static updateEnvelopeConfig({
        id,
        requestBody,
    }: {
        /**
         * A unique integer value identifying this envelope.
         */
        id: number,
        requestBody?: OmitReadonly<PatchedEnvelopeUpdate>,
    }): CancelablePromise<Envelope> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/dashboard/esign/envelopes/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Move envelope to trash
     * @returns void
     * @throws ApiError
     */
    public static trashEnvelope({
        id,
    }: {
        /**
         * A unique integer value identifying this envelope.
         */
        id: number,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/dashboard/esign/envelopes/{id}/',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Cancel an Envelope
     * @returns void
     * @throws ApiError
     */
    public static cancelEnvelope({
        id,
        requestBody,
    }: {
        /**
         * A unique integer value identifying this envelope.
         */
        id: number,
        requestBody: OmitReadonly<EnvelopeVoid>,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/dashboard/esign/envelopes/{id}/cancel/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * details of an envelope
     * @returns EnvelopeDetails
     * @throws ApiError
     */
    public static envelopeDetails({
        id,
    }: {
        /**
         * A unique integer value identifying this envelope.
         */
        id: number,
    }): CancelablePromise<EnvelopeDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/dashboard/esign/envelopes/{id}/details/',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Download envelope file
     * @returns binary
     * @throws ApiError
     */
    public static downloadEnvelopeFile({
        documentId,
        id,
    }: {
        documentId: string,
        /**
         * A unique integer value identifying this envelope.
         */
        id: number,
    }): CancelablePromise<Blob> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/dashboard/esign/envelopes/{id}/documents/{document_id}/download/',
            path: {
                'document_id': documentId,
                'id': id,
            },
        });
    }

    /**
     * Preview Envelope
     * @returns binary
     * @throws ApiError
     */
    public static previewEnvelope({
        documentId,
        id,
        format,
    }: {
        documentId: string,
        /**
         * A unique integer value identifying this envelope.
         */
        id: number,
        format?: 'json' | 'pdf',
    }): CancelablePromise<Blob> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/dashboard/esign/envelopes/{id}/documents/{document_id}/preview/',
            path: {
                'document_id': documentId,
                'id': id,
            },
            query: {
                'format': format,
            },
        });
    }

    /**
     * Download all envelope documents
     * @returns binary
     * @throws ApiError
     */
    public static downloadEnvelope({
        id,
        history,
    }: {
        /**
         * A unique integer value identifying this envelope.
         */
        id: number,
        /**
         * Whether to include history in the response
         */
        history?: boolean,
    }): CancelablePromise<Blob> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/dashboard/esign/envelopes/{id}/download/',
            path: {
                'id': id,
            },
            query: {
                'history': history,
            },
        });
    }

    /**
     * send copy via email
     * @returns void
     * @throws ApiError
     */
    public static sendCopyViaEmail({
        id,
        requestBody,
    }: {
        /**
         * A unique integer value identifying this envelope.
         */
        id: number,
        requestBody: OmitReadonly<SendEnvelopeViaEmail>,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/dashboard/esign/envelopes/{id}/email_copy/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * envelope history
     * @returns EnvelopeHistory
     * @throws ApiError
     */
    public static envelopeHistory({
        id,
    }: {
        /**
         * A unique integer value identifying this envelope.
         */
        id: number,
    }): CancelablePromise<EnvelopeHistory> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/dashboard/esign/envelopes/{id}/history/',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Delete a envelope permanently from trash
     * @returns void
     * @throws ApiError
     */
    public static deleteEnvelopePermanently({
        id,
    }: {
        /**
         * A unique integer value identifying this envelope.
         */
        id: number,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/dashboard/esign/envelopes/{id}/permanent_delete/',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Get consolidated field responses for an envelope
     * @returns EnvelopeResponses
     * @throws ApiError
     */
    public static getEnvelopeResponses({
        id,
        recipientId,
    }: {
        /**
         * A unique integer value identifying this envelope.
         */
        id: number,
        /**
         * Filter responses by recipient id
         */
        recipientId?: string,
    }): CancelablePromise<EnvelopeResponses> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/dashboard/esign/envelopes/{id}/responses/',
            path: {
                'id': id,
            },
            query: {
                'recipient_id': recipientId,
            },
        });
    }

    /**
     * Restore a envelope from trash
     * @returns Envelope
     * @throws ApiError
     */
    public static restoreEnvelopeFromTrash({
        id,
    }: {
        /**
         * A unique integer value identifying this envelope.
         */
        id: number,
    }): CancelablePromise<Envelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/dashboard/esign/envelopes/{id}/restore/',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Send an Envelope
     * @returns void
     * @throws ApiError
     */
    public static sendEnvelope({
        id,
        requestBody,
    }: {
        /**
         * A unique integer value identifying this envelope.
         */
        id: number,
        requestBody?: OmitReadonly<EnvelopeUpdate>,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/dashboard/esign/envelopes/{id}/send/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Send a reminder for Envelope Signers
     * @returns void
     * @throws ApiError
     */
    public static sendReminder({
        id,
    }: {
        /**
         * A unique integer value identifying this envelope.
         */
        id: number,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/dashboard/esign/envelopes/{id}/send_reminder/',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Get signing link for the envelope (sender self-sign)
     * @returns SigningLinkResponse Signing link for the sender if available. Null otherwise.
     * @throws ApiError
     */
    public static getSigningLink({
        id,
    }: {
        /**
         * A unique integer value identifying this envelope.
         */
        id: number,
    }): CancelablePromise<SigningLinkResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/dashboard/esign/envelopes/{id}/signing-link/',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Get envelope count grouped by status
     * @returns EnvelopeStatusCountResponse Counts of envelopes grouped by status.
     * @throws ApiError
     */
    public static envelopeCountByStatus(): CancelablePromise<EnvelopeStatusCountResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/dashboard/esign/envelopes/count/',
        });
    }

    /**
     * List all envelopes in trash
     * @returns PaginatedEnvelopeList
     * @throws ApiError
     */
    public static listTrashedEnvelopes({
        page,
    }: {
        page?: number,
    }): CancelablePromise<PaginatedEnvelopeList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/dashboard/esign/envelopes/trash/',
            query: {
                'page': page,
            },
        });
    }

}
