/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type WorkflowVersion = {
    readonly id: number;
    readonly workflow: number;
    readonly source_version: number | null;
    readonly version: number;
    readonly created_by: number;
    readonly created_at: string;
    readonly published: boolean;
    readonly published_at: string | null;
    readonly published_by: number | null;
    readonly archived_at: string | null;
    readonly archived_by: number | null;
};

