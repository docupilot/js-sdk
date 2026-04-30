import { client as appClient } from './api/client.gen';
import type { Config as AppClientConfig } from './api/client';
import { client as accountsClient } from './accounts/client.gen';
import type { Config as AccountsClientConfig } from './accounts/client';
import { AccountServices, AppServices } from './services';

const DEFAULT_APP_HOST = 'https://api-us1.docupilot.app';
const DEFAULT_ACCOUNTS_HOST = 'https://accounts.docupilot.app';

export type APIClientErrorContext = {
  service: 'app' | 'accounts';
  error: unknown;
  response?: Response;
  request?: Request;
  options?: unknown;
};

export class APIClient {
  readonly appServices = AppServices;
  readonly accountServices = AccountServices;
  private appHeadersInterceptorId: number | null = null;
  private accountsHeadersInterceptorId: number | null = null;
  private appErrorInterceptorId: number | null = null;
  private accountsErrorInterceptorId: number | null = null;

  constructor() {
    this.setHost({
      app_host: DEFAULT_APP_HOST,
      accounts_host: DEFAULT_ACCOUNTS_HOST,
    });
    appClient.setConfig({
      throwOnError: true,
    });
    accountsClient.setConfig({
      throwOnError: true,
    });
  }

  private async isAuthenticated(cbk: () => any) {
    try {
      return Boolean(await cbk());
    } catch (_) {
      console.log('invalid credentials');
      return false;
    }
  }

  async isAccountsAuthenticated(): Promise<boolean> {
    return this.isAuthenticated(() => this.accountServices.user.getMe());
  }

  async isAppAuthenticated(): Promise<boolean> {
    return this.isAuthenticated(() => this.appServices.users.getMe());
  }

  setHost({
    app_host = DEFAULT_APP_HOST,
    accounts_host = DEFAULT_ACCOUNTS_HOST,
  }: {
    app_host?: string;
    accounts_host?: string;
  }) {
    appClient.setConfig({
      baseUrl: app_host.replace(/\/+$/g, ''),
    });
    accountsClient.setConfig({
      baseUrl: accounts_host.replace(/\/+$/g, ''),
    });
  }

  authenticate(
    access_key: string = process.env.DOCUPILOT_ACCESS_KEY as string,
    access_secret: string = process.env.DOCUPILOT_ACCESS_SECRET as string,
  ): void {
    appClient.setConfig({
      auth: btoa(`${access_key}:${access_secret}`),
    });
  }

  updateAppConfig(config: Partial<AppClientConfig>): void {
    appClient.setConfig(config);
  }

  updateAccountsConfig(config: Partial<AccountsClientConfig>): void {
    accountsClient.setConfig(config);
  }

  configureAppHeadersInterceptor(getHeaders: () => Record<string, string>) {
    if (this.appHeadersInterceptorId !== null) {
      appClient.interceptors.request.eject(this.appHeadersInterceptorId);
    }
    this.appHeadersInterceptorId = appClient.interceptors.request.use(
      async (request: Request) => {
        const updatedHeaders = new Headers(request.headers);
        for (const [key, value] of Object.entries(getHeaders())) {
          updatedHeaders.set(key, value);
        }
        return new Request(request, {
          headers: updatedHeaders,
        });
      },
    );
  }

  configureAccountsHeadersInterceptor(
    getHeaders: () => Record<string, string>,
  ) {
    if (this.accountsHeadersInterceptorId !== null) {
      accountsClient.interceptors.request.eject(this.accountsHeadersInterceptorId);
    }
    this.accountsHeadersInterceptorId = accountsClient.interceptors.request.use(
      async (request: Request) => {
        const updatedHeaders = new Headers(request.headers);
        for (const [key, value] of Object.entries(getHeaders())) {
          updatedHeaders.set(key, value);
        }
        return new Request(request, {
          headers: updatedHeaders,
        });
      },
    );
  }

  configureErrorInterceptor(
    handleError: (
      context: APIClientErrorContext,
    ) => unknown | Promise<unknown> | void,
  ) {
    if (this.appErrorInterceptorId !== null) {
      appClient.interceptors.error.eject(this.appErrorInterceptorId);
    }
    if (this.accountsErrorInterceptorId !== null) {
      accountsClient.interceptors.error.eject(this.accountsErrorInterceptorId);
    }

    this.appErrorInterceptorId = appClient.interceptors.error.use(
      async (error, response, request, options) => {
        const transformed = await handleError({
          service: 'app',
          error,
          response,
          request,
          options,
        });
        return transformed === undefined ? error : transformed;
      },
    );

    this.accountsErrorInterceptorId = accountsClient.interceptors.error.use(
      async (error, response, request, options) => {
        const transformed = await handleError({
          service: 'accounts',
          error,
          response,
          request,
          options,
        });
        return transformed === undefined ? error : transformed;
      },
    );
  }

}
