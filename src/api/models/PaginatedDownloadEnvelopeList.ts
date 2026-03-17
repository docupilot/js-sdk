/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DownloadEnvelope } from './DownloadEnvelope';

export type PaginatedDownloadEnvelopeList = {
    count: number;
    next?: string | null;
    previous?: string | null;
    results: Array<DownloadEnvelope>;
};

