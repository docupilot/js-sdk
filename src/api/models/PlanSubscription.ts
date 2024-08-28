/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PlanSubscription = {
    billing_term: 'monthly' | 'yearly';
    credit_addon?: number;
    user_seat_addon?: number;
    payment_id: string;
};

