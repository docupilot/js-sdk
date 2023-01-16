/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DropboxDelivery = {
    readonly id: number;
    account?: number | null;
    name: string;
    type?: 'dropbox';
    success_callback_url?: string | null;
    failure_email_recipients?: string | null;
    folder?: string;
};

