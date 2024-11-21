/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BulkGen } from './BulkGen';

export type PaginatedBulkGenList = {
    count?: number;
    next?: string | null;
    previous?: string | null;
    results?: Array<BulkGen>;
};

