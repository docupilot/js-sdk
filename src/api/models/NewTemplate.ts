/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type NewTemplate = {
    file: string;
    folder?: number | null;
    title: string;
    output_type: NewTemplate.output_type;
    description?: string | null;
}

export namespace NewTemplate {

    export enum output_type {
        HTML = 'html',
        PDF = 'pdf',
        JPEG = 'jpeg',
        PNG = 'png',
        DOCX = 'docx',
        PPTX = 'pptx',
        XLSX = 'xlsx',
    }


}
