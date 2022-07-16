import { client } from '../src';

async function run() {
  await client.authenticate();
  if (await client.isAuthenticated()) {
    console.log(await client.FoldersService.listFolders({}));
    console.log(await client.TemplatesService.listTemplates({}));
  }
}

run()
  .then(() => console.log('Done'))
  .catch(console.log);
