import { INodeProperties } from 'n8n-workflow';

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers';
/* eslint-disable */

/* eslint-disable */
export const properties: INodeProperties[] = [
	{
		displayName: 'GET /config',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Default'],
				operation: ['Get Your Workers Configuration'],
			},
		},
	},
	{
		displayName: 'Token',
		name: 'token',
		required: true,
		description: undefined,
		default: 'MY_API_TOKEN',
		type: 'string',
		routing: {
			request: {
				qs: {
					token: '={{ $value }}',
				},
			},
		},
		displayOptions: {
			show: {
				resource: ['Default'],
				operation: ['Get Your Workers Configuration'],
			},
		},
	},
];
/* eslint-disable */
