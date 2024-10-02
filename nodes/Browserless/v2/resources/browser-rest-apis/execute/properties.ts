/* eslint-disable n8n-nodes-base/node-param-option-description-identical-to-name */
/* eslint-disable n8n-nodes-base/node-param-display-name-miscased-id */
/* eslint-disable n8n-nodes-base/node-param-display-name-miscased-id */
/* eslint-disable n8n-nodes-base/node-param-description-boolean-without-whether */
/* eslint-disable n8n-nodes-base/node-param-options-type-unsorted-items */

import { INodeProperties } from 'n8n-workflow';

// @ts-ignore
import * as helpers from '../../../helpers';

export const properties: INodeProperties[] = [
	{
		displayName: 'POST /function',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Browser Rest Apis'],
				operation: ['Execute'],
			},
		},
	},
	{
		displayName: 'Code',
		required: true,
		name: 'code',
		type: 'string',
		default:
			"export default async function () {\n  return { hello: 'world!', type: 'application/json' };\n}\n",
		description: undefined,
		routing: {
			request: {
				body: {
					code: '={{ $value }}',
				},
			},
		},
		displayOptions: {
			hide: {
				useCustomBody: [true],
			},
			show: {
				resource: ['Browser Rest Apis'],
				operation: ['Execute'],
			},
		},
		typeOptions: {
			rows: 10,
		},
	},
	{
		displayName: 'Context',
		name: 'context',
		type: 'json',
		default: '{}',
		description: undefined,
		routing: {
			request: {
				body: {
					context: '={{ JSON.parse($value) }}',
				},
			},
		},
		displayOptions: {
			hide: {
				useCustomBody: [true],
			},
			show: {
				resource: ['Browser Rest Apis'],
				operation: ['Execute'],
			},
		},
	},
	{
		displayName: 'Timeout',
		name: 'timeout',
		description:
			'Override the system-level timeout for this request. Accepts a value in milliseconds',
		default: 0,
		type: 'number',
		routing: {
			request: {
				qs: {
					timeout: '={{ $value }}',
				},
			},
		},
		displayOptions: {
			show: {
				resource: ['Browser Rest Apis'],
				operation: ['Execute'],
			},
		},
	},
	{
		displayName: 'Block Ads',
		name: 'blockAds',
		description:
			'Whether or nor to load ad-blocking extensions for the session. This currently uses uBlock Origin and may cause certain sites to not load properly',
		default: true,
		type: 'boolean',
		routing: {
			request: {
				qs: {
					blockAds: '={{ $value }}',
				},
			},
		},
		displayOptions: {
			show: {
				resource: ['Browser Rest Apis'],
				operation: ['Execute'],
			},
		},
	},
	{
		displayName: 'Enable Launch',
		name: 'enableLaunch',
		type: 'boolean',
		default: false,
		description: 'Launch a new browser instance',
		displayOptions: {
			show: {
				resource: ['Browser Rest Apis'],
				operation: ['Execute'],
			},
		},
	},
	{
		displayName: 'Launch',
		name: 'launch',
		description: '',
		default: {},
		type: 'collection',
		typeOptions: {},
		placeholder: 'Add item',
		options: [
			{
				displayName: 'Args',
				type: 'fixedCollection',
				default: [],
				typeOptions: {
					multipleValues: true,
				},
				name: 'args',
				description: '',
				placeholder: 'Add item',
				options: [
					{
						displayName: 'Items',
						name: 'items',
						values: [
							{
								displayName: 'Item',
								name: 'Item',
								type: 'string',
								default: '',
							},
						],
					},
				],
			},
			{
				displayName: 'Defaultviewport',
				type: 'fixedCollection',
				default: {},
				description: '',
				options: [
					{
						displayName: 'Items',
						name: 'items',
						values: [
							{
								displayName: 'Devicescalefactor',
								type: 'number',
								default: 0,
								description: '',
								name: 'deviceScaleFactor',
							},
							{
								displayName: 'Hastouch',
								type: 'boolean',
								default: true,
								description: '',
								name: 'hasTouch',
							},
							{
								displayName: 'Height',
								type: 'number',
								default: 0,
								description: '',
								name: 'height',
							},
							{
								displayName: 'Islandscape',
								type: 'boolean',
								default: true,
								description: '',
								name: 'isLandscape',
							},
							{
								displayName: 'Ismobile',
								type: 'boolean',
								default: true,
								description: '',
								name: 'isMobile',
							},
							{
								displayName: 'Width',
								type: 'number',
								default: 0,
								description: '',
								name: 'width',
							},
						],
					},
				],
				name: 'defaultViewport',
			},
			{
				displayName: 'Devtools',
				type: 'boolean',
				default: true,
				description: '',
				name: 'devtools',
			},
			{
				displayName: 'Dumpio',
				type: 'boolean',
				default: true,
				description: '',
				name: 'dumpio',
			},
			{
				displayName: 'Headless',
				type: 'options',
				default: false,
				description: '',
				options: [
					{
						name: 'False',
						value: false,
					},
					{
						name: 'Shell',
						value: 'shell',
					},
					{
						name: 'True',
						value: true,
					},
				],
				name: 'headless',
			},
			{
				displayName: 'Ignoredefaultargs',
				type: 'fixedCollection',
				default: [],
				typeOptions: {
					multipleValues: true,
				},
				name: 'ignoreDefaultArgs',
				description: '',
				placeholder: 'Add item',
				options: [
					{
						displayName: 'Items',
						name: 'items',
						values: [
							{
								displayName: 'Item',
								name: 'Item',
								type: 'string',
								default: '',
							},
						],
					},
				],
			},
			{
				displayName: 'Ignorehttpserrors',
				type: 'boolean',
				default: true,
				description: '',
				name: 'ignoreHTTPSErrors',
			},
			{
				displayName: 'Slowmo',
				type: 'number',
				default: 0,
				description: '',
				name: 'slowMo',
			},
			{
				displayName: 'Stealth',
				type: 'boolean',
				default: true,
				description: '',
				name: 'stealth',
			},
			{
				displayName: 'Timeout',
				type: 'number',
				default: 0,
				description: '',
				name: 'timeout',
			},
			{
				displayName: 'Userdatadir',
				type: 'string',
				default: '',
				description: '',
				name: 'userDataDir',
			},
			{
				displayName: 'Waitforinitialpage',
				type: 'boolean',
				default: true,
				description: '',
				name: 'waitForInitialPage',
			},
		],
		routing: {
			request: {
				qs: {
					launch: '={{ $value }}',
				},
			},
		},
		displayOptions: {
			show: {
				resource: ['Browser Rest Apis'],
				operation: ['Execute'],
				enableLaunch: [true],
			},
		},
	},
];
