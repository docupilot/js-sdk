/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { WorkflowFolder } from './WorkflowFolder';
import type { WorkflowVersion } from './WorkflowVersion';

export type Workflow = {
    readonly id: number;
    name: string;
    description?: string;
    readonly status: 'active' | 'paused';
    folder?: WorkflowFolder | null;
    readonly created_by: number;
    readonly created_at: string;
    readonly updated_by: number | null;
    readonly updated_at: string | null;
    readonly archived_at: string | null;
    readonly archived_by: number | null;
    readonly latest_version: WorkflowVersion | null;
    readonly published_version: WorkflowVersion | null;
};

