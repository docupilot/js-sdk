/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EnvelopeMoveFailureDetail } from './EnvelopeMoveFailureDetail';

export type BulkMoveEnvelopesResponse = {
    /**
     * Number of envelopes requested for the bulk move
     */
    total_count: number;
    /**
     * Number of envelopes moved successfully
     */
    moved_count: number;
    /**
     * Number of envelopes that were not moved
     */
    failure_count: number;
    /**
     * Failures grouped by reason
     */
    failures: Array<EnvelopeMoveFailureDetail>;
};

