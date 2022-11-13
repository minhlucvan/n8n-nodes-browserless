import { OptionsWithUri } from 'request';

import {
	IDataObject,
	IExecuteFunctions,
	IExecuteSingleFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
} from 'n8n-workflow';

import { BrowserlessApiRequestContentOptions, BrowserlessApiRequestFnOptions, BrowserlessApiRequestPdfOptions, BrowserlessApiRequestScrapeOptions, BrowserlessApiRequestScreenshotOptions, BrowserlessOperation } from './types';
import { browserlessApiRequestContent, browserlessApiRequestFuction, browserlessApiRequestPdf, browserlessApiRequestScrape, browserlessApiRequestScreenshot } from './GenericFunctions';
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
		const operation = this.getNodeParameter('operation', 0) as BrowserlessOperation;
		for (let i = 0; i < length; i++) {
			try {
				if (operation === 'content') {
					const url = this.getNodeParameter('url', i) as string;
					const options: BrowserlessApiRequestContentOptions = {
						options: {
							url
						}
					};
					responseData = await browserlessApiRequestContent.call(this, options);
					responseData = responseData.data.data;
				}

				if (operation === 'scrape') {
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

				if (operation === 'function') {
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

				if (operation === 'screenshot') {
					const url = this.getNodeParameter('url', i) as string;
					const options: BrowserlessApiRequestScreenshotOptions = {
						options: {
							url: "",
						}
					};
					responseData = await browserlessApiRequestScreenshot.call(this, options);
					responseData = responseData.data.data;
				}

				if (operation === 'pdf') {
					const url = this.getNodeParameter('url', i) as string;
					const options: BrowserlessApiRequestPdfOptions = {
						options: {
							url
						}
					};
					responseData = await browserlessApiRequestPdf.call(this, options);
					responseData = responseData.data.data;
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

	getCommonOptions(this: IExecuteFunctions, i: number) {
		const options = {} as any;
		options.url = this.getNodeParameter('url', i) as string;
		options.elements = this.getNodeParameter('elements', i) as any;
		return options
	}
}
