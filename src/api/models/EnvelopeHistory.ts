/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { HistoryRecord } from './HistoryRecord';

export type EnvelopeHistory = {
    readonly envelope_id: string;
    name: string;
    status?: 'created' | 'pending' | 'voided' | 'declined' | 'completed';
    cc?: Array<string>;
    readonly created_at: string;
    readonly signers: Array<string>;
    readonly history: Array<HistoryRecord>;
};

