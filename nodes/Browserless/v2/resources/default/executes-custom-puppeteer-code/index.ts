import { INodePropertyOptions } from 'n8n-workflow';

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers';
/* eslint-disable */

import { properties as rawProperties } from './properties';
import { runHooks } from './hooks';

export const name = 'Executes Custom Puppeteer Code';

/* eslint-disable */
const rawOption: INodePropertyOptions = {
	name: 'Executes Custom Puppeteer Code',
	value: 'Executes Custom Puppeteer Code',
	action: 'Executes custom puppeteer code',
	description: 'Allows for `POST`ing of custom code and context to run them.',
	routing: {
		request: {
			method: 'POST',
			url: '=/function',
		},
	},
};
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties);

export { option, properties };
