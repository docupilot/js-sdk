/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BulkGenTask } from './BulkGenTask';

export type BulkGen = {
    readonly id: number;
    readonly errors: Array<BulkGenTask>;
    readonly file_name: string;
    status?: 0 | 1 | 2 | 3 | 4 | 5;
    start_time?: string | null;
    end_time?: string | null;
    total?: number | null;
    success?: number | null;
};

