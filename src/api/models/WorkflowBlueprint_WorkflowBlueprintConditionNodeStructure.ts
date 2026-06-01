/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { WorkflowBlueprint_WorkflowBlueprintConditionConfigStructure } from './WorkflowBlueprint_WorkflowBlueprintConditionConfigStructure';
import type { WorkflowBlueprint_WorkflowBlueprintPortStructure } from './WorkflowBlueprint_WorkflowBlueprintPortStructure';
import type { WorkflowBlueprint_WorkflowBlueprintPositionStructure } from './WorkflowBlueprint_WorkflowBlueprintPositionStructure';

export type WorkflowBlueprint_WorkflowBlueprintConditionNodeStructure = {
    id: string;
    name: string;
    position: WorkflowBlueprint_WorkflowBlueprintPositionStructure;
    ports: Array<WorkflowBlueprint_WorkflowBlueprintPortStructure>;
    type: 'condition';
    config?: WorkflowBlueprint_WorkflowBlueprintConditionConfigStructure;
};

