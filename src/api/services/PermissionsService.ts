/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GlobalPermission } from '../models/GlobalPermission';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import type { OmitReadonly } from '../core/utils/OmitReadonly';

export class PermissionsService {

    /**
     * Returns content_block permissions
     * @returns string
     * @throws ApiError
     */
    public static getContentBlockPermissions({
        ids,
    }: {
        ids?: string,
    }): CancelablePromise<Record<string, Array<'read' | 'write' | 'manage'>>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/dashboard/api/v2/permissions/content_block/',
            query: {
                'ids': ids,
            },
        });
    }

    /**
     * Returns folder permissions
     * @returns string
     * @throws ApiError
     */
    public static getFolderPermissions({
        ids,
    }: {
        ids?: string,
    }): CancelablePromise<Record<string, Array<'read' | 'write' | 'manage'>>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/dashboard/api/v2/permissions/folder/',
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
            url: '/dashboard/api/v2/permissions/global/',
        });
    }

    /**
     * Returns template permissions
     * @returns string
     * @throws ApiError
     */
    public static getTemplatePermissions({
        ids,
    }: {
        ids?: string,
    }): CancelablePromise<Record<string, Array<'read' | 'write' | 'manage'>>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/dashboard/api/v2/permissions/template/',
            query: {
                'ids': ids,
            },
        });
    }

}
