/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type EmailDelivery = {
    readonly id: number;
    readonly attachments: Array<Buffer | ArrayBuffer | ArrayBufferView>;
    name: string;
    type?: EmailDelivery.type;
    from_email: string;
    to_email: Array<string>;
    cc?: Array<string> | null;
    bcc?: Array<string> | null;
    headers?: Record<string, any> | null;
    subject?: string;
    body?: string;
}

export namespace EmailDelivery {

    export enum type {
        EMAIL = 'email',
        WEBHOOK = 'webhook',
        DOCU_SIGN = 'docu_sign',
        SIGN_NOW = 'sign_now',
        ZOHO_CRM = 'zoho_crm',
        DROPBOX = 'dropbox',
        GOOGLE_DRIVE = 'google_drive',
        PODIO = 'podio',
        ONE_DRIVE = 'one_drive',
        EVERSIGN = 'eversign',
        HELLOSIGN = 'hellosign',
        AWS_S3 = 'aws_s3',
    }


}
