/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type WebhookDelivery = {
    readonly id: number;
    name: string;
    type?: WebhookDelivery.type;
    url: string;
    headers?: Record<string, any> | null;
    payload?: Record<string, any> | null;
}

export namespace WebhookDelivery {

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
