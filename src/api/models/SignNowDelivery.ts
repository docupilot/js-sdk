/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SignNowDelivery = {
    readonly id: number;
    account?: number | null;
    signers: Array<{
        order?: string,
        role: string,
        email: string,
    }>;
    name: string;
    type?: 'email' | 'webhook' | 'docu_sign' | 'sign_now' | 'zoho_crm' | 'dropbox' | 'google_drive' | 'podio' | 'one_drive' | 'eversign' | 'hellosign' | 'aws_s3';
    subject?: string | null;
    message?: string | null;
    cc?: Array<string> | null;
    sequenced_signing?: boolean;
    enable_optional_signers?: boolean;
}
