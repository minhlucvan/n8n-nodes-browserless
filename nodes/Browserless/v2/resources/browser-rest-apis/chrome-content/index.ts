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

export const name = 'Chrome Content'

const rawOption: INodePropertyOptions = {
  name: 'Chrome Content',
  value: 'Chrome Content',
  action: 'Chrome Content',
  description:
    'A JSON-based API. Given a "url" or "html" field, runs and returns HTML content after the page has loaded and JavaScript has parsed',
  routing: {
    request: {
      method: 'POST',
      url: '=/chrome/content',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
