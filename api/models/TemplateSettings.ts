/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type TemplateSettings = {
    output_file_name?: string;
    output_type?: TemplateSettings.output_type;
    flatten_pdf?: boolean;
    format?: TemplateSettings.format;
    orientation?: TemplateSettings.orientation;
    timezone?: string;
    auto_number?: number | null;
    header?: string | null;
    footer?: string | null;
    margin?: {
        top?: number,
        left?: number,
        right?: number,
        bottom?: number,
    } | null;
}

export namespace TemplateSettings {

    export enum output_type {
        PDF = 'pdf',
        JPEG = 'jpeg',
        PNG = 'png',
        DOCX = 'docx',
    }

    export enum format {
        A3 = 'A3',
        A4 = 'A4',
        A5 = 'A5',
        LEGAL = 'Legal',
        LETTER = 'Letter',
        TABLOID = 'Tabloid',
    }

    export enum orientation {
        PORTRAIT = 'portrait',
        LANDSCAPE = 'landscape',
    }


}
