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

export const name = 'Chromium Unblock'

const rawOption: INodePropertyOptions = {
  name: 'Chromium Unblock',
  value: 'Chromium Unblock',
  action: 'Chromium Unblock Browser Rest Apis',
  description: '/unblock /chromium/unblock',
  routing: {
    request: {
      method: 'POST',
      url: '=/unblock /chromium/unblock',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
