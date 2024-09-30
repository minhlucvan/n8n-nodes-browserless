const path = require('path');

module.exports = {
  packageName: 'n8n-nodes-browserless',
  nodes: {
    browserless: {
      displayName: 'Browserless',
      name: 'Browserless',
      preset: 'versioned',
      description: 'Browserless API',
      openapi: path.resolve(__dirname, 'openapi.yml'),
      icon: './icons/firewrawl.png',
      baseUrl: '=\{\{$credentials.baseUrl\}\}',
      targetDir: path.resolve(__dirname, 'nodes/Browserless/v2'),
      version: 2,
      credentials: [{
        displayName: 'Browserless API',
        name: 'browserlessApi',
        required: true,
      }],
    },
  },
  overwrites: {
    operations: [],
  },
  deleteFolders: [''],
};

