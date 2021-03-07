import Docupilot from '../index';

async function run() {
  const client = await Docupilot.authorize();
  console.log(await client.FoldersService.listFolders({}));
  console.log(await client.TemplatesService.listTemplates({}));
}

run()
  .then(() => console.log('Done'))
  .catch(console.log);
