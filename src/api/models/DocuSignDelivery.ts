/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DocuSignDelivery = {
    readonly id: number;
    failure_email_recipients?: string | null;
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
    reminder_settings?: {
        reminder_delay: number;
        reminder_frequency: number;
    } | null;
    overwrite_account_defaults?: boolean;
    name: string;
    type?: 'docu_sign';
    success_callback_url?: string | null;
    success_callback_payload?: Record<string, any> | null;
    success_callback_headers?: Record<string, any> | null;
    last_used_on?: string | null;
    subject?: string | null;
    message?: string | null;
    fullname_anchor_tags?: boolean;
    sequenced_signing?: boolean;
    expire_after?: number | null;
    enable_optional_signers?: boolean;
    readonly api_version: '2.0' | '2.1';
    folder_id?: string | null;
    folder_name?: string | null;
    allow_reassign?: boolean;
};

