/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MergeHistoryStatusEnum } from './MergeHistoryStatusEnum';
import type { Template } from './Template';

export type MergeHistory = {
    readonly id: number;
    readonly document: (Template);
    delivery_type: string;
    status: MergeHistoryStatusEnum;
    readonly created_time: string;
    created_file_name: string;
    message?: Record<string, any> | null;
    mode?: string | null;
}
