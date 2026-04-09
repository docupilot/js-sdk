/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BulkMoveEnvelopesResponse } from '../models/BulkMoveEnvelopesResponse';
import type { CreateEnvelope } from '../models/CreateEnvelope';
import type { CreateEnvelopeRecipient } from '../models/CreateEnvelopeRecipient';
import type { Envelope } from '../models/Envelope';
import type { EnvelopeBulkDownload } from '../models/EnvelopeBulkDownload';
import type { EnvelopeBulkMove } from '../models/EnvelopeBulkMove';
import type { EnvelopeDetails } from '../models/EnvelopeDetails';
import type { EnvelopeDocuments } from '../models/EnvelopeDocuments';
import type { EnvelopeFolderSharing } from '../models/EnvelopeFolderSharing';
import type { EnvelopeHistory } from '../models/EnvelopeHistory';
import type { EnvelopeRecipient } from '../models/EnvelopeRecipient';
import type { EnvelopeResponses } from '../models/EnvelopeResponses';
import type { EnvelopeStatusCountResponse } from '../models/EnvelopeStatusCountResponse';
import type { EnvelopeUpdate } from '../models/EnvelopeUpdate';
import type { EnvelopeVoid } from '../models/EnvelopeVoid';
import type { PaginatedEnvelopeBulkDownloadList } from '../models/PaginatedEnvelopeBulkDownloadList';
import type { PaginatedEnvelopeList } from '../models/PaginatedEnvelopeList';
import type { PaginatedEnvelopeRecipientList } from '../models/PaginatedEnvelopeRecipientList';
import type { PatchedEnvelopeDocumentsUpdate } from '../models/PatchedEnvelopeDocumentsUpdate';
import type { PatchedEnvelopeUpdate } from '../models/PatchedEnvelopeUpdate';
import type { PatchedUpdateEnvelopeFolderSharing } from '../models/PatchedUpdateEnvelopeFolderSharing';
import type { PatchedUpdateEnvelopeRecipient } from '../models/PatchedUpdateEnvelopeRecipient';
import type { SendEnvelopeViaEmail } from '../models/SendEnvelopeViaEmail';
import type { SigningLinkResponse } from '../models/SigningLinkResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import type { OmitReadonly } from '../core/utils/OmitReadonly';

export class EsignService {

    /**
     * Get created envelope export
     * @returns PaginatedEnvelopeBulkDownloadList
     * @throws ApiError
     */
    public static getCreatedEnvelopeExport({
        page,
    }: {
        /**
         * A page number within the paginated result set.
         */
        page?: number,
    }): CancelablePromise<PaginatedEnvelopeBulkDownloadList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/dashboard/esign/envelope-exports/',
            query: {
                'page': page,
            },
        });
    }

    /**
     * Create envelope export task
     * @returns EnvelopeBulkDownload
     * @throws ApiError
     */
    public static createEnvelopeExportTask({
        status,
        requestBody,
    }: {
        /**
         * Status filter
         */
        status?: 'completed' | 'created' | 'declined' | 'pending' | 'voided' | 'waiting_for_me',
        requestBody?: OmitReadonly<EnvelopeBulkDownload>,
    }): CancelablePromise<EnvelopeBulkDownload> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/dashboard/esign/envelope-exports/',
            query: {
                'status': status,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * download generated export envelopes if available
     * @returns binary Download the exported envelopes as a ZIP file
     * @throws ApiError
     */
    public static downloadCreatedExportEnvelopes({
        id,
    }: {
        id: number,
    }): CancelablePromise<Blob> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/dashboard/esign/envelope-exports/{id}/download/',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Get list of envelopes
     * @returns PaginatedEnvelopeList
     * @throws ApiError
     */
    public static listEnvelopes({
        folder,
        ordering,
        page,
        search,
        status,
    }: {
        /**
         * Filter by folder id
         */
        folder?: number,
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
                'folder': folder,
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
     * Update envelope document
     * @returns EnvelopeDocuments
     * @throws ApiError
     */
    public static updateEnvelopeDocument({
        envelopeId,
        id,
        requestBody,
    }: {
        envelopeId: string,
        id: string,
        requestBody?: OmitReadonly<PatchedEnvelopeDocumentsUpdate>,
    }): CancelablePromise<EnvelopeDocuments> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/dashboard/esign/envelopes/{envelope_id}/documents/{id}/',
            path: {
                'envelope_id': envelopeId,
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

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
     * Copy an envelope
     * @returns EnvelopeDetails
     * @throws ApiError
     */
    public static copyEnvelope({
        id,
    }: {
        /**
         * A unique integer value identifying this envelope.
         */
        id: number,
    }): CancelablePromise<EnvelopeDetails> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/dashboard/esign/envelopes/{id}/copy/',
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
     * Bulk move envelopes across folders
     * @returns BulkMoveEnvelopesResponse
     * @throws ApiError
     */
    public static bulkMoveEnvelopes({
        requestBody,
    }: {
        requestBody?: OmitReadonly<EnvelopeBulkMove>,
    }): CancelablePromise<BulkMoveEnvelopesResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/dashboard/esign/envelopes/bulk-move/',
            body: requestBody,
            mediaType: 'application/json',
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

    /**
     * Get all shared permissions for specific signature folder
     * @returns EnvelopeFolderSharing
     * @throws ApiError
     */
    public static listEsignFolderSharing({
        folderId,
    }: {
        folderId: number,
    }): CancelablePromise<Array<EnvelopeFolderSharing>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/dashboard/esign/folders/{folder_id}/permissions/',
            path: {
                'folder_id': folderId,
            },
        });
    }

    /**
     * Create signature folder sharing permission
     * @returns EnvelopeFolderSharing
     * @throws ApiError
     */
    public static createEsignFolderSharingPermission({
        folderId,
        requestBody,
    }: {
        folderId: number,
        requestBody: Array<EnvelopeFolderSharing>,
    }): CancelablePromise<Array<EnvelopeFolderSharing>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/dashboard/esign/folders/{folder_id}/permissions/',
            path: {
                'folder_id': folderId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get specific permission details for given signature folder
     * @returns EnvelopeFolderSharing
     * @throws ApiError
     */
    public static getEsignFolderSharing({
        folderId,
        id,
    }: {
        folderId: number,
        /**
         * A unique integer value identifying this envelope folder sharing setting.
         */
        id: number,
    }): CancelablePromise<EnvelopeFolderSharing> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/dashboard/esign/folders/{folder_id}/permissions/{id}/',
            path: {
                'folder_id': folderId,
                'id': id,
            },
        });
    }

    /**
     * Update signature folder sharing permission partially
     * @returns EnvelopeFolderSharing
     * @throws ApiError
     */
    public static updateEsignFolderSharingPermission({
        folderId,
        id,
        requestBody,
    }: {
        folderId: number,
        /**
         * A unique integer value identifying this envelope folder sharing setting.
         */
        id: number,
        requestBody?: OmitReadonly<PatchedUpdateEnvelopeFolderSharing>,
    }): CancelablePromise<EnvelopeFolderSharing> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/dashboard/esign/folders/{folder_id}/permissions/{id}/',
            path: {
                'folder_id': folderId,
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Revoke signature folder sharing permission
     * @returns void
     * @throws ApiError
     */
    public static revokeEsignFolderSharingPermission({
        folderId,
        id,
    }: {
        folderId: number,
        /**
         * A unique integer value identifying this envelope folder sharing setting.
         */
        id: number,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/dashboard/esign/folders/{folder_id}/permissions/{id}/',
            path: {
                'folder_id': folderId,
                'id': id,
            },
        });
    }

}
