/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TemplateHubspotModuleMapping } from './TemplateHubspotModuleMapping';

export type PaginatedTemplateHubspotModuleMappingList = {
    count: number;
    next?: string | null;
    previous?: string | null;
    results: Array<TemplateHubspotModuleMapping>;
};

