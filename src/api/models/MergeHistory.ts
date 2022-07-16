/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ChildTemplate } from './ChildTemplate';

export type MergeHistory = {
    readonly id: number;
    readonly template: (ChildTemplate);
    data: Record<string, any>;
    data_expired: boolean;
    document_expired: boolean;
    delivery_type: string;
    status: 'pending' | 'success' | 'error';
    readonly created_time: string;
    created_file_name: string;
    message?: Record<string, any> | null;
    mode?: string | null;
}
