/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ChildDocumentMergeHistory } from './ChildDocumentMergeHistory';
import type { ChildTemplate } from './ChildTemplate';

export type DocumentMergeHistory = {
    readonly id: number;
    data?: Record<string, any> | null;
    readonly template: ChildTemplate | null;
    executed_deliveries: Array<ChildDocumentMergeHistory>;
    readonly is_data_expired: boolean;
    readonly is_document_expired: boolean;
    created_file_name?: string | null;
    readonly created_time: string | null;
};

