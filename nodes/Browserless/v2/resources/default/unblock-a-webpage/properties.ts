import { INodeProperties } from 'n8n-workflow';

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers';
/* eslint-disable */

/* eslint-disable */
export const properties: INodeProperties[] = [
	{
		displayName: 'POST /unblock',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Default'],
				operation: ['Unblock A Webpage'],
			},
		},
	},
	{
		displayName: 'Url',
		name: 'url',
		type: 'string',
		default: 'https://example.com',
		description: undefined,
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
				operation: ['Unblock A Webpage'],
			},
		},
	},
	{
		displayName: 'Browser WS Endpoint',
		name: 'browserWSEndpoint',
		type: 'boolean',
		default: true,
		description: undefined,
		routing: {
			request: {
				body: {
					browserWSEndpoint: '={{ $value }}',
				},
			},
		},
		displayOptions: {
			hide: {
				'/options.useCustomBody': [true],
			},
			show: {
				resource: ['Default'],
				operation: ['Unblock A Webpage'],
			},
		},
	},
	{
		displayName: 'Cookies',
		name: 'cookies',
		type: 'boolean',
		default: true,
		description: undefined,
		routing: {
			request: {
				body: {
					cookies: '={{ $value }}',
				},
			},
		},
		displayOptions: {
			hide: {
				'/options.useCustomBody': [true],
			},
			show: {
				resource: ['Default'],
				operation: ['Unblock A Webpage'],
			},
		},
	},
	{
		displayName: 'Content',
		name: 'content',
		type: 'boolean',
		default: false,
		description: undefined,
		routing: {
			request: {
				body: {
					content: '={{ $value }}',
				},
			},
		},
		displayOptions: {
			hide: {
				'/options.useCustomBody': [true],
			},
			show: {
				resource: ['Default'],
				operation: ['Unblock A Webpage'],
			},
		},
	},
	{
		displayName: 'Screenshot',
		name: 'screenshot',
		type: 'boolean',
		default: false,
		description: undefined,
		routing: {
			request: {
				body: {
					screenshot: '={{ $value }}',
				},
			},
		},
		displayOptions: {
			hide: {
				'/options.useCustomBody': [true],
			},
			show: {
				resource: ['Default'],
				operation: ['Unblock A Webpage'],
			},
		},
	},
	{
		displayName: 'Ttl',
		name: 'ttl',
		type: 'number',
		default: 30000,
		description: undefined,
		routing: {
			request: {
				body: {
					ttl: '={{ $value }}',
				},
			},
		},
		displayOptions: {
			hide: {
				'/options.useCustomBody': [true],
			},
			show: {
				resource: ['Default'],
				operation: ['Unblock A Webpage'],
			},
		},
	},
	{
		displayName: 'Wait For Event',
		name: 'waitForEvent',
		type: 'fixedCollection',
		default: {},
		description: undefined,
		options: [
			{
				name: 'items',
				displayName: 'Items',
				values: [
					{
						type: 'string',
						default: 'fullscreenchange',
						description: undefined,
						name: 'event',
						displayName: 'event',
					},
					{
						type: 'number',
						default: 5000,
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
				operation: ['Unblock A Webpage'],
			},
		},
	},
	{
		displayName: 'Wait For Function',
		name: 'waitForFunction',
		type: 'fixedCollection',
		default: {},
		description: undefined,
		options: [
			{
				name: 'items',
				displayName: 'Items',
				values: [
					{
						type: 'string',
						default: 'async() => {...}',
						description: undefined,
						name: 'fn',
						displayName: 'fn',
					},
					{
						type: 'number',
						default: 5000,
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
				operation: ['Unblock A Webpage'],
			},
		},
	},
	{
		displayName: 'Wait For Selector',
		name: 'waitForSelector',
		type: 'fixedCollection',
		default: {},
		description: undefined,
		options: [
			{
				name: 'items',
				displayName: 'Items',
				values: [
					{
						type: 'string',
						default: 'h1',
						description: undefined,
						name: 'selector',
						displayName: 'selector',
					},
					{
						type: 'number',
						default: 5000,
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
				operation: ['Unblock A Webpage'],
			},
		},
	},
	{
		displayName: 'Custom Body',
		name: 'customBody',
		type: 'json',
		default:
			'{\n  "url": "https://example.com",\n  "browserWSEndpoint": true,\n  "cookies": true,\n  "content": false,\n  "screenshot": false,\n  "ttl": 30000,\n  "waitForEvent": {\n    "event": "fullscreenchange",\n    "timeout": 5000\n  },\n  "waitForFunction": {\n    "fn": "async() => {...}",\n    "timeout": 5000\n  },\n  "waitForSelector": {\n    "selector": "h1",\n    "timeout": 5000\n  }\n}',
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
				operation: ['Unblock A Webpage'],
			},
		},
	},
];
/* eslint-disable */
