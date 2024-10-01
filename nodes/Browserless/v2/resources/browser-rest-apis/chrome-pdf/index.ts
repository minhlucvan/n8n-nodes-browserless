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

export const name = 'Chrome Pdf'

const rawOption: INodePropertyOptions = {
  name: 'Chrome Pdf',
  value: 'Chrome Pdf',
  action: 'Chrome Pdf',
  description:
    'A JSON-based API for getting a PDF binary from either a supplied\n"url" or "html" payload in your request. Many options exist for\ninjecting cookies, request interceptors, user-agents and waiting for\nselectors, timers and more',
  routing: {
    request: {
      method: 'POST',
      url: '=/chrome/pdf',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
