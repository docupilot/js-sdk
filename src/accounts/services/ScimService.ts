/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ScimApiKeyCreateResponse } from '../models/ScimApiKeyCreateResponse';
import type { ScimConfig } from '../models/ScimConfig';
import type { ScimToggleResponse } from '../models/ScimToggleResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import type { OmitReadonly } from '../core/utils/OmitReadonly';

export class ScimService {

    /**
     * @returns ScimConfig
     * @throws ApiError
     */
    public static getScimConfig(): CancelablePromise<ScimConfig> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/accounts/scim/config/',
        });
    }

    /**
     * @returns ScimApiKeyCreateResponse
     * @throws ApiError
     */
    public static createScimKey(): CancelablePromise<ScimApiKeyCreateResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/accounts/scim/keys/',
        });
    }

    /**
     * @returns void
     * @throws ApiError
     */
    public static deleteScimKey({
        keyId,
    }: {
        keyId: string,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/accounts/scim/keys/{key_id}/',
            path: {
                'key_id': keyId,
            },
        });
    }

    /**
     * @returns ScimToggleResponse
     * @throws ApiError
     */
    public static toggleScimProvisioning(): CancelablePromise<ScimToggleResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/accounts/scim/toggle_provisioning/',
        });
    }

}
