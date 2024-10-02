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
			// operations: ['/pdf'],
      credentials: [{
        displayName: 'Browserless API',
        name: 'browserlessApi',
        required: true,
      }],
			requestDefaults: {
				headers: {
					'Content-Type': 'application/json',
				},
				baseURL: '=\{\{$credentials.url\}\}',
			},
      propertiesOrder: [
        "operation",
        "url",
				'selector',
        "timeout",
        "userAgent",
        "viewport",
        "emulateMediaType",
        "setJavaScriptEnabled",
        "setExtraHTTPHeaders",
        "cookies",
        "authenticate",
				'options',
        "gotoOptions",
        "blockAds",
        "rejectRequestPattern",
        "rejectResourceTypes",
        "requestInterceptors",
        "waitForSelector",
        "waitForTimeout",
        "waitForFunction",
        "waitForEvent",
        "html",
        "elements",
        "addScriptTag",
        "addStyleTag",
        "bestAttempt",
        "launch",
        "debugOpts"
      ],
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
      },
			{
				match: {
					name: 'url',
				},
				set: {
					required: true,
				}
			},
			{
				match: {
					name: 'code',
				},
				set: {
					typeOptions: {
						rows: 10,
					},
					default: `export default async function () {
  return { hello: 'world!', type: 'application/json' };
}
`},
			},
      {
        match: {
          name: 'launch',
        },
        add: {
          method: 'additional',
          field: {
            name: 'enableLaunch',
            displayName: 'Enable Launch',
            type: 'boolean',
            default: false,
            description: 'Launch a new browser instance',
          }
        }
      },
      {
        match: {
          name: 'setExtraHTTPHeaders'
        },
        set: {
          type: 'fixedCollection',
          placeholder: 'Add Header',
          default: {},
          typeOptions: {
            multipleValues: true,
          },
          description: 'Set extra HTTP headers',
          routing: {
            request: {
              body: {
                setExtraHTTPHeaders: '={{$value.headers}}',
              },
            },
          },
          options: [
            {
              displayName: 'Set Extra HTTP Headers',
              name: 'headers',
              values: [
                {
                  displayName: 'Name',
                  name: 'name',
                  type: 'string',
                  default: '',
                  description: 'Name of the header',
                },
                {
                  displayName: 'Value',
                  name: 'value',
                  type: 'string',
                  default: '',
                  description: 'Value of the header',
                },
              ],
            }
          ],
        }
      },
      {
        match: {
          name: 'cookies'
        },
        set: (field) => ({
          ...field,
          type: 'json',
          default: '[]',
          description: 'Array of cookie objects expected by cookie-editor extension',
          typeOptions: {},
          options: [],
          routing: {
            request: {
              body: {
                cookies: '={{ (JSON.parse($value) || []).reduce((a, c) => ({ ...a, [c.name]: c.value }), {}) }}',
              },
            },
          },
        }),
        add: {
          method: 'additional',
          field: {
            name: 'enableCookies',
            displayName: 'Enable Cookies',
            type: 'boolean',
            default: false,
            description: 'Enable cookies',
          }
        }
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
      const slug = slugs[0]

			if (slug === '/function') {
				return 'Execute Function';
			}

			return slug;
    }

    return s;
  },
  normalizeActionFn: (_, opName) => {
    // /a /b => /b
    return opName;
  }
};

