/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ChildTemplate } from './ChildTemplate';
import type { MergeHistorySerializer2 } from './MergeHistorySerializer2';

export type DocumentMergeHistory = {
    readonly id: number;
    data?: Record<string, any> | null;
    readonly template: ChildTemplate | null;
    executed_deliveries: Array<MergeHistorySerializer2>;
    readonly is_data_expired: string;
    readonly is_document_expired: string;
};

