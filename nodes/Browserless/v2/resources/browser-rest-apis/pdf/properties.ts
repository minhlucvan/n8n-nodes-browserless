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
    displayName: 'POST /pdf',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Browser Rest Apis'],
        operation: ['Pdf'],
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
        operation: ['Pdf'],
      },
    },
    required: true,
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
        operation: ['Pdf'],
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
        operation: ['Pdf'],
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
        operation: ['Pdf'],
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
        operation: ['Pdf'],
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
        operation: ['Pdf'],
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
        operation: ['Pdf'],
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
        operation: ['Pdf'],
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
        operation: ['Pdf'],
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
        operation: ['Pdf'],
      },
    },
  },
  {
    displayName: 'Options',
    name: 'options',
    type: 'collection',
    default: {},
    typeOptions: {},
    description:
      'Valid options to configure PDF generation via {@link Page.pdf}',
    placeholder: 'Add item',
    options: [
      {
        displayName: 'scale',
        type: 'number',
        default: 0,
        description:
          'Scales the rendering of the web page. Amount must be between `0.1` and `2`',
        name: 'scale',
      },
      {
        displayName: 'displayHeaderFooter',
        type: 'boolean',
        default: true,
        description: 'Whether to show the header and footer',
        name: 'displayHeaderFooter',
      },
      {
        displayName: 'headerTemplate',
        type: 'string',
        default: '',
        description:
          'HTML template for the print header. Should be valid HTML with the following\nclasses used to inject values into them:\n\n- `date` formatted print date\n\n- `title` document title\n\n- `url` document location\n\n- `pageNumber` current page number\n\n- `totalPages` total pages in the document',
        name: 'headerTemplate',
      },
      {
        displayName: 'footerTemplate',
        type: 'string',
        default: '',
        description:
          'HTML template for the print footer. Has the same constraints and support\nfor special classes as {@link PDFOptions.headerTemplate}',
        name: 'footerTemplate',
      },
      {
        displayName: 'printBackground',
        type: 'boolean',
        default: true,
        description: 'Set to `true` to print background graphics',
        name: 'printBackground',
      },
      {
        displayName: 'landscape',
        type: 'boolean',
        default: true,
        description: 'Whether to print in landscape orientation',
        name: 'landscape',
      },
      {
        displayName: 'pageRanges',
        type: 'string',
        default: '',
        description: 'Paper ranges to print, e.g. `1-5, 8, 11-13`',
        name: 'pageRanges',
      },
      {
        displayName: 'format',
        type: 'options',
        default: 'A0',
        description: 'All the valid paper format types when printing a PDF',
        options: [
          {
            name: 'A0',
            value: 'A0',
          },
          {
            name: 'A1',
            value: 'A1',
          },
          {
            name: 'A2',
            value: 'A2',
          },
          {
            name: 'A3',
            value: 'A3',
          },
          {
            name: 'A4',
            value: 'A4',
          },
          {
            name: 'A5',
            value: 'A5',
          },
          {
            name: 'A6',
            value: 'A6',
          },
          {
            name: 'LEDGER',
            value: 'LEDGER',
          },
          {
            name: 'LEGAL',
            value: 'LEGAL',
          },
          {
            name: 'LETTER',
            value: 'LETTER',
          },
          {
            name: 'Ledger',
            value: 'Ledger',
          },
          {
            name: 'Legal',
            value: 'Legal',
          },
          {
            name: 'Letter',
            value: 'Letter',
          },
          {
            name: 'TABLOID',
            value: 'TABLOID',
          },
          {
            name: 'Tabloid',
            value: 'Tabloid',
          },
          {
            name: 'a0',
            value: 'a0',
          },
          {
            name: 'a1',
            value: 'a1',
          },
          {
            name: 'a2',
            value: 'a2',
          },
          {
            name: 'a3',
            value: 'a3',
          },
          {
            name: 'a4',
            value: 'a4',
          },
          {
            name: 'a5',
            value: 'a5',
          },
          {
            name: 'a6',
            value: 'a6',
          },
          {
            name: 'ledger',
            value: 'ledger',
          },
          {
            name: 'legal',
            value: 'legal',
          },
          {
            name: 'letter',
            value: 'letter',
          },
          {
            name: 'tabloid',
            value: 'tabloid',
          },
        ],
        name: 'format',
      },
      {
        displayName: 'width',
        type: 'string',
        default: undefined,
        description:
          'Sets the width of paper. You can pass in a number or a string with a unit',
        name: 'width',
      },
      {
        displayName: 'height',
        type: 'string',
        default: undefined,
        description:
          'Sets the height of paper. You can pass in a number or a string with a unit',
        name: 'height',
      },
      {
        displayName: 'preferCSSPageSize',
        type: 'boolean',
        default: true,
        description:
          'Give any CSS `@page` size declared in the page priority over what is\ndeclared in the `width` or `height` or `format` option',
        name: 'preferCSSPageSize',
      },
      {
        displayName: 'margin',
        type: 'fixedCollection',
        default: {},
        description: 'Set the PDF margins',
        options: [
          {
            displayName: 'Items',
            name: 'items',
            values: [
              {
                displayName: 'top',
                type: 'string',
                default: undefined,
                description: '',
                name: 'top',
              },
              {
                displayName: 'bottom',
                type: 'string',
                default: undefined,
                description: '',
                name: 'bottom',
              },
              {
                displayName: 'left',
                type: 'string',
                default: undefined,
                description: '',
                name: 'left',
              },
              {
                displayName: 'right',
                type: 'string',
                default: undefined,
                description: '',
                name: 'right',
              },
            ],
          },
        ],
        name: 'margin',
      },
      {
        displayName: 'path',
        type: 'string',
        default: '',
        description: 'The path to save the file to',
        name: 'path',
      },
      {
        displayName: 'omitBackground',
        type: 'boolean',
        default: true,
        description:
          'Hides default white background and allows generating pdfs with transparency',
        name: 'omitBackground',
      },
      {
        displayName: 'tagged',
        type: 'boolean',
        default: true,
        description: 'Generate tagged (accessible) PDF',
        name: 'tagged',
      },
      {
        displayName: 'outline',
        type: 'boolean',
        default: true,
        description: 'Generate document outline',
        name: 'outline',
      },
      {
        displayName: 'timeout',
        type: 'number',
        default: 0,
        description:
          'Timeout in milliseconds. Pass `0` to disable timeout.\n\nThe default value can be changed by using {@link Page.setDefaultTimeout}',
        name: 'timeout',
      },
      {
        displayName: 'waitForFonts',
        type: 'boolean',
        default: true,
        description:
          'If true, waits for `document.fonts.ready` to resolve. This might require\nactivating the page using {@link Page.bringToFront} if the page is in the\nbackground',
        name: 'waitForFonts',
      },
    ],
    routing: {
      request: {
        body: {
          options: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        useCustomBody: [true],
      },
      show: {
        resource: ['Browser Rest Apis'],
        operation: ['Pdf'],
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
        operation: ['Pdf'],
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
        operation: ['Pdf'],
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
        operation: ['Pdf'],
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
        operation: ['Pdf'],
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
        operation: ['Pdf'],
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
        operation: ['Pdf'],
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
        operation: ['Pdf'],
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
        operation: ['Pdf'],
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
        operation: ['Pdf'],
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
        operation: ['Pdf'],
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
        operation: ['Pdf'],
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
        operation: ['Pdf'],
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
        operation: ['Pdf'],
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
        operation: ['Pdf'],
      },
    },
  },
  {
    displayName: 'Launch',
    name: 'launch',
    description: '',
    default: {},
    type: 'collection',
    typeOptions: {},
    placeholder: 'Add item',
    options: [
      {
        displayName: 'args',
        type: 'fixedCollection',
        default: [],
        typeOptions: {
          multipleValues: true,
        },
        name: 'args',
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
      },
      {
        displayName: 'defaultViewport',
        type: 'fixedCollection',
        default: {},
        description: '',
        options: [
          {
            displayName: 'Items',
            name: 'items',
            values: [
              {
                displayName: 'deviceScaleFactor',
                type: 'number',
                default: 0,
                description: '',
                name: 'deviceScaleFactor',
              },
              {
                displayName: 'hasTouch',
                type: 'boolean',
                default: true,
                description: '',
                name: 'hasTouch',
              },
              {
                displayName: 'height',
                type: 'number',
                default: 0,
                description: '',
                name: 'height',
              },
              {
                displayName: 'isLandscape',
                type: 'boolean',
                default: true,
                description: '',
                name: 'isLandscape',
              },
              {
                displayName: 'isMobile',
                type: 'boolean',
                default: true,
                description: '',
                name: 'isMobile',
              },
              {
                displayName: 'width',
                type: 'number',
                default: 0,
                description: '',
                name: 'width',
              },
            ],
          },
        ],
        name: 'defaultViewport',
      },
      {
        displayName: 'devtools',
        type: 'boolean',
        default: true,
        description: '',
        name: 'devtools',
      },
      {
        displayName: 'dumpio',
        type: 'boolean',
        default: true,
        description: '',
        name: 'dumpio',
      },
      {
        displayName: 'headless',
        type: 'options',
        default: false,
        description: '',
        options: [
          {
            name: 'False',
            value: false,
          },
          {
            name: 'Shell',
            value: 'shell',
          },
          {
            name: 'True',
            value: true,
          },
        ],
        name: 'headless',
      },
      {
        displayName: 'ignoreDefaultArgs',
        type: 'fixedCollection',
        default: [],
        typeOptions: {
          multipleValues: true,
        },
        name: 'ignoreDefaultArgs',
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
      },
      {
        displayName: 'ignoreHTTPSErrors',
        type: 'boolean',
        default: true,
        description: '',
        name: 'ignoreHTTPSErrors',
      },
      {
        displayName: 'slowMo',
        type: 'number',
        default: 0,
        description: '',
        name: 'slowMo',
      },
      {
        displayName: 'stealth',
        type: 'boolean',
        default: true,
        description: '',
        name: 'stealth',
      },
      {
        displayName: 'timeout',
        type: 'number',
        default: 0,
        description: '',
        name: 'timeout',
      },
      {
        displayName: 'userDataDir',
        type: 'string',
        default: '',
        description: '',
        name: 'userDataDir',
      },
      {
        displayName: 'waitForInitialPage',
        type: 'boolean',
        default: true,
        description: '',
        name: 'waitForInitialPage',
      },
    ],
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
        operation: ['Pdf'],
        enableLaunch: [true],
      },
    },
  },
]
