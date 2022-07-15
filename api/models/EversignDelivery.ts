/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type EversignDelivery = {
    readonly id: number;
    account?: number | null;
    signers: Array<{
        pin?: string,
        name: string,
        email: string,
        order?: string,
    }>;
    recipients?: Array<{
        name: string,
        email: string,
    }> | null;
    name: string;
    type?: EversignDelivery.type;
    title?: string | null;
    message?: string | null;
    use_signer_order?: boolean;
    reminders?: boolean;
    require_all_signers?: boolean;
    expires_in?: number | null;
    enable_optional_signers?: boolean;
}

export namespace EversignDelivery {

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
