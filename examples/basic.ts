import Docupilot from '../index';

async function run() {
  const Client = await Docupilot.authorize();
  const user = await Client.UsersService.getMe();
  console.log(`Docupilot client authenticated as ${user.email}`);
  console.log(await Client.FoldersService.listFolders({}));
  console.log(await Client.TemplatesService.listTemplates({}));
}

run()
  .then(() => console.log('Done'))
  .catch(console.log);
