/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ESignWebhookEventLog } from './ESignWebhookEventLog';

export type PaginatedESignWebhookEventLogList = {
    count: number;
    next?: string | null;
    previous?: string | null;
    results: Array<ESignWebhookEventLog>;
};

