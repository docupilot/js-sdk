/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginatedDeliveryAccountList } from '../models/PaginatedDeliveryAccountList';
import { request as __request } from '../core/request';

export class LinkedAccountsService {

    /**
     * Get list of linked accounts
     * @returns PaginatedDeliveryAccountList
     * @throws ApiError
     */
    public static async listDeliveryAccounts({
        ordering,
        page,
        search,
        type,
    }: {
        /** Which field to use when ordering the results. **/
        ordering?: string,
        /** A page number within the paginated result set. **/
        page?: number,
        /** A search term. **/
        search?: string,
        type?: 'aws_s3' | 'docu_sign' | 'dropbox' | 'email' | 'eversign' | 'google_drive' | 'hellosign' | 'one_drive' | 'podio' | 'sign_now' | 'webhook' | 'zoho_crm',
    }): Promise<PaginatedDeliveryAccountList> {
        const result = await __request({
            method: 'GET',
            path: `/api/v2/linked_accounts/`,
            query: {
                'ordering': ordering,
                'page': page,
                'search': search,
                'type': type,
            },
        });
        return result.body;
    }

    /**
     * Revoke linked account
     * @returns any No response body
     * @throws ApiError
     */
    public static async revokeDeliveryAccount({
        id,
    }: {
        /** A unique integer value identifying this delivery account. **/
        id: number,
    }): Promise<any> {
        const result = await __request({
            method: 'DELETE',
            path: `/api/v2/linked_accounts/${id}/`,
        });
        return result.body;
    }

}