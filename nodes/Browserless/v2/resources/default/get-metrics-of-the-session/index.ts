import { INodePropertyOptions } from 'n8n-workflow';

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers';
/* eslint-disable */

import { properties as rawProperties } from './properties';
import { runHooks } from './hooks';

export const name = 'Get Metrics Of The Session';

/* eslint-disable */
const rawOption: INodePropertyOptions = {
	name: 'Get Metrics Of The Session',
	value: 'Get Metrics Of The Session',
	action: 'Get metrics of the session',
	description: 'Get metrics of the session',
	routing: {
		request: {
			method: 'GET',
			url: '=/metrics',
		},
	},
};
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties);

export { option, properties };
