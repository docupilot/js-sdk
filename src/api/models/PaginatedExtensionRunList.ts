/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ExtensionRun } from './ExtensionRun';

export type PaginatedExtensionRunList = {
    count: number;
    next?: string | null;
    previous?: string | null;
    results: Array<ExtensionRun>;
};

