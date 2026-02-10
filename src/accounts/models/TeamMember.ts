/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Workspace } from './Workspace';

export type TeamMember = {
    readonly id: number;
    first_name?: string;
    last_name?: string;
    email: string;
    role?: 'owner' | 'member';
    /**
     * Designates whether this user should be treated as active. Unselect this instead of deleting accounts.
     */
    is_active?: boolean;
    readonly workspaces: Array<Workspace>;
};

