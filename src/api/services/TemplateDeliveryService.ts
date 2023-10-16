/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EmailDeliveryAttachment } from '../models/EmailDeliveryAttachment';
import type { PolymorphicDelivery } from '../models/PolymorphicDelivery';
import type { TemplateDelivery } from '../models/TemplateDelivery';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import { OmitReadonly } from '../core/utils/OmitReadonly';

export class TemplateDeliveryService {

    /**
     * Get deliveries configured under this template
     * @returns TemplateDelivery
     * @throws ApiError
     */
    public static listTemplateDeliveries({
        templateId,
        ordering,
    }: {
        templateId: number,
        /**
         * Which field to use when ordering the results.
         */
        ordering?: string,
    }): CancelablePromise<Array<TemplateDelivery>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/templates/{template_id}/deliveries/',
            path: {
                'template_id': templateId,
            },
            query: {
                'ordering': ordering,
            },
        });
    }

    /**
     * Create delivery
     * @returns PolymorphicDelivery
     * @throws ApiError
     */
    public static createTemplateDelivery({
        templateId,
        requestBody,
    }: {
        templateId: number,
        requestBody?: OmitReadonly<PolymorphicDelivery>,
    }): CancelablePromise<PolymorphicDelivery> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/templates/{template_id}/deliveries/',
            path: {
                'template_id': templateId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get delivery
     * @returns PolymorphicDelivery
     * @throws ApiError
     */
    public static retrieveTemplateDelivery({
        id,
        templateId,
    }: {
        /**
         * A unique integer value identifying this delivery.
         */
        id: number,
        templateId: number,
    }): CancelablePromise<PolymorphicDelivery> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/templates/{template_id}/deliveries/{id}/',
            path: {
                'id': id,
                'template_id': templateId,
            },
        });
    }

    /**
     * Update delivery
     * @returns PolymorphicDelivery
     * @throws ApiError
     */
    public static updateTemplateDelivery({
        id,
        templateId,
        requestBody,
    }: {
        /**
         * A unique integer value identifying this delivery.
         */
        id: number,
        templateId: number,
        requestBody?: OmitReadonly<PolymorphicDelivery>,
    }): CancelablePromise<PolymorphicDelivery> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/templates/{template_id}/deliveries/{id}/',
            path: {
                'id': id,
                'template_id': templateId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete delivery
     * @returns void
     * @throws ApiError
     */
    public static deleteTemplateDelivery({
        id,
        templateId,
    }: {
        /**
         * A unique integer value identifying this delivery.
         */
        id: number,
        templateId: number,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/templates/{template_id}/deliveries/{id}/',
            path: {
                'id': id,
                'template_id': templateId,
            },
        });
    }

    /**
     * upload email delivery attachments
     * @returns PolymorphicDelivery
     * @throws ApiError
     */
    public static uploadDeliveryAttachments({
        id,
        templateId,
        formData,
    }: {
        /**
         * A unique integer value identifying this delivery.
         */
        id: number,
        templateId: number,
        formData: OmitReadonly<EmailDeliveryAttachment>,
    }): CancelablePromise<PolymorphicDelivery> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/templates/{template_id}/deliveries/{id}/attachments/',
            path: {
                'id': id,
                'template_id': templateId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * download delivery attachment
     * @returns PolymorphicDelivery
     * @throws ApiError
     */
    public static downloadDeliveryAttachment({
        attachmentId,
        id,
        templateId,
    }: {
        attachmentId: string,
        /**
         * A unique integer value identifying this delivery.
         */
        id: number,
        templateId: number,
    }): CancelablePromise<PolymorphicDelivery> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/templates/{template_id}/deliveries/{id}/attachments/{attachment_id}/',
            path: {
                'attachment_id': attachmentId,
                'id': id,
                'template_id': templateId,
            },
        });
    }

    /**
     * delete email delivery attachment
     * @returns void
     * @throws ApiError
     */
    public static deleteDeliveryAttachment({
        attachmentId,
        id,
        templateId,
    }: {
        attachmentId: string,
        /**
         * A unique integer value identifying this delivery.
         */
        id: number,
        templateId: number,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/templates/{template_id}/deliveries/{id}/attachments/{attachment_id}/',
            path: {
                'attachment_id': attachmentId,
                'id': id,
                'template_id': templateId,
            },
        });
    }

    /**
     * Upgrade docusign delivery api version
     * @returns PolymorphicDelivery
     * @throws ApiError
     */
    public static upgradeDocusignDelivery({
        id,
        templateId,
        requestBody,
    }: {
        /**
         * A unique integer value identifying this delivery.
         */
        id: number,
        templateId: number,
        requestBody?: OmitReadonly<PolymorphicDelivery>,
    }): CancelablePromise<PolymorphicDelivery> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/templates/{template_id}/deliveries/{id}/upgrade_docusign/',
            path: {
                'id': id,
                'template_id': templateId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
