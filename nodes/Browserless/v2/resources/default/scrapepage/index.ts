import { INodePropertyOptions } from 'n8n-workflow';

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers';
/* eslint-disable */

import { properties as rawProperties } from './properties';
import { runHooks } from './hooks';

export const name = 'Scrapepage';

/* eslint-disable */
const rawOption: INodePropertyOptions = {
	name: 'Scrapepage',
	value: 'Scrapepage',
	action: 'Scrapepage',
	description: '',
	routing: {
		request: {
			method: 'POST',
			url: '=/scrape',
		},
	},
};
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties);

export { option, properties };
