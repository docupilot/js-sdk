/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TypeEnum } from './TypeEnum';

/**
 * Write value only in `post` and not allow the field to be updated in `put/patch` requests.
 * Can be used for non-write_only fields
 *
 * To use it, specify a list of fields as `write_once_fields` on the serializer's Meta:
 * ```
 * class Meta:
 * model = Model
 * fields = '__all__' or (list of fields)
 * write_once_fields = ('collection', )
 * ```
 *
 * Now the fields in `write_once_fields` can be set during POST (create),
 * but cannot be changed afterwards via PUT or PATCH (update).
 *
 * Reference: http://blog.qax.io/write-once-fields-with-django-rest-framework/
 */
export type Delivery = {
    readonly id: number;
    name: string;
    type: TypeEnum;
    account?: number | null;
}
