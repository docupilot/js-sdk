/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GoogleCloudStorageDelivery = {
    readonly id: number;
    failure_email_recipients?: string | null;
    name: string;
    type?: 'google_cloud_storage';
    success_callback_url?: string | null;
    success_callback_payload?: Record<string, any> | null;
    success_callback_headers?: Record<string, any> | null;
    last_used_on?: string | null;
    /**
     * Google Cloud Storage Bucket Name
     */
    bucket_name: string;
    /**
     * Allowed upload folder path
     */
    folder?: string;
};

