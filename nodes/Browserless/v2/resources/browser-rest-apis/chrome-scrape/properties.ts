/* eslint-disable n8n-nodes-base/node-param-option-description-identical-to-name */
/* eslint-disable n8n-nodes-base/node-param-display-name-miscased-id */
/* eslint-disable n8n-nodes-base/node-param-display-name-miscased-id */
/* eslint-disable n8n-nodes-base/node-param-description-boolean-without-whether */
/* eslint-disable n8n-nodes-base/node-param-options-type-unsorted-items */

import { INodeProperties } from 'n8n-workflow'

// @ts-ignore
import * as helpers from '../../../helpers'

export const properties: INodeProperties[] = [
  {
    displayName: 'POST /chrome/scrape',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Browser Rest Apis'],
        operation: ['Chrome Scrape'],
      },
    },
  },
  {
    displayName: 'Url',
    name: 'url',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          url: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        useCustomBody: [true],
      },
      show: {
        resource: ['Browser Rest Apis'],
        operation: ['Chrome Scrape'],
      },
    },
  },
  {
    displayName: 'Timeout',
    name: 'timeout',
    description:
      'Override the system-level timeout for this request.\nAccepts a value in milliseconds',
    default: 0,
    type: 'number',
    routing: {
      request: {
        qs: {
          timeout: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Browser Rest Apis'],
        operation: ['Chrome Scrape'],
      },
    },
  },
  {
    displayName: 'User Agent',
    name: 'userAgent',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          userAgent: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        useCustomBody: [true],
      },
      show: {
        resource: ['Browser Rest Apis'],
        operation: ['Chrome Scrape'],
      },
    },
  },
  {
    displayName: 'Viewport',
    name: 'viewport',
    type: 'fixedCollection',
    default: {},
    description: undefined,
    options: [
      {
        displayName: 'Items',
        name: 'items',
        values: [
          {
            displayName: 'width',
            type: 'number',
            default: 0,
            description: 'The page width in CSS pixels',
            name: 'width',
          },
          {
            displayName: 'height',
            type: 'number',
            default: 0,
            description: 'The page height in CSS pixels',
            name: 'height',
          },
          {
            displayName: 'deviceScaleFactor',
            type: 'number',
            default: 0,
            description:
              'Specify device scale factor.\nSee {@link https://developer.mozilla.org/en-US/docs/Web/API/Window/devicePixelRatio devicePixelRatio} for more info',
            name: 'deviceScaleFactor',
          },
          {
            displayName: 'isMobile',
            type: 'boolean',
            default: true,
            description:
              'Whether the `meta viewport` tag is taken into account',
            name: 'isMobile',
          },
          {
            displayName: 'isLandscape',
            type: 'boolean',
            default: true,
            description: 'Specifies if the viewport is in landscape mode',
            name: 'isLandscape',
          },
          {
            displayName: 'hasTouch',
            type: 'boolean',
            default: true,
            description: 'Specify if the viewport supports touch events',
            name: 'hasTouch',
          },
        ],
      },
    ],
    routing: {
      request: {
        body: {
          viewport: '={{$value.items}}',
        },
      },
    },
    displayOptions: {
      hide: {
        useCustomBody: [true],
      },
      show: {
        resource: ['Browser Rest Apis'],
        operation: ['Chrome Scrape'],
      },
    },
  },
  {
    displayName: 'Emulate Media Type',
    name: 'emulateMediaType',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          emulateMediaType: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        useCustomBody: [true],
      },
      show: {
        resource: ['Browser Rest Apis'],
        operation: ['Chrome Scrape'],
      },
    },
  },
  {
    displayName: 'Set Java Script Enabled',
    name: 'setJavaScriptEnabled',
    type: 'boolean',
    default: true,
    description: undefined,
    routing: {
      request: {
        body: {
          setJavaScriptEnabled: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        useCustomBody: [true],
      },
      show: {
        resource: ['Browser Rest Apis'],
        operation: ['Chrome Scrape'],
      },
    },
  },
  {
    displayName: 'Set Extra HTTP Headers',
    name: 'setExtraHTTPHeaders',
    type: 'fixedCollection',
    default: {},
    description: 'Set extra HTTP headers',
    routing: {
      request: {
        body: {
          setExtraHTTPHeaders: '={{$value.headers}}',
        },
      },
    },
    displayOptions: {
      hide: {
        useCustomBody: [true],
      },
      show: {
        resource: ['Browser Rest Apis'],
        operation: ['Chrome Scrape'],
      },
    },
    placeholder: 'Add Header',
    typeOptions: {
      multipleValues: true,
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
      },
    ],
  },
  {
    displayName: 'Enable Cookies',
    name: 'enableCookies',
    type: 'boolean',
    default: false,
    description: 'Enable cookies',
    displayOptions: {
      hide: {
        useCustomBody: [true],
      },
      show: {
        resource: ['Browser Rest Apis'],
        operation: ['Chrome Scrape'],
      },
    },
  },
  {
    displayName: 'Cookies',
    name: 'cookies',
    type: 'json',
    default: '[]',
    typeOptions: {},
    description: 'Array of cookie objects expected by cookie-editor extension',
    placeholder: 'Add item',
    options: [],
    routing: {
      request: {
        body: {
          cookies:
            '={{ (JSON.parse($value) || []).reduce((a, c) => ({ ...a, [c.name]: c.value }), {}) }}',
        },
      },
    },
    displayOptions: {
      hide: {
        useCustomBody: [true],
      },
      show: {
        resource: ['Browser Rest Apis'],
        operation: ['Chrome Scrape'],
        enableCookies: [true],
      },
    },
  },
  {
    displayName: 'Authenticate',
    name: 'authenticate',
    type: 'fixedCollection',
    default: {},
    description: undefined,
    options: [
      {
        displayName: 'Items',
        name: 'items',
        values: [
          {
            displayName: 'username',
            type: 'string',
            default: '',
            description: '',
            name: 'username',
          },
          {
            displayName: 'password',
            type: 'string',
            default: '',
            description: '',
            name: 'password',
          },
        ],
      },
    ],
    routing: {
      request: {
        body: {
          authenticate: '={{$value.items}}',
        },
      },
    },
    displayOptions: {
      hide: {
        useCustomBody: [true],
      },
      show: {
        resource: ['Browser Rest Apis'],
        operation: ['Chrome Scrape'],
      },
    },
  },
  {
    displayName: 'Goto Options',
    name: 'gotoOptions',
    type: 'fixedCollection',
    default: {},
    description: undefined,
    options: [
      {
        displayName: 'Items',
        name: 'items',
        values: [
          {
            displayName: 'referer',
            type: 'string',
            default: '',
            description:
              'If provided, it will take preference over the referer header value set by\n{@link Page.setExtraHTTPHeaderspage.setExtraHTTPHeaders()}',
            name: 'referer',
          },
          {
            displayName: 'referrerPolicy',
            type: 'string',
            default: '',
            description:
              'If provided, it will take preference over the referer-policy header value\nset by {@link Page.setExtraHTTPHeaderspage.setExtraHTTPHeaders()}',
            name: 'referrerPolicy',
          },
          {
            displayName: 'timeout',
            type: 'number',
            default: 0,
            description:
              'Maximum wait time in milliseconds. Pass 0 to disable the timeout.\n\nThe default value can be changed by using the\n{@link Page.setDefaultTimeout} or {@link Page.setDefaultNavigationTimeout}\nmethods',
            name: 'timeout',
          },
          {
            displayName: 'waitUntil',
            type: 'multiOptions',
            default: [],
            description:
              'When to consider waiting succeeds. Given an array of event strings, waiting\nis considered to be successful after all events have been fired',
            options: [
              {
                name: 'domcontentloaded',
                value: 'domcontentloaded',
              },
              {
                name: 'load',
                value: 'load',
              },
              {
                name: 'networkidle0',
                value: 'networkidle0',
              },
              {
                name: 'networkidle2',
                value: 'networkidle2',
              },
            ],
            name: 'waitUntil',
          },
          {
            displayName: 'signal',
            type: 'fixedCollection',
            default: {},
            description: 'A signal object that allows you to cancel the call',
            options: [
              {
                displayName: 'Items',
                name: 'items',
                values: [
                  {
                    displayName: 'aborted',
                    type: 'boolean',
                    default: true,
                    description: '',
                    name: 'aborted',
                  },
                  {
                    displayName: 'onabort',
                    type: 'json',
                    default: '{}',
                    description: '',
                    name: 'onabort',
                  },
                  {
                    displayName: 'reason',
                    type: 'string',
                    default: '',
                    description: '',
                    name: 'reason',
                  },
                ],
              },
            ],
            name: 'signal',
          },
        ],
      },
    ],
    routing: {
      request: {
        body: {
          gotoOptions: '={{$value.items}}',
        },
      },
    },
    displayOptions: {
      hide: {
        useCustomBody: [true],
      },
      show: {
        resource: ['Browser Rest Apis'],
        operation: ['Chrome Scrape'],
      },
    },
  },
  {
    displayName: 'Block Ads',
    name: 'blockAds',
    description:
      'Whether or nor to load ad-blocking extensions for the session.\nThis currently uses uBlock Origin and may cause certain sites\nto not load properly',
    default: true,
    type: 'boolean',
    routing: {
      request: {
        qs: {
          blockAds: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Browser Rest Apis'],
        operation: ['Chrome Scrape'],
      },
    },
  },
  {
    displayName: 'Reject Request Pattern',
    name: 'rejectRequestPattern',
    type: 'fixedCollection',
    default: [],
    typeOptions: {
      multipleValues: true,
    },
    description: '',
    placeholder: 'Add item',
    options: [
      {
        displayName: 'Items',
        name: 'items',
        values: [
          {
            displayName: 'Item',
            name: 'Item',
            type: 'string',
            default: '',
          },
        ],
      },
    ],
    routing: {
      request: {
        body: {
          rejectRequestPattern: '={{$value.items}}',
        },
      },
    },
    displayOptions: {
      hide: {
        useCustomBody: [true],
      },
      show: {
        resource: ['Browser Rest Apis'],
        operation: ['Chrome Scrape'],
      },
    },
  },
  {
    displayName: 'Reject Resource Types',
    name: 'rejectResourceTypes',
    type: 'multiOptions',
    default: [],
    description: undefined,
    options: [
      {
        name: 'cspviolationreport',
        value: 'cspviolationreport',
      },
      {
        name: 'document',
        value: 'document',
      },
      {
        name: 'eventsource',
        value: 'eventsource',
      },
      {
        name: 'fetch',
        value: 'fetch',
      },
      {
        name: 'font',
        value: 'font',
      },
      {
        name: 'image',
        value: 'image',
      },
      {
        name: 'manifest',
        value: 'manifest',
      },
      {
        name: 'media',
        value: 'media',
      },
      {
        name: 'other',
        value: 'other',
      },
      {
        name: 'ping',
        value: 'ping',
      },
      {
        name: 'prefetch',
        value: 'prefetch',
      },
      {
        name: 'preflight',
        value: 'preflight',
      },
      {
        name: 'script',
        value: 'script',
      },
      {
        name: 'signedexchange',
        value: 'signedexchange',
      },
      {
        name: 'stylesheet',
        value: 'stylesheet',
      },
      {
        name: 'texttrack',
        value: 'texttrack',
      },
      {
        name: 'websocket',
        value: 'websocket',
      },
      {
        name: 'xhr',
        value: 'xhr',
      },
    ],
    routing: {
      request: {
        body: {
          rejectResourceTypes: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        useCustomBody: [true],
      },
      show: {
        resource: ['Browser Rest Apis'],
        operation: ['Chrome Scrape'],
      },
    },
  },
  {
    displayName: 'Request Interceptors',
    name: 'requestInterceptors',
    type: 'fixedCollection',
    default: [],
    typeOptions: {
      multipleValues: true,
    },
    description: '',
    placeholder: 'Add item',
    options: [
      {
        displayName: 'Items',
        name: 'items',
        values: [
          {
            displayName: 'pattern',
            type: 'string',
            default: '',
            description:
              'An array of patterns (using `req.url().match(r.pattern)` to match) and their\ncorresponding responses to use in order to fulfill those requests',
            name: 'pattern',
          },
          {
            displayName: 'response',
            type: 'fixedCollection',
            default: {},
            description: '',
            options: [
              {
                displayName: 'Items',
                name: 'items',
                values: [
                  {
                    displayName: 'status',
                    type: 'number',
                    default: 0,
                    description: '',
                    name: 'status',
                  },
                  {
                    displayName: 'headers',
                    type: 'json',
                    default: '{}',
                    description:
                      'Optional response headers. All values are converted to strings',
                    name: 'headers',
                  },
                  {
                    displayName: 'contentType',
                    type: 'string',
                    default: '',
                    description: '',
                    name: 'contentType',
                  },
                  {
                    displayName: 'body',
                    type: 'fixedCollection',
                    default: {},
                    description: '',
                    options: [
                      {
                        displayName: 'Items',
                        name: 'items',
                        values: [
                          {
                            displayName: 'BYTES_PER_ELEMENT',
                            type: 'number',
                            default: 0,
                            description: '',
                            name: 'BYTES_PER_ELEMENT',
                          },
                          {
                            displayName: 'buffer',
                            type: 'string',
                            default: {
                              byteLength: undefined,
                              '__@toStringTag@42114': undefined,
                            },
                            description: '',
                            name: 'buffer',
                          },
                          {
                            displayName: 'byteLength',
                            type: 'number',
                            default: 0,
                            description: '',
                            name: 'byteLength',
                          },
                          {
                            displayName: 'byteOffset',
                            type: 'number',
                            default: 0,
                            description: '',
                            name: 'byteOffset',
                          },
                          {
                            displayName: 'length',
                            type: 'number',
                            default: 0,
                            description: '',
                            name: 'length',
                          },
                          {
                            displayName: '__@toStringTag@42114',
                            type: 'string',
                            default: '',
                            description: '',
                            name: '__@toStringTag@42114',
                          },
                        ],
                      },
                    ],
                    name: 'body',
                  },
                ],
              },
            ],
            name: 'response',
          },
        ],
      },
    ],
    routing: {
      request: {
        body: {
          requestInterceptors: '={{$value.items}}',
        },
      },
    },
    displayOptions: {
      hide: {
        useCustomBody: [true],
      },
      show: {
        resource: ['Browser Rest Apis'],
        operation: ['Chrome Scrape'],
      },
    },
  },
  {
    displayName: 'Wait For Selector',
    name: 'waitForSelector',
    type: 'fixedCollection',
    default: {},
    description: undefined,
    options: [
      {
        displayName: 'Items',
        name: 'items',
        values: [
          {
            displayName: 'hidden',
            type: 'boolean',
            default: true,
            description: '',
            name: 'hidden',
          },
          {
            displayName: 'selector',
            type: 'string',
            default: '',
            description: '',
            name: 'selector',
          },
          {
            displayName: 'timeout',
            type: 'number',
            default: 0,
            description: '',
            name: 'timeout',
          },
          {
            displayName: 'visible',
            type: 'boolean',
            default: true,
            description: '',
            name: 'visible',
          },
        ],
      },
    ],
    routing: {
      request: {
        body: {
          waitForSelector: '={{$value.items}}',
        },
      },
    },
    displayOptions: {
      hide: {
        useCustomBody: [true],
      },
      show: {
        resource: ['Browser Rest Apis'],
        operation: ['Chrome Scrape'],
      },
    },
  },
  {
    displayName: 'Wait For Timeout',
    name: 'waitForTimeout',
    type: 'number',
    default: 0,
    description: undefined,
    routing: {
      request: {
        body: {
          waitForTimeout: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        useCustomBody: [true],
      },
      show: {
        resource: ['Browser Rest Apis'],
        operation: ['Chrome Scrape'],
      },
    },
  },
  {
    displayName: 'Wait For Function',
    name: 'waitForFunction',
    type: 'fixedCollection',
    default: {},
    description: undefined,
    options: [
      {
        displayName: 'Items',
        name: 'items',
        values: [
          {
            displayName: 'fn',
            type: 'string',
            default: '',
            description:
              'The function, or statement, to be evaluated in browser context',
            name: 'fn',
          },
          {
            displayName: 'polling',
            type: 'string',
            default: undefined,
            description:
              'An interval at which the pageFunction is executed, defaults to raf.\nIf polling is a number, then it is treated as an interval in milliseconds\nat which the function would be executed. If polling is a string,\nthen it can be one of the following values: "raf" or "mutation"',
            name: 'polling',
          },
          {
            displayName: 'timeout',
            type: 'number',
            default: 0,
            description:
              'Maximum time to wait for in milliseconds. Defaults to 30000 (30 seconds).\nPass 0 to disable timeout',
            name: 'timeout',
          },
        ],
      },
    ],
    routing: {
      request: {
        body: {
          waitForFunction: '={{$value.items}}',
        },
      },
    },
    displayOptions: {
      hide: {
        useCustomBody: [true],
      },
      show: {
        resource: ['Browser Rest Apis'],
        operation: ['Chrome Scrape'],
      },
    },
  },
  {
    displayName: 'Wait For Event',
    name: 'waitForEvent',
    type: 'fixedCollection',
    default: {},
    description: undefined,
    options: [
      {
        displayName: 'Items',
        name: 'items',
        values: [
          {
            displayName: 'event',
            type: 'string',
            default: '',
            description: '',
            name: 'event',
          },
          {
            displayName: 'timeout',
            type: 'number',
            default: 0,
            description: '',
            name: 'timeout',
          },
        ],
      },
    ],
    routing: {
      request: {
        body: {
          waitForEvent: '={{$value.items}}',
        },
      },
    },
    displayOptions: {
      hide: {
        useCustomBody: [true],
      },
      show: {
        resource: ['Browser Rest Apis'],
        operation: ['Chrome Scrape'],
      },
    },
  },
  {
    displayName: 'Html',
    name: 'html',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          html: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        useCustomBody: [true],
      },
      show: {
        resource: ['Browser Rest Apis'],
        operation: ['Chrome Scrape'],
      },
    },
  },
  {
    displayName: 'Elements',
    name: 'elements',
    type: 'fixedCollection',
    default: [],
    typeOptions: {
      multipleValues: true,
    },
    description: '',
    placeholder: 'Add item',
    options: [
      {
        displayName: 'Items',
        name: 'items',
        values: [
          {
            displayName: 'selector',
            type: 'string',
            default: '',
            description: '',
            name: 'selector',
          },
          {
            displayName: 'timeout',
            type: 'number',
            default: 0,
            description: '',
            name: 'timeout',
          },
        ],
      },
    ],
    routing: {
      request: {
        body: {
          elements: '={{$value.items}}',
        },
      },
    },
    displayOptions: {
      hide: {
        useCustomBody: [true],
      },
      show: {
        resource: ['Browser Rest Apis'],
        operation: ['Chrome Scrape'],
      },
    },
  },
  {
    displayName: 'Add Script Tag',
    name: 'addScriptTag',
    type: 'fixedCollection',
    default: [],
    typeOptions: {
      multipleValues: true,
    },
    description: '',
    placeholder: 'Add item',
    options: [
      {
        displayName: 'Items',
        name: 'items',
        values: [
          {
            displayName: 'url',
            type: 'string',
            default: '',
            description: 'URL of the script to be added',
            name: 'url',
          },
          {
            displayName: 'path',
            type: 'string',
            default: '',
            description:
              'Path to a JavaScript file to be injected into the frame',
            name: 'path',
          },
          {
            displayName: 'content',
            type: 'string',
            default: '',
            description: 'JavaScript to be injected into the frame',
            name: 'content',
          },
          {
            displayName: 'type',
            type: 'string',
            default: '',
            description:
              'Sets the `type` of the script. Use `module` in order to load an ES2015 module',
            name: 'type',
          },
          {
            displayName: 'id',
            type: 'string',
            default: '',
            description: 'Sets the `id` of the script',
            name: 'id',
          },
        ],
      },
    ],
    routing: {
      request: {
        body: {
          addScriptTag: '={{$value.items}}',
        },
      },
    },
    displayOptions: {
      hide: {
        useCustomBody: [true],
      },
      show: {
        resource: ['Browser Rest Apis'],
        operation: ['Chrome Scrape'],
      },
    },
  },
  {
    displayName: 'Add Style Tag',
    name: 'addStyleTag',
    type: 'fixedCollection',
    default: [],
    typeOptions: {
      multipleValues: true,
    },
    description: '',
    placeholder: 'Add item',
    options: [
      {
        displayName: 'Items',
        name: 'items',
        values: [
          {
            displayName: 'url',
            type: 'string',
            default: '',
            description: 'the URL of the CSS file to be added',
            name: 'url',
          },
          {
            displayName: 'path',
            type: 'string',
            default: '',
            description: 'The path to a CSS file to be injected into the frame',
            name: 'path',
          },
          {
            displayName: 'content',
            type: 'string',
            default: '',
            description: 'Raw CSS content to be injected into the frame',
            name: 'content',
          },
        ],
      },
    ],
    routing: {
      request: {
        body: {
          addStyleTag: '={{$value.items}}',
        },
      },
    },
    displayOptions: {
      hide: {
        useCustomBody: [true],
      },
      show: {
        resource: ['Browser Rest Apis'],
        operation: ['Chrome Scrape'],
      },
    },
  },
  {
    displayName: 'Best Attempt',
    name: 'bestAttempt',
    type: 'boolean',
    default: true,
    description:
      'When bestAttempt is set to true, browserless attempt to proceed\nwhen "awaited" events fail or timeout. This includes things like\ngoto, waitForSelector, and more',
    routing: {
      request: {
        body: {
          bestAttempt: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        useCustomBody: [true],
      },
      show: {
        resource: ['Browser Rest Apis'],
        operation: ['Chrome Scrape'],
      },
    },
  },
  {
    displayName: 'Enable Launch',
    name: 'enableLaunch',
    type: 'boolean',
    default: false,
    description: 'Launch a new browser instance',
    displayOptions: {
      show: {
        resource: ['Browser Rest Apis'],
        operation: ['Chrome Scrape'],
      },
    },
  },
  {
    displayName: 'Launch',
    name: 'launch',
    description: '',
    default:
      '{"args":["string"],"defaultViewport":{"deviceScaleFactor":0,"hasTouch":true,"height":0,"isLandscape":true,"isMobile":true,"width":0},"devtools":true,"dumpio":true,"headless":false,"ignoreDefaultArgs":["string"],"ignoreHTTPSErrors":true,"slowMo":0,"stealth":true,"timeout":0,"userDataDir":"string","waitForInitialPage":true}',
    type: 'json',
    routing: {
      request: {
        qs: {
          launch: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Browser Rest Apis'],
        operation: ['Chrome Scrape'],
        enableLaunch: [true],
      },
    },
  },
  {
    displayName: 'Debug Opts',
    name: 'debugOpts',
    type: 'fixedCollection',
    default: {},
    description: undefined,
    options: [
      {
        displayName: 'Items',
        name: 'items',
        values: [
          {
            displayName: 'console',
            type: 'boolean',
            default: true,
            description: '',
            name: 'console',
          },
          {
            displayName: 'cookies',
            type: 'boolean',
            default: true,
            description: '',
            name: 'cookies',
          },
          {
            displayName: 'html',
            type: 'boolean',
            default: true,
            description: '',
            name: 'html',
          },
          {
            displayName: 'network',
            type: 'boolean',
            default: true,
            description: '',
            name: 'network',
          },
          {
            displayName: 'screenshot',
            type: 'boolean',
            default: true,
            description: '',
            name: 'screenshot',
          },
        ],
      },
    ],
    routing: {
      request: {
        body: {
          debugOpts: '={{$value.items}}',
        },
      },
    },
    displayOptions: {
      hide: {
        useCustomBody: [true],
      },
      show: {
        resource: ['Browser Rest Apis'],
        operation: ['Chrome Scrape'],
      },
    },
  },
]
