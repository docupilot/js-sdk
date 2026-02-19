/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MarkDevicePrimary } from '../models/MarkDevicePrimary';
import type { MFADisable } from '../models/MFADisable';
import type { TOTPDevice } from '../models/TOTPDevice';
import type { TotpDeviceVerify } from '../models/TotpDeviceVerify';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import type { OmitReadonly } from '../core/utils/OmitReadonly';

export class MfaService {

    /**
     * @returns any No response body
     * @throws ApiError
     */
    public static mfaList({
        ordering,
    }: {
        /**
         * Which field to use when ordering the results.
         */
        ordering?: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/accounts/mfa/',
            query: {
                'ordering': ordering,
            },
        });
    }

    /**
     * @returns void
     * @throws ApiError
     */
    public static mfaDeleteTotpDeviceDestroy(): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/accounts/mfa/delete-totp-device/',
        });
    }

    /**
     * @returns MFADisable
     * @throws ApiError
     */
    public static mfaDisable({
        requestBody,
    }: {
        requestBody: OmitReadonly<MFADisable>,
    }): CancelablePromise<MFADisable> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/accounts/mfa/disable-mfa/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns any No response body
     * @throws ApiError
     */
    public static mfaEnable(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/accounts/mfa/enable-mfa/',
        });
    }

    /**
     * @returns any No response body
     * @throws ApiError
     */
    public static mfaGenerateBackupTokensCreate(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/accounts/mfa/generate-backup-tokens/',
        });
    }

    /**
     * @returns MarkDevicePrimary
     * @throws ApiError
     */
    public static mfaMarkDevicePrimaryUpdate({
        requestBody,
    }: {
        requestBody: OmitReadonly<MarkDevicePrimary>,
    }): CancelablePromise<MarkDevicePrimary> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/accounts/mfa/mark-device-primary/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns any No response body
     * @throws ApiError
     */
    public static mfaSetupTotpDeviceRetrieve(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/accounts/mfa/setup-totp-device/',
        });
    }

    /**
     * Verify Totp device
     * @returns TOTPDevice
     * @throws ApiError
     */
    public static mfaVerifyTotpDeviceCreate({
        requestBody,
    }: {
        requestBody: OmitReadonly<TotpDeviceVerify>,
    }): CancelablePromise<TOTPDevice> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/accounts/mfa/verify-totp-device/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
