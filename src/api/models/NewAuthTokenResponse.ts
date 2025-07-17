/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type NewAuthTokenResponse = {
    readonly id: number;
    readonly token: string;
    name: string;
    readonly created_time: string | null;
    last_used_time?: string | null;
    active?: boolean;
    readonly secret: string | null;
};

