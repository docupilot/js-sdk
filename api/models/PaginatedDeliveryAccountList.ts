/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DeliveryAccount } from './DeliveryAccount';

export type PaginatedDeliveryAccountList = {
    count?: number;
    next?: string | null;
    previous?: string | null;
    results?: Array<DeliveryAccount>;
}
