/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type TemplateSchema = {
    name: string;
    type: 'string' | 'array' | 'object' | 'generic';
    rType?: 'content_block';
    generics: 'string' | 'array' | 'object' | 'generic';
    fields: Array<TemplateSchema>;
};

