/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Plans } from './Plans';

export type PaginatedPlansList = {
    count: number;
    next?: string | null;
    previous?: string | null;
    results: Array<Plans>;
};

