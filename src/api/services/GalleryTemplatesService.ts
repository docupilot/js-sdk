/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TemplateGallery } from '../models/TemplateGallery';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import type { OmitReadonly } from '../core/utils/OmitReadonly';

export class GalleryTemplatesService {

    /**
     * Get list of galery templates
     * @returns TemplateGallery
     * @throws ApiError
     */
    public static listGalleryTemplates({
        category,
        ordering,
        search,
    }: {
        category?: number,
        /**
         * Which field to use when ordering the results.
         */
        ordering?: string,
        /**
         * A search term.
         */
        search?: string,
    }): CancelablePromise<Array<TemplateGallery>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/dashboard/accounts/v2/template_gallery/',
            query: {
                'category': category,
                'ordering': ordering,
                'search': search,
            },
        });
    }

    /**
     * Get one template
     * @returns TemplateGallery
     * @throws ApiError
     */
    public static getGalleryTemplate({
        id,
    }: {
        /**
         * A unique integer value identifying this template gallery.
         */
        id: number,
    }): CancelablePromise<TemplateGallery> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/dashboard/accounts/v2/template_gallery/{id}/',
            path: {
                'id': id,
            },
        });
    }

}
