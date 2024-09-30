import { INodeProperties } from 'n8n-workflow';

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers';
/* eslint-disable */

/* eslint-disable */
export const properties: INodeProperties[] = [
	{
		displayName: 'GET /metrics',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Default'],
				operation: ['Get Metrics Of The Session'],
			},
		},
	},
	{
		displayName: 'Token',
		name: 'token',
		description: 'API token to authenticate the request',
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
				operation: ['Get Metrics Of The Session'],
			},
		},
	},
];
/* eslint-disable */
