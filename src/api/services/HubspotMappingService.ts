/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GenerateDocumentFromHubspot } from '../models/GenerateDocumentFromHubspot';
import type { HubspotModuleSchema } from '../models/HubspotModuleSchema';
import type { PaginatedTemplateHubspotModuleMappingList } from '../models/PaginatedTemplateHubspotModuleMappingList';
import type { TemplateHubspotModuleMapping } from '../models/TemplateHubspotModuleMapping';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import type { OmitReadonly } from '../core/utils/OmitReadonly';

export class HubspotMappingService {

    /**
     * Get template hubspot module mappings
     * @returns PaginatedTemplateHubspotModuleMappingList
     * @throws ApiError
     */
    public static listTemplateHubspotModuleMappings({
        linkedAccountPk,
        ordering,
        page,
        search,
    }: {
        linkedAccountPk: number,
        /**
         * Which field to use when ordering the results.
         */
        ordering?: string,
        /**
         * A page number within the paginated result set.
         */
        page?: number,
        /**
         * A search term.
         */
        search?: string,
    }): CancelablePromise<PaginatedTemplateHubspotModuleMappingList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/linked_accounts/{linked_account_pk}/hubspot_mapping/',
            path: {
                'linked_account_pk': linkedAccountPk,
            },
            query: {
                'ordering': ordering,
                'page': page,
                'search': search,
            },
        });
    }

    /**
     * Create a hubspot module mapping
     * @returns TemplateHubspotModuleMapping
     * @throws ApiError
     */
    public static createTemplateHubspotModuleMapping({
        linkedAccountPk,
        requestBody,
    }: {
        linkedAccountPk: number,
        requestBody: OmitReadonly<TemplateHubspotModuleMapping>,
    }): CancelablePromise<TemplateHubspotModuleMapping> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/linked_accounts/{linked_account_pk}/hubspot_mapping/',
            path: {
                'linked_account_pk': linkedAccountPk,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get specific template hubspot module mapping
     * @returns TemplateHubspotModuleMapping
     * @throws ApiError
     */
    public static getTemplateHubspotModuleMapping({
        id,
        linkedAccountPk,
    }: {
        /**
         * A unique integer value identifying this template hubspot module mapping.
         */
        id: number,
        linkedAccountPk: number,
    }): CancelablePromise<TemplateHubspotModuleMapping> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/linked_accounts/{linked_account_pk}/hubspot_mapping/{id}/',
            path: {
                'id': id,
                'linked_account_pk': linkedAccountPk,
            },
        });
    }

    /**
     * Update a specific hubspot module mapping
     * @returns TemplateHubspotModuleMapping
     * @throws ApiError
     */
    public static updateTemplateHubspotModuleMapping({
        id,
        linkedAccountPk,
        requestBody,
    }: {
        /**
         * A unique integer value identifying this template hubspot module mapping.
         */
        id: number,
        linkedAccountPk: number,
        requestBody: OmitReadonly<TemplateHubspotModuleMapping>,
    }): CancelablePromise<TemplateHubspotModuleMapping> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/linked_accounts/{linked_account_pk}/hubspot_mapping/{id}/',
            path: {
                'id': id,
                'linked_account_pk': linkedAccountPk,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete a specific hubspot module mapping
     * @returns void
     * @throws ApiError
     */
    public static deleteTemplateHubspotModuleMapping({
        id,
        linkedAccountPk,
    }: {
        /**
         * A unique integer value identifying this template hubspot module mapping.
         */
        id: number,
        linkedAccountPk: number,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/linked_accounts/{linked_account_pk}/hubspot_mapping/{id}/',
            path: {
                'id': id,
                'linked_account_pk': linkedAccountPk,
            },
        });
    }

    /**
     * Generate document from hubspot
     * @returns GenerateDocumentFromHubspot
     * @throws ApiError
     */
    public static generateDocumentFromHubspot({
        id,
        linkedAccountPk,
        requestBody,
    }: {
        /**
         * A unique integer value identifying this template hubspot module mapping.
         */
        id: number,
        linkedAccountPk: number,
        requestBody: OmitReadonly<TemplateHubspotModuleMapping>,
    }): CancelablePromise<GenerateDocumentFromHubspot> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/linked_accounts/{linked_account_pk}/hubspot_mapping/{id}/generate/',
            path: {
                'id': id,
                'linked_account_pk': linkedAccountPk,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * get hubspot module tokens
     * @returns HubspotModuleSchema
     * @throws ApiError
     */
    public static getHubspotModuleTokens({
        linkedAccountPk,
        requestBody,
    }: {
        linkedAccountPk: number,
        requestBody: OmitReadonly<HubspotModuleSchema>,
    }): CancelablePromise<HubspotModuleSchema> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/linked_accounts/{linked_account_pk}/hubspot_mapping/hubspot_module_schema/',
            path: {
                'linked_account_pk': linkedAccountPk,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * get hubspot modules
     * @returns TemplateHubspotModuleMapping
     * @throws ApiError
     */
    public static getHubspotModules({
        linkedAccountPk,
    }: {
        linkedAccountPk: number,
    }): CancelablePromise<TemplateHubspotModuleMapping> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/linked_accounts/{linked_account_pk}/hubspot_mapping/modules/',
            path: {
                'linked_account_pk': linkedAccountPk,
            },
        });
    }

}
