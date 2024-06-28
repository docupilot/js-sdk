/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SignNowDelivery = {
    readonly id: number;
    failure_email_recipients?: string | null;
    account: number;
    signers: Array<{
        order?: string;
        role: string;
        email: string;
    }>;
    name: string;
    type?: 'sign_now';
    success_callback_url?: string | null;
    last_used_on?: string | null;
    subject?: string | null;
    message?: string | null;
    cc?: Array<string>;
    sequenced_signing?: boolean;
    enable_optional_signers?: boolean;
};

