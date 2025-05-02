/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DeliveryAccount } from '../models/DeliveryAccount';
import type { GoogleDrivePickerPayload } from '../models/GoogleDrivePickerPayload';
import type { PaginatedAccountDeliveryList } from '../models/PaginatedAccountDeliveryList';
import type { SendEmailAccountAuthorizationOTP } from '../models/SendEmailAccountAuthorizationOTP';
import type { SendTestSmtpMail } from '../models/SendTestSmtpMail';
import type { UpdateDeliveryAccount } from '../models/UpdateDeliveryAccount';
import type { VerifyEmailAccountOTP } from '../models/VerifyEmailAccountOTP';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import type { OmitReadonly } from '../core/utils/OmitReadonly';

export class LinkedAccountsService {

    /**
     * Get list of linked accounts
     * @returns DeliveryAccount
     * @throws ApiError
     */
    public static listDeliveryAccounts({
        ordering,
        search,
        type,
    }: {
        /**
         * Which field to use when ordering the results.
         */
        ordering?: string,
        /**
         * A search term.
         */
        search?: string,
        type?: 'aws_s3' | 'azure_storage' | 'docu_sign' | 'dropbox' | 'email' | 'eversign' | 'google_drive' | 'hellosign' | 'one_drive' | 'podio' | 'sftp' | 'sign_now' | 'signable' | 'yousign' | 'zoho' | 'zoho_crm',
    }): CancelablePromise<Array<DeliveryAccount>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/linked_accounts/',
            query: {
                'ordering': ordering,
                'search': search,
                'type': type,
            },
        });
    }

    /**
     * Create linked account
     * @returns DeliveryAccount
     * @throws ApiError
     */
    public static addDeliveryAccount({
        requestBody,
    }: {
        requestBody: OmitReadonly<DeliveryAccount>,
    }): CancelablePromise<DeliveryAccount> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/linked_accounts/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Redirects to oauth endpoint to add a new linked account of given 'integrator_type'
     * @returns void
     * @throws ApiError
     */
    public static invokeIntegrator({
        integratorType,
        environment,
    }: {
        integratorType: string,
        /**
         * sub-type of integrator. For example: sandbox or production for docu_sign
         */
        environment?: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/linked_accounts/{integrator_type}/invoke/',
            path: {
                'integrator_type': integratorType,
            },
            query: {
                'environment': environment,
            },
            errors: {
                302: `No response body`,
            },
        });
    }

    /**
     * Refresh linked account
     * @returns DeliveryAccount
     * @throws ApiError
     */
    public static updateDeliveryAccount({
        id,
        requestBody,
    }: {
        /**
         * A unique integer value identifying this delivery account.
         */
        id: number,
        requestBody: OmitReadonly<UpdateDeliveryAccount>,
    }): CancelablePromise<DeliveryAccount> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/linked_accounts/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Revoke linked account
     * @returns void
     * @throws ApiError
     */
    public static revokeDeliveryAccount({
        id,
    }: {
        /**
         * A unique integer value identifying this delivery account.
         */
        id: number,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/linked_accounts/{id}/',
            path: {
                'id': id,
            },
        });
    }

    /**
     * List account deliveries
     * @returns PaginatedAccountDeliveryList
     * @throws ApiError
     */
    public static listAccountDeliveries({
        id,
        page,
        type,
    }: {
        /**
         * A unique integer value identifying this delivery account.
         */
        id: number,
        /**
         * A page number within the paginated result set.
         */
        page?: number,
        type?: 'aws_s3' | 'azure_storage' | 'docu_sign' | 'dropbox' | 'email' | 'eversign' | 'google_drive' | 'hellosign' | 'one_drive' | 'podio' | 'sftp' | 'sign_now' | 'signable' | 'yousign' | 'zoho' | 'zoho_crm',
    }): CancelablePromise<PaginatedAccountDeliveryList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/linked_accounts/{id}/deliveries/',
            path: {
                'id': id,
            },
            query: {
                'page': page,
                'type': type,
            },
        });
    }

    /**
     * List delivery emails for email account
     * @returns string An array of emails
     * @throws ApiError
     */
    public static listDeliveryEmailsForEmailAccount({
        id,
    }: {
        /**
         * A unique integer value identifying this delivery account.
         */
        id: number,
    }): CancelablePromise<Array<string>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/linked_accounts/{id}/delivery_emails/',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Get docusign folders
     * @returns DeliveryAccount
     * @throws ApiError
     */
    public static getDocusignFolders({
        id,
    }: {
        /**
         * A unique integer value identifying this delivery account.
         */
        id: number,
    }): CancelablePromise<DeliveryAccount> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/linked_accounts/{id}/docusign_folders/',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Get google picker payload
     * @returns GoogleDrivePickerPayload
     * @throws ApiError
     */
    public static getGooglePickerPayload({
        id,
    }: {
        /**
         * A unique integer value identifying this delivery account.
         */
        id: number,
    }): CancelablePromise<GoogleDrivePickerPayload> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/linked_accounts/{id}/google_picker_payload/',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Initiate email authorization
     * @returns void
     * @throws ApiError
     */
    public static initiateEmailAuthorization({
        id,
        requestBody,
    }: {
        /**
         * A unique integer value identifying this delivery account.
         */
        id: number,
        requestBody: OmitReadonly<SendEmailAccountAuthorizationOTP>,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/linked_accounts/{id}/initiate_authorization/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Redirects to oauth endpoint for re-connecting an account
     * @returns void
     * @throws ApiError
     */
    public static reconnectAccount({
        id,
    }: {
        /**
         * A unique integer value identifying this delivery account.
         */
        id: number,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/linked_accounts/{id}/reconnect/',
            path: {
                'id': id,
            },
            errors: {
                302: `No response body`,
            },
        });
    }

    /**
     * Update delivery accounts use for images flag
     * @returns DeliveryAccount
     * @throws ApiError
     */
    public static updateDeliveryAccountsUseForImagesFlag({
        id,
    }: {
        /**
         * A unique integer value identifying this delivery account.
         */
        id: number,
    }): CancelablePromise<DeliveryAccount> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/linked_accounts/{id}/toggle_use_for_images/',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Verify email otp
     * @returns void
     * @throws ApiError
     */
    public static verifyEmailOtp({
        id,
        requestBody,
    }: {
        /**
         * A unique integer value identifying this delivery account.
         */
        id: number,
        requestBody: OmitReadonly<VerifyEmailAccountOTP>,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/linked_accounts/{id}/verify_otp/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * send_test_mail
     * @returns any No response body
     * @throws ApiError
     */
    public static sendTestMail({
        requestBody,
    }: {
        requestBody: OmitReadonly<SendTestSmtpMail>,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/linked_accounts/send_test_mail/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
