/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type WorkflowEdgeRun = {
    readonly id: number;
    readonly edge_run_id: string;
    readonly edge: number;
    readonly status: 'waiting' | 'executed' | 'skipped' | 'failed';
    readonly created_at: string;
    readonly updated_at: string;
};

