/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BulkGenerateMeta } from './BulkGenerateMeta';
import type { FileUploadMeta } from './FileUploadMeta';

export type Meta = {
    file_uploads: FileUploadMeta;
    batch_process_max_allowed_test_rows: BulkGenerateMeta;
    iam: string;
};

