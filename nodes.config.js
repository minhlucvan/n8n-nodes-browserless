const path = require('path');

module.exports = {
  packageName: 'n8n-nodes-browserless',
	credentials: {
		browserlessApi: {
			displayName: 'Browserless API',
			name: 'browserlessApi',
			className: 'BrowserlessApi',
		},
	},
  nodes: {
    browserless: {
      displayName: 'Browserless',
      name: 'Browserless',
      preset: 'versioned',
      description: 'Browserless API',
      openapi: path.resolve(__dirname, 'openapi.yml'),
      icon: 'file:browserless.svg',
      baseUrl: '=\{\{$credentials.url\}\}',
      targetDir: path.resolve(__dirname, 'nodes/Browserless/v2'),
      version: 2,
			tags: ['Browser REST APIs'],
      credentials: [{
        displayName: 'Browserless API',
        name: 'browserlessApi',
        required: true,
      }],
    },
  },
  overwrites: {
    operations: [
			// remove all token
			{
				match: {
					name: 'token',
				},
				set: false,
			}
		],
  },
  deleteFolders: [''],
	normalizeFn: (s) => {
		// /a /b => /b
		// /abc /def => /def
		const slugs = s.split(' ');
		// only if both slugs are single words and start with a slash
		if (slugs.every(slug => slug.startsWith('/'))) {
			return slugs[slugs.length - 1];
		}

		return s;
	}
};

