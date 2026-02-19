/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ConvertJsonRequest } from '../models/ConvertJsonRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import type { OmitReadonly } from '../core/utils/OmitReadonly';

export class ConvertService {

    /**
     * @returns any
     * @throws ApiError
     */
    public static convertFiles({
        requestBody,
        responseType,
    }: {
        requestBody: OmitReadonly<ConvertJsonRequest>,
        /**
         * If stream, returns the converted file as a downloadable binary (PDF / PNG / ZIP). If url, returns JSON with file_url and file_name.
         */
        responseType?: 'stream' | 'url',
    }): CancelablePromise<{
        file_url?: string;
        file_name?: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/dashboard/api/v2/convert/',
            query: {
                'response_type': responseType,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
