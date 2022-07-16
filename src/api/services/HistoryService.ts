/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginatedMergeHistoryList } from '../models/PaginatedMergeHistoryList';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import { OmitReadonly } from '../core/utils/OmitReadonly';

export class HistoryService {

    /**
     * Get created documents history
     * @returns PaginatedMergeHistoryList
     * @throws ApiError
     */
    public static getCreatedDocumentsHistory({
        document,
        endDate,
        ordering,
        page,
        startDate,
        status,
    }: {
        document?: number,
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
    }): CancelablePromise<PaginatedMergeHistoryList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/history/',
            query: {
                'document': document,
                'end_date': endDate,
                'ordering': ordering,
                'page': page,
                'start_date': startDate,
                'status': status,
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

}
