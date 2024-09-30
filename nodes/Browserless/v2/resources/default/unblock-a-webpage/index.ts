import { INodePropertyOptions } from 'n8n-workflow';

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers';
/* eslint-disable */

import { properties as rawProperties } from './properties';
import { runHooks } from './hooks';

export const name = 'Unblock A Webpage';

/* eslint-disable */
const rawOption: INodePropertyOptions = {
	name: 'Unblock A Webpage',
	value: 'Unblock A Webpage',
	action: 'Unblock a webpage',
	description: 'Unblock a webpage',
	routing: {
		request: {
			method: 'POST',
			url: '=/unblock',
		},
	},
};
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties);

export { option, properties };
