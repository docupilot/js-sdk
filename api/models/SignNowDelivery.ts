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
    type?: SignNowDelivery.type;
    subject?: string | null;
    message?: string | null;
    cc?: Array<string> | null;
    sequenced_signing?: boolean;
    enable_optional_signers?: boolean;
}

export namespace SignNowDelivery {

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
