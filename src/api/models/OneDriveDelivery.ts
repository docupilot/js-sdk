/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type OneDriveDelivery = {
    readonly id: number;
    account: number;
    name: string;
    type?: 'one_drive';
    success_callback_url?: string | null;
    failure_email_recipients?: string | null;
    folder?: string;
};

