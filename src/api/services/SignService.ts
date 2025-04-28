/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import type { OmitReadonly } from '../core/utils/OmitReadonly';

export class SignService {

    /**
     * @returns any No response body
     * @throws ApiError
     */
    public static signClosedRetrieve({
        recipientId,
    }: {
        recipientId: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sign/closed/{recipient_id}/',
            path: {
                'recipient_id': recipientId,
            },
        });
    }

    /**
     * @returns any No response body
     * @throws ApiError
     */
    public static signDeclinedRetrieve({
        recipientId,
    }: {
        recipientId: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sign/declined/{recipient_id}/',
            path: {
                'recipient_id': recipientId,
            },
        });
    }

    /**
     * @returns any No response body
     * @throws ApiError
     */
    public static signResendLinkCreate({
        recipientId,
    }: {
        recipientId: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sign/resend_link/{recipient_id}/',
            path: {
                'recipient_id': recipientId,
            },
        });
    }

    /**
     * @returns any No response body
     * @throws ApiError
     */
    public static signSignedRetrieve({
        recipientId,
    }: {
        recipientId: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sign/signed/{recipient_id}/',
            path: {
                'recipient_id': recipientId,
            },
        });
    }

    /**
     * @returns any No response body
     * @throws ApiError
     */
    public static signStartRetrieve({
        recipientId,
    }: {
        recipientId: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sign/start/{recipient_id}/',
            path: {
                'recipient_id': recipientId,
            },
        });
    }

}
