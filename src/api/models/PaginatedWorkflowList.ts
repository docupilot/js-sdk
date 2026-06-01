/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Workflow } from './Workflow';

export type PaginatedWorkflowList = {
    count: number;
    next?: string | null;
    previous?: string | null;
    results: Array<Workflow>;
};

