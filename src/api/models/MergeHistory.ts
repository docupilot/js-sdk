/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ChildTemplate } from './ChildTemplate';

export type MergeHistory = {
    readonly id: number;
    readonly template: ChildTemplate | null;
    data: Record<string, any>;
    data_expired: boolean;
    document_expired: boolean;
    mode: string;
    created_file_name: string;
    delivery_type: string;
    status: 'pending' | 'success' | 'error';
    readonly created_time: string;
    message?: Record<string, any> | null;
    callback_status?: 'success' | 'fail' | null;
    callback_failure_message?: string | null;
    delivery?: number | null;
};

