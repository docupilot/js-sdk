/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ExportMergeHistory = {
    readonly id: number;
    readonly name: string;
    from_date: string;
    to_date: string;
    status?: 'pending' | 'success' | 'error';
};

