import { INodePropertyOptions } from 'n8n-workflow';

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers';
/* eslint-disable */

import { properties as rawProperties } from './properties';
import { runHooks } from './hooks';

export const name = 'Gather Information About Currently Running Sessions';

/* eslint-disable */
const rawOption: INodePropertyOptions = {
	name: 'Gather Information About Currently Running Sessions',
	value: 'Gather Information About Currently Running Sessions',
	action: 'Gather information about currently running sessions',
	description:
		'This API is only available for dedicated and self-hosted accounts. It will show information of the current running sessions',
	routing: {
		request: {
			method: 'GET',
			url: '=/sessions',
		},
	},
};
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties);

export { option, properties };
