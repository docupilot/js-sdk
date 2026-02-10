/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Workspace = {
    id: number;
    name: string;
    role?: 'owner' | 'admin' | 'manager' | 'member' | 'billing_manager';
    unique_key: string;
    plan: string;
    users: number;
    plan_status: string;
};

