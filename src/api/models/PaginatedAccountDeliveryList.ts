/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccountDelivery } from './AccountDelivery';

export type PaginatedAccountDeliveryList = {
    count?: number;
    next?: string | null;
    previous?: string | null;
    results?: Array<AccountDelivery>;
};

