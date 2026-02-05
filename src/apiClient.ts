import * as _API from './api';
import { ApiError } from './api';
import * as _Accounts from './accounts';
import { ApiRequestOptions as AppApiRequestOptions } from './api/core/ApiRequestOptions';
import { ApiRequestOptions as AccountsApiRequestOptions } from './accounts/core/ApiRequestOptions';
import { AccountServices, AppServices } from './services';

const DEFAULT_APP_HOST =
  process.env.DOCUPILOT_HOST ?? 'https://api-us1.docupilot.app';
const DEFAULT_ACCOUNTS_HOST =
  process.env.DOCUPILOT_ACCOUNTS_HOST ?? 'https://accounts.docupilot.app';

export class APIClient {
  readonly appServices = AppServices;
  readonly accountServices = AccountServices;

  private async isAuthenticated(cbk: () => any) {
    try {
      await cbk();
      return true;
    } catch (e) {
      if ((e as ApiError).status == 403) {
        console.log('invalid credentials');
        return false;
      }
      console.log((e as ApiError).statusText);
      return false;
    }
  }

  async isAccountsAuthenticated(): Promise<boolean> {
    return this.isAuthenticated(() => this.accountServices.user.getMe());
  }

  async isAppAuthenticated(): Promise<boolean> {
    return this.isAuthenticated(() => this.appServices.users.getMe());
  }

  authenticate({
    access_key = process.env.DOCUPILOT_ACCESS_KEY as string,
    access_secret = process.env.DOCUPILOT_ACCESS_SECRET as string,
    app_host = DEFAULT_APP_HOST,
    accounts_host = DEFAULT_ACCOUNTS_HOST,
  }: {
    access_key: string;
    access_secret: string;
    app_host: string;
    accounts_host: string;
  }): void {
    const apiBase = app_host.replace(/\/+$/g, '');
    const accountsBase = accounts_host.replace(/\/+$/g, '');
    const token = btoa(`${access_key}:${access_secret}`);

    _API.OpenAPI.BASE = apiBase;
    _API.OpenAPI.TOKEN = token;
    _Accounts.OpenAPI.BASE = accountsBase;
    _Accounts.OpenAPI.TOKEN = token;
  }

  updateAppConfig(config: Partial<_API.OpenAPIConfig>): void {
    Object.assign(_API.OpenAPI, config);
  }

  updateAccountsConfig(config: Partial<_Accounts.OpenAPIConfig>): void {
    Object.assign(_Accounts.OpenAPI, config);
  }

  configureAppHeadersInterceptor(getHeaders: () => Record<string, string>) {
    _API.OpenAPI.HEADERS = async (options: AppApiRequestOptions) => {
      const headers = getHeaders();
      return Object.assign({}, options.headers || {}, headers);
    };
  }

  configureAccountsHeadersInterceptor(
    getHeaders: () => Record<string, string>,
  ) {
    _Accounts.OpenAPI.HEADERS = async (options: AccountsApiRequestOptions) => {
      const headers = getHeaders();
      return Object.assign({}, options.headers || {}, headers);
    };
  }

  /**@deprecated*/
  readonly AuthTokensService = _API.AuthTokensService;
  /**@deprecated*/
  readonly FoldersService = _API.FoldersService;
  /**@deprecated*/
  readonly GeneralService = _API.GeneralService;
  /**@deprecated*/
  readonly GenerateBulkService = _API.GenerateBulkService;
  /**@deprecated*/
  readonly GenerateService = _API.GenerateService;
  /**@deprecated*/
  readonly HistoryService = _API.HistoryService;
  /**@deprecated*/
  readonly LinkedAccountsService = _API.LinkedAccountsService;
  /**@deprecated*/
  readonly PersonalizationService = _API.PersonalizationService;
  /**@deprecated*/
  readonly SubscriptionService = _API.SubscriptionService;
  /**@deprecated*/
  readonly TemplateDeliveryService = _API.TemplateDeliveryService;
  /**@deprecated*/
  readonly TemplatesService = _API.TemplatesService;
  /**@deprecated*/
  readonly UsersService = _API.UsersService;
  /**@deprecated*/
  readonly WorkspacesService = _API.WorkspacesService;
  /**@deprecated*/
  readonly InvitationsService = _API.InvitationsService;
  /**@deprecated*/
  readonly TeamService = _API.TeamService;
  /**@deprecated*/
  readonly PermissionsService = _API.PermissionsService;
  /**@deprecated*/
  readonly AppendService = _API.AppendService;
  /**@deprecated*/
  readonly DomainService = _API.DomainService;
  /**@deprecated*/
  readonly GalleryTemplatesService = _API.GalleryTemplatesService;
  /**@deprecated*/
  readonly UserSatisfactionSurveyService = _API.UserSatisfactionSurveyService;
  /**@deprecated*/
  readonly AiService = _API.AiService;
  /**@deprecated*/
  readonly DemographicService = _API.DemographicService;
  /**@deprecated*/
  readonly MergeHistoryService = _API.MergeHistoryService;
  /**@deprecated*/
  readonly EsignService = _API.EsignService;
  /**@deprecated*/
  readonly OrganizationService = _API.OrganizationService;
  /**@deprecated*/
  readonly ContentBlocksService = _API.ContentBlocksService;
  /**@deprecated*/
  readonly EsignSettingsService = _API.EsignSettingsService;
}
