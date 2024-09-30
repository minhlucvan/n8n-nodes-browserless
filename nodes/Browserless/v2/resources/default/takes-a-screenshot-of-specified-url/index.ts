import { INodePropertyOptions } from 'n8n-workflow';

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers';
/* eslint-disable */

import { properties as rawProperties } from './properties';
import { runHooks } from './hooks';

export const name = 'Takes A Screenshot Of Specified Url';

/* eslint-disable */
const rawOption: INodePropertyOptions = {
	name: 'Takes A Screenshot Of Specified Url',
	value: 'Takes A Screenshot Of Specified Url',
	action: 'Takes a screenshot of specified URL.',
	description:
		"The screenshot API allows for simple navigation to a site and capturing a screenshot. This API exposes most of puppeteer's screenshot API through the posted JSON payload.",
	routing: {
		request: {
			method: 'POST',
			url: '=/screenshot',
		},
	},
};
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties);

export { option, properties };
