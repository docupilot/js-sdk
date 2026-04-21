/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Extension } from './Extension';

export type PaginatedExtensionList = {
    count: number;
    next?: string | null;
    previous?: string | null;
    results: Array<Extension>;
};

