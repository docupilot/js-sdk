/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdateDeliveryAccount = {
    readonly id: number;
    type: 'hellosign' | 'aws_s3';
    readonly sub_type: string;
    readonly used_by: number;
    readonly name: string | null;
    credentials: Record<string, any>;
    readonly is_expired: boolean;
};

