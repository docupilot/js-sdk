/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type HistoryRecord = {
    readonly id: number;
    event_name: 'created' | 'invited' | 'send_failed' | 'resent' | 'viewed' | 'signed' | 'completed' | 'declined' | 'voided';
    event_meta?: Record<string, any> | null;
    server_time: string;
    client_time: string;
    ip_address?: string | null;
    /**
     * Timestamp when this history log was created
     */
    readonly created_at: string;
    readonly recipient_email: string;
};

