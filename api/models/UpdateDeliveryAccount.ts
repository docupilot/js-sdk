/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdateDeliveryAccount = {
    readonly id: number;
    type: UpdateDeliveryAccount.type;
    readonly sub_type: string;
    readonly name: string | null;
    credentials: Record<string, any>;
    readonly is_expired: boolean;
}

export namespace UpdateDeliveryAccount {

    export enum type {
        HELLOSIGN = 'hellosign',
        AWS_S3 = 'aws_s3',
    }


}
