import { INodeProperties } from 'n8n-workflow';
import { aggregateNodeMethods } from '../helpers/methods';
import { runHooks } from './hooks';

import * as defaultResource from './default';

const authenticationProperties: INodeProperties[] = [];

const resourceSelect: INodeProperties[] = [
	{
		displayName: 'Resource',
		name: 'resource',
		type: 'hidden',
		noDataExpression: true,
		options: [
			{
				name: 'Default',
				value: 'Default',
				description: '',
			},
		],
		default: '',
	},
];

const extraProperties: INodeProperties[] = [
	{
		displayName: 'Options',
		name: 'options',
		type: 'collection',
		placeholder: 'Add option',
		default: {},
		options: [
			{
				displayName: 'Use Custom Body',
				name: 'useCustomBody',
				type: 'boolean',
				description: 'Wether to use a custom body',
				required: true,
				default: false,
			},
		],
	},
];

const rawProperties: INodeProperties[] = [
	...authenticationProperties,
	...resourceSelect,
	...defaultResource.properties,
	...extraProperties,
];

const { properties, methods: selfMethods } = runHooks(rawProperties);

const methods = aggregateNodeMethods([selfMethods, defaultResource.methods]);

export { properties, methods };
