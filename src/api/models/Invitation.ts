/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Invitation = {
    readonly id: number;
    readonly workspace: string;
    readonly sender: string;
    readonly expired: string;
    email: string;
    role: 'admin' | 'manager' | 'member' | 'billing_manager';
    readonly created_at: string;
    readonly expires_at: string;
    readonly accepted_at: string | null;
    readonly is_accepted: boolean | null;
    readonly invite_key: string;
    organization?: number | null;
};

