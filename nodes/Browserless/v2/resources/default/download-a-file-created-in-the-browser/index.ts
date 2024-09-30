import { INodePropertyOptions } from 'n8n-workflow';

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers';
/* eslint-disable */

import { properties as rawProperties } from './properties';
import { runHooks } from './hooks';

export const name = 'Download A File Created In The Browser';

/* eslint-disable */
const rawOption: INodePropertyOptions = {
	name: 'Download A File Created In The Browser',
	value: 'Download A File Created In The Browser',
	action: 'Download a file created in the browser.',
	description:
		'The /download API is used for returning files Chrome has downloaded during the execution of puppeteer code, which is ran inside context of the browser.',
	routing: {
		request: {
			method: 'POST',
			url: '=/download',
		},
	},
};
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties);

export { option, properties };
