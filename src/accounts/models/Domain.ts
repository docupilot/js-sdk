/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Domain = {
    readonly id: number;
    domain_name: string;
    readonly txt_record: string;
    readonly is_txt_verified: boolean;
    readonly is_locked: boolean;
    readonly verification_expired_at: string | null;
};

