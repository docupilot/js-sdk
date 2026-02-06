import { APIClient } from '../src';

function getCookie(name: string) {
  return 'sample-cookie-' + name;
}

async function run(orgName: string) {
  const client = new APIClient();
  client.authenticate('key', 'secret'); // authenticate all services using api key and secret
  const is_accounts_authenticated = await client.isAccountsAuthenticated();
  console.log('is_accounts_authenticated', is_accounts_authenticated);
  const organizations =
    await client.accountServices.user.getUserOrganizations();
  console.log('organizations', organizations);
  // todo get org url and set as host
  const workspaces = await client.appServices.workspaces.listWorkspaces({});
  const workspace = workspaces[0];
  client.configureAppHeadersInterceptor(() => {
    const headers: Record<string, string> = {
      'X-Workspace': workspace.unique_key,
    };
    return headers;
  });
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
