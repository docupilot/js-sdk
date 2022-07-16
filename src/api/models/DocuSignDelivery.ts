/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DocuSignDelivery = {
    readonly id: number;
    account?: number | null;
    signers: Array<{
        order?: string,
        recipient_type: 'signer' | 'agent' | 'cc' | 'editor',
        name: string,
        email_address: string,
    }>;
    name: string;
    type?: 'email' | 'webhook' | 'docu_sign' | 'sign_now' | 'zoho_crm' | 'dropbox' | 'google_drive' | 'podio' | 'one_drive' | 'eversign' | 'hellosign' | 'aws_s3';
    subject?: string | null;
    message?: string | null;
    fullname_anchor_tags?: boolean;
    sequenced_signing?: boolean;
    custom_tags?: Record<string, any> | null;
    expire_after?: number | null;
    enable_optional_signers?: boolean;
}
