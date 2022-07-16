/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PolymorphicDelivery } from '../models/PolymorphicDelivery';
import type { TemplateDelivery } from '../models/TemplateDelivery';
import { request as __request } from '../core/request';

export class TemplateDeliveryService {

    /**
     * Get deliveries configured under this template
     * @returns TemplateDelivery
     * @throws ApiError
     */
    public static async listTemplateDeliveries({
        templateId,
        ordering,
    }: {
        templateId: number,
        /** Which field to use when ordering the results. **/
        ordering?: string,
    }): Promise<Array<TemplateDelivery>> {
        const result = await __request({
            method: 'GET',
            path: `/api/v2/templates/${templateId}/deliveries/`,
            query: {
                'ordering': ordering,
            },
        });
        return result.body;
    }

    /**
     * Create delivery
     * @returns PolymorphicDelivery
     * @throws ApiError
     */
    public static async createTemplateDelivery({
        templateId,
        requestBody,
    }: {
        templateId: number,
        requestBody?: PolymorphicDelivery,
    }): Promise<PolymorphicDelivery> {
        const result = await __request({
            method: 'POST',
            path: `/api/v2/templates/${templateId}/deliveries/`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Get delivery
     * @returns PolymorphicDelivery
     * @throws ApiError
     */
    public static async retrieveTemplateDelivery({
        id,
        templateId,
    }: {
        /** A unique integer value identifying this delivery. **/
        id: number,
        templateId: number,
    }): Promise<PolymorphicDelivery> {
        const result = await __request({
            method: 'GET',
            path: `/api/v2/templates/${templateId}/deliveries/${id}/`,
        });
        return result.body;
    }

    /**
     * Update delivery
     * @returns PolymorphicDelivery
     * @throws ApiError
     */
    public static async updateTemplateDelivery({
        id,
        templateId,
        requestBody,
    }: {
        /** A unique integer value identifying this delivery. **/
        id: number,
        templateId: number,
        requestBody?: PolymorphicDelivery,
    }): Promise<PolymorphicDelivery> {
        const result = await __request({
            method: 'PUT',
            path: `/api/v2/templates/${templateId}/deliveries/${id}/`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Delete delivery
     * @returns any No response body
     * @throws ApiError
     */
    public static async deleteTemplateDelivery({
        id,
        templateId,
    }: {
        /** A unique integer value identifying this delivery. **/
        id: number,
        templateId: number,
    }): Promise<any> {
        const result = await __request({
            method: 'DELETE',
            path: `/api/v2/templates/${templateId}/deliveries/${id}/`,
        });
        return result.body;
    }

    /**
     * upload email delivery attachments
     * @returns PolymorphicDelivery
     * @throws ApiError
     */
    public static async uploadDeliveryAttachments({
        id,
        templateId,
        requestBody,
    }: {
        /** A unique integer value identifying this delivery. **/
        id: number,
        templateId: number,
        requestBody: any,
    }): Promise<PolymorphicDelivery> {
        const result = await __request({
            method: 'POST',
            path: `/api/v2/templates/${templateId}/deliveries/${id}/attachments/`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * download delivery attachment
     * @returns PolymorphicDelivery
     * @throws ApiError
     */
    public static async downloadDeliveryAttachment({
        attachmentId,
        id,
        templateId,
    }: {
        attachmentId: string,
        /** A unique integer value identifying this delivery. **/
        id: number,
        templateId: number,
    }): Promise<PolymorphicDelivery> {
        const result = await __request({
            method: 'GET',
            path: `/api/v2/templates/${templateId}/deliveries/${id}/attachments/${attachmentId}/`,
        });
        return result.body;
    }

    /**
     * delete email delivery attachment
     * @returns any No response body
     * @throws ApiError
     */
    public static async deleteDeliveryAttachment({
        attachmentId,
        id,
        templateId,
    }: {
        attachmentId: string,
        /** A unique integer value identifying this delivery. **/
        id: number,
        templateId: number,
    }): Promise<any> {
        const result = await __request({
            method: 'DELETE',
            path: `/api/v2/templates/${templateId}/deliveries/${id}/attachments/${attachmentId}/`,
        });
        return result.body;
    }

}