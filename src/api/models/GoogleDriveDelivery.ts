/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GoogleDriveDelivery = {
    readonly id: number;
    account?: number | null;
    name: string;
    type?: GoogleDriveDelivery.type;
    folder?: string;
    folder_id?: string | null;
}

export namespace GoogleDriveDelivery {

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
