/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SignatureDelivery = {
    readonly id: number;
    failure_email_recipients?: string | null;
    signers: Array<{
        id: string;
        order?: string;
        name: string;
        email: string;
    }>;
    expiry: number;
    first_reminder?: number | null;
    reminder_frequency?: number | null;
    warn_before?: number | null;
    name: string;
    type?: 'signature';
    success_callback_url?: string | null;
    success_callback_payload?: Record<string, any> | null;
    success_callback_headers?: Record<string, any> | null;
    last_used_on?: string | null;
    subject?: string | null;
    message?: string | null;
    cc?: Array<string>;
    sequenced_signing?: boolean;
    enable_optional_signers?: boolean;
};

