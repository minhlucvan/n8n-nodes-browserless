import { INodePropertyOptions } from 'n8n-workflow';

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers';
/* eslint-disable */

import { properties as rawProperties } from './properties';
import { runHooks } from './hooks';

export const name = 'Get Total Metrics Of All The Sessions';

/* eslint-disable */
const rawOption: INodePropertyOptions = {
	name: 'Get Total Metrics Of All The Sessions',
	value: 'Get Total Metrics Of All The Sessions',
	action: 'Get total metrics of all the sessions',
	description: 'Get total metrics of all the sessions',
	routing: {
		request: {
			method: 'GET',
			url: '=/metrics/total',
		},
	},
};
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties);

export { option, properties };
