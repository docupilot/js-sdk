/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type AuthToken = {
    readonly id: number;
    readonly token: string;
    name: string;
    readonly created_time: string | null;
    readonly last_used_time: string | null;
    active?: boolean;
};

