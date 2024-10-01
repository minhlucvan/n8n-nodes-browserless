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
    displayName: 'POST /chrome/pdf',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Browser Rest Apis'],
        operation: ['Chrome Pdf'],
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
        operation: ['Chrome Pdf'],
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
        operation: ['Chrome Pdf'],
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
        operation: ['Chrome Pdf'],
      },
    },
  },
  {
    displayName: 'Custom Body',
    name: 'customBody',
    type: 'json',
    default:
      '{\n  "addScriptTag": [\n    {\n      "url": "string",\n      "path": "string",\n      "content": "string",\n      "type": "string",\n      "id": "string"\n    }\n  ],\n  "addStyleTag": [\n    {\n      "url": "string",\n      "path": "string",\n      "content": "string"\n    }\n  ],\n  "authenticate": {\n    "username": "string",\n    "password": "string"\n  },\n  "bestAttempt": true,\n  "cookies": [\n    {\n      "name": "string",\n      "value": "string",\n      "url": "string",\n      "domain": "string",\n      "path": "string",\n      "secure": true,\n      "httpOnly": true,\n      "sameSite": "Lax",\n      "expires": 0,\n      "priority": "High",\n      "sameParty": true,\n      "sourceScheme": "NonSecure",\n      "partitionKey": "string"\n    }\n  ],\n  "emulateMediaType": "string",\n  "gotoOptions": {\n    "referer": "string",\n    "referrerPolicy": "string",\n    "timeout": 0,\n    "waitUntil": [\n      "domcontentloaded"\n    ],\n    "signal": {\n      "aborted": true,\n      "onabort": {},\n      "reason": {}\n    }\n  },\n  "html": "string",\n  "options": {\n    "scale": 0,\n    "displayHeaderFooter": true,\n    "headerTemplate": "string",\n    "footerTemplate": "string",\n    "printBackground": true,\n    "landscape": true,\n    "pageRanges": "string",\n    "format": "A0",\n    "width": {},\n    "height": {},\n    "preferCSSPageSize": true,\n    "margin": {\n      "top": {},\n      "bottom": {},\n      "left": {},\n      "right": {}\n    },\n    "path": "string",\n    "omitBackground": true,\n    "tagged": true,\n    "outline": true,\n    "timeout": 0,\n    "waitForFonts": true\n  },\n  "rejectRequestPattern": [\n    "string"\n  ],\n  "rejectResourceTypes": [\n    "cspviolationreport"\n  ],\n  "requestInterceptors": [\n    {\n      "pattern": "string",\n      "response": {}\n    }\n  ],\n  "setExtraHTTPHeaders": {},\n  "setJavaScriptEnabled": true,\n  "url": "string",\n  "userAgent": "string",\n  "viewport": {\n    "width": 0,\n    "height": 0,\n    "deviceScaleFactor": 0,\n    "isMobile": true,\n    "isLandscape": true,\n    "hasTouch": true\n  },\n  "waitForEvent": {\n    "event": "string",\n    "timeout": 0\n  },\n  "waitForFunction": {\n    "fn": "string",\n    "polling": {},\n    "timeout": 0\n  },\n  "waitForSelector": {\n    "hidden": true,\n    "selector": "string",\n    "timeout": 0,\n    "visible": true\n  },\n  "waitForTimeout": 0\n}',
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
        operation: ['Chrome Pdf'],
      },
    },
  },
]
