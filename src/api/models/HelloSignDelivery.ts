/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type HelloSignDelivery = {
    readonly id: number;
    failure_email_recipients?: string | null;
    account: number;
    signers: Array<{
        name: string;
        email_address: string;
    }>;
    name: string;
    type?: 'hellosign';
    success_callback_url?: string | null;
    last_used_on?: string | null;
    title?: string | null;
    subject?: string | null;
    message?: string | null;
    cc?: Array<string>;
    use_text_tags?: boolean;
    hide_text_tags?: boolean;
    sequenced_signing?: boolean;
    enable_optional_signers?: boolean;
};

