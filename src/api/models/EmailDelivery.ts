/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type EmailDelivery = {
    readonly id: number;
    readonly attachments: Array<Buffer | ArrayBuffer | ArrayBufferView>;
    name: string;
    type?: 'email' | 'webhook' | 'docu_sign' | 'sign_now' | 'zoho_crm' | 'dropbox' | 'google_drive' | 'podio' | 'one_drive' | 'eversign' | 'hellosign' | 'aws_s3';
    from_email: string;
    to_email: Array<string>;
    cc?: Array<string> | null;
    bcc?: Array<string> | null;
    headers?: Record<string, any> | null;
    subject?: string;
    body?: string;
}
