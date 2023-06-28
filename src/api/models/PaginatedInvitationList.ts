/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Invitation } from './Invitation';

export type PaginatedInvitationList = {
    count?: number;
    next?: string | null;
    previous?: string | null;
    results?: Array<Invitation>;
};

