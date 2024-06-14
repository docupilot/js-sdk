/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type TemplateGallery = {
    readonly id: number;
    readonly image_path: string;
    readonly file_type: string;
    title: string;
    description?: string | null;
    category: 'legal' | 'real_state';
};

