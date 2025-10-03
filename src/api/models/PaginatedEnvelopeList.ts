/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Envelope } from './Envelope';

export type PaginatedEnvelopeList = {
    count: number;
    next?: string | null;
    previous?: string | null;
    results: Array<Envelope>;
};

