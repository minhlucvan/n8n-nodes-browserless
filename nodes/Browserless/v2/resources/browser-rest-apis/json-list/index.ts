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

export const name = 'Json List'

const rawOption: INodePropertyOptions = {
  name: 'Json List',
  value: 'Json List',
  action: 'Json List',
  description:
    'Returns a JSON payload that acts as a pass-through to the DevTools /json/list HTTP API in Chromium and Chrome.\nBrowserless crafts this payload so that remote clients can connect to the underlying "webSocketDebuggerUrl"\nproperly, excluding any API tokens in that URL. If under authentication be sure to include your authorization',
  routing: {
    request: {
      method: 'GET',
      url: '=/json/list',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
