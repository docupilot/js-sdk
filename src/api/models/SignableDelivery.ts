/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SignableDelivery = {
    readonly id: number;
    failure_email_recipients?: string | null;
    account: number;
    parties: Array<{
        party_name: string;
        party_email: string;
        party_role: 'signer' | 'copy';
    }>;
    name: string;
    type?: 'signable';
    success_callback_url?: string | null;
    success_callback_payload?: Record<string, any> | null;
    success_callback_headers?: Record<string, any> | null;
    last_used_on?: string | null;
    readonly created_time: string | null;
    readonly updated_time: string | null;
    title?: string | null;
    expire_after?: number | null;
    remind_after?: number | null;
};

