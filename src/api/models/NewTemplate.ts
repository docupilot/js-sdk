/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type NewTemplate = {
    file: Blob;
    folder?: number | null;
    title: string;
    output_type: 'html' | 'pdf' | 'jpeg' | 'png' | 'docx' | 'pptx' | 'xlsx';
    description?: string | null;
};

