/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PlanCredit } from './PlanCredit';

export type Subscription = {
    readonly base_plan: PlanCredit;
    credit_used?: number;
    readonly active_template: string;
    readonly active_user: string;
    readonly total_credit: string;
    readonly total_template: string;
    readonly total_user_seat: string;
    credit_addon?: number;
    template_addon?: number;
    user_seat_addon?: number;
    readonly trial_started_on: string;
    readonly trial_end: string;
    billing_term?: 'monthly' | 'yearly' | null;
    status?: 'a' | 't' | 'e' | 'c';
    readonly current_term_start: string;
    readonly current_term_end: string;
    readonly reset_usage_on: string;
    overage?: boolean;
};

