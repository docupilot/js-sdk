/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Workspace } from './Workspace';

export type PaginatedWorkspaceList = {
    count?: number;
    next?: string | null;
    previous?: string | null;
    results?: Array<Workspace>;
};

