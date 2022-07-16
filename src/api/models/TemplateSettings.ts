/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DynamicImage } from './DynamicImage';
import type { FillablePdfSettings } from './FillablePdfSettings';

export type TemplateSettings = {
    margin?: {
        top?: number,
        left?: number,
        right?: number,
        bottom?: number,
    } | null;
    timezone?: string;
    readonly info: (FillablePdfSettings);
    dynamic_images?: Array<DynamicImage> | null;
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
        HTML = 'html',
        PDF = 'pdf',
        JPEG = 'jpeg',
        PNG = 'png',
        DOCX = 'docx',
        PPTX = 'pptx',
        XLSX = 'xlsx',
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
