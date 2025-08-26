/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AppendFiles } from '../models/AppendFiles';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import type { OmitReadonly } from '../core/utils/OmitReadonly';

export class AppendService {

    /**
     * @returns any
     * @throws ApiError
     */
    public static appendFiles({
        requestBody,
        xClient,
    }: {
        requestBody: OmitReadonly<AppendFiles>,
        /**
         * Client Origin
         */
        xClient?: string,
    }): CancelablePromise<{
        file_url?: string;
        file_name?: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/dashboard/api/v2/append/',
            headers: {
                'X-Client': xClient,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
