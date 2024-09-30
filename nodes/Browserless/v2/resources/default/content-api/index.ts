import { INodePropertyOptions } from 'n8n-workflow';

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers';
/* eslint-disable */

import { properties as rawProperties } from './properties';
import { runHooks } from './hooks';

export const name = 'Content Api';

/* eslint-disable */
const rawOption: INodePropertyOptions = {
	name: 'Content Api',
	value: 'Content Api',
	action: 'Content API',
	description:
		"Allows for simple navigation to a site and capturing the page's content (including the `<head>` section).",
	routing: {
		request: {
			method: 'POST',
			url: '=/content',
		},
	},
};
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties);

export { option, properties };
