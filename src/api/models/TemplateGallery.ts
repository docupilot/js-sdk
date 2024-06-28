/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Nested } from './Nested';

export type TemplateGallery = {
    readonly id: number;
    readonly image_path: string;
    readonly file_type: string;
    title: string;
    description?: string | null;
    readonly category: Nested;
};

