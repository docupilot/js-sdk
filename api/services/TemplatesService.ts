/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BatchProcess } from '../models/BatchProcess';
import type { Delivery } from '../models/Delivery';
import type { FileInfo } from '../models/FileInfo';
import type { PaginatedBatchProcessList } from '../models/PaginatedBatchProcessList';
import type { PaginatedDeliveryList } from '../models/PaginatedDeliveryList';
import type { PaginatedDocumentMergeLinkList } from '../models/PaginatedDocumentMergeLinkList';
import type { PaginatedTemplateList } from '../models/PaginatedTemplateList';
import type { Template } from '../models/Template';
import { request as __request } from '../core/request';

export class TemplatesService {

    /**
     * Get list of templates
     * @returns PaginatedTemplateList
     * @throws ApiError
     */
    public static async listTemplates({
        folder,
        ordering,
        outputType,
        page,
        search,
        status,
        type,
    }: {
        folder?: number | null,
        /** Which field to use when ordering the results. **/
        ordering?: string,
        outputType?: 'docx' | 'jpeg' | 'pdf' | 'png',
        /** A page number within the paginated result set. **/
        page?: number,
        /** A search term. **/
        search?: string,
        status?: 'active' | 'test',
        type?: 'docx' | 'fillable_pdf' | 'g_document' | 'g_presentation' | 'g_spreadsheet' | 'html' | 'pptx' | 'xlsx',
    }): Promise<PaginatedTemplateList> {
        const result = await __request({
            method: 'GET',
            path: `/api/v2/templates/`,
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
        return result.body;
    }

    /**
     * Create template
     * @returns Template
     * @throws ApiError
     */
    public static async createTemplate({
        requestBody,
    }: {
        requestBody: Template,
    }): Promise<Template> {
        const result = await __request({
            method: 'POST',
            path: `/api/v2/templates/`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Get template
     * @returns Template
     * @throws ApiError
     */
    public static async getTemplate({
        id,
    }: {
        /** A unique integer value identifying this document. **/
        id: number,
    }): Promise<Template> {
        const result = await __request({
            method: 'GET',
            path: `/api/v2/templates/${id}/`,
        });
        return result.body;
    }

    /**
     * Update template
     * @returns Template
     * @throws ApiError
     */
    public static async updateTemplate({
        id,
        requestBody,
    }: {
        /** A unique integer value identifying this document. **/
        id: number,
        requestBody: Template,
    }): Promise<Template> {
        const result = await __request({
            method: 'PUT',
            path: `/api/v2/templates/${id}/`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Move template to trash
     * @returns any No response body
     * @throws ApiError
     */
    public static async trashTemplate({
        id,
    }: {
        /** A unique integer value identifying this document. **/
        id: number,
    }): Promise<any> {
        const result = await __request({
            method: 'DELETE',
            path: `/api/v2/templates/${id}/`,
        });
        return result.body;
    }

    /**
     * Get or update template content
     * @returns Template
     * @throws ApiError
     */
    public static async templatesContentRetrieve({
        id,
    }: {
        /** A unique integer value identifying this document. **/
        id: number,
    }): Promise<Template> {
        const result = await __request({
            method: 'GET',
            path: `/api/v2/templates/${id}/content/`,
        });
        return result.body;
    }

    /**
     * Get or update template content
     * @returns Template
     * @throws ApiError
     */
    public static async templatesContentCreate({
        id,
        requestBody,
    }: {
        /** A unique integer value identifying this document. **/
        id: number,
        requestBody: Template,
    }): Promise<Template> {
        const result = await __request({
            method: 'POST',
            path: `/api/v2/templates/${id}/content/`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Generate document from template
     * @returns Template
     * @throws ApiError
     */
    public static async generateDocument({
        id,
        requestBody,
        download,
        testMode,
    }: {
        /** A unique integer value identifying this document. **/
        id: number,
        requestBody: Template,
        download?: 'false' | 'file' | 'true',
        testMode?: boolean,
    }): Promise<Template> {
        const result = await __request({
            method: 'POST',
            path: `/api/v2/templates/${id}/generate/`,
            query: {
                'download': download,
                'test_mode': testMode,
            },
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Delete a template permanently from trash
     * @returns any No response body
     * @throws ApiError
     */
    public static async deleteTemplatePermanently({
        id,
    }: {
        /** A unique integer value identifying this document. **/
        id: number,
    }): Promise<any> {
        const result = await __request({
            method: 'DELETE',
            path: `/api/v2/templates/${id}/permanent_delete/`,
        });
        return result.body;
    }

    /**
     * Restore a template from trash
     * @returns Template
     * @throws ApiError
     */
    public static async restoreTemplateFromTrash({
        id,
        requestBody,
    }: {
        /** A unique integer value identifying this document. **/
        id: number,
        requestBody: Template,
    }): Promise<Template> {
        const result = await __request({
            method: 'PUT',
            path: `/api/v2/templates/${id}/restore/`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Get template schema
     * @returns Template
     * @throws ApiError
     */
    public static async getTemplateSchema({
        id,
    }: {
        /** A unique integer value identifying this document. **/
        id: number,
    }): Promise<Template> {
        const result = await __request({
            method: 'GET',
            path: `/api/v2/templates/${id}/schema/`,
        });
        return result.body;
    }

    /**
     * Get test data used for testing template
     * @returns Template
     * @throws ApiError
     */
    public static async getTestData({
        id,
    }: {
        /** A unique integer value identifying this document. **/
        id: number,
    }): Promise<Template> {
        const result = await __request({
            method: 'GET',
            path: `/api/v2/templates/${id}/test_data/`,
        });
        return result.body;
    }

    /**
     * List bulk generation tasks
     * @returns PaginatedBatchProcessList
     * @throws ApiError
     */
    public static async listBulkGenerationTasks({
        templateId,
        ordering,
        page,
    }: {
        templateId: number,
        /** Which field to use when ordering the results. **/
        ordering?: string,
        /** A page number within the paginated result set. **/
        page?: number,
    }): Promise<PaginatedBatchProcessList> {
        const result = await __request({
            method: 'GET',
            path: `/api/v2/templates/${templateId}/batch_processes/`,
            query: {
                'ordering': ordering,
                'page': page,
            },
        });
        return result.body;
    }

    /**
     * Get bulk generation task
     * @returns BatchProcess
     * @throws ApiError
     */
    public static async getBulkGenerationTask({
        id,
        templateId,
    }: {
        /** Task id **/
        id: number,
        /** Template id **/
        templateId: number,
    }): Promise<BatchProcess> {
        const result = await __request({
            method: 'GET',
            path: `/api/v2/templates/${templateId}/batch_processes/${id}/`,
        });
        return result.body;
    }

    /**
     * Cancel a bulk generation task
     * @returns BatchProcess
     * @throws ApiError
     */
    public static async cancelBulkGenerationTask({
        id,
        templateId,
        requestBody,
    }: {
        /** Task id **/
        id: number,
        /** Template id **/
        templateId: number,
        requestBody: BatchProcess,
    }): Promise<BatchProcess> {
        const result = await __request({
            method: 'PUT',
            path: `/api/v2/templates/${templateId}/batch_processes/${id}/cancel/`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Get a task saved as draft
     * @returns BatchProcess
     * @throws ApiError
     */
    public static async getBulkGenerationDraft({
        id,
        templateId,
    }: {
        /** Task id **/
        id: number,
        /** Template id **/
        templateId: number,
    }): Promise<BatchProcess> {
        const result = await __request({
            method: 'GET',
            path: `/api/v2/templates/${templateId}/batch_processes/${id}/draft/`,
        });
        return result.body;
    }

    /**
     * Trigger a bulk generation task
     * @returns BatchProcess
     * @throws ApiError
     */
    public static async triggerBulkGenerationDraft({
        id,
        templateId,
        requestBody,
    }: {
        /** Task id **/
        id: number,
        /** Template id **/
        templateId: number,
        requestBody: BatchProcess,
    }): Promise<BatchProcess> {
        const result = await __request({
            method: 'POST',
            path: `/api/v2/templates/${templateId}/batch_processes/${id}/trigger/`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Upload a new csv for bulk generate. This will create a task in DRAFT mode.
     * @returns BatchProcess
     * @throws ApiError
     */
    public static async uploadForBulkGeneration({
        templateId,
        requestBody,
    }: {
        /** Template id **/
        templateId: number,
        requestBody: BatchProcess,
    }): Promise<BatchProcess> {
        const result = await __request({
            method: 'POST',
            path: `/api/v2/templates/${templateId}/batch_processes/upload/`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Get deliveries configured under this template
     * @returns PaginatedDeliveryList
     * @throws ApiError
     */
    public static async listTemplateDeliveries({
        templateId,
        ordering,
        page,
    }: {
        templateId: number,
        /** Which field to use when ordering the results. **/
        ordering?: string,
        /** A page number within the paginated result set. **/
        page?: number,
    }): Promise<PaginatedDeliveryList> {
        const result = await __request({
            method: 'GET',
            path: `/api/v2/templates/${templateId}/deliveries/`,
            query: {
                'ordering': ordering,
                'page': page,
            },
        });
        return result.body;
    }

    /**
     * Create delivery
     * @returns Delivery
     * @throws ApiError
     */
    public static async createTemplateDelivery({
        templateId,
        requestBody,
    }: {
        templateId: number,
        requestBody: Delivery,
    }): Promise<Delivery> {
        const result = await __request({
            method: 'POST',
            path: `/api/v2/templates/${templateId}/deliveries/`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Get delivery
     * @returns Delivery
     * @throws ApiError
     */
    public static async retrieveTemplateDelivery({
        id,
        templateId,
    }: {
        /** A unique integer value identifying this delivery. **/
        id: number,
        templateId: number,
    }): Promise<Delivery> {
        const result = await __request({
            method: 'GET',
            path: `/api/v2/templates/${templateId}/deliveries/${id}/`,
        });
        return result.body;
    }

    /**
     * Update delivery
     * @returns Delivery
     * @throws ApiError
     */
    public static async updateTemplateDelivery({
        id,
        templateId,
        requestBody,
    }: {
        /** A unique integer value identifying this delivery. **/
        id: number,
        templateId: number,
        requestBody: Delivery,
    }): Promise<Delivery> {
        const result = await __request({
            method: 'PUT',
            path: `/api/v2/templates/${templateId}/deliveries/${id}/`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Delete delivery
     * @returns any No response body
     * @throws ApiError
     */
    public static async deleteTemplateDelivery({
        id,
        templateId,
    }: {
        /** A unique integer value identifying this delivery. **/
        id: number,
        templateId: number,
    }): Promise<any> {
        const result = await __request({
            method: 'DELETE',
            path: `/api/v2/templates/${templateId}/deliveries/${id}/`,
        });
        return result.body;
    }

    /**
     * Download template file
     * @returns FileInfo
     * @throws ApiError
     */
    public static async downloadTemplateFile({
        templateId,
    }: {
        templateId: number,
    }): Promise<FileInfo> {
        const result = await __request({
            method: 'GET',
            path: `/api/v2/templates/${templateId}/file_info/download/`,
        });
        return result.body;
    }

    /**
     * Get document create link parameters. URL to create document will be /documents/create/{path}
     * @returns PaginatedDocumentMergeLinkList
     * @throws ApiError
     */
    public static async listGenerationLinks({
        templateId,
        page,
    }: {
        templateId: number,
        /** A page number within the paginated result set. **/
        page?: number,
    }): Promise<PaginatedDocumentMergeLinkList> {
        const result = await __request({
            method: 'GET',
            path: `/api/v2/templates/${templateId}/merge_links/`,
            query: {
                'page': page,
            },
        });
        return result.body;
    }

    /**
     * List all templates, excluding trashed, without pagination.
     * @returns Template
     * @throws ApiError
     */
    public static async listAllTemplates(): Promise<Template> {
        const result = await __request({
            method: 'GET',
            path: `/api/v2/templates/all/`,
        });
        return result.body;
    }

    /**
     * List all trashed templates.
     * @returns Template
     * @throws ApiError
     */
    public static async listTrashedTemplates(): Promise<Template> {
        const result = await __request({
            method: 'GET',
            path: `/api/v2/templates/trash/`,
        });
        return result.body;
    }

}