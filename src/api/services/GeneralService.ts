/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BannerNotification } from '../models/BannerNotification';
import type { Meta } from '../models/Meta';
import type { Plan } from '../models/Plan';
import type { Timezone } from '../models/Timezone';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import type { OmitReadonly } from '../core/utils/OmitReadonly';

export class GeneralService {

    /**
     * @returns BannerNotification
     * @throws ApiError
     */
    public static listBannerNotifications(): CancelablePromise<Array<BannerNotification>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/dashboard/banner_notifications/',
        });
    }

    /**
     * @returns Meta
     * @throws ApiError
     */
    public static getAppMeta(): CancelablePromise<Meta> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/dashboard/meta/',
        });
    }

    /**
     * @returns Plan
     * @throws ApiError
     */
    public static listSubscriptionPlans(): CancelablePromise<Array<Plan>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/dashboard/plans/',
        });
    }

    /**
     * @returns Timezone
     * @throws ApiError
     */
    public static listTimezones(): CancelablePromise<Array<Timezone>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/dashboard/tz/',
        });
    }

}
