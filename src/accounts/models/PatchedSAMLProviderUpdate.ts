/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PatchedSAMLProviderUpdate = {
    /**
     * Unique identifier for the SAML Identity Provider (IdP). Typically the URL of the IdP's metadata endpoint.
     */
    entity_id?: string;
    /**
     * Single Sign-On URL of the Identity Provider
     */
    sso_url?: string;
    /**
     * Single Logout URL of the Identity Provider
     */
    slo_url?: string;
    /**
     * X.509 certificate of the Identity Provider
     */
    x509cert?: string;
    /**
     * Name of the SAML provider
     */
    name?: string;
    signing_option?: 'both' | 'assertions_only' | 'response_only';
};

