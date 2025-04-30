/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Envelope = {
    readonly id: number;
    readonly envelope_id: string;
    name: string;
    status?: 'created' | 'pending' | 'voided' | 'declined' | 'completed';
    cc?: string | null;
    sequenced_signing?: boolean;
    expiry?: string | null;
    /**
     * ex: P3D to send first reminders after 3 days of sending invite
     */
    first_reminder?: string | null;
    /**
     * ex: P3D to send follow up reminders every 3 days
     */
    reminder_frequency?: string | null;
    warn_before?: string | null;
    readonly last_reminded_at: string | null;
    readonly created_time: string;
    readonly updated_time: string;
    readonly deleted_time: string | null;
    archived_time?: string | null;
    voided_at?: string | null;
    /**
     * ex: Reason provided by the signer during declining
     */
    decline_reason?: string | null;
    /**
     * Will store the auto-expiry message or the reason provided by user when voiding manually
     */
    void_reason?: string | null;
    workspace: number;
    readonly updated_by: number | null;
    folder?: number | null;
};

