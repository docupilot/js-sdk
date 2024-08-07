/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Summary } from './Summary';

export type CartValidateResponse = {
    action: string;
    billing_term: 'monthly' | 'yearly';
    renewal_summary: Array<Summary>;
    renewal_summary_price: number;
    cart_summary: Array<Summary>;
    refund_summary: Array<Summary>;
    scheduled_summary: Array<Record<string, any>>;
    scheduled_date: string | null;
    payment_amount: number;
};

