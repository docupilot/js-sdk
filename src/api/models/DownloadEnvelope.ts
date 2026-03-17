/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DownloadEnvelope = {
    readonly id: number;
    readonly name: string;
    readonly status: 'pending' | 'success' | 'error';
    envelope_ids?: Array<number>;
    is_export_all?: boolean;
};

