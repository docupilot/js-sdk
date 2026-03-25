/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Tool } from './Tool';

export type PaginatedToolList = {
    count: number;
    next?: string | null;
    previous?: string | null;
    results: Array<Tool>;
};

