/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type VerifyEmailAccountOTP = {
    action_name: 'verify' | 'update';
    email?: string | null;
    otp: string;
    display_name?: string;
};

