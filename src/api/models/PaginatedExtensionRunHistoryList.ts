/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ExtensionRunHistory } from './ExtensionRunHistory';

export type PaginatedExtensionRunHistoryList = {
    count: number;
    next?: string | null;
    previous?: string | null;
    results: Array<ExtensionRunHistory>;
};

