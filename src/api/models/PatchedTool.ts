/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PatchedTool = {
    readonly id?: number;
    name?: string;
    type?: 'form_v1';
    unique_id?: string;
    is_public?: boolean;
    config?: Record<string, any>;
    readonly created_at?: string;
    readonly updated_at?: string;
    readonly archived_at?: string | null;
    readonly created_by?: number;
    readonly updated_by?: number;
};

