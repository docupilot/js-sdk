/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateEnvelopeRecipient } from '../models/CreateEnvelopeRecipient';
import type { EnvelopeRecipient } from '../models/EnvelopeRecipient';
import type { PaginatedEnvelopeRecipientList } from '../models/PaginatedEnvelopeRecipientList';
import type { PatchedUpdateEnvelopeRecipient } from '../models/PatchedUpdateEnvelopeRecipient';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import type { OmitReadonly } from '../core/utils/OmitReadonly';

export class EnvelopesRecipientsService {

    /**
     * Get list of envelope recipients
     * @returns PaginatedEnvelopeRecipientList
     * @throws ApiError
     */
    public static listEnvelopeRecipients({
        envelopeId,
        ordering,
        page,
        search,
    }: {
        envelopeId: string,
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
    }): CancelablePromise<PaginatedEnvelopeRecipientList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/dashboard/esign/envelopes/{envelope_id}/recipients/',
            path: {
                'envelope_id': envelopeId,
            },
            query: {
                'ordering': ordering,
                'page': page,
                'search': search,
            },
        });
    }

    /**
     * Create a new envelope recipient
     * @returns EnvelopeRecipient
     * @throws ApiError
     */
    public static createEnvelopeRecipient({
        envelopeId,
        requestBody,
    }: {
        envelopeId: string,
        requestBody: OmitReadonly<CreateEnvelopeRecipient>,
    }): CancelablePromise<EnvelopeRecipient> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/dashboard/esign/envelopes/{envelope_id}/recipients/',
            path: {
                'envelope_id': envelopeId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Partial update of envelope recipient
     * @returns EnvelopeRecipient
     * @throws ApiError
     */
    public static updateEnvelopeRecipient({
        envelopeId,
        id,
        requestBody,
    }: {
        envelopeId: string,
        id: string,
        requestBody?: OmitReadonly<PatchedUpdateEnvelopeRecipient>,
    }): CancelablePromise<EnvelopeRecipient> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/dashboard/esign/envelopes/{envelope_id}/recipients/{id}/',
            path: {
                'envelope_id': envelopeId,
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete an envelope recipient
     * @returns void
     * @throws ApiError
     */
    public static deleteEnvelopeRecipient({
        envelopeId,
        id,
    }: {
        envelopeId: string,
        id: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/dashboard/esign/envelopes/{envelope_id}/recipients/{id}/',
            path: {
                'envelope_id': envelopeId,
                'id': id,
            },
        });
    }

}
