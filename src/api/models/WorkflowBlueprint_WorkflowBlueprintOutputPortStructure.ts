/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { WorkflowBlueprint_WorkflowBlueprintOutputPortConnectionStructure } from './WorkflowBlueprint_WorkflowBlueprintOutputPortConnectionStructure';

export type WorkflowBlueprint_WorkflowBlueprintOutputPortStructure = {
    id: string;
    connected_to?: WorkflowBlueprint_WorkflowBlueprintOutputPortConnectionStructure | null;
    /**
     * Client ID of the condition outcome represented by this output port.
     */
    condition_outcome_id?: string | null;
};

