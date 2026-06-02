/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type WorkflowBlueprint_WorkflowBlueprintPortStructure = {
    id: string;
    type: 'input' | 'output';
    key: string;
    is_required?: boolean;
    /**
     * Client UUID of the condition outcome represented by this port. Required for condition output ports and only valid there.
     */
    condition_outcome_id?: string | null;
};

