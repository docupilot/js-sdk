import * as API from './api';

class Client {
  static readonly FoldersService = API.FoldersService;
  static readonly TemplatesService = API.TemplatesService;
  static readonly GenerateService = API.GenerateService;
  static readonly HistoryService = API.HistoryService;
  static readonly LinkedAccountsService = API.LinkedAccountsService;
  static readonly GenerateBulkService = API.GenerateBulkService;
  static readonly TemplateDeliveryService = API.TemplateDeliveryService;
  static readonly UsersService = API.UsersService;
}

export default class Docupilot {
  static async authorize(
    access_key: string = process.env.DOCUPILOT_ACCESS_KEY as string,
    access_secret: string = process.env.DOCUPILOT_ACCESS_SECRET as string,
    host: string = process.env.DOCUPILOT_HOST as string,
    logger = console.log,
  ) {
    API.OpenAPI.BASE = (host ?? 'https://api.docupilot.app').replace(
      /\/+$/g,
      '',
    );
    API.OpenAPI.TOKEN = btoa(`${access_key}:${access_secret}`);
    return Client;
  }
}
