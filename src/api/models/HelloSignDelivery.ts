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
    success_callback_payload?: Record<string, any> | null;
    success_callback_headers?: Record<string, any> | null;
    last_used_on?: string | null;
    readonly created_time: string | null;
    readonly updated_time: string | null;
    title?: string | null;
    subject?: string | null;
    message?: string | null;
    cc?: Array<string>;
    use_text_tags?: boolean;
    hide_text_tags?: boolean;
    sequenced_signing?: boolean;
    enable_optional_signers?: boolean;
};

