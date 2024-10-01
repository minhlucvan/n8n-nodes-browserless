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
    displayName: 'POST /chrome/function',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Browser Rest Apis'],
        operation: ['Chrome Function'],
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
        operation: ['Chrome Function'],
      },
    },
  },
  {
    displayName: 'Launch',
    name: 'launch',
    description:
      'Launch options, which can be either an object\nof puppeteer.launch options or playwright.launchServer\noptions, depending on the API. Must be either JSON\nobject, or a base64-encoded JSON object',
    default:
      '{\n  "args": [\n    null\n  ],\n  "defaultViewport": {},\n  "ignoreDefaultArgs": [\n    null\n  ]\n}',
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
        operation: ['Chrome Function'],
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
        operation: ['Chrome Function'],
      },
    },
  },
  {
    displayName: 'Code',
    required: true,
    name: 'code',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          code: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Browser Rest Apis'],
        operation: ['Chrome Function'],
      },
    },
  },
  {
    displayName: 'Context',
    name: 'context',
    type: 'json',
    default: '{}',
    description: undefined,
    routing: {
      request: {
        body: {
          context: '={{ JSON.parse($value) }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Browser Rest Apis'],
        operation: ['Chrome Function'],
      },
    },
  },
  {
    displayName: 'Custom Body',
    name: 'customBody',
    type: 'json',
    default: '{\n  "code": "string",\n  "context": {}\n}',
    description: 'Custom body to send',
    routing: {
      send: {
        preSend: [helpers.hooks.preSendActionCustonBody],
      },
    },
    displayOptions: {
      show: {
        '/options.useCustomBody': [true],
        resource: ['Browser Rest Apis'],
        operation: ['Chrome Function'],
      },
    },
  },
]
