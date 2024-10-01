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

export const name = 'Chromium Pdf'

const rawOption: INodePropertyOptions = {
  name: 'Chromium Pdf',
  value: 'Chromium Pdf',
  action: 'Chromium Pdf Browser Rest Apis',
  description: '/pdf /chromium/pdf',
  routing: {
    request: {
      method: 'POST',
      url: '=/pdf /chromium/pdf',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
