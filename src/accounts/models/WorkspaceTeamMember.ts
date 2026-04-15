/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { WorkspaceTeamUser } from './WorkspaceTeamUser';

export type WorkspaceTeamMember = {
    readonly id: number;
    readonly user: WorkspaceTeamUser;
    role?: 'owner' | 'admin' | 'manager' | 'member' | 'billing_manager';
    deactivated_at?: string | null;
};

