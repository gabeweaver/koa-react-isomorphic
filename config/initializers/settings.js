'use strict';

import fs from 'fs';

let settings = {
  env: process.env.NODE_ENV
};

if (process.env.NODE_ENV === 'production') {
  const assetManifest  = require('external!./public/assets/webpack-asset-manifest.json');
  const commonManifest = fs.existsSync('./public/assets/webpack-common-manifest.json')
                           ? require('external!./public/assets/webpack-common-manifest.json')
                           : {};

  settings = {
    ...settings,
    assetManifest,
    commonManifest,
  };
}

export default settings;