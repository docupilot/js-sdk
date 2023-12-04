/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type BoxDriveDelivery = {
    readonly id: number;
    account: number;
    name: string;
    type?: 'box_drive';
    success_callback_url?: string | null;
    failure_email_recipients?: string | null;
    folder?: string;
    folder_id?: string | null;
};

