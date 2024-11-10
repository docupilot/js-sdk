/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ChargebeeSubscription = {
    plan_id?: string | null;
    status?: 'a' | 't' | 'e' | 'c' | 'p';
    trial_end?: string;
    billing_period_unit?: string | null;
    readonly current_term_start: string;
    readonly current_term_end: string;
    unpaid_invoices?: number;
    max_allowed_unpaid_invoices?: number;
    overage_enabled: boolean;
    documents_allowed?: number;
    documents_created?: number;
    readonly can_extend_trial: boolean;
    readonly subscribed_on: string;
};

