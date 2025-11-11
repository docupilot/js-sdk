/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ESignGlobalSettings } from './ESignGlobalSettings';

export type PaginatedESignGlobalSettingsList = {
    count: number;
    next?: string | null;
    previous?: string | null;
    results: Array<ESignGlobalSettings>;
};

