import { OptionsWithUri } from 'request';

import {
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
} from 'n8n-workflow';

import {
	BrowserlessApiRequestContentOptions,
	BrowserlessApiRequestFnOptions,
	BrowserlessApiRequestPdfOptions,
	BrowserlessApiRequestScrapeOptions,
	BrowserlessApiRequestScreenshotOptions,
	BrowserlessResource,
	ElementGroupInputs,
} from './types';
import {
	browserlessApiRequestContent,
	browserlessApiRequestFuction,
	browserlessApiRequestPdf,
	browserlessApiRequestScrape,
	browserlessApiRequestScreenshot,
	flaternScrapedResults,
	getCommonOptions,
	getNodeCommoonOptions,
	parseCollectionOptions,
	parseFixedCollectionOptions,
} from './GenericFunctions';
import { browserlessFields, browserlessImageOptionsFields, browserlessOperations } from './BrowserlessDescriptions';

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
			baseURL: 'https://chrome.rowserless.io',
			url: 'scrape',
			headers: {
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
						name: 'JSON',
						value: 'json',
					},
					{
						name: 'PDF',
						value: 'pdf',
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
			...browserlessFields,
		],
	};

	async execute?(this: IExecuteFunctions): Promise<INodeExecutionData[][] | null> {
		const items = this.getInputData();
		const returnData: INodeExecutionData[] = [];
		const length = items.length;
		let responseData;
		const resource = this.getNodeParameter('resource', 0) as BrowserlessResource;
		const common = getNodeCommoonOptions.call(this);
		for (let i = 0; i < length; i++) {
			try {
				const inputs = getCommonOptions.call(this, i);
				if (resource === 'content') {
					const url = this.getNodeParameter('url', i) as string;
					const options: BrowserlessApiRequestContentOptions = {
						common,
						options: {
							url,
							...inputs,
						},
					};
					const responseContent = await browserlessApiRequestContent.call(this, options);
					responseData = [{
						data: responseContent,
					}];
				}

				if (resource === 'json') {
					const url = this.getNodeParameter('url', i) as string;
					const elementInputs = this.getNodeParameter('elements', i) as ElementGroupInputs;
					const flattenedOutput = this.getNodeParameter('flattenedOutput', i) as boolean;

					const elements = elementInputs.elements;

					const options: BrowserlessApiRequestScrapeOptions = {
						common,
						options: {
							url,
							elements,
							...inputs,
						},
					};
					const responseJson = await browserlessApiRequestScrape.call(this, options);
					if (flattenedOutput) {
						responseData = flaternScrapedResults.call(this, options, responseJson.data);
					} else {
						responseData = [{
							data: responseJson.data,
						}];
					}
				}

				if (resource === 'function') {
					const code = this.getNodeParameter('code', i) as string;
					const context = this.getNodeParameter('context', i) as object;
					const detached = !!this.getNodeParameter('detached', i) as boolean;
					const options: BrowserlessApiRequestFnOptions = {
						common,
						options: {
							code,
							context,
							detached,
						},
					};
					const reponseFunction = await browserlessApiRequestFuction.call(this, options);
					responseData = [{
						data: reponseFunction,
					}];
				}

				if (resource === 'screenshot') {
					const url = this.getNodeParameter('url', i) as string;
					const imageOptionsRaw = this.getNodeParameter('imageOptions', i);
					const imageOptions = parseCollectionOptions(browserlessImageOptionsFields, imageOptionsRaw);

					const options: BrowserlessApiRequestScreenshotOptions = {
						common,
						options: {
							url,
							options: imageOptions,
							...inputs,
						},
					};
					const responseScreenshot = await browserlessApiRequestScreenshot.call(this, options);
					responseData = {
						json: {},
						binary: {
							['data']: responseScreenshot,
						},
					};
				}

				if (resource === 'pdf') {
					const url = this.getNodeParameter('url', i) as string;
					const options: BrowserlessApiRequestPdfOptions = {
						common,
						options: {
							url,
							...inputs,
						},
					};
					const responsePdf = await browserlessApiRequestPdf.call(this, options);
					responseData = {
						json: {},
						binary: {
							['data']: responsePdf,
						},
					};
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
