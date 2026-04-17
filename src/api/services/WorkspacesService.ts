/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RetentionPreference } from '../models/RetentionPreference';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import type { OmitReadonly } from '../core/utils/OmitReadonly';

export class WorkspacesService {

    /**
     * @returns any No response body
     * @throws ApiError
     */
    public static getWorkspaceStatus(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/dashboard/accounts/v2/workspaces/current/status/',
            errors: {
                400: `No response body`,
            },
        });
    }

    /**
     * get workspace data retention preference
     * @returns RetentionPreference
     * @throws ApiError
     */
    public static getWorkspaceDataRetentionPreference(): CancelablePromise<RetentionPreference> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/dashboard/accounts/v2/workspaces/retention_preference/',
        });
    }

    /**
     * update workspace data retention preference
     * @returns RetentionPreference
     * @throws ApiError
     */
    public static updateWorkspaceDataRetentionPreference({
        requestBody,
    }: {
        requestBody?: OmitReadonly<RetentionPreference>,
    }): CancelablePromise<RetentionPreference> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/dashboard/accounts/v2/workspaces/retention_preference/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
