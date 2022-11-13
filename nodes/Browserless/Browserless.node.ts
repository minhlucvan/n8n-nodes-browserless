import { OptionsWithUri } from 'request';

import {
	IDataObject,
	IExecuteFunctions,
	IExecuteSingleFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
} from 'n8n-workflow';

import { browserlessApiRequestContentOptions, BrowserlessOperation } from './types';
import { browserlessApiRequestContent } from './GenericFunctions';

export class Browserless implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Browserless',
		name: 'Browserless',
		icon: 'file:Browserless.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Interact with Browserless API',
		defaults: {
			name: 'Browserless',
		},
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				name: 'browserlessApi',
				required: false,
			},
		],
		requestDefaults: {
			baseURL: 'https://Browserless.org',
			url: '',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		/**
		 * In the properties array we have two mandatory options objects required
		 *
		 * [Resource & Operation]
		 *
		 * https://docs.n8n.io/integrations/creating-nodes/code/create-first-node/#resources-and-operations
		 *
		 * In our example, the operations are separated into their own file (HTTPVerbDescription.ts)
		 * to keep this class easy to read.
		 *
		 */
		properties: [
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Content',
						value: 'content',
					},
					{
						name: 'Download',
						value: 'download',
					},
					{
						name: 'Function',
						value: 'function',
					},
					{
						name: 'Pdf',
						value: 'pdf',
					},
					{
						name: 'Scrape',
						value: 'scrape',
					},
					{
						name: 'Screenshot',
						value: 'screenshot',
					},
				],
				default: 'content',
			},
		],
	};

	async execute?(this: IExecuteFunctions): Promise<INodeExecutionData[][] | null> {
		const items = this.getInputData();
		const returnData: INodeExecutionData[] = [];
		const length = items.length;
		let responseData;
		const operation = this.getNodeParameter('operation', 0) as BrowserlessOperation;
		for (let i = 0; i < length; i++) {
			try {
				if (operation === 'content') {
					const url = this.getNodeParameter('url', i) as string;
					const options: browserlessApiRequestContentOptions = {
						options: {
							url
						}
					};
					responseData = await browserlessApiRequestContent.call(this, options);
					responseData = responseData.data.issueCreate?.issue;
				}

				const executionData = this.helpers.constructExecutionMetaData(
					this.helpers.returnJsonArray(responseData),
					{ itemData: { item: i } },
				);

				returnData.push(...executionData);
			} catch (error) {
				if (this.continueOnFail()) {
					const executionErrorData = this.helpers.constructExecutionMetaData(
						this.helpers.returnJsonArray({ error: error.message }),
						{ itemData: { item: i } },
					);
					returnData.push(...executionErrorData);
					continue;
				}
				throw error;
			}
		}
		return this.prepareOutputData(returnData);
	}
}
