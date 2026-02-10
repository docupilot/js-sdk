/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Organization } from '../models/Organization';
import type { OrganizationDelete } from '../models/OrganizationDelete';
import type { OrganizationMetaResponse } from '../models/OrganizationMetaResponse';
import type { OrganizationSubdomainChangeResponse } from '../models/OrganizationSubdomainChangeResponse';
import type { PatchedOrganization } from '../models/PatchedOrganization';
import type { PatchedOrganizationSubdomainChange } from '../models/PatchedOrganizationSubdomainChange';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import type { OmitReadonly } from '../core/utils/OmitReadonly';

export class OrganizationService {

    /**
     * Delete a Organization and other related data permanently
     * @returns void
     * @throws ApiError
     */
    public static deleteOrganization({
        requestBody,
    }: {
        requestBody: OmitReadonly<OrganizationDelete>,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/accounts/organization/delete_organization/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns Organization
     * @throws ApiError
     */
    public static organizationDetailsRetrieve(): CancelablePromise<Organization> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/accounts/organization/details/',
        });
    }

    /**
     * Get organization meta information
     * @returns OrganizationMetaResponse
     * @throws ApiError
     */
    public static getOrganizationMeta(): CancelablePromise<OrganizationMetaResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/accounts/organization/meta/',
        });
    }

    /**
     * Activate or Deactivate Organization MFA
     * @returns Organization
     * @throws ApiError
     */
    public static toggleOrganizationMfaStatus(): CancelablePromise<Organization> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/accounts/organization/toggle_mfa_status/',
        });
    }

    /**
     * Toggle password-based login
     * Flips the organization setting. Disabling is only allowed if at least one active SAML provider is configured.
     * @returns Organization
     * @throws ApiError
     */
    public static togglePasswordBasedLogin(): CancelablePromise<Organization> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/accounts/organization/toggle_password_based_login/',
        });
    }

    /**
     * @returns Organization
     * @throws ApiError
     */
    public static updateOrganization({
        formData,
    }: {
        formData?: OmitReadonly<PatchedOrganization>,
    }): CancelablePromise<Organization> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/accounts/organization/update_org/',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Update organization subdomain
     * @returns OrganizationSubdomainChangeResponse
     * @throws ApiError
     */
    public static updateOrganizationSubdomain({
        requestBody,
    }: {
        requestBody?: OmitReadonly<PatchedOrganizationSubdomainChange>,
    }): CancelablePromise<OrganizationSubdomainChangeResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/accounts/organization/update_subdomain/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
