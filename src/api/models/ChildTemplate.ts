/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ChildTemplate = {
    readonly id: number;
    readonly title: string;
    description?: string | null;
    type?: ChildTemplate.type;
    readonly created_time: string;
    document_status?: ChildTemplate.document_status;
    deleted_time?: string | null;
    created_by: number;
    folder?: number | null;
}

export namespace ChildTemplate {

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
