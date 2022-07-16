/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ChildTemplate = {
    readonly id: number;
    readonly title: string;
    description?: string | null;
    type?: 'docx' | 'html' | 'fillable_pdf' | 'pptx' | 'xlsx' | 'g_document' | 'g_presentation' | 'g_spreadsheet';
    readonly created_time: string;
    document_status?: 'active' | 'test';
    deleted_time?: string | null;
    created_by: number;
    folder?: number | null;
};

