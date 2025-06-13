/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ChargebeeSubscription = {
    readonly plan_id: string | null;
    readonly status: 'a' | 't' | 'e' | 'c' | 'p';
    readonly trial_end: string;
    readonly billing_period_unit: string | null;
    readonly current_term_start: string;
    readonly current_term_end: string;
    readonly unpaid_invoices: number;
    readonly max_allowed_unpaid_invoices: number;
    overage_enabled: boolean;
    readonly documents_allowed: number;
    readonly documents_created: number;
    readonly can_extend_trial: boolean;
    readonly subscribed_on: string;
    readonly signnow_credits_allowed: number;
    readonly signnow_credits_used: number;
    readonly signatures_allowed: number;
    readonly signatures_used: number;
};

