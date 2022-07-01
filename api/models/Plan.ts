/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Plan = {
    plan_id: string;
    documents_allowed: number;
    price: number;
    billing_period_unit: Plan.billing_period_unit;
}

export namespace Plan {

    export enum billing_period_unit {
        YEAR = 'year',
        MONTH = 'month',
    }


}
