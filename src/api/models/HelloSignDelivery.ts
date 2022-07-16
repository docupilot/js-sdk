/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type HelloSignDelivery = {
    readonly id: number;
    account?: number | null;
    signers: Array<{
        name: string;
        email_address: string;
    }>;
    name: string;
    type?: 'hellosign';
    title?: string | null;
    subject?: string | null;
    message?: string | null;
    cc?: Array<string> | null;
    use_text_tags?: boolean;
    hide_text_tags?: boolean;
    sequenced_signing?: boolean;
    enable_optional_signers?: boolean;
};

