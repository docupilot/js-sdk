/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TemplateInfo } from './TemplateInfo';

export type PaginatedTemplateInfoList = {
    count: number;
    next?: string | null;
    previous?: string | null;
    results: Array<TemplateInfo>;
};

