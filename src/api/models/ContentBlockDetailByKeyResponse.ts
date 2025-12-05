/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TemplateSchema } from './TemplateSchema';

export type ContentBlockDetailByKeyResponse = {
    name: string;
    type: 'docx' | 'html';
    schema: Array<TemplateSchema>;
};

