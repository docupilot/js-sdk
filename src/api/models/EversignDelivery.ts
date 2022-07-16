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
    type?: 'email' | 'webhook' | 'docu_sign' | 'sign_now' | 'zoho_crm' | 'dropbox' | 'google_drive' | 'podio' | 'one_drive' | 'eversign' | 'hellosign' | 'aws_s3';
    title?: string | null;
    message?: string | null;
    use_signer_order?: boolean;
    reminders?: boolean;
    require_all_signers?: boolean;
    expires_in?: number | null;
    enable_optional_signers?: boolean;
}
