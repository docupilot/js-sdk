/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type WebhookDelivery = {
    readonly id: number;
    name: string;
    type?: 'email' | 'webhook' | 'docu_sign' | 'sign_now' | 'zoho_crm' | 'dropbox' | 'google_drive' | 'podio' | 'one_drive' | 'eversign' | 'hellosign' | 'aws_s3';
    url: string;
    headers?: Record<string, any> | null;
    payload?: Record<string, any> | null;
}
