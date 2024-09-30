import { INodeProperties } from 'n8n-workflow';

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers';
/* eslint-disable */

/* eslint-disable */
export const properties: INodeProperties[] = [
	{
		displayName: 'POST /performance',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Default'],
				operation: ['Gather Site Performance Data'],
			},
		},
	},
	{
		displayName: 'Url',
		name: 'url',
		type: 'string',
		default: '',
		description: 'The URL of the website to gather performance metrics from',
		routing: {
			request: {
				body: {
					url: '={{ $value }}',
				},
			},
		},
		displayOptions: {
			hide: {
				'/options.useCustomBody': [true],
			},
			show: {
				resource: ['Default'],
				operation: ['Gather Site Performance Data'],
			},
		},
	},
	{
		displayName: 'Config',
		name: 'config',
		type: 'json',
		default:
			'{\n  "extends": "lighthouse:default",\n  "settings": {\n    "onlyCategories": [\n      null\n    ]\n  }\n}',
		description: 'Specifies the options for the performance data gathering',
		routing: {
			request: {
				body: {
					config: '={{ JSON.parse($value) }}',
				},
			},
		},
		displayOptions: {
			hide: {
				'/options.useCustomBody': [true],
			},
			show: {
				resource: ['Default'],
				operation: ['Gather Site Performance Data'],
			},
		},
	},
	{
		displayName: 'Custom Body',
		name: 'customBody',
		type: 'json',
		default:
			'{\n  "url": "string",\n  "config": {\n    "extends": "lighthouse:default",\n    "settings": {\n      "onlyCategories": [\n        "string"\n      ],\n      "onlyAudits": "string"\n    }\n  }\n}',
		description: 'Custom body to send.',
		routing: {
			send: {
				preSend: ['${helpers.hooks.preSendActionCustonBody}'],
			},
		},
		displayOptions: {
			show: {
				'/options.useCustomBody': [true],
				resource: ['Default'],
				operation: ['Gather Site Performance Data'],
			},
		},
	},
];
/* eslint-disable */
