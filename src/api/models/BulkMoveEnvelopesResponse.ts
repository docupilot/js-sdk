/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EnvelopeMoveFailureDetail } from './EnvelopeMoveFailureDetail';

export type BulkMoveEnvelopesResponse = {
    /**
     * List of successfully moved envelope IDs
     */
    success: Array<number>;
    /**
     * Mapping of failed envelope IDs to error messages
     */
    failures: Record<string, EnvelopeMoveFailureDetail>;
};

