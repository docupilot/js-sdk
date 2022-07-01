/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type BatchProcessTask = {
    readonly id: number;
    merge_type?: BatchProcessTask.merge_type;
    merge_data?: Record<string, any> | null;
    status?: BatchProcessTask.status;
    status_message?: string | null;
    batch_process: number;
    document: number;
}

export namespace BatchProcessTask {

    export enum merge_type {
        ACTIVE = 'active',
        TEST = 'test',
    }

    export enum status {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
    }


}
