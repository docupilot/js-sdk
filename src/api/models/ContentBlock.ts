/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ContentBlock = {
    readonly id: number;
    key?: string;
    name: string;
    description?: string | null;
    readonly created_time: string;
    readonly updated_time: string;
    readonly created_by: number;
    readonly updated_by: number | null;
};

