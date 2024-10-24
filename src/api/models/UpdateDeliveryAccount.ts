/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdateDeliveryAccount = {
    readonly id: number;
    type: 'hellosign' | 'aws_s3' | 'signable' | 'yousign' | 'email';
    readonly sub_type: string;
    readonly used_by: number;
    readonly name: string | null;
    credentials: Record<string, any>;
    readonly is_expired: boolean;
    readonly updated_at: string | null;
    use_for_images?: boolean;
};

