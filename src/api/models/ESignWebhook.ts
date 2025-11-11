/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ESignWebhook = {
    readonly id: number;
    name: string;
    url: string;
    active?: boolean;
    recipient_event_subscriptions?: Array<'viewed' | 'signed' | 'declined'>;
    envelope_event_subscriptions?: Array<'completed' | 'expired'>;
    enable_hmac?: boolean;
    hmac_secret?: string | null;
    readonly created_at: string;
    readonly updated_at: string;
    attach_metadata?: boolean;
    enable_authentication?: boolean;
    /**
     * Maximum number of retry attempts for failed webhook deliveries
     */
    max_retry_count?: number;
    /**
     * Initial retry delay in seconds
     */
    initial_retry_delay?: number;
};

