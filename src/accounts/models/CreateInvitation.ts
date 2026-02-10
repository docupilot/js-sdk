/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateInvitation = {
    email: string;
    role: 'admin' | 'manager' | 'member' | 'billing_manager';
    workspace: number;
};

