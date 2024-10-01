/* eslint-disable n8n-nodes-base/node-param-option-description-identical-to-name */
/* eslint-disable n8n-nodes-base/node-param-display-name-miscased-id */
/* eslint-disable n8n-nodes-base/node-param-display-name-miscased-id */
/* eslint-disable n8n-nodes-base/node-param-description-boolean-without-whether */
/* eslint-disable n8n-nodes-base/node-param-options-type-unsorted-items */

import { INodeProperties, INodePropertyOptions } from 'n8n-workflow'
import { runHooks } from './hooks'

import * as chromeUnblock from './chrome-unblock'
import * as chromiumUnblock from './chromium-unblock'
import * as chromiumPdf from './chromium-pdf'
import * as chromiumScreenshot from './chromium-screenshot'
import * as chromeContent from './chrome-content'
import * as chromeDownload from './chrome-download'
import * as chromeFunction from './chrome-function'
import * as jsonList from './json-list'
import * as jsonNew from './json-new'
import * as jsonProtocol from './json-protocol'
import * as jsonVersion from './json-version'
import * as chromePdf from './chrome-pdf'
import * as chromePerformance from './chrome-performance'
import * as chromeScrape from './chrome-scrape'
import * as chromeScreenshot from './chrome-screenshot'
import * as chromiumContent from './chromium-content'
import * as chromiumDownload from './chromium-download'
import * as chromiumFunction from './chromium-function'
import * as chromiumPerformance from './chromium-performance'
import * as chromiumScrape from './chromium-scrape'

const operations: INodePropertyOptions[] = [
  chromeUnblock.option,
  chromiumUnblock.option,
  chromiumPdf.option,
  chromiumScreenshot.option,
  chromeContent.option,
  chromeDownload.option,
  chromeFunction.option,
  jsonList.option,
  jsonNew.option,
  jsonProtocol.option,
  jsonVersion.option,
  chromePdf.option,
  chromePerformance.option,
  chromeScrape.option,
  chromeScreenshot.option,
  chromiumContent.option,
  chromiumDownload.option,
  chromiumFunction.option,
  chromiumPerformance.option,
  chromiumScrape.option,
]

export const name = 'Browser Rest Apis'

const operationSelect: INodeProperties = {
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  displayOptions: {
    show: {
      resource: ['Browser Rest Apis'],
    },
  },
  default: '',
}

// overwrite the options of the operationSelect
operationSelect.options = operations

// set the default operation
operationSelect.default = operations.length > 0 ? operations[0].value : ''

export const rawProperties: INodeProperties[] = [
  operationSelect,
  ...chromeUnblock.properties,
  ...chromiumUnblock.properties,
  ...chromiumPdf.properties,
  ...chromiumScreenshot.properties,
  ...chromeContent.properties,
  ...chromeDownload.properties,
  ...chromeFunction.properties,
  ...jsonList.properties,
  ...jsonNew.properties,
  ...jsonProtocol.properties,
  ...jsonVersion.properties,
  ...chromePdf.properties,
  ...chromePerformance.properties,
  ...chromeScrape.properties,
  ...chromeScreenshot.properties,
  ...chromiumContent.properties,
  ...chromiumDownload.properties,
  ...chromiumFunction.properties,
  ...chromiumPerformance.properties,
  ...chromiumScrape.properties,
]

const { properties, methods } = runHooks(rawProperties)

export { properties, methods }
