/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DocumentMergeLink } from '../models/DocumentMergeLink';
import type { Template } from '../models/Template';
import { request as __request } from '../core/request';

export class GenerateService {

    /**
     * Generate document from template
     * @returns Template
     * @throws ApiError
     */
    public static async generateDocument({
        id,
        requestBody,
        download,
    }: {
        /** A unique integer value identifying this document. **/
        id: number,
        requestBody: Template,
        download?: 'false' | 'file' | 'true',
    }): Promise<Template> {
        const result = await __request({
            method: 'POST',
            path: `/api/v2/templates/${id}/generate/`,
            query: {
                'download': download,
            },
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Test document generation
     * @returns Template
     * @throws ApiError
     */
    public static async testDocumentGeneration({
        id,
        requestBody,
    }: {
        /** A unique integer value identifying this document. **/
        id: number,
        requestBody: Template,
    }): Promise<Template> {
        const result = await __request({
            method: 'POST',
            path: `/api/v2/templates/${id}/test/`,
            body: requestBody,
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
     * Get document create link path
     * URL to create document will be {host}/{path}
     * @returns DocumentMergeLink
     * @throws ApiError
     */
    public static async listGenerationLinks({
        templateId,
    }: {
        templateId: number,
    }): Promise<Array<DocumentMergeLink>> {
        const result = await __request({
            method: 'GET',
            path: `/api/v2/templates/${templateId}/merge_links/`,
        });
        return result.body;
    }

}