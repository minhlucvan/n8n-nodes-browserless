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

export const name = 'Execute Function'

const rawOption: INodePropertyOptions = {
  name: 'Execute Function',
  value: 'Execute Function',
  action: 'Execute Function',
  description:
    'A JSON or JavaScript content-type API for running puppeteer code in the browser\'s context.\nBrowserless sets up a blank page, injects your puppeteer code, and runs it.\nYou can optionally load external libraries via the "import" module that are meant for browser usage.\nValues returned from the function are checked and an appropriate content-type and response is sent back\nto your HTTP call',
  routing: {
    request: {
      method: 'POST',
      url: '=/function',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
