/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BulkGenTask } from './BulkGenTask';

export type BulkGen = {
    readonly id: number;
    readonly errors: Array<BulkGenTask>;
    status?: BulkGen.status;
    start_time?: string | null;
    end_time?: string | null;
    total?: number | null;
    success?: number | null;
}

export namespace BulkGen {

    export enum status {
        _0 = 0,
        _1 = 1,
        _2 = 2,
        _3 = 3,
        _4 = 4,
        _5 = 5,
    }


}
