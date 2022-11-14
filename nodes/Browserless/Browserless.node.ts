import { OptionsWithUri } from 'request';

import {
	IDataObject,
	IExecuteFunctions,
	IExecuteSingleFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
} from 'n8n-workflow';

import { BrowserlessApiRequestContentOptions, BrowserlessApiRequestFnOptions, BrowserlessApiRequestPdfOptions, BrowserlessApiRequestScrapeOptions, BrowserlessApiRequestScreenshotOptions, BrowserlessResource } from './types';
import { browserlessApiRequestContent, browserlessApiRequestFuction, browserlessApiRequestPdf, browserlessApiRequestScrape, browserlessApiRequestScreenshot, getCommonOptions } from './GenericFunctions';
import { browserlessFields, browserlessOperations } from './BrowserlessDescriptions';

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
				required: true,
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
				displayName: '',
				name: 'curlImport',
				type: 'curlImport' as any,
				default: '',
			},
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Content',
						value: 'content',
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
				description: 'Browserless resource',
			},
			...browserlessOperations,
			...browserlessFields
		],
	};

	async execute?(this: IExecuteFunctions): Promise<INodeExecutionData[][] | null> {
		const items = this.getInputData();
		const returnData: INodeExecutionData[] = [];
		const length = items.length;
		let responseData;
		const resource = this.getNodeParameter('resource', 0) as BrowserlessResource;
		for (let i = 0; i < length; i++) {
			try {
				const inputs = getCommonOptions.call(this, i);
				if (resource === 'content') {
					const url = this.getNodeParameter('url', i) as string;
					const options: BrowserlessApiRequestContentOptions = {
						options: {
							url
						}
					};
					responseData = await browserlessApiRequestContent.call(this, options);
					console.log(responseData, options);
					responseData = responseData.data.data;
				}

				if (resource === 'scrape') {
					const url = this.getNodeParameter('url', i) as string;
					const options: BrowserlessApiRequestScrapeOptions = {
						options: {
							url,
							elements: []
						}
					};
					responseData = await browserlessApiRequestScrape.call(this, options);
					responseData = responseData.data.data;
				}

				if (resource === 'function') {
					const url = this.getNodeParameter('url', i) as string;
					const options: BrowserlessApiRequestFnOptions = {
						options: {
							code: "",
							context: {},
							detached: false,
						}
					};
					responseData = await browserlessApiRequestFuction.call(this, options);
					responseData = responseData.data.data;
				}

				if (resource === 'screenshot') {
					const url = this.getNodeParameter('url', i) as string;
					const options: BrowserlessApiRequestScreenshotOptions = {
						options: {
							url: "",
						}
					};
					responseData = await browserlessApiRequestScreenshot.call(this, options);
					responseData = responseData.data.data;
				}

				if (resource === 'pdf') {
					const url = this.getNodeParameter('url', i) as string;
					const options: BrowserlessApiRequestPdfOptions = {
						options: {
							url
						}
					};
					responseData = await browserlessApiRequestPdf.call(this, options);
					responseData = responseData.data.data;
				}

				const outputData = {
					[inputs.outputField]: responseData
				}

				const executionData = this.helpers.constructExecutionMetaData(
					this.helpers.returnJsonArray(outputData),
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
