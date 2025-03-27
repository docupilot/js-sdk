/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TemplateHubspotModuleMapping } from '../models/TemplateHubspotModuleMapping';

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

    /**
     * Retrieve the HubSpot mapping for the template.
     * @returns TemplateHubspotModuleMapping
     * @throws ApiError
     */
    public static getHubspotMapping({
        id,
    }: {
        /**
         * A unique integer value identifying this document.
         */
        id: number,
    }): CancelablePromise<TemplateHubspotModuleMapping> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/templates/{id}/link_to_hubspot/',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Create or update the HubSpot mapping for the template.
     * @returns TemplateHubspotModuleMapping
     * @throws ApiError
     */
    public static createOrUpdateHubspotMapping({
        id,
        requestBody,
    }: {
        /**
         * A unique integer value identifying this document.
         */
        id: number,
        requestBody: OmitReadonly<TemplateHubspotModuleMapping>,
    }): CancelablePromise<TemplateHubspotModuleMapping> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/templates/{id}/link_to_hubspot/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete the HubSpot mapping for the template.
     * @returns void
     * @throws ApiError
     */
    public static deleteHubspotMapping({
        id,
    }: {
        /**
         * A unique integer value identifying this document.
         */
        id: number,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/templates/{id}/link_to_hubspot/',
            path: {
                'id': id,
            },
        });
    }

}
