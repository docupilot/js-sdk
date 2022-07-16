import Docupilot from './docupilot';

import * as _API from './api';

class _Docupilot extends Docupilot {
  readonly AuthTokensService = _API.AuthTokensService;
  readonly FoldersService = _API.FoldersService;
  readonly GeneralService = _API.GeneralService;
  readonly GenerateBulkService = _API.GenerateBulkService;
  readonly GenerateService = _API.GenerateService;
  readonly HistoryService = _API.HistoryService;
  readonly LinkedAccountsService = _API.LinkedAccountsService;
  readonly PersonalizationService = _API.PersonalizationService;
  readonly SubscriptionService = _API.SubscriptionService;
  readonly TemplateDeliveryService = _API.TemplateDeliveryService;
  readonly TemplatesService = _API.TemplatesService;
  readonly UsersService = _API.UsersService;
}

export const client = new _Docupilot();
