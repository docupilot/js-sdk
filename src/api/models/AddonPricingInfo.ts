/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AddonTier } from './AddonTier';

export type AddonPricingInfo = {
    addon_id: string;
    type: 'recurring' | 'one_time';
    allowed_quantities: Array<number>;
    tiers: Array<AddonTier>;
};

