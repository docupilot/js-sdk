/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ChildTemplate = {
    readonly id: number;
    readonly title: string;
    description?: string | null;
    type?: 'docx' | 'html' | 'dpt' | 'fillable_pdf' | 'pptx' | 'xlsx' | 'g_document' | 'g_presentation' | 'g_spreadsheet';
    readonly created_time: string;
    readonly updated_time: string | null;
    document_status?: 'active' | 'test';
    deleted_time?: string | null;
    editor_version?: 'V1' | 'V2';
    readonly created_by: number;
    readonly updated_by: number | null;
    folder?: number | null;
};

