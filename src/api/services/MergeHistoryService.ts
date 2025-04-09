/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DocumentMergeHistory } from '../models/DocumentMergeHistory';
import type { PaginatedDocumentMergeHistoryList } from '../models/PaginatedDocumentMergeHistoryList';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import type { OmitReadonly } from '../core/utils/OmitReadonly';

export class MergeHistoryService {

    /**
     * Get created documents merge history
     * @returns PaginatedDocumentMergeHistoryList
     * @throws ApiError
     */
    public static getCreatedDocumentsMergeHistory({
        endDate,
        ordering,
        page,
        startDate,
        status,
        template,
    }: {
        endDate?: string,
        /**
         * Which field to use when ordering the results.
         */
        ordering?: string,
        /**
         * A page number within the paginated result set.
         */
        page?: number,
        startDate?: string,
        status?: 'error' | 'pending' | 'success',
        template?: number,
    }): CancelablePromise<PaginatedDocumentMergeHistoryList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/merge_history/',
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
     * @returns DocumentMergeHistory
     * @throws ApiError
     */
    public static mergeHistoryRetrieve({
        id,
    }: {
        /**
         * A unique integer value identifying this document merge history.
         */
        id: number,
    }): CancelablePromise<DocumentMergeHistory> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/merge_history/{id}/',
            path: {
                'id': id,
            },
        });
    }

}
