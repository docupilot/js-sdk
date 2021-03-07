/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { User } from '../models/User';
import { request as __request } from '../core/request';

export class AccountsService {

    /**
     * @returns User
     * @throws ApiError
     */
    public static async accountsV2UsersMeRetrieve(): Promise<User> {
        const result = await __request({
            method: 'GET',
            path: `/accounts/v2/users/me/`,
        });
        return result.body;
    }

    /**
     * @returns User
     * @throws ApiError
     */
    public static async accountsV2UsersMeUpdate({
        requestBody,
    }: {
        requestBody?: User,
    }): Promise<User> {
        const result = await __request({
            method: 'PUT',
            path: `/accounts/v2/users/me/`,
            body: requestBody,
        });
        return result.body;
    }

}