/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { WorkflowBlueprint_WorkflowBlueprintFormConfigStructure } from './WorkflowBlueprint_WorkflowBlueprintFormConfigStructure';
import type { WorkflowBlueprint_WorkflowBlueprintPortStructure } from './WorkflowBlueprint_WorkflowBlueprintPortStructure';
import type { WorkflowBlueprint_WorkflowBlueprintPositionStructure } from './WorkflowBlueprint_WorkflowBlueprintPositionStructure';

export type WorkflowBlueprint_WorkflowBlueprintFormNodeStructure = {
    id: string;
    name: string;
    position: WorkflowBlueprint_WorkflowBlueprintPositionStructure;
    ports: Array<WorkflowBlueprint_WorkflowBlueprintPortStructure>;
    type: 'form';
    config: WorkflowBlueprint_WorkflowBlueprintFormConfigStructure;
};

