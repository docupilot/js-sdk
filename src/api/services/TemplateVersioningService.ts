/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CopyTemplateFromVersion } from '../models/CopyTemplateFromVersion';
import type { PaginatedTemplateVersionList } from '../models/PaginatedTemplateVersionList';
import type { PatchedRenameTemplateVersion } from '../models/PatchedRenameTemplateVersion';
import type { Template } from '../models/Template';
import type { TemplateVersion } from '../models/TemplateVersion';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import type { OmitReadonly } from '../core/utils/OmitReadonly';

export class TemplateVersioningService {

    /**
     * Get list of template versions
     * @returns PaginatedTemplateVersionList
     * @throws ApiError
     */
    public static listTemplateVersions({
        templateId,
        ordering,
        page,
        search,
        starred,
    }: {
        templateId: string,
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
        starred?: boolean,
    }): CancelablePromise<PaginatedTemplateVersionList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/templates/{template_id}/versions/',
            path: {
                'template_id': templateId,
            },
            query: {
                'ordering': ordering,
                'page': page,
                'search': search,
                'starred': starred,
            },
        });
    }

    /**
     * Get one template version
     * @returns TemplateVersion
     * @throws ApiError
     */
    public static getTemplateVersion({
        id,
        templateId,
    }: {
        /**
         * A unique integer value identifying this document content.
         */
        id: number,
        templateId: string,
    }): CancelablePromise<TemplateVersion> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/templates/{template_id}/versions/{id}/',
            path: {
                'id': id,
                'template_id': templateId,
            },
        });
    }

    /**
     * Copy template from version including preferences, deliveries
     * @returns Template
     * @throws ApiError
     */
    public static copyTemplateFromVersion({
        id,
        templateId,
        requestBody,
    }: {
        /**
         * A unique integer value identifying this document content.
         */
        id: number,
        templateId: string,
        requestBody: OmitReadonly<CopyTemplateFromVersion>,
    }): CancelablePromise<Template> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/templates/{template_id}/versions/{id}/copy/',
            path: {
                'id': id,
                'template_id': templateId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get template minor versions
     * @returns TemplateVersion
     * @throws ApiError
     */
    public static getTemplateMinorVersions({
        id,
        templateId,
        ordering,
        search,
        starred,
    }: {
        /**
         * A unique integer value identifying this document content.
         */
        id: number,
        templateId: string,
        /**
         * Which field to use when ordering the results.
         */
        ordering?: string,
        /**
         * A search term.
         */
        search?: string,
        starred?: boolean,
    }): CancelablePromise<Array<TemplateVersion>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/templates/{template_id}/versions/{id}/minor_versions/',
            path: {
                'id': id,
                'template_id': templateId,
            },
            query: {
                'ordering': ordering,
                'search': search,
                'starred': starred,
            },
        });
    }

    /**
     * Update template version name
     * @returns TemplateVersion
     * @throws ApiError
     */
    public static updateTemplateVersionName({
        id,
        templateId,
        requestBody,
    }: {
        /**
         * A unique integer value identifying this document content.
         */
        id: number,
        templateId: string,
        requestBody?: OmitReadonly<PatchedRenameTemplateVersion>,
    }): CancelablePromise<TemplateVersion> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v2/templates/{template_id}/versions/{id}/rename/',
            path: {
                'id': id,
                'template_id': templateId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Restore template version
     * @returns any No response body
     * @throws ApiError
     */
    public static restoreTemplateVersion({
        id,
        templateId,
    }: {
        /**
         * A unique integer value identifying this document content.
         */
        id: number,
        templateId: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/templates/{template_id}/versions/{id}/restore/',
            path: {
                'id': id,
                'template_id': templateId,
            },
        });
    }

    /**
     * Set a template version to live version
     * @returns TemplateVersion
     * @throws ApiError
     */
    public static setTemplateVersionLive({
        id,
        templateId,
    }: {
        /**
         * A unique integer value identifying this document content.
         */
        id: number,
        templateId: string,
    }): CancelablePromise<TemplateVersion> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/templates/{template_id}/versions/{id}/set_as_live_version/',
            path: {
                'id': id,
                'template_id': templateId,
            },
        });
    }

    /**
     * Toggle template version starred
     * @returns TemplateVersion
     * @throws ApiError
     */
    public static toggleTemplateVersionStarred({
        id,
        templateId,
    }: {
        /**
         * A unique integer value identifying this document content.
         */
        id: number,
        templateId: string,
    }): CancelablePromise<TemplateVersion> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/templates/{template_id}/versions/{id}/toggle_starred/',
            path: {
                'id': id,
                'template_id': templateId,
            },
        });
    }

}
