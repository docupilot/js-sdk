/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ESignWebhookEventLog = {
    readonly id: number;
    readonly is_retryable: boolean;
    event: 'recipient_viewed' | 'recipient_signed' | 'recipient_declined' | 'envelope_completed' | 'envelope_expired' | 'envelope_voided';
    /**
     * HTTP status code returned by the webhook
     */
    status_code?: number | null;
    readonly last_triggered_at: string;
    attempts?: number;
    webhook: number;
    envelope: string;
};

