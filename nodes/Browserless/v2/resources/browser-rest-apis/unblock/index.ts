/* eslint-disable n8n-nodes-base/node-param-option-description-identical-to-name */
/* eslint-disable n8n-nodes-base/node-param-display-name-miscased-id */
/* eslint-disable n8n-nodes-base/node-param-display-name-miscased-id */
/* eslint-disable n8n-nodes-base/node-param-description-boolean-without-whether */
/* eslint-disable n8n-nodes-base/node-param-options-type-unsorted-items */

import { INodePropertyOptions } from 'n8n-workflow';

// @ts-ignore
import * as helpers from '../../../helpers';

import { properties as rawProperties } from './properties';
import { runHooks } from './hooks';

export const name = 'Unblock';

const rawOption: INodePropertyOptions = {
	name: 'Unblock',
	value: 'Unblock',
	action: 'Unblock',
	description:
		'> This API is only available for Enterprise and Cloud-unit plans. [Contact us for more information here.](https://www.browserless.io/contact/), or [sign-up here](https://www.browserless.io/pricing/). Unblocks the provided URL from being blocked due to bot detection. Returns a payload of Cookies, HTML, a base64 encoded screenshot, and a "browserWSEndpoint" to allow connecting to the browser when specified in the JSON Payload. Only supports CDP or Puppeteer like libraries when connecting to the "browserWSEndpoint"',
	routing: {
		request: {
			method: 'POST',
			url: '=/unblock',
		},
	},
};

const { properties, option } = runHooks(rawOption, rawProperties);

export { option, properties };
