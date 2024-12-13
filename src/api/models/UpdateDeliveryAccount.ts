/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdateDeliveryAccount = {
    readonly id: number;
    readonly type: 'hellosign' | 'aws_s3' | 'signable' | 'yousign' | 'email' | 'sftp';
    readonly sub_type: string;
    readonly used_by: number;
    readonly name: string | null;
    credentials: Record<string, any>;
    readonly is_expired: boolean;
    readonly updated_at: string | null;
    use_for_images?: boolean;
};

