/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type BoxDriveDelivery = {
    readonly id: number;
    failure_email_recipients?: string | null;
    account: number;
    name: string;
    type?: 'box_drive';
    success_callback_url?: string | null;
    folder?: string;
    folder_id?: string | null;
};

