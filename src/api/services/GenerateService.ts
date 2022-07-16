/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DocumentMergeLink } from '../models/DocumentMergeLink';
import type { Template } from '../models/Template';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class GenerateService {

    /**
     * Generate document from template
     * @returns Template
     * @throws ApiError
     */
    public static generateDocument({
        id,
        requestBody,
        download,
    }: {
        /**
         * A unique integer value identifying this document.
         */
        id: number,
        requestBody: Template,
        download?: 'false' | 'file' | 'true',
    }): CancelablePromise<Template> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/templates/{id}/generate/',
            path: {
                'id': id,
            },
            query: {
                'download': download,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Test document generation
     * @returns Template
     * @throws ApiError
     */
    public static testDocumentGeneration({
        id,
        requestBody,
    }: {
        /**
         * A unique integer value identifying this document.
         */
        id: number,
        requestBody: Template,
    }): CancelablePromise<Template> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/templates/{id}/test/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get test data used for testing template
     * @returns Template
     * @throws ApiError
     */
    public static getTestData({
        id,
    }: {
        /**
         * A unique integer value identifying this document.
         */
        id: number,
    }): CancelablePromise<Template> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/templates/{id}/test_data/',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Get document create link path
     * URL to create document will be {host}/{path}
     * @returns DocumentMergeLink
     * @throws ApiError
     */
    public static listGenerationLinks({
        templateId,
    }: {
        templateId: number,
    }): CancelablePromise<Array<DocumentMergeLink>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/templates/{template_id}/merge_links/',
            path: {
                'template_id': templateId,
            },
        });
    }

}
