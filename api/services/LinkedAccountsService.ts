/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DeliveryAccount } from '../models/DeliveryAccount';
import type { UpdateDeliveryAccount } from '../models/UpdateDeliveryAccount';
import { request as __request } from '../core/request';

export class LinkedAccountsService {

    /**
     * Get list of linked accounts
     * @returns DeliveryAccount
     * @throws ApiError
     */
    public static async listDeliveryAccounts({
        ordering,
        search,
        type,
    }: {
        /** Which field to use when ordering the results. **/
        ordering?: string,
        /** A search term. **/
        search?: string,
        type?: 'aws_s3' | 'docu_sign' | 'dropbox' | 'eversign' | 'google_drive' | 'hellosign' | 'one_drive' | 'podio' | 'sign_now' | 'zoho_crm',
    }): Promise<Array<DeliveryAccount>> {
        const result = await __request({
            method: 'GET',
            path: `/api/v2/linked_accounts/`,
            query: {
                'ordering': ordering,
                'search': search,
                'type': type,
            },
        });
        return result.body;
    }

    /**
     * Create linked account
     * @returns DeliveryAccount
     * @throws ApiError
     */
    public static async addDeliveryAccount({
        requestBody,
    }: {
        requestBody: DeliveryAccount,
    }): Promise<DeliveryAccount> {
        const result = await __request({
            method: 'POST',
            path: `/api/v2/linked_accounts/`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Redirects to oauth endpoint to add a new linked account of given 'integrator_type'
     * @returns any
     * @throws ApiError
     */
    public static async linkedAccountsInvokeRetrieve({
        integratorType,
        environment,
    }: {
        integratorType: string,
        /** sub-type of integrator. For example: sandbox or production for docu_sign **/
        environment?: string,
    }): Promise<any> {
        const result = await __request({
            method: 'GET',
            path: `/api/v2/linked_accounts/${integratorType}/invoke/`,
            query: {
                'environment': environment,
            },
            errors: {
                302: `No response body`,
            },
        });
        return result.body;
    }

    /**
     * Refresh linked account
     * @returns DeliveryAccount
     * @throws ApiError
     */
    public static async updateDeliveryAccount({
        id,
        requestBody,
    }: {
        /** A unique integer value identifying this delivery account. **/
        id: number,
        requestBody: UpdateDeliveryAccount,
    }): Promise<DeliveryAccount> {
        const result = await __request({
            method: 'PUT',
            path: `/api/v2/linked_accounts/${id}/`,
            body: requestBody,
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

    /**
     * Redirects to oauth endpoint for re-connecting an account
     * @returns any
     * @throws ApiError
     */
    public static async linkedAccountsReconnectRetrieve({
        id,
    }: {
        /** A unique integer value identifying this delivery account. **/
        id: number,
    }): Promise<any> {
        const result = await __request({
            method: 'GET',
            path: `/api/v2/linked_accounts/${id}/reconnect/`,
            errors: {
                302: `No response body`,
            },
        });
        return result.body;
    }

}