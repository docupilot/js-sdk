/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UserDemographic } from './UserDemographic';
import type { WorkspaceDemographic } from './WorkspaceDemographic';

export type DemoGraphic = {
    user_demographic?: UserDemographic | null;
    workspace_demographic?: WorkspaceDemographic | null;
};

