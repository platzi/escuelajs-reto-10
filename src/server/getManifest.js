import fs from 'fs';

// eslint-disable-next-line consistent-return
const getManifest = () => {
  try {
    return JSON.parse(fs.readFileSync(`${__dirname}/public/manifest.json`, 'utf8'));
  } catch (e) {
    console.log(e);
  }
};

export default getManifest;
