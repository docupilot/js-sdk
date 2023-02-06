/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SignNowDelivery = {
    readonly id: number;
    account: number;
    signers: Array<{
        order?: string;
        role: string;
        email: string;
    }>;
    name: string;
    type?: 'sign_now';
    success_callback_url?: string | null;
    failure_email_recipients?: string | null;
    subject?: string | null;
    message?: string | null;
    cc?: Array<string> | null;
    sequenced_signing?: boolean;
    enable_optional_signers?: boolean;
};

