import { INodeProperties } from 'n8n-workflow';

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers';
/* eslint-disable */

/* eslint-disable */
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
				resource: ['Default'],
				operation: ['Executes Custom Puppeteer Code'],
			},
		},
	},
	{
		displayName: 'Code',
		name: 'code',
		type: 'string',
		default:
			'import{faker as a}from\\"https://esm.sh/@faker-js/faker\\";export default async function({context:o}){let t=a.internet,e=[...Array(o.len)].map(()=>({domain:t.domainName(),ip:t.ip(),mac:t.mac(),protocol:t.protocol()}));return{data:{domains:e,length:o.len},type:`application/json`}};\n',
		description: 'JavaScript code to be executed, exporting an async function.',
		routing: {
			request: {
				body: {
					code: '={{ $value }}',
				},
			},
		},
		displayOptions: {
			hide: {
				'/options.useCustomBody': [true],
			},
			show: {
				resource: ['Default'],
				operation: ['Executes Custom Puppeteer Code'],
			},
		},
	},
	{
		displayName: 'Context',
		name: 'context',
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
						description: undefined,
						name: 'len',
						displayName: 'len',
					},
				],
			},
		],
		routing: {
			request: {
				body: {
					context: '={{$value.items}}',
				},
			},
		},
		displayOptions: {
			hide: {
				'/options.useCustomBody': [true],
			},
			show: {
				resource: ['Default'],
				operation: ['Executes Custom Puppeteer Code'],
			},
		},
	},
	{
		displayName: 'Custom Body',
		name: 'customBody',
		type: 'json',
		default:
			'{\n  "code": "import{faker as a}from\\\\\\"https://esm.sh/@faker-js/faker\\\\\\";export default async function({context:o}){let t=a.internet,e=[...Array(o.len)].map(()=>({domain:t.domainName(),ip:t.ip(),mac:t.mac(),protocol:t.protocol()}));return{data:{domains:e,length:o.len},type:`application/json`}};\\n",\n  "context": {\n    "len": 10\n  }\n}',
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
				operation: ['Executes Custom Puppeteer Code'],
			},
		},
	},
];
/* eslint-disable */
