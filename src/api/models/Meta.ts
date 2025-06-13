/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BulkGenerateMeta } from './BulkGenerateMeta';
import type { ESignReminderConfig } from './ESignReminderConfig';
import type { FileUploadMeta } from './FileUploadMeta';

export type Meta = {
    file_uploads: FileUploadMeta;
    batch_process_max_allowed_test_rows: BulkGenerateMeta;
    iam: string;
    esign_reminder_defaults: ESignReminderConfig;
};

