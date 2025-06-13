/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PatchedEnvelopeUpdate = {
    expiry?: string | null;
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
    warn_before?: string | null;
};

