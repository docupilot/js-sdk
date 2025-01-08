/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BulkGenTask } from './BulkGenTask';

export type BulkGen = {
    readonly id: number;
    readonly errors: Array<BulkGenTask>;
    readonly file_name: string;
    readonly status: 'Draft' | 'Pending' | 'In Progress' | 'Success' | 'Failed' | 'Cancelled';
    start_time?: string | null;
    end_time?: string | null;
    total?: number | null;
    success?: number | null;
    readonly updated_time: string | null;
    readonly created_by: number;
    readonly updated_by: number | null;
};

