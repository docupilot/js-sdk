/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdateDeliveryAccount = {
    readonly id: number;
    readonly sub_type: string;
    readonly used_by: number;
    readonly name: string | null;
    readonly type: 'docu_sign' | 'sign_now' | 'zoho_crm' | 'dropbox' | 'google_drive' | 'podio' | 'one_drive' | 'eversign' | 'box' | 'zoho' | 'hellosign' | 'aws_s3' | 'signable' | 'yousign' | 'email' | 'sftp' | 'azure_storage';
    credentials: Record<string, any>;
    readonly is_expired: boolean;
    readonly updated_at: string | null;
    use_for_images?: boolean;
};

