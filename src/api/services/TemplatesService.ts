/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CopyTemplate } from '../models/CopyTemplate';
import type { MoveTemplate } from '../models/MoveTemplate';
import type { NewTemplate } from '../models/NewTemplate';
import type { PaginatedTemplateList } from '../models/PaginatedTemplateList';
import type { PatchedUpdateNewTemplate } from '../models/PatchedUpdateNewTemplate';
import type { PatchedUpdateTemplateSharing } from '../models/PatchedUpdateTemplateSharing';
import type { SharingInfoTemplate } from '../models/SharingInfoTemplate';
import type { Template } from '../models/Template';
import type { TemplateCount } from '../models/TemplateCount';
import type { TemplateSchema } from '../models/TemplateSchema';
import type { TemplateSharing } from '../models/TemplateSharing';
import type { UploadTemplateImage } from '../models/UploadTemplateImage';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import { OmitReadonly } from '../core/utils/OmitReadonly';

export class TemplatesService {

    /**
     * Get list of templates
     * @returns PaginatedTemplateList
     * @throws ApiError
     */
    public static listTemplates({
        folder,
        ordering,
        outputType,
        page,
        search,
        status,
        type,
    }: {
        folder?: number,
        /**
         * Which field to use when ordering the results.
         */
        ordering?: string,
        outputType?: 'docx' | 'html' | 'jpeg' | 'pdf' | 'png' | 'pptx' | 'xlsx',
        /**
         * A page number within the paginated result set.
         */
        page?: number,
        /**
         * A search term.
         */
        search?: string,
        status?: 'active' | 'test',
        type?: 'docx' | 'fillable_pdf' | 'g_document' | 'g_presentation' | 'g_spreadsheet' | 'html' | 'pptx' | 'xlsx',
    }): CancelablePromise<PaginatedTemplateList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/templates/',
            query: {
                'folder': folder,
                'ordering': ordering,
                'output_type': outputType,
                'page': page,
                'search': search,
                'status': status,
                'type': type,
            },
        });
    }

    /**
     * Create template
     * @returns Template
     * @throws ApiError
     */
    public static createTemplate({
        formData,
    }: {
        formData: OmitReadonly<NewTemplate>,
    }): CancelablePromise<Template> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/templates/',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Get one template
     * @returns Template
     * @throws ApiError
     */
    public static getTemplate({
        id,
    }: {
        /**
         * A unique integer value identifying this document.
         */
        id: number,
    }): CancelablePromise<Template> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/templates/{id}/',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Update template
     * @returns Template
     * @throws ApiError
     */
    public static updateTemplate({
        id,
        requestBody,
    }: {
        /**
         * A unique integer value identifying this document.
         */
        id: number,
        requestBody: OmitReadonly<Template>,
    }): CancelablePromise<Template> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/templates/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Update template content
     * @returns Template
     * @throws ApiError
     */
    public static updateTemplateContent({
        id,
        formData,
    }: {
        /**
         * A unique integer value identifying this document.
         */
        id: number,
        formData?: OmitReadonly<PatchedUpdateNewTemplate>,
    }): CancelablePromise<Template> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v2/templates/{id}/',
            path: {
                'id': id,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Move template to trash
     * @returns void
     * @throws ApiError
     */
    public static trashTemplate({
        id,
    }: {
        /**
         * A unique integer value identifying this document.
         */
        id: number,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/templates/{id}/',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Copy template including preferences, deliveries
     * @returns Template
     * @throws ApiError
     */
    public static copyTemplate({
        id,
        requestBody,
    }: {
        /**
         * A unique integer value identifying this document.
         */
        id: number,
        requestBody: OmitReadonly<CopyTemplate>,
    }): CancelablePromise<Template> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/templates/{id}/copy/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Download template file
     * @returns binary
     * @throws ApiError
     */
    public static downloadTemplateFile({
        id,
    }: {
        /**
         * A unique integer value identifying this document.
         */
        id: number,
    }): CancelablePromise<Blob> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/templates/{id}/download/',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Upload inline image of template
     * @returns any No response body
     * @throws ApiError
     */
    public static uploadInlineImageOfTemplate({
        id,
        formData,
    }: {
        /**
         * A unique integer value identifying this document.
         */
        id: number,
        formData: OmitReadonly<UploadTemplateImage>,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/templates/{id}/inline_image/',
            path: {
                'id': id,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Delete a template permanently from trash
     * @returns void
     * @throws ApiError
     */
    public static deleteTemplatePermanently({
        id,
    }: {
        /**
         * A unique integer value identifying this document.
         */
        id: number,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/templates/{id}/permanent_delete/',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Restore a template from trash
     * @returns Template
     * @throws ApiError
     */
    public static restoreTemplateFromTrash({
        id,
        requestBody,
    }: {
        /**
         * A unique integer value identifying this document.
         */
        id: number,
        requestBody: OmitReadonly<Template>,
    }): CancelablePromise<Template> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/templates/{id}/restore/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get template schema
     * @returns TemplateSchema
     * @throws ApiError
     */
    public static getTemplateSchema({
        id,
    }: {
        /**
         * A unique integer value identifying this document.
         */
        id: number,
    }): CancelablePromise<TemplateSchema> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/templates/{id}/schema/',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Get template split schema
     * @returns Template
     * @throws ApiError
     */
    public static getDetailedTemplateSchema({
        id,
    }: {
        /**
         * A unique integer value identifying this document.
         */
        id: number,
    }): CancelablePromise<Template> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/templates/{id}/schema/detail/',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Get all shared permissions for specific template
     * @returns TemplateSharing
     * @throws ApiError
     */
    public static listTemplateSharing({
        templateId,
        ordering,
        search,
    }: {
        templateId: number,
        /**
         * Which field to use when ordering the results.
         */
        ordering?: string,
        /**
         * A search term.
         */
        search?: string,
    }): CancelablePromise<Array<TemplateSharing>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/templates/{template_id}/permissions/',
            path: {
                'template_id': templateId,
            },
            query: {
                'ordering': ordering,
                'search': search,
            },
        });
    }

    /**
     * Create template sharing permission
     * @returns TemplateSharing
     * @throws ApiError
     */
    public static createTemplateSharingPermission({
        templateId,
        requestBody,
    }: {
        templateId: number,
        requestBody: OmitReadonly<TemplateSharing>,
    }): CancelablePromise<TemplateSharing> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/templates/{template_id}/permissions/',
            path: {
                'template_id': templateId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get specific permission details for given template
     * @returns TemplateSharing
     * @throws ApiError
     */
    public static getTemplateSharing({
        id,
        templateId,
    }: {
        /**
         * A unique integer value identifying this template sharing setting.
         */
        id: number,
        templateId: number,
    }): CancelablePromise<TemplateSharing> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/templates/{template_id}/permissions/{id}/',
            path: {
                'id': id,
                'template_id': templateId,
            },
        });
    }

    /**
     * Update template content partially
     * @returns TemplateSharing
     * @throws ApiError
     */
    public static updateTemplateSharingPermissionContent({
        id,
        templateId,
        requestBody,
    }: {
        /**
         * A unique integer value identifying this template sharing setting.
         */
        id: number,
        templateId: number,
        requestBody?: OmitReadonly<PatchedUpdateTemplateSharing>,
    }): CancelablePromise<TemplateSharing> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v2/templates/{template_id}/permissions/{id}/',
            path: {
                'id': id,
                'template_id': templateId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Revoke template sharing permission
     * @returns void
     * @throws ApiError
     */
    public static revokeTemplateSharingPermission({
        id,
        templateId,
    }: {
        /**
         * A unique integer value identifying this template sharing setting.
         */
        id: number,
        templateId: number,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/templates/{template_id}/permissions/{id}/',
            path: {
                'id': id,
                'template_id': templateId,
            },
        });
    }

    /**
     * List all templates
     * Will return all templates without pagination, excluding templates in trashed
     * @returns Template
     * @throws ApiError
     */
    public static listAllTemplates(): CancelablePromise<Array<Template>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/templates/all/',
        });
    }

    /**
     * Get the count of templates created by the user.
     * @returns TemplateCount
     * @throws ApiError
     */
    public static getUserCreatedTemplatesCount({
        ownerId,
    }: {
        /**
         * Owner Id of resource
         */
        ownerId: string,
    }): CancelablePromise<TemplateCount> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/templates/count/',
            query: {
                'owner_id': ownerId,
            },
        });
    }

    /**
     * Move templates to another folder
     * @returns Template
     * @throws ApiError
     */
    public static moveTemplatesToAnotherFolder({
        requestBody,
    }: {
        requestBody: OmitReadonly<MoveTemplate>,
    }): CancelablePromise<Template> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/templates/move/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns SharingInfoTemplate
     * @throws ApiError
     */
    public static templatesSharingStatusRetrieve(): CancelablePromise<SharingInfoTemplate> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/templates/sharing_status/',
        });
    }

    /**
     * List all templates in trash.
     * @returns Template
     * @throws ApiError
     */
    public static listTrashedTemplates(): CancelablePromise<Template> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/templates/trash/',
        });
    }

}
