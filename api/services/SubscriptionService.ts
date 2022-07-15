/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ChargebeeSubscription } from '../models/ChargebeeSubscription';
import { request as __request } from '../core/request';

export class SubscriptionService {

    /**
     * @returns ChargebeeSubscription
     * @throws ApiError
     */
    public static async getSubscriptionDetails(): Promise<ChargebeeSubscription> {
        const result = await __request({
            method: 'GET',
            path: `/accounts/v2/subscription/details/`,
        });
        return result.body;
    }

    /**
     * @returns any
     * @throws ApiError
     */
    public static async getChargebeeHostedPage({
        planId,
    }: {
        planId?: string,
    }): Promise<Record<string, any>> {
        const result = await __request({
            method: 'GET',
            path: `/accounts/v2/subscription/hosted_page/`,
            query: {
                'plan_id': planId,
            },
        });
        return result.body;
    }

    /**
     * @returns ChargebeeSubscription
     * @throws ApiError
     */
    public static async getChargebeePortalSession(): Promise<ChargebeeSubscription> {
        const result = await __request({
            method: 'GET',
            path: `/accounts/v2/subscription/portal_session/`,
        });
        return result.body;
    }

}