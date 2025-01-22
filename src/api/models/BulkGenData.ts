/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type BulkGenData = {
    id: number;
    created_by: number;
    updated_by: number;
    data: Record<string, any>;
    row_count: number;
    suggested_mapping: Record<string, any>;
    delimiter: string;
};

