import { INodeProperties } from 'n8n-workflow';

export const browserlessOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['content'],
			},
		},
		options: [
			{
				name: 'Get',
				value: 'get',
				description: 'Get page content',
				action: 'Get page content',
			},
		],
		default: 'get',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['function'],
			},
		},
		options: [
			{
				name: 'Execute',
				value: 'execute',
				description: 'Execute custom function',
				action: 'Execute custom function',
			},
		],
		default: 'execute',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['scrape'],
			},
		},
		options: [
			{
				name: 'Scrape',
				value: 'scrape',
				description: 'Scrape page elements',
				action: 'Scrape page elements',
			},
		],
		default: 'scrape',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['pdf'],
			},
		},
		options: [
			{
				name: 'Render',
				value: 'render',
				description: 'Render page as pdf',
				action: 'Render page pdf',
			},
		],
		default: 'render',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['screenshot'],
			},
		},
		options: [
			{
				name: 'Capture',
				value: 'capture',
				description: 'Rebder page screenshot',
				action: 'Capture page screenshot',
			},
		],
		default: 'capture',
	},
];

export const browserlessFields: INodeProperties[] = [
	{
		displayName: 'URL',
		name: 'url',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				operation: ['get', 'render', 'capture', 'scrape'],
				resource: ['content', 'scrape', 'pdf', 'screenshot'],
			},
		},
		default: '',
		placeholder: 'https://example.com',
		description: 'Target URL to visit',
	},
	{
		displayName: 'Elements',
		name: 'elements',
		type: 'fixedCollection',
		required: true,
		typeOptions: {
			multipleValues: true,
		},
		displayOptions: {
			show: {
				operation: ['scrape'],
			},
		},
		options: [
			{
				name: 'element',
				displayName: 'Element',
				values: [
					{
						displayName: 'Selector',
						name: 'selector',
						type: 'string',
						required: true,
						default: '',
					},
					{
						displayName: 'Timeout',
						name: 'timeout',
						type: 'number',
						default: 0,
					},
				],
			},
		],
		default: [],
		placeholder: 'Add element',
		description: 'Elements to scrap',
	},
	{
		displayName: 'Manipulate',
		name: 'manipulate',
		type: 'fixedCollection',
		required: true,
		typeOptions: {
			multipleValues: false,
		},
		displayOptions: {
			show: {
				operation: ['capture'],
			},
		},
		options: [
			{
				name: 'resize',
				displayName: 'Resize',
				values: [
					{
						displayName: 'Flip',
						name: 'flip',
						type:  "boolean",
						default: false,
					},
					{
						displayName: 'Flop',
						name: 'flop',
						type:  "boolean",
						default: false,
					},
					{
						displayName: 'Rotate',
						name: 'rotate',
						type:  "number",
						default: 0,
					},
					{
						displayName: 'Fit',
						name: 'fit',
						type: 'options',
						options: [
							{
								name: 'Contain',
								value: 'contain',
							},
							{
								name: 'Cover',
								value: 'cover',
							},
							{
								name: 'Fill',
								value: 'fill',
							},
							{
								name: 'Inside',
								value: 'inside',
							},
							{
								name: 'Outside',
								value: 'outside',
							},
						],
						default: 'cover',
					},
					{
						displayName: 'Height',
						name: 'height',
						type: 'number',
						default: 1900,
					},
					{
						displayName: 'Width',
						name: 'width',
						type: 'number',
						default: 1280,
					},
					{
						displayName: 'Position',
						name: 'position',
						type: 'options',
						options: [
							{
								name: 'Bottom',
								value: 'bottom',
							},
							{
								name: 'Left',
								value: 'left',
							},
							{
								name: 'Left Bottom',
								value: 'left bottom',
							},
							{
								name: 'Left Top',
								value: 'left top',
							},
							{
								name: 'Right',
								value: 'right',
							},
							{
								name: 'Right Bottom',
								value: 'right bottom',
							},
							{
								name: 'Right Top',
								value: 'right top',
							},
							{
								name: 'Top',
								value: 'top',
							},
						],
						default: 'top',
					},
				],
			},
		],
		default: [],
		placeholder: '',
		description: 'Elements to scrap',
	},
	// options?: {
	//   clip?: {
	//     height?: number;
	//     width?: number;
	//     x?: number;
	//     y?: number;
	//   };
	//   encoding?: 'binary' | 'base64';
	//   fullPage?: boolean;
	//   omitBackground?: boolean;
	//   quality?: number;
	//   type?: 'jpeg' | 'png';
	// };
	{
		displayName: 'Output Field',
		name: 'outputField',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				operation: ['get', 'render', 'capture', 'scrape', 'execute'],
				resource: ['content', 'scrape', 'pdf', 'screenshot', 'function'],
			},
		},
		default: 'html',
		placeholder: 'html',
		description: 'Specify data output field',
	},
	{
		displayName: 'Additional Options',
		name: 'addition',
		type: 'collection',
		placeholder: 'Add options',
		default: {},
		options: [
			{
				displayName: 'Http Headers',
				name: 'setExtraHTTPHeaders',
				placeholder: 'Add Header',
				type: 'fixedCollection',
				default: {},
				typeOptions: {
					multipleValues: true,
				},
				description: 'Additional http header to be sent along request',
				options: [
					{
						name: 'header',
						displayName: 'Header',
						values: [
							{
								displayName: 'Name',
								name: 'name',
								type: 'string',
								default: '',
							},
							{
								displayName: 'Value',
								name: 'value',
								type: 'string',
								default: '',
							},
						],
					},
				],
			},
			{
				displayName: 'Inject Script',
				name: 'addScriptTag',
				placeholder: 'Add Script',
				type: 'fixedCollection',
				default: {},
				typeOptions: {
					multipleValues: true,
				},
				description: 'Additional script tag',
				options: [
					{
						name: 'script',
						displayName: 'Script',
						values: [
							{
								displayName: 'Url',
								name: 'url',
								type: 'string',
								default: '',
							},
							{
								displayName: 'Content',
								name: 'content',
								type: 'string',
								default: '',
							},
							{
								displayName: 'Type',
								name: 'type',
								type: 'string',
								default: 'text/javascript',
							},
						],
					},
				],
			},
			{
				displayName: 'Inject Style',
				name: 'addStyleTag',
				placeholder: 'Add style',
				type: 'fixedCollection',
				default: {},
				typeOptions: {
					multipleValues: true,
				},
				description: 'Additional style tag',
				options: [
					{
						name: 'style',
						displayName: 'Style',
						values: [
							{
								displayName: 'Url',
								name: 'url',
								type: 'string',
								default: '',
							},
							{
								displayName: 'Content',
								name: 'content',
								type: 'string',
								default: '',
							},
						],
					},
				],
			},
			{
				displayName: 'Authentication',
				name: 'authenticate',
				placeholder: 'Add authentication',
				type: 'fixedCollection',
				default: {},
				typeOptions: {
					multipleValues: false,
				},
				description: 'Http basic authentication',
				options: [
					{
						name: 'authentication',
						displayName: 'Authentication',
						values: [
							{
								displayName: 'Username',
								name: 'usename',
								type: 'string',
								default: '',
							},
							{
								displayName: 'Password',
								name: 'password',
								type: 'string',
								typeOptions: { password: true },
								default: '',
							},
						],
					},
				],
			},
			{
				displayName: 'Cookies',
				name: 'cookies',
				placeholder: 'Add cookie',
				type: 'fixedCollection',
				default: {},
				typeOptions: {
					multipleValues: false,
				},
				description: 'Add http cookies',
				options: [
					{
						name: 'authentication',
						displayName: 'Authentication',
						values: [
							{
								displayName: 'Domain',
								name: 'domain',
								type: 'string',
								default: '',
							},
							{
								displayName: 'Expires',
								name: 'expires',
								type: 'number',
								default: '',
							},
							{
								displayName: 'HttpOnly',
								name: 'httpOnly',
								type: 'boolean',
								default: true,
							},
							{
								displayName: 'Name',
								name: 'name',
								type: 'string',
								default: '',
							},
							{
								displayName: 'Path',
								name: 'path',
								type: 'string',
								default: '',
							},
							{
								displayName: 'sameSite',
								name: 'sameSite',
								type: 'options',
								options: [
									{
										name: 'Strict',
										value: 'Strict',
									},
									{
										name: 'Lax',
										value: 'Lax',
									},
								],
								default: 'Strict',
							},
							{
								displayName: 'Secure',
								name: 'secure',
								type: 'boolean',
								default: true,
							},
							{
								displayName: 'Url',
								name: 'url',
								type: 'string',
								default: '',
							},
							{
								displayName: 'Value',
								name: 'value',
								type: 'string',
								default: '',
							},
						],
					},
				],
			},
			{
				displayName: 'Goto Options',
				name: 'gotoOptions',
				placeholder: 'Add goto Options',
				type: 'fixedCollection',
				default: {},
				typeOptions: {
					multipleValues: false,
				},
				options: [
					{
						name: 'goto',
						displayName: 'Goto',
						values: [
							{
								displayName: 'Timeout',
								name: 'timeout',
								type: 'number',
								default: 0,
							},
							{
								displayName: 'WaitUntil',
								name: 'waitUntil',
								type: 'options',
								options: [
									{
										name: 'Load',
										value: 'load',
									},
									{
										name: 'Domcontentloaded',
										value: 'domcontentloaded',
									},
									{
										name: 'Networkidle0',
										value: 'networkidle0',
									},
									{
										name: 'Networkidle2',
										value: 'networkidle2',
									},
								],
								default: 'load',
							},
						],
					},
				],
			},
			{
				displayName: 'Reject Request Pattern',
				name: 'rejectRequestPattern',
				placeholder: '',
				type: 'string',
				default: '',
				typeOptions: {
					multipleValues: true,
				},
			},
			{
				displayName: 'Reject Resource Types',
				name: 'rejectResourceTypes',
				placeholder: '',
				type: 'multiOptions',
				options: [
					{
						name: 'Document',
						value: 'document',
					},
					{
						name: 'Eventsource',
						value: 'eventsource',
					},
					{
						name: 'Fetch',
						value: 'fetch',
					},
					{
						name: 'Font',
						value: 'font',
					},
					{
						name: 'Image',
						value: 'image',
					},
					{
						name: 'Manifest',
						value: 'manifest',
					},
					{
						name: 'Media',
						value: 'media',
					},
					{
						name: 'Other',
						value: 'other',
					},
					{
						name: 'Script',
						value: 'script',
					},
					{
						name: 'Stylesheet',
						value: 'stylesheet',
					},
					{
						name: 'Texttrack',
						value: 'texttrack',
					},
					{
						name: 'Websocket',
						value: 'websocket',
					},
					{
						name: 'Xhr',
						value: 'xhr',
					},
				],
				default: [],
				typeOptions: {
					multipleValues: false,
				},
			},
			{
				displayName: 'Request Interceptors',
				name: 'requestInterceptors',
				placeholder: '',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: true,
				},
				default: {},
				description: 'Add interceptor',
				options: [
					{
						name: 'interceptor',
						displayName: 'Interceptor',
						values: [
							{
								displayName: 'Pattern',
								name: 'pattern',
								type: 'string',
								default: '',
							},
							{
								displayName: 'Body',
								name: 'body',
								type: 'string',
								default: '',
							},
							{
								displayName: 'contentType',
								name: 'contentType',
								type: 'string',
								default: '',
							},
							{
								displayName: 'Headers',
								name: 'headers',
								type: 'json',
								default: '',
							},
							{
								displayName: 'Status',
								name: 'status',
								type: 'number',
								default: 200,
							},
						],
					},
				],
			},
			{
				displayName: 'userAgent',
				name: 'userAgent',
				placeholder: '',
				type: 'string',
				default: '',
				typeOptions: {
					multipleValues: false,
				},
				description: 'Http basic authentication',
			},
			{
				displayName: 'userAgent',
				name: 'userAgent',
				placeholder: '',
				type: 'string',
				default: '',
				typeOptions: {
					multipleValues: false,
				},
				description: 'Http basic authentication',
			},
			{
				displayName: 'Wait For',
				name: 'waitFor',
				placeholder: '',
				type: 'string',
				default: '',
				description: 'Http basic authentication',
			},
			{
				displayName: 'Set JavaScript Enabled',
				name: 'setJavaScriptEnabled',
				placeholder: '',
				type: 'boolean',
				default: true,
				description: 'Whether enable javascript',
			},
			{
				displayName: 'Viewport',
				name: 'viewport',
				placeholder: '',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: true,
				},
				default: {},
				description: 'Add interceptor',
				options: [
					{
						name: 'interceptor',
						displayName: 'Interceptor',
						values: [
							{
								displayName: 'deviceScaleFactor',
								name: 'deviceScaleFactor',
								type: 'number',
								default: 1,
							},
							{
								displayName: 'hasTouch',
								name: 'hasTouch',
								type: 'boolean',
								default: false,
							},
							{
								displayName: 'Height',
								name: 'height',
								type: 'number',
								default: 1900,
							},
							{
								displayName: 'Width',
								name: 'width',
								type: 'number',
								default: 1280,
							},
							{
								displayName: 'isLandscape',
								name: 'isLandscape',
								type: 'boolean',
								default: true,
							},
							{
								displayName: 'isMobile',
								name: 'isMobile',
								type: 'boolean',
								default: false,
							},
						],
					},
				],
			},
		],
		displayOptions: {
			// the resources and operations to display this element with
			show: {
				operation: ['get', 'render', 'capture', 'scrape'],
				resource: ['content', 'scrape', 'pdf', 'screenshot'],
			},
		},
	},
];
