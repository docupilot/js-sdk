/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PatchedESignWebhook = {
    readonly id?: number;
    hmac_secret?: string;
    readonly has_hmac_secret?: boolean;
    name?: string;
    url?: string;
    active?: boolean;
    event_subscriptions?: Array<'recipient_viewed' | 'recipient_signed' | 'recipient_declined' | 'envelope_completed' | 'envelope_expired' | 'envelope_voided'>;
    readonly created_at?: string;
    readonly updated_at?: string;
    readonly created_by?: number;
    readonly updated_by?: number | null;
};

