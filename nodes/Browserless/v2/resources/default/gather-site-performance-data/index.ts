import { INodePropertyOptions } from 'n8n-workflow';

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers';
/* eslint-disable */

import { properties as rawProperties } from './properties';
import { runHooks } from './hooks';

export const name = 'Gather Site Performance Data';

/* eslint-disable */
const rawOption: INodePropertyOptions = {
	name: 'Gather Site Performance Data',
	value: 'Gather Site Performance Data',
	action: 'Gather site performance data',
	description:
		"This API is used to gather performance metrics about a website. It is powered by Google's Lighthouse project and is compatible with its CLI options. Due to the number of checks gathered, it can take from several seconds to minutes depending on the site and size of the worker.",
	routing: {
		request: {
			method: 'POST',
			url: '=/performance',
		},
	},
};
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties);

export { option, properties };
