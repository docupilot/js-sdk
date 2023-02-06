/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SignableDelivery = {
    readonly id: number;
    account: number;
    parties: Array<{
        party_name: string;
        party_email: string;
        party_role: 'signer' | 'copy';
    }>;
    name: string;
    type?: 'signable';
    success_callback_url?: string | null;
    failure_email_recipients?: string | null;
    title?: string | null;
    expire_after?: number | null;
    remind_after?: number | null;
};

