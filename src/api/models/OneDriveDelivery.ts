/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type OneDriveDelivery = {
    readonly id: number;
    failure_email_recipients?: string | null;
    account: number;
    name: string;
    type?: 'one_drive';
    success_callback_url?: string | null;
    folder?: string;
};

