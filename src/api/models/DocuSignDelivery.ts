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
    type?: DocuSignDelivery.type;
    subject?: string | null;
    message?: string | null;
    fullname_anchor_tags?: boolean;
    sequenced_signing?: boolean;
    custom_tags?: Record<string, any> | null;
    expire_after?: number | null;
    enable_optional_signers?: boolean;
}

export namespace DocuSignDelivery {

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
