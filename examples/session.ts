import { APIClient } from '../src';

function getCookie(name: string) {
  return 'sample-cookie-' + name;
}

async function run(orgName: string) {
  const client = new APIClient();
  client.configureAccountsHeadersInterceptor(() => {
    const headers: Record<string, string> = {
      'X-CSRFToken': getCookie('csrftoken'),
    };
    return headers;
  });
  const organizations =
    await client.accountServices.user.getUserOrganizations();
  console.log('organizations', organizations);
  // todo get org url and set as host
  // configure interceptor without workspace initially
  client.configureAppHeadersInterceptor(() => {
    const headers: Record<string, string> = {
      'X-CSRFToken': getCookie('csrftoken'),
    };
    return headers;
  });
  const workspaces = await client.appServices.workspaces.listWorkspaces({});
  const workspace = workspaces[0];
  // configure interceptor with workspace now
  client.configureAppHeadersInterceptor(() => {
    const headers: Record<string, string> = {
      'X-CSRFToken': getCookie('csrftoken'),
      'X-Workspace': workspace.unique_key,
    };
    return headers;
  });
  const is_accounts_authenticated = await client.isAccountsAuthenticated();
  console.log('is_accounts_authenticated', is_accounts_authenticated);
  if (is_accounts_authenticated) {
    const is_app_authenticated = await client.isAppAuthenticated();
    console.log('is_app_authenticated', is_app_authenticated);
    if (is_app_authenticated) {
      console.log(await client.appServices.folders.listFolders({}));
      console.log(await client.appServices.templates.listTemplates({}));
      const folder = await client.appServices.folders.createFolder({
        requestBody: {
          name: 'Docupilot SDK Folder',
        },
      });
      console.log('folder', folder);
    }
  }
}

run('My Org 1')
  .then(() => console.log('Done'))
  .catch(console.log);
