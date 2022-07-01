/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Adds support for write once fields to serializers.
 * Write value only in `post` and not allow the field to be updated in `put/patch` requests.
 *
 * To use it, specify a list of fields as `write_once_fields` on the serializer's Meta:
 * ```
 * class Meta:
 * model = SomeModel
 * fields = '__all__'
 * write_once_fields = ('collection', )
 * ```
 *
 * Now the fields in `write_once_fields` can be set during POST (create),
 * but cannot be changed afterwards via PUT or PATCH (update).
 * Inspired by https://stackoverflow.com/a/37487134/627411.
 * Taken from https://blog.qax.io/write-once-fields-with-django-rest-framework/
 */
export type UpdateDeliveryAccount = {
    readonly id: number;
    type: UpdateDeliveryAccount.type;
    readonly name: string;
    credentials: Record<string, any>;
    readonly is_expired: boolean;
}

export namespace UpdateDeliveryAccount {

    export enum type {
        HELLOSIGN = 'hellosign',
        AWS_S3 = 'aws_s3',
    }


}
