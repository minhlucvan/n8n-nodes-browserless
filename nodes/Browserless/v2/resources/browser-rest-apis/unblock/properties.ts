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
		displayName: 'POST /unblock',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Browser Rest Apis'],
				operation: ['Unblock'],
			},
		},
	},
	{
		displayName: 'Browser WS Endpoint',
		name: 'browserWSEndpoint',
		type: 'boolean',
		default: true,
		description:
			'Whether or not to keep the underlying browser alive and around for\nfuture reconnects. Defaults to false',
		routing: {
			request: {
				body: {
					browserWSEndpoint: '={{ $value }}',
				},
			},
		},
		displayOptions: {
			hide: {
				useCustomBody: [true],
			},
			show: {
				resource: ['Browser Rest Apis'],
				operation: ['Unblock'],
			},
		},
	},
	{
		displayName: 'Content',
		name: 'content',
		type: 'boolean',
		default: true,
		description: 'Whether or not to to return content for the site, defaults to true',
		routing: {
			request: {
				body: {
					content: '={{ $value }}',
				},
			},
		},
		displayOptions: {
			hide: {
				useCustomBody: [true],
			},
			show: {
				resource: ['Browser Rest Apis'],
				operation: ['Unblock'],
			},
		},
	},
	{
		displayName: 'Screenshot',
		name: 'screenshot',
		type: 'boolean',
		default: true,
		description:
			'Whether or not to to return a full-page screenshot for the site, defaults to true',
		routing: {
			request: {
				body: {
					screenshot: '={{ $value }}',
				},
			},
		},
		displayOptions: {
			hide: {
				useCustomBody: [true],
			},
			show: {
				resource: ['Browser Rest Apis'],
				operation: ['Unblock'],
			},
		},
	},
	{
		displayName: 'Ttl',
		name: 'ttl',
		type: 'number',
		default: 0,
		description:
			'When the browserWSEndpoint is requested this tells\nbrowserless how long to keep this browser alive for\nre-connection until shutting it down completely.\nMaximum of 30000 for 30 seconds (30,000ms)',
		routing: {
			request: {
				body: {
					ttl: '={{ $value }}',
				},
			},
		},
		displayOptions: {
			hide: {
				useCustomBody: [true],
			},
			show: {
				resource: ['Browser Rest Apis'],
				operation: ['Unblock'],
			},
		},
	},
	{
		displayName: 'Url',
		name: 'url',
		type: 'string',
		default: '',
		description: 'The URL of the site you want to unblock',
		routing: {
			request: {
				body: {
					url: '={{ $value }}',
				},
			},
		},
		displayOptions: {
			hide: {
				useCustomBody: [true],
			},
			show: {
				resource: ['Browser Rest Apis'],
				operation: ['Unblock'],
			},
		},
		required: true,
	},
	{
		displayName: 'Timeout',
		name: 'timeout',
		description:
			'Override the system-level timeout for this request.\nAccepts a value in milliseconds',
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
				operation: ['Unblock'],
			},
		},
	},
	{
		displayName: 'Enable Cookies',
		name: 'enableCookies',
		type: 'boolean',
		default: false,
		description: 'Enable cookies',
		displayOptions: {
			hide: {
				useCustomBody: [true],
			},
			show: {
				resource: ['Browser Rest Apis'],
				operation: ['Unblock'],
			},
		},
	},
	{
		displayName: 'Cookies',
		name: 'cookies',
		type: 'json',
		default: '[]',
		description: 'Array of cookie objects expected by cookie-editor extension',
		routing: {
			request: {
				body: {
					cookies:
						'={{ (JSON.parse($value) || []).reduce((a, c) => ({ ...a, [c.name]: c.value }), {}) }}',
				},
			},
		},
		displayOptions: {
			hide: {
				useCustomBody: [true],
			},
			show: {
				resource: ['Browser Rest Apis'],
				operation: ['Unblock'],
				enableCookies: [true],
			},
		},
		typeOptions: {},
		options: [],
	},
	{
		displayName: 'Goto Options',
		name: 'gotoOptions',
		type: 'fixedCollection',
		default: {},
		description: 'An optional goto parameter object for considering when the page is done loading.',
		options: [
			{
				displayName: 'Items',
				name: 'items',
				values: [
					{
						displayName: 'referer',
						type: 'string',
						default: '',
						description:
							'If provided, it will take preference over the referer header value set by\n{@link Page.setExtraHTTPHeaderspage.setExtraHTTPHeaders()}',
						name: 'referer',
					},
					{
						displayName: 'referrerPolicy',
						type: 'string',
						default: '',
						description:
							'If provided, it will take preference over the referer-policy header value\nset by {@link Page.setExtraHTTPHeaderspage.setExtraHTTPHeaders()}',
						name: 'referrerPolicy',
					},
					{
						displayName: 'timeout',
						type: 'number',
						default: 0,
						description:
							'Maximum wait time in milliseconds. Pass 0 to disable the timeout.\n\nThe default value can be changed by using the\n{@link Page.setDefaultTimeout} or {@link Page.setDefaultNavigationTimeout}\nmethods',
						name: 'timeout',
					},
					{
						displayName: 'waitUntil',
						type: 'multiOptions',
						default: [],
						description:
							'When to consider waiting succeeds. Given an array of event strings, waiting\nis considered to be successful after all events have been fired',
						options: [
							{
								name: 'domcontentloaded',
								value: 'domcontentloaded',
							},
							{
								name: 'load',
								value: 'load',
							},
							{
								name: 'networkidle0',
								value: 'networkidle0',
							},
							{
								name: 'networkidle2',
								value: 'networkidle2',
							},
						],
						name: 'waitUntil',
					},
					{
						displayName: 'signal',
						type: 'fixedCollection',
						default: {},
						description: 'A signal object that allows you to cancel the call',
						options: [
							{
								displayName: 'Items',
								name: 'items',
								values: [
									{
										displayName: 'aborted',
										type: 'boolean',
										default: true,
										description: '',
										name: 'aborted',
									},
									{
										displayName: 'onabort',
										type: 'json',
										default: '{}',
										description: '',
										name: 'onabort',
									},
									{
										displayName: 'reason',
										type: 'string',
										default: '',
										description: '',
										name: 'reason',
									},
								],
							},
						],
						name: 'signal',
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
				useCustomBody: [true],
			},
			show: {
				resource: ['Browser Rest Apis'],
				operation: ['Unblock'],
			},
		},
	},
	{
		displayName: 'Block Ads',
		name: 'blockAds',
		description:
			'Whether or nor to load ad-blocking extensions for the session.\nThis currently uses uBlock Origin and may cause certain sites\nto not load properly',
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
				operation: ['Unblock'],
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
				displayName: 'Items',
				name: 'items',
				values: [
					{
						displayName: 'hidden',
						type: 'boolean',
						default: true,
						description: '',
						name: 'hidden',
					},
					{
						displayName: 'selector',
						type: 'string',
						default: '',
						description: '',
						name: 'selector',
					},
					{
						displayName: 'timeout',
						type: 'number',
						default: 0,
						description: '',
						name: 'timeout',
					},
					{
						displayName: 'visible',
						type: 'boolean',
						default: true,
						description: '',
						name: 'visible',
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
				useCustomBody: [true],
			},
			show: {
				resource: ['Browser Rest Apis'],
				operation: ['Unblock'],
			},
		},
	},
	{
		displayName: 'Wait For Timeout',
		name: 'waitForTimeout',
		type: 'number',
		default: 0,
		description: undefined,
		routing: {
			request: {
				body: {
					waitForTimeout: '={{ $value }}',
				},
			},
		},
		displayOptions: {
			hide: {
				useCustomBody: [true],
			},
			show: {
				resource: ['Browser Rest Apis'],
				operation: ['Unblock'],
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
				displayName: 'Items',
				name: 'items',
				values: [
					{
						displayName: 'fn',
						type: 'string',
						default: '',
						description: 'The function, or statement, to be evaluated in browser context',
						name: 'fn',
					},
					{
						displayName: 'polling',
						type: 'string',
						default: undefined,
						description:
							'An interval at which the pageFunction is executed, defaults to raf.\nIf polling is a number, then it is treated as an interval in milliseconds\nat which the function would be executed. If polling is a string,\nthen it can be one of the following values: "raf" or "mutation"',
						name: 'polling',
					},
					{
						displayName: 'timeout',
						type: 'number',
						default: 0,
						description:
							'Maximum time to wait for in milliseconds. Defaults to 30000 (30 seconds).\nPass 0 to disable timeout',
						name: 'timeout',
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
				useCustomBody: [true],
			},
			show: {
				resource: ['Browser Rest Apis'],
				operation: ['Unblock'],
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
				displayName: 'Items',
				name: 'items',
				values: [
					{
						displayName: 'event',
						type: 'string',
						default: '',
						description: '',
						name: 'event',
					},
					{
						displayName: 'timeout',
						type: 'number',
						default: 0,
						description: '',
						name: 'timeout',
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
				useCustomBody: [true],
			},
			show: {
				resource: ['Browser Rest Apis'],
				operation: ['Unblock'],
			},
		},
	},
	{
		displayName: 'Best Attempt',
		name: 'bestAttempt',
		type: 'boolean',
		default: true,
		description:
			'When bestAttempt is set to true, browserless attempt to proceed\nwhen "awaited" events fail or timeout. This includes things like\ngoto, waitForSelector, and more',
		routing: {
			request: {
				body: {
					bestAttempt: '={{ $value }}',
				},
			},
		},
		displayOptions: {
			hide: {
				useCustomBody: [true],
			},
			show: {
				resource: ['Browser Rest Apis'],
				operation: ['Unblock'],
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
				operation: ['Unblock'],
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
				displayName: 'args',
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
				displayName: 'defaultViewport',
				type: 'fixedCollection',
				default: {},
				description: '',
				options: [
					{
						displayName: 'Items',
						name: 'items',
						values: [
							{
								displayName: 'deviceScaleFactor',
								type: 'number',
								default: 0,
								description: '',
								name: 'deviceScaleFactor',
							},
							{
								displayName: 'hasTouch',
								type: 'boolean',
								default: true,
								description: '',
								name: 'hasTouch',
							},
							{
								displayName: 'height',
								type: 'number',
								default: 0,
								description: '',
								name: 'height',
							},
							{
								displayName: 'isLandscape',
								type: 'boolean',
								default: true,
								description: '',
								name: 'isLandscape',
							},
							{
								displayName: 'isMobile',
								type: 'boolean',
								default: true,
								description: '',
								name: 'isMobile',
							},
							{
								displayName: 'width',
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
				displayName: 'devtools',
				type: 'boolean',
				default: true,
				description: '',
				name: 'devtools',
			},
			{
				displayName: 'dumpio',
				type: 'boolean',
				default: true,
				description: '',
				name: 'dumpio',
			},
			{
				displayName: 'headless',
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
				displayName: 'ignoreDefaultArgs',
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
				displayName: 'ignoreHTTPSErrors',
				type: 'boolean',
				default: true,
				description: '',
				name: 'ignoreHTTPSErrors',
			},
			{
				displayName: 'slowMo',
				type: 'number',
				default: 0,
				description: '',
				name: 'slowMo',
			},
			{
				displayName: 'stealth',
				type: 'boolean',
				default: true,
				description: '',
				name: 'stealth',
			},
			{
				displayName: 'timeout',
				type: 'number',
				default: 0,
				description: '',
				name: 'timeout',
			},
			{
				displayName: 'userDataDir',
				type: 'string',
				default: '',
				description: '',
				name: 'userDataDir',
			},
			{
				displayName: 'waitForInitialPage',
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
				operation: ['Unblock'],
				enableLaunch: [true],
			},
		},
	},
];
