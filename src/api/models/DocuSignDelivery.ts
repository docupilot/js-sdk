/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DocuSignDelivery = {
    readonly id: number;
    account: number;
    custom_tags?: Record<string, Record<string, Array<any>>> | null;
    name: string;
    type?: 'docu_sign';
    success_callback_url?: string | null;
    failure_email_recipients?: string | null;
    subject?: string | null;
    message?: string | null;
    signers: Record<string, any>;
    fullname_anchor_tags?: boolean;
    sequenced_signing?: boolean;
    expire_after?: number | null;
    enable_optional_signers?: boolean;
    readonly api_version: '2.0' | '2.1';
};

