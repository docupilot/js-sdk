/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { G2Link } from '../models/G2Link';
import type { InitiateAuthorizationSequence } from '../models/InitiateAuthorizationSequence';
import type { User } from '../models/User';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import { OmitReadonly } from '../core/utils/OmitReadonly';

export class UsersService {

    /**
     * G2 review link
     * @returns G2Link
     * @throws ApiError
     */
    public static g2ReviewLink(): CancelablePromise<G2Link> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/accounts/v2/users/g2_review_link/',
        });
    }

    /**
     * Initiate a re-authorization sequence that would verify authenticity of logged-in userin order to allow performing high security operations like delete workspace
     * @returns void
     * @throws ApiError
     */
    public static initiateAuthorizationSequence({
        requestBody,
    }: {
        requestBody?: OmitReadonly<InitiateAuthorizationSequence>,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/accounts/v2/users/initiate_authorization_sequence/',
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

}
