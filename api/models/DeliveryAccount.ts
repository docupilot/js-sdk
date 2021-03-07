/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TypeEnum } from './TypeEnum';

export type DeliveryAccount = {
    readonly id: number;
    readonly name: string;
    type: TypeEnum;
    is_expired?: boolean;
    credentials: Record<string, any>;
}
