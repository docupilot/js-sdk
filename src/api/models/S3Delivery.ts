/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type S3Delivery = {
    readonly id: number;
    account?: number | null;
    name: string;
    type?: 'email' | 'webhook' | 'docu_sign' | 'sign_now' | 'zoho_crm' | 'dropbox' | 'google_drive' | 'podio' | 'one_drive' | 'eversign' | 'hellosign' | 'aws_s3';
    bucket: string;
    key_prefix?: string | null;
}
