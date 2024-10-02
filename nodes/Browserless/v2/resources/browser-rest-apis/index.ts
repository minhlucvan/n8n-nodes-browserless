/* eslint-disable n8n-nodes-base/node-param-option-description-identical-to-name */
/* eslint-disable n8n-nodes-base/node-param-display-name-miscased-id */
/* eslint-disable n8n-nodes-base/node-param-display-name-miscased-id */
/* eslint-disable n8n-nodes-base/node-param-description-boolean-without-whether */
/* eslint-disable n8n-nodes-base/node-param-options-type-unsorted-items */

import { INodeProperties, INodePropertyOptions } from 'n8n-workflow';
import { runHooks } from './hooks';

import * as unblock from './unblock';
import * as pdf from './pdf';
import * as screenshot from './screenshot';
import * as content from './content';
import * as download from './download';
import * as executeFunction from './execute-function';
import * as performance from './performance';
import * as scrape from './scrape';

const operations: INodePropertyOptions[] = [
	unblock.option,
	pdf.option,
	screenshot.option,
	content.option,
	download.option,
	executeFunction.option,
	performance.option,
	scrape.option,
];

export const name = 'Browser Rest Apis';

const operationSelect: INodeProperties = {
	displayName: 'Operation',
	name: 'operation',
	type: 'options',
	noDataExpression: true,
	displayOptions: {
		show: {
			resource: ['Browser Rest Apis'],
		},
	},
	default: '',
};

// overwrite the options of the operationSelect
operationSelect.options = operations;

// set the default operation
operationSelect.default = operations.length > 0 ? operations[0].value : '';

export const rawProperties: INodeProperties[] = [
	operationSelect,
	...unblock.properties,
	...pdf.properties,
	...screenshot.properties,
	...content.properties,
	...download.properties,
	...executeFunction.properties,
	...performance.properties,
	...scrape.properties,
];

const { properties, methods } = runHooks(rawProperties);

export { properties, methods };
