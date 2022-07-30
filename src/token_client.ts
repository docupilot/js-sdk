import Docupilot from './docupilot';
import * as _API from './api';

export class DocupilotTokenClient extends Docupilot {
  readonly FoldersService = _API.FoldersService;
  readonly TemplatesService = _API.TemplatesService;
  readonly GenerateService = _API.GenerateService;
  readonly HistoryService = _API.HistoryService;
  readonly LinkedAccountsService = _API.LinkedAccountsService;
  readonly GenerateBulkService = _API.GenerateBulkService;
  readonly TemplateDeliveryService = _API.TemplateDeliveryService;
  readonly UsersService = _API.UsersService;
}
