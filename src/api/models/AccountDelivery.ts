/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TemplateInfo } from './TemplateInfo';

export type AccountDelivery = {
    readonly id: number;
    name: string;
    last_used_on?: string | null;
    template_info: TemplateInfo;
};

