/* eslint-disable n8n-nodes-base/node-param-option-description-identical-to-name */
/* eslint-disable n8n-nodes-base/node-param-display-name-miscased-id */
/* eslint-disable n8n-nodes-base/node-param-display-name-miscased-id */
/* eslint-disable n8n-nodes-base/node-param-description-boolean-without-whether */
/* eslint-disable n8n-nodes-base/node-param-options-type-unsorted-items */

import { INodeProperties } from 'n8n-workflow'

// @ts-ignore
import * as helpers from '../helpers'

import { aggregateNodeMethods } from '../helpers/methods'
import { runHooks } from './hooks'

import * as browserRestApis from './browser-rest-apis'

const authenticationProperties: INodeProperties[] = []

const resourceSelect: INodeProperties[] = [
  {
    displayName: 'Resource',
    name: 'resource',
    type: 'hidden',
    noDataExpression: true,
    options: [
      {
        name: 'Browser Rest Apis',
        value: 'Browser Rest Apis',
        description: '',
      },
    ],
    default: '',
  },
]

const extraProperties: INodeProperties[] = [
  {
    displayName: 'Use Custom Body',
    name: 'useCustomBody',
    type: 'boolean',
    description: 'Whether to use a custom body',
    required: false,
    default: false,
  },
  {
    displayName: 'Custom Body',
    name: 'customBody',
    type: 'json',
    default:
      '{\n  "bestAttempt": true,\n  "url": "string",\n  "browserWSEndpoint": true,\n  "cookies": true,\n  "content": true,\n  "screenshot": true,\n  "ttl": 0,\n  "gotoOptions": {\n    "referer": "string",\n    "referrerPolicy": "string",\n    "timeout": 0,\n    "waitUntil": [\n      "domcontentloaded"\n    ],\n    "signal": {\n      "aborted": true,\n      "onabort": {},\n      "reason": {}\n    }\n  },\n  "waitForEvent": {\n    "event": "string",\n    "timeout": 0\n  },\n  "waitForFunction": {\n    "fn": "string",\n    "polling": {},\n    "timeout": 0\n  },\n  "waitForSelector": {\n    "hidden": true,\n    "selector": "string",\n    "timeout": 0,\n    "visible": true\n  },\n  "waitForTimeout": 0\n}',
    description: 'Custom body to send',
    routing: {
      request: {
        body: {
          customBody: '={{JSON.parse($value)}}',
        },
      },
      send: {
        preSend: [helpers.hooks.preSendActionCustonBody],
      },
    },
    displayOptions: {
      show: {
        useCustomBody: [true],
        resource: ['Browser Rest Apis'],
        operation: ['Unblock'],
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
      request: {
        body: {
          customBody: '={{JSON.parse($value)}}',
        },
      },
      send: {
        preSend: [helpers.hooks.preSendActionCustonBody],
      },
    },
    displayOptions: {
      show: {
        useCustomBody: [true],
        resource: ['Browser Rest Apis'],
        operation: ['Pdf'],
      },
    },
  },
  {
    displayName: 'Custom Body',
    name: 'customBody',
    type: 'json',
    default:
      '{\n  "addScriptTag": [\n    {\n      "url": "string",\n      "path": "string",\n      "content": "string",\n      "type": "string",\n      "id": "string"\n    }\n  ],\n  "addStyleTag": [\n    {\n      "url": "string",\n      "path": "string",\n      "content": "string"\n    }\n  ],\n  "authenticate": {\n    "username": "string",\n    "password": "string"\n  },\n  "bestAttempt": true,\n  "cookies": [\n    {\n      "name": "string",\n      "value": "string",\n      "url": "string",\n      "domain": "string",\n      "path": "string",\n      "secure": true,\n      "httpOnly": true,\n      "sameSite": "Lax",\n      "expires": 0,\n      "priority": "High",\n      "sameParty": true,\n      "sourceScheme": "NonSecure",\n      "partitionKey": "string"\n    }\n  ],\n  "emulateMediaType": "string",\n  "gotoOptions": {\n    "referer": "string",\n    "referrerPolicy": "string",\n    "timeout": 0,\n    "waitUntil": [\n      "domcontentloaded"\n    ],\n    "signal": {\n      "aborted": true,\n      "onabort": {},\n      "reason": {}\n    }\n  },\n  "html": "string",\n  "options": {\n    "optimizeForSpeed": true,\n    "type": "jpeg",\n    "quality": 0,\n    "fromSurface": true,\n    "fullPage": true,\n    "omitBackground": true,\n    "path": "string",\n    "clip": {\n      "scale": 0,\n      "width": 0,\n      "height": 0,\n      "x": 0,\n      "y": 0\n    },\n    "encoding": "base64",\n    "captureBeyondViewport": true\n  },\n  "rejectRequestPattern": [\n    "string"\n  ],\n  "rejectResourceTypes": [\n    "cspviolationreport"\n  ],\n  "requestInterceptors": [\n    {\n      "pattern": "string",\n      "response": {}\n    }\n  ],\n  "scrollPage": true,\n  "selector": "string",\n  "setExtraHTTPHeaders": {},\n  "setJavaScriptEnabled": true,\n  "url": "string",\n  "userAgent": "string",\n  "viewport": {\n    "width": 0,\n    "height": 0,\n    "deviceScaleFactor": 0,\n    "isMobile": true,\n    "isLandscape": true,\n    "hasTouch": true\n  },\n  "waitForEvent": {\n    "event": "string",\n    "timeout": 0\n  },\n  "waitForFunction": {\n    "fn": "string",\n    "polling": {},\n    "timeout": 0\n  },\n  "waitForSelector": {\n    "hidden": true,\n    "selector": "string",\n    "timeout": 0,\n    "visible": true\n  },\n  "waitForTimeout": 0\n}',
    description: 'Custom body to send',
    routing: {
      request: {
        body: {
          customBody: '={{JSON.parse($value)}}',
        },
      },
      send: {
        preSend: [helpers.hooks.preSendActionCustonBody],
      },
    },
    displayOptions: {
      show: {
        useCustomBody: [true],
        resource: ['Browser Rest Apis'],
        operation: ['Screenshot'],
      },
    },
  },
  {
    displayName: 'Custom Body',
    name: 'customBody',
    type: 'json',
    default:
      '{\n  "addScriptTag": [\n    {\n      "url": "string",\n      "path": "string",\n      "content": "string",\n      "type": "string",\n      "id": "string"\n    }\n  ],\n  "addStyleTag": [\n    {\n      "url": "string",\n      "path": "string",\n      "content": "string"\n    }\n  ],\n  "authenticate": {\n    "username": "string",\n    "password": "string"\n  },\n  "bestAttempt": true,\n  "cookies": [\n    {\n      "name": "string",\n      "value": "string",\n      "url": "string",\n      "domain": "string",\n      "path": "string",\n      "secure": true,\n      "httpOnly": true,\n      "sameSite": "Lax",\n      "expires": 0,\n      "priority": "High",\n      "sameParty": true,\n      "sourceScheme": "NonSecure",\n      "partitionKey": "string"\n    }\n  ],\n  "emulateMediaType": "string",\n  "gotoOptions": {\n    "referer": "string",\n    "referrerPolicy": "string",\n    "timeout": 0,\n    "waitUntil": [\n      "domcontentloaded"\n    ],\n    "signal": {\n      "aborted": true,\n      "onabort": {},\n      "reason": {}\n    }\n  },\n  "html": "string",\n  "rejectRequestPattern": [\n    "string"\n  ],\n  "rejectResourceTypes": [\n    "cspviolationreport"\n  ],\n  "requestInterceptors": [\n    {\n      "pattern": "string",\n      "response": {}\n    }\n  ],\n  "setExtraHTTPHeaders": {},\n  "setJavaScriptEnabled": true,\n  "url": "string",\n  "userAgent": "string",\n  "viewport": {\n    "width": 0,\n    "height": 0,\n    "deviceScaleFactor": 0,\n    "isMobile": true,\n    "isLandscape": true,\n    "hasTouch": true\n  },\n  "waitForEvent": {\n    "event": "string",\n    "timeout": 0\n  },\n  "waitForFunction": {\n    "fn": "string",\n    "polling": {},\n    "timeout": 0\n  },\n  "waitForSelector": {\n    "hidden": true,\n    "selector": "string",\n    "timeout": 0,\n    "visible": true\n  },\n  "waitForTimeout": 0\n}',
    description: 'Custom body to send',
    routing: {
      request: {
        body: {
          customBody: '={{JSON.parse($value)}}',
        },
      },
      send: {
        preSend: [helpers.hooks.preSendActionCustonBody],
      },
    },
    displayOptions: {
      show: {
        useCustomBody: [true],
        resource: ['Browser Rest Apis'],
        operation: ['Content'],
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
      request: {
        body: {
          customBody: '={{JSON.parse($value)}}',
        },
      },
      send: {
        preSend: [helpers.hooks.preSendActionCustonBody],
      },
    },
    displayOptions: {
      show: {
        useCustomBody: [true],
        resource: ['Browser Rest Apis'],
        operation: ['Download'],
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
      request: {
        body: {
          customBody: '={{JSON.parse($value)}}',
        },
      },
      send: {
        preSend: [helpers.hooks.preSendActionCustonBody],
      },
    },
    displayOptions: {
      show: {
        useCustomBody: [true],
        resource: ['Browser Rest Apis'],
        operation: ['Execute'],
      },
    },
  },
  {
    displayName: 'Custom Body',
    name: 'customBody',
    type: 'json',
    default:
      '{\n  "budgets": [\n    {}\n  ],\n  "config": {},\n  "url": "string"\n}',
    description: 'Custom body to send',
    routing: {
      request: {
        body: {
          customBody: '={{JSON.parse($value)}}',
        },
      },
      send: {
        preSend: [helpers.hooks.preSendActionCustonBody],
      },
    },
    displayOptions: {
      show: {
        useCustomBody: [true],
        resource: ['Browser Rest Apis'],
        operation: ['Performance'],
      },
    },
  },
  {
    displayName: 'Custom Body',
    name: 'customBody',
    type: 'json',
    default:
      '{\n  "addScriptTag": [\n    {\n      "url": "string",\n      "path": "string",\n      "content": "string",\n      "type": "string",\n      "id": "string"\n    }\n  ],\n  "addStyleTag": [\n    {\n      "url": "string",\n      "path": "string",\n      "content": "string"\n    }\n  ],\n  "authenticate": {\n    "username": "string",\n    "password": "string"\n  },\n  "bestAttempt": true,\n  "cookies": [\n    {\n      "name": "string",\n      "value": "string",\n      "url": "string",\n      "domain": "string",\n      "path": "string",\n      "secure": true,\n      "httpOnly": true,\n      "sameSite": "Lax",\n      "expires": 0,\n      "priority": "High",\n      "sameParty": true,\n      "sourceScheme": "NonSecure",\n      "partitionKey": "string"\n    }\n  ],\n  "debugOpts": {\n    "console": true,\n    "cookies": true,\n    "html": true,\n    "network": true,\n    "screenshot": true\n  },\n  "elements": [\n    {\n      "selector": "string",\n      "timeout": 0\n    }\n  ],\n  "emulateMediaType": "string",\n  "gotoOptions": {\n    "referer": "string",\n    "referrerPolicy": "string",\n    "timeout": 0,\n    "waitUntil": [\n      "domcontentloaded"\n    ],\n    "signal": {\n      "aborted": true,\n      "onabort": {},\n      "reason": {}\n    }\n  },\n  "html": "string",\n  "rejectRequestPattern": [\n    "string"\n  ],\n  "rejectResourceTypes": [\n    "cspviolationreport"\n  ],\n  "requestInterceptors": [\n    {\n      "pattern": "string",\n      "response": {}\n    }\n  ],\n  "setExtraHTTPHeaders": {},\n  "setJavaScriptEnabled": true,\n  "url": "string",\n  "userAgent": "string",\n  "viewport": {\n    "width": 0,\n    "height": 0,\n    "deviceScaleFactor": 0,\n    "isMobile": true,\n    "isLandscape": true,\n    "hasTouch": true\n  },\n  "waitForEvent": {\n    "event": "string",\n    "timeout": 0\n  },\n  "waitForFunction": {\n    "fn": "string",\n    "polling": {},\n    "timeout": 0\n  },\n  "waitForSelector": {\n    "hidden": true,\n    "selector": "string",\n    "timeout": 0,\n    "visible": true\n  },\n  "waitForTimeout": 0\n}',
    description: 'Custom body to send',
    routing: {
      request: {
        body: {
          customBody: '={{JSON.parse($value)}}',
        },
      },
      send: {
        preSend: [helpers.hooks.preSendActionCustonBody],
      },
    },
    displayOptions: {
      show: {
        useCustomBody: [true],
        resource: ['Browser Rest Apis'],
        operation: ['Scrape'],
      },
    },
  },
]

const rawProperties: INodeProperties[] = [
  ...authenticationProperties,
  ...resourceSelect,
  ...browserRestApis.properties,
  ...extraProperties,
]

const { properties, methods: selfMethods } = runHooks(rawProperties)

const methods = aggregateNodeMethods([selfMethods, browserRestApis.methods])

export { properties, methods }
