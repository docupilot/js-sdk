/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GoogleDriveTemplate } from '../models/GoogleDriveTemplate';
import type { StopAllWatchesGoogleDriveTemplate } from '../models/StopAllWatchesGoogleDriveTemplate';
import type { StopWatchGoogleDriveTemplate } from '../models/StopWatchGoogleDriveTemplate';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import type { OmitReadonly } from '../core/utils/OmitReadonly';

export class IntegrationService {

    /**
     * Create Google Drive template
     * @returns GoogleDriveTemplate
     * @throws ApiError
     */
    public static createGoogleDriveTemplate({
        requestBody,
    }: {
        requestBody: OmitReadonly<GoogleDriveTemplate>,
    }): CancelablePromise<GoogleDriveTemplate> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/integration/google-drive/template/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Stop all watches for a linked Google Drive account
     * @returns void
     * @throws ApiError
     */
    public static stopAllWatchesGoogleDriveFiles({
        requestBody,
    }: {
        requestBody: OmitReadonly<StopAllWatchesGoogleDriveTemplate>,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/integration/google-drive/template/stop-all-watches/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Stop watching a Google Drive file
     * @returns void
     * @throws ApiError
     */
    public static stopWatchGoogleDriveFile({
        requestBody,
    }: {
        requestBody: OmitReadonly<StopWatchGoogleDriveTemplate>,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/integration/google-drive/template/stop-watch/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
