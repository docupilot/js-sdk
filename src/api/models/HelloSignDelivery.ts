/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type HelloSignDelivery = {
    readonly id: number;
    account?: number | null;
    signers: Array<{
        name: string,
        email_address: string,
    }>;
    name: string;
    type?: HelloSignDelivery.type;
    title?: string | null;
    subject?: string | null;
    message?: string | null;
    cc?: Array<string> | null;
    use_text_tags?: boolean;
    hide_text_tags?: boolean;
    sequenced_signing?: boolean;
    enable_optional_signers?: boolean;
}

export namespace HelloSignDelivery {

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
