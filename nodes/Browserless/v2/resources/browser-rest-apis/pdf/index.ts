/* eslint-disable n8n-nodes-base/node-param-option-description-identical-to-name */
/* eslint-disable n8n-nodes-base/node-param-display-name-miscased-id */
/* eslint-disable n8n-nodes-base/node-param-display-name-miscased-id */
/* eslint-disable n8n-nodes-base/node-param-description-boolean-without-whether */
/* eslint-disable n8n-nodes-base/node-param-options-type-unsorted-items */

import { INodePropertyOptions } from 'n8n-workflow'

// @ts-ignore
import * as helpers from '../../../helpers'

import { properties as rawProperties } from './properties'
import { runHooks } from './hooks'

export const name = 'Pdf'

const rawOption: INodePropertyOptions = {
  name: 'Pdf',
  value: 'Pdf',
  action: 'Pdf',
  description:
    'A JSON-based API for getting a PDF binary from either a supplied\n"url" or "html" payload in your request. Many options exist for\ninjecting cookies, request interceptors, user-agents and waiting for\nselectors, timers and more',
  routing: {
    request: {
      method: 'POST',
      url: '=/pdf',
    },
    output: {
      postReceive: [
        {
          type: 'binaryData',
          properties: {
            destinationProperty: 'data',
          },
        },
        helpers.hooks.postReceiveActionBinaryData,
      ],
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
