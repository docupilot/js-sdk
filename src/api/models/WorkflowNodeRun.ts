/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type WorkflowNodeRun = {
    readonly id: number;
    readonly node_run_id: string;
    readonly node: number;
    readonly node_name: string;
    readonly node_type: string;
    readonly status: 'queued' | 'running' | 'completed' | 'failed' | 'skipped' | 'waiting';
    readonly attempt_count: number;
    readonly input_data_json: Record<string, any>;
    readonly output_data_json: Record<string, any>;
    readonly error_message: string | null;
    readonly started_at: string | null;
    readonly completed_at: string | null;
    readonly created_at: string;
    readonly updated_at: string;
};

