/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DocuSignDelivery } from './DocuSignDelivery';
import type { DropboxDelivery } from './DropboxDelivery';
import type { EmailDelivery } from './EmailDelivery';
import type { EversignDelivery } from './EversignDelivery';
import type { GoogleDriveDelivery } from './GoogleDriveDelivery';
import type { HelloSignDelivery } from './HelloSignDelivery';
import type { OneDriveDelivery } from './OneDriveDelivery';
import type { S3Delivery } from './S3Delivery';
import type { SignableDelivery } from './SignableDelivery';
import type { SignNowDelivery } from './SignNowDelivery';
import type { WebhookDelivery } from './WebhookDelivery';
import type { YouSignDelivery } from './YouSignDelivery';

export type PatchedPolymorphicDelivery = (EmailDelivery | WebhookDelivery | DropboxDelivery | OneDriveDelivery | SignNowDelivery | GoogleDriveDelivery | S3Delivery | HelloSignDelivery | DocuSignDelivery | EversignDelivery | SignableDelivery | YouSignDelivery);

