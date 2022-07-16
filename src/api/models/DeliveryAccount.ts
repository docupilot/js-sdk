/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DeliveryAccount = {
    readonly id: number;
    type: 'hellosign' | 'aws_s3';
    readonly sub_type: string;
    readonly name: string | null;
    credentials: Record<string, any>;
    readonly is_expired: boolean;
}
