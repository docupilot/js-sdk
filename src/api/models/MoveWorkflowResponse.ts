/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { WorkflowMoveFailureDetail } from './WorkflowMoveFailureDetail';

export type MoveWorkflowResponse = {
    /**
     * List of successfully moved workflow IDs.
     */
    success: Array<number>;
    /**
     * Mapping of failed workflow IDs to error messages.
     */
    failures: Record<string, WorkflowMoveFailureDetail>;
};

