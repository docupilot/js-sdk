/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginatedDocumentMergeHistoryList } from '../models/PaginatedDocumentMergeHistoryList';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import type { OmitReadonly } from '../core/utils/OmitReadonly';

export class DocumentMergeHistoryService {

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
        template?: string,
    }): CancelablePromise<PaginatedDocumentMergeHistoryList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/document_merge_history/',
            query: {
                'end_date': endDate,
                'ordering': ordering,
                'page': page,
                'start_date': startDate,
                'template': template,
            },
        });
    }

}
