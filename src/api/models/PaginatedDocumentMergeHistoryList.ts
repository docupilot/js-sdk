/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DocumentMergeHistory } from './DocumentMergeHistory';

export type PaginatedDocumentMergeHistoryList = {
    count: number;
    next?: string | null;
    previous?: string | null;
    results: Array<DocumentMergeHistory>;
};

