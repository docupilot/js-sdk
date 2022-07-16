/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ChangePassword } from '../models/ChangePassword';
import type { User } from '../models/User';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UsersService {

    /**
     * @returns void
     * @throws ApiError
     */
    public static changePassword({
        requestBody,
    }: {
        requestBody: ChangePassword,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/accounts/v2/users/change_password/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * get logged in user details
     * @returns User
     * @throws ApiError
     */
    public static getMe(): CancelablePromise<User> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/accounts/v2/users/me/',
        });
    }

    /**
     * update logged in user details
     * @returns User
     * @throws ApiError
     */
    public static updateMe({
        requestBody,
    }: {
        requestBody?: User,
    }): CancelablePromise<User> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/accounts/v2/users/me/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
