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
    readonly entity_id: string;
    readonly sso_url: string;
    readonly slo_url: string;
    readonly x509cert: string;
    readonly type: string;
    active: boolean;
    readonly signing_option: 'both' | 'assertions_only' | 'response_only';
};

