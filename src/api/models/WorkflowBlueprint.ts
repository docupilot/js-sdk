/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { WorkflowBlueprint_WorkflowBlueprintConditionNodeStructure } from './WorkflowBlueprint_WorkflowBlueprintConditionNodeStructure';
import type { WorkflowBlueprint_WorkflowBlueprintConvertNodeStructure } from './WorkflowBlueprint_WorkflowBlueprintConvertNodeStructure';
import type { WorkflowBlueprint_WorkflowBlueprintEdgeStructure } from './WorkflowBlueprint_WorkflowBlueprintEdgeStructure';
import type { WorkflowBlueprint_WorkflowBlueprintEmailDeliveryNodeStructure } from './WorkflowBlueprint_WorkflowBlueprintEmailDeliveryNodeStructure';
import type { WorkflowBlueprint_WorkflowBlueprintESignDeliveryNodeStructure } from './WorkflowBlueprint_WorkflowBlueprintESignDeliveryNodeStructure';
import type { WorkflowBlueprint_WorkflowBlueprintFormNodeStructure } from './WorkflowBlueprint_WorkflowBlueprintFormNodeStructure';
import type { WorkflowBlueprint_WorkflowBlueprintGoogleDriveDeliveryNodeStructure } from './WorkflowBlueprint_WorkflowBlueprintGoogleDriveDeliveryNodeStructure';
import type { WorkflowBlueprint_WorkflowBlueprintTemplateNodeStructure } from './WorkflowBlueprint_WorkflowBlueprintTemplateNodeStructure';
import type { WorkflowBlueprint_WorkflowBlueprintWebhookDeliveryNodeStructure } from './WorkflowBlueprint_WorkflowBlueprintWebhookDeliveryNodeStructure';

export type WorkflowBlueprint = {
    nodes: Array<(WorkflowBlueprint_WorkflowBlueprintFormNodeStructure | WorkflowBlueprint_WorkflowBlueprintTemplateNodeStructure | WorkflowBlueprint_WorkflowBlueprintConditionNodeStructure | WorkflowBlueprint_WorkflowBlueprintConvertNodeStructure | WorkflowBlueprint_WorkflowBlueprintEmailDeliveryNodeStructure | WorkflowBlueprint_WorkflowBlueprintGoogleDriveDeliveryNodeStructure | WorkflowBlueprint_WorkflowBlueprintWebhookDeliveryNodeStructure | WorkflowBlueprint_WorkflowBlueprintESignDeliveryNodeStructure)>;
    edges: Array<WorkflowBlueprint_WorkflowBlueprintEdgeStructure>;
};

