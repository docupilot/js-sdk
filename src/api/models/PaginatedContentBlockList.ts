/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ContentBlock } from './ContentBlock';

export type PaginatedContentBlockList = {
    count: number;
    next?: string | null;
    previous?: string | null;
    results: Array<ContentBlock>;
};

