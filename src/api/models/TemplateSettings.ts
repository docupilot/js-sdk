/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DynamicImage } from './DynamicImage';
import type { FillablePdfSettings } from './FillablePdfSettings';

export type TemplateSettings = {
    margin?: {
        top?: number;
        left?: number;
        right?: number;
        bottom?: number;
    } | null;
    timezone?: string;
    readonly info: FillablePdfSettings;
    dynamic_images?: Array<DynamicImage> | null;
    output_file_name?: string;
    output_type?: 'html' | 'pdf' | 'jpeg' | 'png' | 'docx' | 'pptx' | 'xlsx';
    password?: string | null;
    format?: 'A3' | 'A4' | 'A5' | 'Legal' | 'Letter' | 'Tabloid' | 'Custom';
    orientation?: 'portrait' | 'landscape';
    header?: string | null;
    footer?: string | null;
    width?: number | null;
    height?: number | null;
    auto_number?: number | null;
    flatten_pdf?: boolean;
};

