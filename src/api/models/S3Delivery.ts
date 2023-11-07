/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type S3Delivery = {
    readonly id: number;
    account: number;
    name: string;
    type?: 'aws_s3';
    success_callback_url?: string | null;
    failure_email_recipients?: string | null;
    bucket: string;
    key_prefix?: string | null;
    region?: string | null;
};

