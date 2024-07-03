/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GalleryCategory } from './GalleryCategory';

export type TemplateGallery = {
    readonly id: number;
    readonly image_path: string;
    readonly file_type: string;
    category: GalleryCategory;
    title: string;
    description?: string | null;
};

