/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Invitation = {
    readonly id: number;
    email: string;
    role: 'admin' | 'manager' | 'member' | 'billing_manager';
    workspace: {
        id?: number;
        name?: string;
    };
    readonly created_at: string;
    readonly expires_at: string;
    readonly is_accepted: boolean | null;
    readonly invite_key: string;
    readonly sender: string;
    readonly expired: boolean;
};

