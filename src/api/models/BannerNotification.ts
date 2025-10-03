/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BannerNotificationAction } from './BannerNotificationAction';

export type BannerNotification = {
    id: string;
    name: string;
    description: string;
    action: BannerNotificationAction;
};

