import { INodeProperties } from 'n8n-workflow';

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers';
/* eslint-disable */

/* eslint-disable */
export const properties: INodeProperties[] = [
	{
		displayName: 'POST /scrape',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Default'],
				operation: ['Scrapepage'],
			},
		},
	},
	{
		displayName: 'Token',
		name: 'token',
		required: true,
		description: 'API Token',
		default: '',
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
				operation: ['Scrapepage'],
			},
		},
	},
	{
		displayName: 'Url',
		name: 'url',
		type: 'string',
		default: '',
		description: 'webpage URL',
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
				operation: ['Scrapepage'],
			},
		},
	},
	{
		displayName: 'Elements',
		name: 'elements',
		type: 'fixedCollection',
		default: [],
		typeOptions: {
			multipleValues: true,
		},
		description: 'HTML element selector',
		placeholder: 'Add item',
		options: [
			{
				name: 'items',
				displayName: 'Items',
				values: [
					{
						type: 'string',
						default: '',
						description: undefined,
						name: 'selector',
						displayName: 'selector',
					},
				],
			},
		],
		routing: {
			request: {
				body: {
					elements: '={{$value.items}}',
				},
			},
		},
		displayOptions: {
			hide: {
				'/options.useCustomBody': [true],
			},
			show: {
				resource: ['Default'],
				operation: ['Scrapepage'],
			},
		},
	},
	{
		displayName: 'Goto Options',
		name: 'gotoOptions',
		type: 'fixedCollection',
		default: {},
		description: undefined,
		options: [
			{
				name: 'items',
				displayName: 'Items',
				values: [
					{
						type: 'number',
						default: 0,
						description: 'navigation timeout in milliseconds',
						name: 'timeout',
						displayName: 'timeout',
					},
					{
						type: 'string',
						default: '',
						description: 'wait until event (optional)',
						name: 'waitUntil',
						displayName: 'waitUntil',
					},
				],
			},
		],
		routing: {
			request: {
				body: {
					gotoOptions: '={{$value.items}}',
				},
			},
		},
		displayOptions: {
			hide: {
				'/options.useCustomBody': [true],
			},
			show: {
				resource: ['Default'],
				operation: ['Scrapepage'],
			},
		},
	},
	{
		displayName: 'Wait For Timeout',
		name: 'waitForTimeout',
		type: 'number',
		default: 0,
		description:
			'wait for a given number of milliseconds before continue execution. (optional)',
		routing: {
			request: {
				body: {
					waitForTimeout: '={{ $value }}',
				},
			},
		},
		displayOptions: {
			hide: {
				'/options.useCustomBody': [true],
			},
			show: {
				resource: ['Default'],
				operation: ['Scrapepage'],
			},
		},
	},
	{
		displayName: 'Wait For Selector',
		name: 'waitForSelector',
		type: 'fixedCollection',
		default: {},
		description: 'wait for a selector to appear in page. (optional)',
		options: [
			{
				name: 'items',
				displayName: 'Items',
				values: [
					{
						type: 'string',
						default: '',
						description: undefined,
						name: 'selector',
						displayName: 'selector',
					},
					{
						type: 'number',
						default: 0,
						description: undefined,
						name: 'timeout',
						displayName: 'timeout',
					},
				],
			},
		],
		routing: {
			request: {
				body: {
					waitForSelector: '={{$value.items}}',
				},
			},
		},
		displayOptions: {
			hide: {
				'/options.useCustomBody': [true],
			},
			show: {
				resource: ['Default'],
				operation: ['Scrapepage'],
			},
		},
	},
	{
		displayName: 'Wait For Function',
		name: 'waitForFunction',
		type: 'fixedCollection',
		default: {},
		description:
			'waits for the provided function to return before continue. (optional)',
		options: [
			{
				name: 'items',
				displayName: 'Items',
				values: [
					{
						type: 'string',
						default: '',
						description: undefined,
						name: 'fn',
						displayName: 'fn',
					},
					{
						type: 'number',
						default: 0,
						description: undefined,
						name: 'timeout',
						displayName: 'timeout',
					},
				],
			},
		],
		routing: {
			request: {
				body: {
					waitForFunction: '={{$value.items}}',
				},
			},
		},
		displayOptions: {
			hide: {
				'/options.useCustomBody': [true],
			},
			show: {
				resource: ['Default'],
				operation: ['Scrapepage'],
			},
		},
	},
	{
		displayName: 'Wait For Event',
		name: 'waitForEvent',
		type: 'fixedCollection',
		default: {},
		description:
			'waits for an event to happen on the page before continue. (optional)',
		options: [
			{
				name: 'items',
				displayName: 'Items',
				values: [
					{
						type: 'string',
						default: '',
						description: undefined,
						name: 'event',
						displayName: 'event',
					},
					{
						type: 'number',
						default: 0,
						description: undefined,
						name: 'timeout',
						displayName: 'timeout',
					},
				],
			},
		],
		routing: {
			request: {
				body: {
					waitForEvent: '={{$value.items}}',
				},
			},
		},
		displayOptions: {
			hide: {
				'/options.useCustomBody': [true],
			},
			show: {
				resource: ['Default'],
				operation: ['Scrapepage'],
			},
		},
	},
	{
		displayName: 'Custom Body',
		name: 'customBody',
		type: 'json',
		default:
			'{\n  "url": "string",\n  "elements": [\n    {\n      "selector": "string"\n    }\n  ],\n  "gotoOptions": {\n    "timeout": 0,\n    "waitUntil": "string"\n  },\n  "waitForTimeout": 0,\n  "waitForSelector": {\n    "selector": "string",\n    "timeout": 0\n  },\n  "waitForFunction": {\n    "fn": "string",\n    "timeout": 0\n  },\n  "waitForEvent": {\n    "event": "string",\n    "timeout": 0\n  }\n}',
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
				operation: ['Scrapepage'],
			},
		},
	},
];
/* eslint-disable */
