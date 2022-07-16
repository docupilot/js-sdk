/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TemplateSettings } from './TemplateSettings';

export type Template = {
    readonly id: number;
    preferences?: TemplateSettings;
    title: string;
    description?: string | null;
    readonly type: 'docx' | 'html' | 'fillable_pdf' | 'pptx' | 'xlsx' | 'g_document' | 'g_presentation' | 'g_spreadsheet';
    readonly created_time: string;
    document_status?: 'active' | 'test';
    readonly deleted_time: string | null;
    folder?: number | null;
}
