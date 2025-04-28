/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SignatureDelivery = {
    readonly id: number;
    failure_email_recipients?: string | null;
    account: number;
    signers: Array<{
        order?: number;
        name: string;
        email: string;
    }>;
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
    /**
     * ex: P7D for 7 days
     */
    expiry?: string | null;
    /**
     * ex: P3D to send first reminder 3 days after
     */
    first_reminder?: string | null;
    /**
     * ex: P1D to send follow up reminders every 1 day
     */
    reminder_frequency?: string | null;
    /**
     * ex: P1D to warn 1 day before expiry
     */
    warn_before?: string | null;
};

