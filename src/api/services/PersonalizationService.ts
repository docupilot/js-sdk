/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserPersonalization } from '../models/UserPersonalization';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import type { OmitReadonly } from '../core/utils/OmitReadonly';

export class PersonalizationService {

    /**
     * @returns UserPersonalization
     * @throws ApiError
     */
    public static getUserPersonalization(): CancelablePromise<Array<UserPersonalization>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/personalization/',
        });
    }

    /**
     * @returns any
     * @throws ApiError
     */
    public static updateUserPersonalization({
        requestBody,
    }: {
        requestBody?: OmitReadonly<UserPersonalization>,
    }): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/personalization/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
