/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TemplateSchema } from './TemplateSchema';

export type TemplateSchemaDetail = {
    content: Array<TemplateSchema>;
    /**
     * A mapping of content block keys to their respective schema.
     */
    content_blocks_schema: Record<string, Array<TemplateSchema>>;
    other: Array<TemplateSchema>;
};

