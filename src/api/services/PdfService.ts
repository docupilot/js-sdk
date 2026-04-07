/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PDFTransformJsonRequest } from '../models/PDFTransformJsonRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import type { OmitReadonly } from '../core/utils/OmitReadonly';

export class PdfService {

    /**
     * @returns any
     * @throws ApiError
     */
    public static pdfTransform({
        requestBody,
        xClient,
        responseType,
    }: {
        requestBody: OmitReadonly<PDFTransformJsonRequest>,
        /**
         * Client Origin
         */
        xClient?: string,
        /**
         * If stream, returns the transformed file as a downloadable PDF. If url, returns JSON with file_url and file_name.
         */
        responseType?: 'stream' | 'url',
    }): CancelablePromise<{
        file_url?: string;
        file_name?: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/dashboard/api/v2/pdf/transform/',
            headers: {
                'X-Client': xClient,
            },
            query: {
                'response_type': responseType,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
