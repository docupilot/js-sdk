/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SubscriptionChange = {
    readonly id: number;
    readonly plan: string;
    credit_addon: number;
    template_addon: number;
    user_seat_addon: number;
    readonly created_on: string;
    readonly action_taken_on: string;
    status: 'applied' | 'pending' | 'cencelled';
    change_type: string;
};

