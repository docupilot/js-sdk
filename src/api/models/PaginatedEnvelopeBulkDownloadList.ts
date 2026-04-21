/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EnvelopeBulkDownload } from './EnvelopeBulkDownload';

export type PaginatedEnvelopeBulkDownloadList = {
    count: number;
    next?: string | null;
    previous?: string | null;
    results: Array<EnvelopeBulkDownload>;
};

