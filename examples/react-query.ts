import { QueryClient } from '@tanstack/react-query';
import { v2 } from '../src';

async function run() {
  const client = new v2.APIClient();

  client.authenticate('key', 'secret');
  client.configureAppHeadersInterceptor(() => ({
    'X-Workspace': 'workspace-unique-key',
  }));

  const queryClient = new QueryClient();

  const workspaces = await queryClient.fetchQuery(
    v2.APIReactQuery.listWorkspacesOptions(),
  );
  console.log('workspaces', workspaces);

  const templates = await queryClient.fetchQuery(
    v2.APIReactQuery.listTemplatesOptions({
      query: {
        page: 1,
      },
    }),
  );
  console.log('templates', templates);
}

run().then(() => console.log('Done')).catch(console.log);
