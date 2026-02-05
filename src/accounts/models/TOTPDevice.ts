/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type TOTPDevice = {
    readonly id: number;
    /**
     * The date and time when this device was initially created in the system.
     */
    readonly created_at: string | null;
    /**
     * The most recent date and time this device was used.
     */
    readonly last_used_at: string | null;
    /**
     * The human-readable name of this device.
     */
    readonly name: string;
};

