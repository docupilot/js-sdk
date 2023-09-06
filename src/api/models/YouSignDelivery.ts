/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type YouSignDelivery = {
    readonly id: number;
    account: number;
    signers: Array<{
        first_name: string;
        last_name: string;
        email: string;
        phone_number?: string;
        locale: 'en' | 'fr' | 'de' | 'it' | 'nl' | 'es' | 'pl';
        success_url?: string;
        error_url?: string;
        signature_authentication_mode: 'otp_email' | 'otp_sms' | 'no_otp';
        signature_level: 'electronic_signature' | 'advanced_electronic_signature' | 'electronic_signature_with_qualified_certificate' | 'qualified_electronic_signature_mode_1';
        order?: number;
    }>;
    approvers?: Array<{
        locale: 'en' | 'fr' | 'de' | 'it' | 'nl' | 'es' | 'pl';
        first_name: string;
        last_name: string;
        email: string;
        phone_number?: string;
    }> | null;
    followers?: Array<{
        locale: 'en' | 'fr' | 'de' | 'it' | 'nl' | 'es' | 'pl';
        email: string;
    }> | null;
    reminder_settings?: {
        interval_in_days: 1 | 2 | 7 | 14;
        max_occurrences: number;
    } | null;
    name: string;
    type?: 'yousign';
    success_callback_url?: string | null;
    failure_email_recipients?: string | null;
    title: string;
    email_custom_note?: string | null;
    delivery_mode?: 'email';
    ordered_signers?: boolean;
    timezone?: string | null;
    expiration_date?: string | null;
    custom_experience_id?: string | null;
    workspace_id?: string | null;
    audit_trail_locale?: string | null;
    enable_optional_signers?: boolean;
};

