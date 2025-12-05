/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ContentBlock = {
    readonly id: number;
    name: string;
    description?: string | null;
    readonly key: string;
    readonly type: 'docx' | 'html';
    readonly created_by: number;
    readonly updated_by: number | null;
    readonly created_time: string;
    readonly updated_time: string | null;
};

