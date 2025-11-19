/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PatchedESignSettings = {
    /**
     * Number of days until envelope expires
     */
    expiry?: number;
    /**
     * Number of days before first reminder is sent
     */
    first_reminder?: number;
    /**
     * Number of days between reminders
     */
    reminder_frequency?: number;
    /**
     * Number of days before expiry to send warning
     */
    warn_before?: number;
};

