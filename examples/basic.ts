import { client } from '../src';

async function run() {
  await client.authenticate();
  const is_authenticated = await client.isAuthenticated();
  console.log(is_authenticated);
  if (is_authenticated) {
    console.log(await client.FoldersService.listFolders({}));
    console.log(await client.TemplatesService.listTemplates({}));
    console.log(
      await client.FoldersService.createFolder({
        requestBody: {
          name: 'Docupilot SDK Folder',
        },
      }),
    );
  }
}

run()
  .then(() => console.log('Done'))
  .catch(console.log);
