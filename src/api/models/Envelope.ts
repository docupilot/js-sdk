/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Envelope = {
    readonly id: number;
    readonly pending_signers_count: number;
    readonly envelope_id: string;
    name: string;
    status?: 'created' | 'pending' | 'voided' | 'declined' | 'completed';
    cc?: Array<string>;
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
    readonly created_at: string;
    readonly updated_at: string;
    readonly deleted_at: string | null;
    archived_at?: string | null;
    readonly voided_at: string | null;
    /**
     * ex: Reason for Declining or Voiding provided by signer or sender respectively
     */
    reason?: string | null;
    workspace: number;
    sender: number;
    readonly updated_by: number | null;
    folder?: number | null;
};

