/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import { OmitReadonly } from '../core/utils/OmitReadonly';

export class PermissionsService {

    /**
     * Returns permission for each role
     * @returns any No response body
     * @throws ApiError
     */
    public static getGlobalPermissions(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/permissions/global/',
        });
    }

}
