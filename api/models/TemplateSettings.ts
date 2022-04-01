/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FillablePdfSettings } from './FillablePdfSettings';

export type TemplateSettings = {
    margin?: {
        top?: number,
        left?: number,
        right?: number,
        bottom?: number,
    } | null;
    timezone?: string;
    readonly info: FillablePdfSettings;
    dynamic_images: Array<{
        token: string,
        left: number,
        top: number,
        page: number,
        width?: number,
        height?: number,
    }>;
    output_file_name?: string;
    output_type?: TemplateSettings.output_type;
    password?: string | null;
    format?: TemplateSettings.format;
    orientation?: TemplateSettings.orientation;
    header?: string | null;
    footer?: string | null;
    auto_number?: number | null;
    flatten_pdf?: boolean;
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
