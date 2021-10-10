/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BatchProcessTask } from './BatchProcessTask';
import type { FileInfo } from './FileInfo';

export type BatchProcess = {
    readonly id: number;
    file: FileInfo;
    readonly errors: Array<BatchProcessTask>;
    status?: BatchProcess.status;
    start_time?: string | null;
    end_time?: string | null;
    total?: number | null;
    success?: number | null;
}

export namespace BatchProcess {

    export enum status {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
        '_3' = 3,
        '_4' = 4,
        '_5' = 5,
    }


}
