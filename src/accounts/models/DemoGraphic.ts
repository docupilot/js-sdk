/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OrganizationDemographic } from './OrganizationDemographic';
import type { UserDemographic } from './UserDemographic';

export type DemoGraphic = {
    user_demographic?: UserDemographic | null;
    organization_demographic?: OrganizationDemographic | null;
};

