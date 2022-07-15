/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BulkGen } from '../models/BulkGen';
import type { BulkGenData } from '../models/BulkGenData';
import type { PaginatedBulkGenList } from '../models/PaginatedBulkGenList';
import { request as __request } from '../core/request';

export class GenerateBulkService {

    /**
     * List bulk generation tasks
     * @returns PaginatedBulkGenList
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
    }): Promise<PaginatedBulkGenList> {
        const result = await __request({
            method: 'GET',
            path: `/api/v2/templates/${templateId}/generate/bulk/`,
            query: {
                'ordering': ordering,
                'page': page,
            },
        });
        return result.body;
    }

    /**
     * Get bulk generation task
     * @returns BulkGen
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
    }): Promise<BulkGen> {
        const result = await __request({
            method: 'GET',
            path: `/api/v2/templates/${templateId}/generate/bulk/${id}/`,
        });
        return result.body;
    }

    /**
     * Cancel a bulk generation task
     * @returns BulkGen
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
        requestBody?: BulkGen,
    }): Promise<BulkGen> {
        const result = await __request({
            method: 'PUT',
            path: `/api/v2/templates/${templateId}/generate/bulk/${id}/cancel/`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Get a task saved as draft
     * @returns BulkGenData
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
    }): Promise<BulkGenData> {
        const result = await __request({
            method: 'GET',
            path: `/api/v2/templates/${templateId}/generate/bulk/${id}/draft/`,
        });
        return result.body;
    }

    /**
     * Trigger a bulk generation task
     * @returns BulkGen
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
        requestBody?: BulkGen,
    }): Promise<BulkGen> {
        const result = await __request({
            method: 'PUT',
            path: `/api/v2/templates/${templateId}/generate/bulk/${id}/trigger/`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Upload a new csv for bulk generate.
     * This will create a task in DRAFT mode.
     * @returns BulkGenData
     * @throws ApiError
     */
    public static async uploadForBulkGeneration({
        templateId,
        requestBody,
    }: {
        /** Template id **/
        templateId: number,
        requestBody: any,
    }): Promise<BulkGenData> {
        const result = await __request({
            method: 'POST',
            path: `/api/v2/templates/${templateId}/generate/bulk/upload/`,
            body: requestBody,
        });
        return result.body;
    }

}