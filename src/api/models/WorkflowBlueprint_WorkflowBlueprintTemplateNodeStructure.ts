/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { WorkflowBlueprint_WorkflowBlueprintPortStructure } from './WorkflowBlueprint_WorkflowBlueprintPortStructure';
import type { WorkflowBlueprint_WorkflowBlueprintPositionStructure } from './WorkflowBlueprint_WorkflowBlueprintPositionStructure';
import type { WorkflowBlueprint_WorkflowBlueprintTemplateConfigStructure } from './WorkflowBlueprint_WorkflowBlueprintTemplateConfigStructure';

export type WorkflowBlueprint_WorkflowBlueprintTemplateNodeStructure = {
    id: string;
    name: string;
    position: WorkflowBlueprint_WorkflowBlueprintPositionStructure;
    ports: Array<WorkflowBlueprint_WorkflowBlueprintPortStructure>;
    type: 'template';
    config: WorkflowBlueprint_WorkflowBlueprintTemplateConfigStructure;
};

