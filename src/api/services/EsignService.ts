/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Envelope } from '../models/Envelope';
import type { EnvelopeDetails } from '../models/EnvelopeDetails';
import type { PaginatedEnvelopeList } from '../models/PaginatedEnvelopeList';
import type { PatchedEnvelopeUpdate } from '../models/PatchedEnvelopeUpdate';
import type { SendEnvelopeViaEmail } from '../models/SendEnvelopeViaEmail';

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
        status?: 'completed' | 'created' | 'declined' | 'pending' | 'voided',
    }): CancelablePromise<PaginatedEnvelopeList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/esign/envelopes/',
            query: {
                'ordering': ordering,
                'page': page,
                'search': search,
                'status': status,
            },
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
            url: '/esign/envelopes/{id}/',
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
            url: '/esign/envelopes/{id}/',
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
    }: {
        /**
         * A unique integer value identifying this envelope.
         */
        id: number,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/esign/envelopes/{id}/cancel/',
            path: {
                'id': id,
            },
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
            url: '/esign/envelopes/{id}/details/',
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
        id,
        format,
        history,
    }: {
        /**
         * A unique integer value identifying this envelope.
         */
        id: number,
        format?: 'json' | 'octet-stream',
        /**
         * Whether to include history in the response
         */
        history?: boolean,
    }): CancelablePromise<Blob> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/esign/envelopes/{id}/download/',
            path: {
                'id': id,
            },
            query: {
                'format': format,
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
            url: '/esign/envelopes/{id}/email_copy/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * envelope history
     * @returns Envelope
     * @throws ApiError
     */
    public static envelopeHistory({
        id,
    }: {
        /**
         * A unique integer value identifying this envelope.
         */
        id: number,
    }): CancelablePromise<Envelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/esign/envelopes/{id}/history/',
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
            url: '/esign/envelopes/{id}/permanent_delete/',
            path: {
                'id': id,
            },
        });
    }

    /**
     * preview Envelope
     * @returns Envelope
     * @throws ApiError
     */
    public static previewEnvelope({
        id,
    }: {
        /**
         * A unique integer value identifying this envelope.
         */
        id: number,
    }): CancelablePromise<Envelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/esign/envelopes/{id}/preview/',
            path: {
                'id': id,
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
            url: '/esign/envelopes/{id}/restore/',
            path: {
                'id': id,
            },
        });
    }

    /**
     * List all envelopes in trash.
     * @returns Envelope
     * @throws ApiError
     */
    public static listTrashedEnvelopes(): CancelablePromise<Envelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/esign/envelopes/trash/',
        });
    }

}
