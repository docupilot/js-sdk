/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { User } from '../models/User';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import { OmitReadonly } from '../core/utils/OmitReadonly';

export class UsersService {

    /**
     * Initiate a re-authorization sequence that would verify authenticity of logged-in userin order to allow performing high security operations like delete workspace
     * @returns any No response body
     * @throws ApiError
     */
    public static initiateAuthorizationSequence(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/accounts/v2/users/initiate_authorization_sequence/',
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

}
