/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import { OmitReadonly } from '../core/utils/OmitReadonly';

export class G2ReviewLinkService {

    /**
     * G2 review link
     * @returns any No response body
     * @throws ApiError
     */
    public static g2ReviewLink(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/g2-review-link/',
        });
    }

}
