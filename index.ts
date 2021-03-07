import * as API from './api/index';

class Client {
  readonly TemplatesService = API.TemplatesService;
  readonly FoldersService = API.FoldersService;
  readonly HistoryService = API.HistoryService;
  readonly LinkedAccountsService = API.LinkedAccountsService;
}

export default class Docupilot {
  static async authorize(token?: string) {
    API.OpenAPI.BASE = (process.env.DOCUPILOT_HOST || 'http://api.docupilot.app').replace(/\/+$/g, '');
    API.OpenAPI.TOKEN = token ?? process.env.DOCUPILOT_TOKEN;
    console.log("API.OpenAPI.BASE", API.OpenAPI.BASE, API.OpenAPI.TOKEN);
    const user = await API.AccountsService.accountsV2UsersMeRetrieve();
    console.log(`Docupilot client authenticated as ${user.email}`);
    return new Client();
  }
}
