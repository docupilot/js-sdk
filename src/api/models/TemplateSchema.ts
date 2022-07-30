/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type TemplateSchema = {
    name: string;
    type: 'string' | 'array' | 'object' | 'generic';
    generics: 'string' | 'array' | 'object' | 'generic';
    fields: Array<TemplateSchema>;
};

