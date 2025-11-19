/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type TestWebhookSend = {
    /**
     * Webhook URL
     */
    url: string;
    /**
     * HMAC secret for signing the request
     */
    hmac_secret?: string;
};

