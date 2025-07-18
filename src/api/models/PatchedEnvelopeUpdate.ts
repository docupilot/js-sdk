/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PatchedEnvelopeUpdate = {
    /**
     * Expiry date and time for the envelope
     */
    expiry?: string;
    /**
     * Days after sending invite to send first reminder
     */
    first_reminder?: number | null;
    /**
     * Frequency in days for follow-up reminders
     */
    reminder_frequency?: number | null;
    /**
     * Days before expiry to send warning
     */
    warn_before?: string;
};

