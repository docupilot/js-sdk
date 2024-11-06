/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type NewTemplate = {
    file?: Blob;
    description?: string | null;
    title: string;
    folder?: number | null;
    output_type: 'html' | 'pdf' | 'jpeg' | 'png' | 'docx' | 'pptx' | 'xlsx';
    template_gallery_id?: number;
};

