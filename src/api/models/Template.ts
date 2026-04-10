/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Folder } from './Folder';
import type { TemplateSettings } from './TemplateSettings';

export type Template = {
    readonly id: number;
    preferences?: TemplateSettings;
    folder?: Folder | null;
    readonly has_docusign_delivery: boolean;
    title: string;
    description?: string | null;
    readonly type: 'docx' | 'html' | 'dpt' | 'fillable_pdf' | 'pptx' | 'xlsx' | 'g_document' | 'g_presentation' | 'g_spreadsheet';
    readonly created_time: string;
    readonly updated_time: string | null;
    document_status?: 'active' | 'test';
    readonly deleted_time: string | null;
    readonly editor_version: 'V1' | 'V2';
    readonly created_by: number;
    readonly updated_by: number | null;
};

