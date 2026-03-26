/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type EnvelopeBulkDownload = {
    readonly id: number;
    readonly name: string;
    readonly status: 'pending' | 'success' | 'error';
    envelope_ids?: Array<number>;
    readonly created_time: string;
    readonly filters: Record<string, any>;
    is_export_all?: boolean;
};

