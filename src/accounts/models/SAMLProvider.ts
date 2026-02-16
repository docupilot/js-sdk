/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SAMLProvider = {
    readonly id: number;
    name: string;
    /**
     * App ID, or consumer key
     */
    client_id: string;
    readonly entity_url: string;
    readonly acs_url: string;
    readonly metadata_url: string;
    readonly type: string;
    active: boolean;
};

