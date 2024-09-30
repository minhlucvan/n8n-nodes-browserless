import { INodePropertyOptions } from 'n8n-workflow';

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers';
/* eslint-disable */

import { properties as rawProperties } from './properties';
import { runHooks } from './hooks';

export const name = 'Get Your Workers Configuration';

/* eslint-disable */
const rawOption: INodePropertyOptions = {
	name: 'Get Your Workers Configuration',
	value: 'Get Your Workers Configuration',
	action: "Get your worker's configuration",
	description:
		"The `/config` API will give you information about your worker's configuration, **and is only available for dedicated and self-hosted accounts**",
	routing: {
		request: {
			method: 'GET',
			url: '=/config',
		},
	},
};
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties);

export { option, properties };
