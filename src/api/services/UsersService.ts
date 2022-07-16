/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ChangePassword } from '../models/ChangePassword';
import type { User } from '../models/User';
import { request as __request } from '../core/request';

export class UsersService {

    /**
     * @returns any No response body
     * @throws ApiError
     */
    public static async changePassword({
        requestBody,
    }: {
        requestBody: ChangePassword,
    }): Promise<any> {
        const result = await __request({
            method: 'PUT',
            path: `/accounts/v2/users/change_password/`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * get logged in user details
     * @returns User
     * @throws ApiError
     */
    public static async getMe(): Promise<User> {
        const result = await __request({
            method: 'GET',
            path: `/accounts/v2/users/me/`,
        });
        return result.body;
    }

    /**
     * update logged in user details
     * @returns User
     * @throws ApiError
     */
    public static async updateMe({
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