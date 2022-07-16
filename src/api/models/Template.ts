/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TemplateSettings } from './TemplateSettings';

export type Template = {
    readonly id: number;
    preferences?: TemplateSettings;
    title: string;
    description?: string | null;
    readonly type: Template.type;
    readonly created_time: string;
    document_status?: Template.document_status;
    readonly deleted_time: string | null;
    folder?: number | null;
}

export namespace Template {

    export enum type {
        DOCX = 'docx',
        HTML = 'html',
        FILLABLE_PDF = 'fillable_pdf',
        PPTX = 'pptx',
        XLSX = 'xlsx',
        G_DOCUMENT = 'g_document',
        G_PRESENTATION = 'g_presentation',
        G_SPREADSHEET = 'g_spreadsheet',
    }

    export enum document_status {
        ACTIVE = 'active',
        TEST = 'test',
    }


}
