/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type TemplateGallery = {
    readonly id: number;
    readonly image_path: string;
    title: string;
    description?: string | null;
    category: 'legal' | 'real_state';
    file_path?: string | null;
    preview_path?: string | null;
};

