/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TemplateMoveFailureDetail } from './TemplateMoveFailureDetail';

export type MoveTemplateResponse = {
    /**
     * List of successfully moved template IDs
     */
    success: Array<number>;
    /**
     * Mapping of failed template IDs to error messages
     */
    failures: Record<string, TemplateMoveFailureDetail>;
};

