/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GlobalPermission } from '../models/GlobalPermission';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import { OmitReadonly } from '../core/utils/OmitReadonly';

export class PermissionsService {

    /**
     * Returns folder permissions
     * @returns any
     * @throws ApiError
     */
    public static getFolderPermissions({
        ids,
    }: {
        ids?: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/permissions/folder/',
            query: {
                'ids': ids,
            },
        });
    }

    /**
     * Returns permission for each role
     * @returns GlobalPermission
     * @throws ApiError
     */
    public static getGlobalPermissions(): CancelablePromise<GlobalPermission> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/permissions/global/',
        });
    }

    /**
     * Returns template permissions
     * @returns any
     * @throws ApiError
     */
    public static getTemplatePermissions({
        ids,
    }: {
        ids?: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/permissions/template/',
            query: {
                'ids': ids,
            },
        });
    }

}
