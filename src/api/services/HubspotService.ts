/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import type { OmitReadonly } from '../core/utils/OmitReadonly';

export class HubspotService {

    /**
     * install hubspot callback
     * @returns any No response body
     * @throws ApiError
     */
    public static installHubspotCallback(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/hubspot/install_callback/',
        });
    }

    /**
     * install hubspot workspace selection
     * @returns any No response body
     * @throws ApiError
     */
    public static installHubspotWorkspaceSelection(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/hubspot/install_workspace_selection/',
        });
    }

}
