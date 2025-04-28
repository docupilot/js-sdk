/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type S3Delivery = {
    readonly id: number;
    failure_email_recipients?: string | null;
    account: number;
    name: string;
    type?: 'aws_s3';
    success_callback_url?: string | null;
    success_callback_payload?: Record<string, any> | null;
    success_callback_headers?: Record<string, any> | null;
    last_used_on?: string | null;
    bucket: string;
    key_prefix?: string | null;
    region?: string | null;
};

