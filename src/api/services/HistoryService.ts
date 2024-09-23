/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ExportMergeHistory } from '../models/ExportMergeHistory';
import type { MergeHistory } from '../models/MergeHistory';
import type { PaginatedMergeHistoryList } from '../models/PaginatedMergeHistoryList';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import type { OmitReadonly } from '../core/utils/OmitReadonly';

export class HistoryService {

    /**
     * Get created documents history
     * @returns PaginatedMergeHistoryList
     * @throws ApiError
     */
    public static getCreatedDocumentsHistory({
        endDate,
        ordering,
        page,
        startDate,
        status,
        template,
    }: {
        /**
         * DateTime in this format: 2019-05-02 16:25:12.353000
         */
        endDate?: string,
        /**
         * Which field to use when ordering the results.
         */
        ordering?: string,
        /**
         * A page number within the paginated result set.
         */
        page?: number,
        /**
         * DateTime in this format: 2019-05-02 16:25:12.353000
         */
        startDate?: string,
        status?: 'error' | 'pending' | 'success',
        template?: number,
    }): CancelablePromise<PaginatedMergeHistoryList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/history/',
            query: {
                'end_date': endDate,
                'ordering': ordering,
                'page': page,
                'start_date': startDate,
                'status': status,
                'template': template,
            },
        });
    }

    /**
     * download generated document if available
     * @returns binary
     * @throws ApiError
     */
    public static downloadCreatedDocument({
        id,
    }: {
        /**
         * A unique integer value identifying this merge history.
         */
        id: number,
    }): CancelablePromise<Blob> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/history/{id}/download/',
            path: {
                'id': id,
            },
        });
    }

    /**
     * retry failed documents delivery
     * @returns MergeHistory
     * @throws ApiError
     */
    public static retryDelivery({
        id,
        requestBody,
    }: {
        /**
         * A unique integer value identifying this merge history.
         */
        id: number,
        requestBody: OmitReadonly<MergeHistory>,
    }): CancelablePromise<MergeHistory> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/history/{id}/retry_delivery/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get created export history
     * @returns ExportMergeHistory
     * @throws ApiError
     */
    public static getCreatedExportMergeHistory({
        ordering,
    }: {
        /**
         * Which field to use when ordering the results.
         */
        ordering?: string,
    }): CancelablePromise<Array<ExportMergeHistory>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/history/export/',
            query: {
                'ordering': ordering,
            },
        });
    }

    /**
     * Create export history task
     * @returns ExportMergeHistory
     * @throws ApiError
     */
    public static createExportHistoryTask({
        requestBody,
    }: {
        requestBody: OmitReadonly<ExportMergeHistory>,
    }): CancelablePromise<ExportMergeHistory> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/history/export/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * download generated export document if available
     * @returns binary
     * @throws ApiError
     */
    public static downloadCreatedExportDocument({
        id,
    }: {
        /**
         * A unique integer value identifying this export merge history task.
         */
        id: number,
    }): CancelablePromise<Blob> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/history/export/{id}/download/',
            path: {
                'id': id,
            },
        });
    }

}
