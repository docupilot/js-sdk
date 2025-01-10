/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Invoice } from './Invoice';

export type PaginatedInvoiceList = {
    count: number;
    next?: string | null;
    previous?: string | null;
    results: Array<Invoice>;
};

