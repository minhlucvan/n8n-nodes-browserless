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

export const name = 'Scrape'

const rawOption: INodePropertyOptions = {
  name: 'Scrape',
  value: 'Scrape',
  action: 'Scrape',
  description:
    'A JSON-based API that returns text, html, and meta-data from a given list of selectors. Debugging information is available by sending in the appropriate flags in the "debugOpts" property. Responds with an array of JSON objects',
  routing: {
    request: {
      method: 'POST',
      url: '=/scrape',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
