/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EnvelopeField } from '../models/EnvelopeField';
import type { PatchedEnvelopeField } from '../models/PatchedEnvelopeField';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import type { OmitReadonly } from '../core/utils/OmitReadonly';

export class EnvelopeFieldsService {

    /**
     * Get envelope fields
     * @returns EnvelopeField
     * @throws ApiError
     */
    public static getEnvelopeFields({
        documentId,
        envelopeId,
        ordering,
        search,
    }: {
        documentId: string,
        envelopeId: string,
        /**
         * Which field to use when ordering the results.
         */
        ordering?: string,
        /**
         * A search term.
         */
        search?: string,
    }): CancelablePromise<Array<EnvelopeField>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/dashboard/esign/envelopes/{envelope_id}/fields/',
            path: {
                'envelope_id': envelopeId,
            },
            query: {
                'document_id': documentId,
                'ordering': ordering,
                'search': search,
            },
        });
    }

    /**
     * Create a new envelope field
     * @returns EnvelopeField
     * @throws ApiError
     */
    public static createEnvelopeField({
        documentId,
        envelopeId,
        recipientId,
        requestBody,
    }: {
        documentId: string,
        envelopeId: string,
        recipientId: string,
        requestBody: OmitReadonly<EnvelopeField>,
    }): CancelablePromise<EnvelopeField> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/dashboard/esign/envelopes/{envelope_id}/fields/',
            path: {
                'envelope_id': envelopeId,
            },
            query: {
                'document_id': documentId,
                'recipient_id': recipientId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get envelope field
     * @returns EnvelopeField
     * @throws ApiError
     */
    public static getEnvelopeField({
        documentId,
        envelopeId,
        id,
    }: {
        documentId: string,
        envelopeId: string,
        id: string,
    }): CancelablePromise<EnvelopeField> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/dashboard/esign/envelopes/{envelope_id}/fields/{id}/',
            path: {
                'envelope_id': envelopeId,
                'id': id,
            },
            query: {
                'document_id': documentId,
            },
        });
    }

    /**
     * Update envelope field
     * @returns EnvelopeField
     * @throws ApiError
     */
    public static updateEnvelopeField({
        documentId,
        envelopeId,
        id,
        requestBody,
    }: {
        documentId: string,
        envelopeId: string,
        id: string,
        requestBody: OmitReadonly<EnvelopeField>,
    }): CancelablePromise<EnvelopeField> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/dashboard/esign/envelopes/{envelope_id}/fields/{id}/',
            path: {
                'envelope_id': envelopeId,
                'id': id,
            },
            query: {
                'document_id': documentId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Partial update of envelope field
     * @returns EnvelopeField
     * @throws ApiError
     */
    public static partialUpdateEnvelopeField({
        documentId,
        envelopeId,
        id,
        requestBody,
    }: {
        documentId: string,
        envelopeId: string,
        id: string,
        requestBody?: OmitReadonly<PatchedEnvelopeField>,
    }): CancelablePromise<EnvelopeField> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/dashboard/esign/envelopes/{envelope_id}/fields/{id}/',
            path: {
                'envelope_id': envelopeId,
                'id': id,
            },
            query: {
                'document_id': documentId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete envelope field
     * @returns void
     * @throws ApiError
     */
    public static deleteEnvelopeField({
        documentId,
        envelopeId,
        id,
    }: {
        documentId: string,
        envelopeId: string,
        id: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/dashboard/esign/envelopes/{envelope_id}/fields/{id}/',
            path: {
                'envelope_id': envelopeId,
                'id': id,
            },
            query: {
                'document_id': documentId,
            },
        });
    }

}
