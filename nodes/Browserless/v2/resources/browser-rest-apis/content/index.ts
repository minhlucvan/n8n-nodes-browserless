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

export const name = 'Content';

const rawOption: INodePropertyOptions = {
	name: 'Content',
	value: 'Content',
	action: 'Content',
	description:
		'A JSON-based API. Given a "url" or "html" field, runs and returns HTML content after the page has loaded and JavaScript has parsed',
	routing: {
		request: {
			method: 'POST',
			url: '=/content',
		},
		output: {
			postReceive: [
				{
					type: 'setKeyValue',
					properties: {
						data: '={{$response.body}}',
					},
				},
			],
		},
	},
};

const { properties, option } = runHooks(rawOption, rawProperties);

export { option, properties };
