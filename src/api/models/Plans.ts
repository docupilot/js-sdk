/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Plans = {
    readonly id: number;
    version: 1 | 2;
    category: 'trial' | 'free' | 'individual' | 'team' | 'enterprise' | 'custom';
    name: string;
    readonly monthly_price: number;
    readonly yearly_price: number;
    readonly yearly_discounted_price: number;
    credit: number;
    user_seat: number;
    readonly credit_addon_price: Record<string, any>;
    readonly user_seat_addon_price: Record<string, any>;
};

