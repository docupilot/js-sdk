/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DeliveryAccount = {
    readonly id: number;
    type: 'hellosign' | 'aws_s3' | 'signable' | 'yousign' | 'email' | 'sftp';
    readonly sub_type: string;
    readonly used_by: number;
    readonly name: string | null;
    credentials: Record<string, any>;
    readonly is_expired: boolean;
    readonly updated_at: string;
    use_for_images?: boolean;
};

