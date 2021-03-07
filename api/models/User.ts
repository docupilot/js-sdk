/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Organization } from './Organization';

export type User = {
    readonly id: number;
    first_name?: string;
    last_name?: string;
    readonly email: string;
    timezone?: string | null;
    organization?: Organization;
}
