/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SignableDelivery = {
    readonly id: number;
    account?: number | null;
    signers: Array<{
        party_name: string;
        party_email: string;
        party_role: 'signer' | 'copy';
    }>;
    name: string;
    type?: 'signable';
    title?: string | null;
    parties: Record<string, any>;
    expire_after?: number | null;
    remind_after?: number | null;
};

