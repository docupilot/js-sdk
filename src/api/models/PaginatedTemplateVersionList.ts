/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TemplateVersion } from './TemplateVersion';

export type PaginatedTemplateVersionList = {
    count?: number;
    next?: string | null;
    previous?: string | null;
    results?: Array<TemplateVersion>;
};

