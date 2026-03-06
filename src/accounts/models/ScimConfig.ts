/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ScimApiKey } from './ScimApiKey';

export type ScimConfig = {
    readonly provisioning_mode: string;
    readonly keys: Array<ScimApiKey>;
    readonly scim_base_url: string;
};

