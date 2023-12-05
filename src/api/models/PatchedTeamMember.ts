/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { User } from './User';

export type PatchedTeamMember = {
    readonly id?: number;
    readonly user?: User;
    role?: 'owner' | 'admin' | 'manager' | 'member' | 'billing_manager';
    is_deleted?: boolean;
};

