/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GoogleDriveDelivery = {
    readonly id: number;
    failure_email_recipients?: string | null;
    account: number;
    name: string;
    type?: 'google_drive';
    success_callback_url?: string | null;
    /**
     * Base folder name
     */
    folder?: string;
    /**
     * Base folder id
     */
    folder_id?: string | null;
    /**
     * Dynamic folder path
     */
    path?: string | null;
};

