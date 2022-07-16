/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { User } from '../models/User';
import type { UserPersonalization } from '../models/UserPersonalization';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class PersonalizationService {

    /**
     * @returns any
     * @throws ApiError
     */
    public static getUserPersonalization(): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/personalization/',
        });
    }

    /**
     * @returns User
     * @throws ApiError
     */
    public static updateUserPersonalization({
        requestBody,
    }: {
        requestBody: UserPersonalization,
    }): CancelablePromise<User> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/personalization/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
