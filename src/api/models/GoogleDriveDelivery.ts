/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GoogleDriveDelivery = {
    readonly id: number;
    account: number;
    name: string;
    type?: 'google_drive';
    success_callback_url?: string | null;
    failure_email_recipients?: string | null;
    folder?: string;
    folder_id?: string | null;
};

