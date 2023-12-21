/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DocuSignDelivery = {
    readonly id: number;
    account: number;
    custom_tags?: Record<string, Record<string, Array<any>>> | null;
    signers: Array<{
        order?: string;
        recipient_type: 'signer' | 'agent' | 'cc' | 'editor';
        name: string;
        is_email_delivery: boolean;
        is_sms_delivery: boolean;
        email_address?: string;
        country_code?: string;
        phone_number?: string;
    }>;
    name: string;
    type?: 'docu_sign';
    success_callback_url?: string | null;
    failure_email_recipients?: string | null;
    subject?: string | null;
    message?: string | null;
    fullname_anchor_tags?: boolean;
    sequenced_signing?: boolean;
    expire_after?: number | null;
    enable_optional_signers?: boolean;
    readonly api_version: '2.0' | '2.1';
};

