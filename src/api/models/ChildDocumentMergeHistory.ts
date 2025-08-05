/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ChildDocumentMergeHistory = {
    readonly id: number;
    delivery_type: 'webhook' | 'azure_blob_storage' | 'box_drive' | 'signature' | 'docu_sign' | 'sign_now' | 'zoho_crm' | 'dropbox' | 'google_drive' | 'podio' | 'one_drive' | 'eversign' | 'hellosign' | 'aws_s3' | 'signable' | 'yousign' | 'email' | 'sftp';
    status: 'pending' | 'success' | 'error';
    message?: Record<string, any> | null;
    delivery?: number | null;
};

