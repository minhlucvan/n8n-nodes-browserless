import { INodeProperties } from 'n8n-workflow';

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers';
/* eslint-disable */

/* eslint-disable */
export const properties: INodeProperties[] = [
	{
		displayName: 'POST /download',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Default'],
				operation: ['Download A File Created In The Browser'],
			},
		},
	},
	{
		displayName: 'Code',
		name: 'code',
		type: 'string',
		default: '',
		description: 'The custom download code.',
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
				operation: ['Download A File Created In The Browser'],
			},
		},
	},
	{
		displayName: 'Context',
		name: 'context',
		type: 'json',
		default: '{}',
		description:
			'Value used to pass context values and arguments to the `code`.',
		routing: {
			request: {
				body: {
					context: '={{ JSON.parse($value) }}',
				},
			},
		},
		displayOptions: {
			hide: {
				'/options.useCustomBody': [true],
			},
			show: {
				resource: ['Default'],
				operation: ['Download A File Created In The Browser'],
			},
		},
	},
	{
		displayName: 'Custom Body',
		name: 'customBody',
		type: 'json',
		default:
			'{\n  "code": "export default async function({page:t,context:a}){await t.evaluate(t=>{let a={url:t.url,ping:`pong`,rnd:[...Array(t.arrayLen)].map(()=>Math.random())},e=`data:application/json,${JSON.stringify(a)}`,n=encodeURI(e),r=document.createElement(`a`);return r.setAttribute(`href`,n),r.setAttribute(`download`,`data.json`),document.body.appendChild(r),r.click()},a)};",\n  "context": {\n    "url": "https://browserless.io/",\n    "arrayLen": 10\n  }\n}',
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
				operation: ['Download A File Created In The Browser'],
			},
		},
	},
];
/* eslint-disable */
