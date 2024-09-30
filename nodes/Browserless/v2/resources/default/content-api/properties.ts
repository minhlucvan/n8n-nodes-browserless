import { INodeProperties } from 'n8n-workflow';

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers';
/* eslint-disable */

/* eslint-disable */
export const properties: INodeProperties[] = [
	{
		displayName: 'POST /content',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Default'],
				operation: ['Content Api'],
			},
		},
	},
	{
		displayName: 'Token',
		name: 'token',
		required: true,
		description: 'API token',
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
				operation: ['Content Api'],
			},
		},
	},
	{
		displayName: 'Url',
		name: 'url',
		type: 'string',
		default: '',
		description: 'URL to navigate to',
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
				operation: ['Content Api'],
			},
		},
	},
	{
		displayName: 'Reject Resource Types',
		name: 'rejectResourceTypes',
		type: 'fixedCollection',
		default: [],
		typeOptions: {
			multipleValues: true,
		},
		description: 'Types to be rejected',
		placeholder: 'Add item',
		options: [
			{
				name: 'items',
				displayName: 'Items',
				values: [
					{
						name: 'Item',
						displayName: 'Item',
						type: 'string',
						default: '',
					},
				],
			},
		],
		routing: {
			request: {
				body: {
					rejectResourceTypes: '={{$value.items}}',
				},
			},
		},
		displayOptions: {
			hide: {
				'/options.useCustomBody': [true],
			},
			show: {
				resource: ['Default'],
				operation: ['Content Api'],
			},
		},
	},
	{
		displayName: 'Reject Request Pattern',
		name: 'rejectRequestPattern',
		type: 'fixedCollection',
		default: [],
		typeOptions: {
			multipleValues: true,
		},
		description: 'Patterns to reject',
		placeholder: 'Add item',
		options: [
			{
				name: 'items',
				displayName: 'Items',
				values: [
					{
						name: 'Item',
						displayName: 'Item',
						type: 'string',
						default: '',
					},
				],
			},
		],
		routing: {
			request: {
				body: {
					rejectRequestPattern: '={{$value.items}}',
				},
			},
		},
		displayOptions: {
			hide: {
				'/options.useCustomBody': [true],
			},
			show: {
				resource: ['Default'],
				operation: ['Content Api'],
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
						type: 'string',
						default: '',
						description: "Puppeteer's GoToOptions interface",
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
				operation: ['Content Api'],
			},
		},
	},
	{
		displayName: 'Best Attempt',
		name: 'bestAttempt',
		type: 'boolean',
		default: true,
		description:
			'Make Browserless attempt to proceed when async events fail or timeout',
		routing: {
			request: {
				body: {
					bestAttempt: '={{ $value }}',
				},
			},
		},
		displayOptions: {
			hide: {
				'/options.useCustomBody': [true],
			},
			show: {
				resource: ['Default'],
				operation: ['Content Api'],
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
						default: '',
						description: 'Valid CSS selector',
						name: 'selector',
						displayName: 'selector',
					},
					{
						type: 'number',
						default: 0,
						description:
							'Maximum number of milliseconds to wait for the selector',
						name: 'timeout',
						displayName: 'timeout',
					},
					{
						type: 'string',
						default: '',
						description:
							'Wait for the selected element to not be found in the DOM or to be hidden',
						name: 'hidden',
						displayName: 'hidden',
					},
					{
						type: 'string',
						default: '',
						description:
							'Wait for the selected element to be present in DOM and to be visible',
						name: 'visible',
						displayName: 'visible',
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
				operation: ['Content Api'],
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
						default: '',
						description: 'Event to wait for',
						name: 'event',
						displayName: 'event',
					},
					{
						type: 'number',
						default: 0,
						description: 'Maximum number of milliseconds to wait for the event',
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
				operation: ['Content Api'],
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
						default: '',
						description:
							'Wait for the function to return. Can be any valid JavaScript or EcmaScript function.',
						name: 'fn',
						displayName: 'fn',
					},
					{
						type: 'number',
						default: 0,
						description:
							'Maximum number of milliseconds to wait for the function',
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
				operation: ['Content Api'],
			},
		},
	},
	{
		displayName: 'Custom Body',
		name: 'customBody',
		type: 'json',
		default:
			'{\n  "url": "string",\n  "rejectResourceTypes": [\n    "string"\n  ],\n  "rejectRequestPattern": [\n    "string"\n  ],\n  "gotoOptions": {\n    "waitUntil": "string"\n  },\n  "bestAttempt": true,\n  "waitForSelector": {\n    "selector": "string",\n    "timeout": 0,\n    "hidden": "string",\n    "visible": "string"\n  },\n  "waitForEvent": {\n    "event": "string",\n    "timeout": 0\n  },\n  "waitForFunction": {\n    "fn": "string",\n    "timeout": 0\n  }\n}',
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
				operation: ['Content Api'],
			},
		},
	},
];
/* eslint-disable */
