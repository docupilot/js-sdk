/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { WorkflowNodeRun } from './WorkflowNodeRun';

export type WorkflowRunRetrieve = {
    readonly id: number;
    readonly run_id: string;
    readonly workflow: number;
    readonly workflow_version: number;
    readonly status: 'queued' | 'running' | 'completed' | 'failed' | 'cancelled' | 'waiting';
    readonly created_by: number | null;
    readonly error_message: string | null;
    readonly started_at: string | null;
    readonly completed_at: string | null;
    readonly created_at: string;
    readonly updated_at: string;
    readonly node_runs: Array<WorkflowNodeRun>;
};

