/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Folder } from './Folder';
import type { TemplateSettings } from './TemplateSettings';

export type Template = {
    readonly id: number;
    preferences?: TemplateSettings;
    folder?: Folder | null;
    title: string;
    description?: string | null;
    readonly type: 'docx' | 'html' | 'fillable_pdf' | 'pptx' | 'xlsx' | 'g_document' | 'g_presentation' | 'g_spreadsheet';
    readonly created_time: string;
    readonly updated_time: string | null;
    document_status?: 'active' | 'test';
    readonly deleted_time: string | null;
    readonly use_v2_editor: boolean;
    readonly created_by: number;
    readonly updated_by: number | null;
};

