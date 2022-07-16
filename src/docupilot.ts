import * as _API from './api';
import { ApiError } from './api';

export default class Docupilot {
  readonly UsersService = _API.UsersService;

  async isAuthenticated(): Promise<boolean> {
    try {
      await this.UsersService.getMe();
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

  async authenticate(
    access_key: string = process.env.DOCUPILOT_ACCESS_KEY as string,
    access_secret: string = process.env.DOCUPILOT_ACCESS_SECRET as string,
    host: string = process.env.DOCUPILOT_HOST as string,
  ) {
    _API.OpenAPI.BASE = (host ?? 'https://api.docupilot.app').replace(
      /\/+$/g,
      '',
    );
    _API.OpenAPI.TOKEN = btoa(`${access_key}:${access_secret}`);
  }
}
