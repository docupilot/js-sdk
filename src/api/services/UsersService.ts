/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { InitiateAuthorizationSequence } from '../models/InitiateAuthorizationSequence';
import type { PatchedUpdateUser } from '../models/PatchedUpdateUser';
import type { ShowUserDomainReservationPrompt } from '../models/ShowUserDomainReservationPrompt';
import type { User } from '../models/User';
import type { UserDomainReservation } from '../models/UserDomainReservation';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import type { OmitReadonly } from '../core/utils/OmitReadonly';

export class UsersService {

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

    /**
     * Update User Profile
     * @returns any No response body
     * @throws ApiError
     */
    public static updateUserProfile({
        requestBody,
    }: {
        requestBody?: OmitReadonly<PatchedUpdateUser>,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/accounts/v2/users/update_user_profile/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get user domain reservation info
     * @returns ShowUserDomainReservationPrompt
     * @throws ApiError
     */
    public static getUserDomainReservationInfo(): CancelablePromise<ShowUserDomainReservationPrompt> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/accounts/v2/users/user_domain_reservation/',
        });
    }

    /**
     * Update user domain reservation info
     * @returns any No response body
     * @throws ApiError
     */
    public static updateUserDomainReservationInfo({
        requestBody,
    }: {
        requestBody: OmitReadonly<UserDomainReservation>,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/accounts/v2/users/user_domain_reservation/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
