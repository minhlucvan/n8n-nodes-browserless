import { INodeProperties } from 'n8n-workflow';

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers';
/* eslint-disable */

/* eslint-disable */
export const properties: INodeProperties[] = [
	{
		displayName: 'POST /screenshot',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Default'],
				operation: ['Takes A Screenshot Of Specified Url'],
			},
		},
	},
	{
		displayName: 'Url',
		name: 'url',
		type: 'string',
		default: '',
		description: 'The URL to navigate to and capture a screenshot',
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
				operation: ['Takes A Screenshot Of Specified Url'],
			},
		},
	},
	{
		displayName: 'Options',
		name: 'options',
		type: 'fixedCollection',
		default: {},
		description: "Options available via puppeteer's Page.screenshot() method",
		options: [
			{
				name: 'items',
				displayName: 'Items',
				values: [
					{
						type: 'boolean',
						default: true,
						description:
							'When true, takes a screenshot of the full scrollable page',
						name: 'fullPage',
						displayName: 'fullPage',
					},
					{
						type: 'options',
						default: 'jpeg',
						description: 'Specifies the image format of the output',
						options: [
							{
								name: 'jpeg',
								value: 'jpeg',
							},
							{
								name: 'png',
								value: 'png',
							},
							{
								name: 'webp',
								value: 'webp',
							},
						],
						name: 'type',
						displayName: 'type',
					},
				],
			},
		],
		routing: {
			request: {
				body: {
					options: '={{$value.items}}',
				},
			},
		},
		displayOptions: {
			hide: {
				'/options.useCustomBody': [true],
			},
			show: {
				resource: ['Default'],
				operation: ['Takes A Screenshot Of Specified Url'],
			},
		},
	},
	{
		displayName: 'Add Script Tag',
		name: 'addScriptTag',
		type: 'fixedCollection',
		default: [],
		typeOptions: {
			multipleValues: true,
		},
		description: 'Additional scripts to load',
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
						name: 'url',
						displayName: 'url',
					},
					{
						type: 'string',
						default: '',
						description: undefined,
						name: 'content',
						displayName: 'content',
					},
				],
			},
		],
		routing: {
			request: {
				body: {
					addScriptTag: '={{$value.items}}',
				},
			},
		},
		displayOptions: {
			hide: {
				'/options.useCustomBody': [true],
			},
			show: {
				resource: ['Default'],
				operation: ['Takes A Screenshot Of Specified Url'],
			},
		},
	},
	{
		displayName: 'Add Style Tag',
		name: 'addStyleTag',
		type: 'fixedCollection',
		default: [],
		typeOptions: {
			multipleValues: true,
		},
		description: 'Additional styles to load',
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
						name: 'url',
						displayName: 'url',
					},
					{
						type: 'string',
						default: '',
						description: undefined,
						name: 'content',
						displayName: 'content',
					},
				],
			},
		],
		routing: {
			request: {
				body: {
					addStyleTag: '={{$value.items}}',
				},
			},
		},
		displayOptions: {
			hide: {
				'/options.useCustomBody': [true],
			},
			show: {
				resource: ['Default'],
				operation: ['Takes A Screenshot Of Specified Url'],
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
		description: 'Block undesired resource types',
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
				operation: ['Takes A Screenshot Of Specified Url'],
			},
		},
	},
	{
		displayName: 'Custom Body',
		name: 'customBody',
		type: 'json',
		default:
			'{\n  "url": "string",\n  "options": {\n    "fullPage": true,\n    "type": "jpeg"\n  },\n  "addScriptTag": [\n    {\n      "url": "string",\n      "content": "string"\n    }\n  ],\n  "addStyleTag": [\n    {\n      "url": "string",\n      "content": "string"\n    }\n  ],\n  "rejectResourceTypes": [\n    "string"\n  ]\n}',
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
				operation: ['Takes A Screenshot Of Specified Url'],
			},
		},
	},
];
/* eslint-disable */
