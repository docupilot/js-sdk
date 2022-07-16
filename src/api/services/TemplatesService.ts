/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CopyTemplate } from '../models/CopyTemplate';
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
        folder?: number,
        /** Which field to use when ordering the results. **/
        ordering?: string,
        outputType?: 'docx' | 'html' | 'jpeg' | 'pdf' | 'png' | 'pptx' | 'xlsx',
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
        requestBody: any,
    }): Promise<Template> {
        const result = await __request({
            method: 'POST',
            path: `/api/v2/templates/`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Get one template
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
     * Update template content
     * @returns Template
     * @throws ApiError
     */
    public static async updateTemplateContent({
        id,
        requestBody,
    }: {
        /** A unique integer value identifying this document. **/
        id: number,
        requestBody?: any,
    }): Promise<Template> {
        const result = await __request({
            method: 'PATCH',
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
     * Copy template including preferences, deliveries
     * @returns Template
     * @throws ApiError
     */
    public static async copyTemplate({
        id,
        requestBody,
    }: {
        /** A unique integer value identifying this document. **/
        id: number,
        requestBody: CopyTemplate,
    }): Promise<Template> {
        const result = await __request({
            method: 'POST',
            path: `/api/v2/templates/${id}/copy/`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Download template file
     * @returns any
     * @throws ApiError
     */
    public static async downloadTemplateFile({
        id,
    }: {
        /** A unique integer value identifying this document. **/
        id: number,
    }): Promise<any> {
        const result = await __request({
            method: 'GET',
            path: `/api/v2/templates/${id}/download/`,
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
     * List all templates
     * Will return all templates without pagination, excluding templates in trashed
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
     * List all templates in trash.
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