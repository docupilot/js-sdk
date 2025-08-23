/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Invitation = {
    readonly id: number;
    email: string;
    role: 'admin' | 'manager' | 'member' | 'billing_manager';
    readonly created_at: string;
    readonly expires_at: string;
    readonly workspace: string;
    readonly is_accepted: boolean | null;
    readonly invite_key: string;
    readonly sender: string;
    readonly expired: string;
};

