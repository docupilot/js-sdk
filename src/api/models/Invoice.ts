/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Invoice = {
    readonly id: number;
    readonly name: string;
    generated_on: string;
    readonly price: string;
    status: 'paid' | 'unpaid';
    start_date: string;
    end_date: string;
};

