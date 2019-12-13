import { existsSync, promises } from "fs";
import { basename } from "path";


async function downloadManifest(liveManifest) {
  const response = await request(liveManifest.jsonWorldContentPaths.en);

  if (!response) return false;

  manifestData = response;

  const target = `./manifest/json/${basename(liveManifest.jsonWorldContentPaths.en, '.json')}`;

  if (!existsSync(target)) {
    await promises.mkdir(target, { recursive: true });
  }

  await promises.writeFile(`${target}/data.json`, JSON.stringify(response), { flag: 'w' });
  await promises.writeFile(`${target}/index.json`, JSON.stringify(liveManifest), { flag: 'w' });
  await promises.writeFile(`./manifest/index.json`, JSON.stringify(liveManifest), { flag: 'w' });

  return response;
}