import Docupilot from './docupilot';

import * as _API from './api';
import { ApiRequestOptions } from './api/core/ApiRequestOptions';

export class DocupilotSessionClient extends Docupilot {
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
  readonly WorkspacesService = _API.WorkspacesService;

  configureHeadersInterceptor(getHeaders: () => Record<string, string>) {
    _API.OpenAPI.HEADERS = async (options: ApiRequestOptions) => {
      const headers = getHeaders();
      return Object.assign({}, options.headers || {}, headers);
    };
  }
}
