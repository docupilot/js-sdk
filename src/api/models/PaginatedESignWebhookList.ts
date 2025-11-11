/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ESignWebhook } from './ESignWebhook';

export type PaginatedESignWebhookList = {
    count: number;
    next?: string | null;
    previous?: string | null;
    results: Array<ESignWebhook>;
};

