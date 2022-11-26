import {
	IAllExecuteFunctions,
	IDataObject,
	IExecuteFunctions,
	IHttpRequestMethods,
	IHttpRequestOptions,
	ILoadOptionsFunctions,
	IN8nHttpFullResponse,
	IN8nHttpResponse,
	INodeProperties,
	INodePropertyCollection,
	INodePropertyOptions,
	NodeApiError,
} from 'n8n-workflow';

import { BrowserlessApiRequestContentOptions, BrowserlessApiRequestFnOptions, BrowserlessApiRequestPdfOptions, BrowserlessApiRequestScrapeOptions, BrowserlessApiRequestScreenshotOptions, BrowserlessApiResponseScrape, BrowserlessApiResponseScrapeData, BrowserlessApiResponseScrapeDataFlat, BrowserlessApiResponseScrapeResultFlat, BrowserlessCommonOptions, BrowserlessCredentials } from './types';
import { content, fn, pdf, scrape, screenshot } from './interfaces';
import * as schems from './chemas/browserless-api.schema';
import { browserlessBrowserOptionsFields, browserlessPageOptionsFileds } from './BrowserlessDescriptions';

/**
 * Make a request to Browserless API.
 */
export async function browserlessApiRequest(
	this: IAllExecuteFunctions,
	method: IHttpRequestMethods,
	endpoint: string,
	body: any = {},
	qs: IDataObject = {},
	extradOptions: Partial<IHttpRequestOptions> = {},
): Promise<IN8nHttpFullResponse | IN8nHttpResponse> {
	const credentials = (await this.getCredentials('browserlessApi')) as BrowserlessCredentials;
	const options: IHttpRequestOptions = {
		...extradOptions,
		method,
		body,
		qs: {
			...qs,
			token: credentials.token,
		},
		baseURL: credentials.url,
		url: `${endpoint}`,
		json: true,
	};

	if (Object.keys(qs).length === 0) {
		delete options.qs;
	}

	if (Object.keys(body).length === 0) {
		delete options.body;
	}

	try {
		return await this.helpers.httpRequestWithAuthentication.call(this, 'browserlessApi', options) as IN8nHttpFullResponse;
	} catch (error) {
		const errorDetails = {
			...error,
			consig: error?.cause?.config,
			request: error?.cause?.request ? {
				path:  error?.cause?.request?.path,
				_headers: error?.cause?.request?._headers,
				data: error?.cause?.request?.config?.data,
			} : null,
			response: error?.cause?.request ? {
				data: error?.cause?.response?.data,
				status: error?.cause?.response?.status,
			} : null,
		};
		throw new NodeApiError(this.getNode(), errorDetails);
	}
}

/**
 * Make a content request to Browserless API.
 * @see: https://docs.browserless.io/docs/content.html
 */
export async function browserlessApiRequestContent(
	this: IExecuteFunctions,
	options: BrowserlessApiRequestContentOptions,
) {
	const body: content = {
		...options.options,
	};
	const {error, value} = schems.content.validate(body);
	if(error) {
		throw error;
	}
	const response = await browserlessApiRequest.call(this, 'POST', '/content', value, options.common.browserOptions) as IN8nHttpFullResponse;
	return response;
}

/**
 * Make a scrape request to Browserless API.
 * @see: https://docs.browserless.io/docs/scrape.html
 */
export async function browserlessApiRequestScrape(
	this: IExecuteFunctions,
	options: BrowserlessApiRequestScrapeOptions,
) {
	const body: scrape = {
		...options.options,
	};
	const {error, value} = schems.scrape.validate(body);

	if(error) {
		throw error;
	}
	const response = await browserlessApiRequest.call(this, 'POST', '/scrape', value, options.common.browserOptions);
	return response as BrowserlessApiResponseScrape;
}

/**
 * Make a content request to Browserless API.
 * @see: https://docs.browserless.io/docs/function.html
 */
 export async function browserlessApiRequestFuction(
	this: IExecuteFunctions,
	options: BrowserlessApiRequestFnOptions,
) {
	const body: fn = {
		...options.options,
	};
	const {error, value} = schems.fn.validate(body);
	if(error) {
		throw error;
	}
	const response = await browserlessApiRequest.call(this, 'POST', '/function', value, options.common.browserOptions);
	return response;
}


/**
 * Make a pdf request to Browserless API.
 * @see: https://docs.browserless.io/docs/pdf.html
 */
 export async function browserlessApiRequestPdf(
	this: IExecuteFunctions,
	options: BrowserlessApiRequestPdfOptions,
) {
	const body: pdf = {
		...options.options,
	};
	const {error, value} = schems.pdf.validate(body);
	if(error) {
		throw error;
	}
	const timeout = options.common.browserOptions.keepalive ? options.common.browserOptions.keepalive : 60000;
	const response = await browserlessApiRequest.call(this, 'POST', '/pdf', value, options.common.browserOptions, {
		encoding: 'arraybuffer',
		json: false,
		returnFullResponse: true,
		timeout,
	}) as IN8nHttpFullResponse;
	const binaryData = await prepareBinaryResponse.call(this, response, 'data.pdf');
	return binaryData;
}

/**
 * Make a screenshot request to Browserless API.
 * @see: https://docs.browserless.io/docs/screenshot.html
 */
 export async function browserlessApiRequestScreenshot(
	this: IExecuteFunctions,
	options: BrowserlessApiRequestScreenshotOptions,
) {
	const body: screenshot = {
		...options.options,
	};
	const {error, value} = schems.screenshot.validate(body);
	if(error) {
		throw error;
	}
	const response = await browserlessApiRequest.call(this, 'POST', '/screenshot', value, options.common.browserOptions, {
		encoding: 'arraybuffer',
		json: false,
		returnFullResponse: true,
	}) as IN8nHttpFullResponse;
	const binaryData = await prepareBinaryResponse.call(this, response, 'data.png');

	return binaryData;
}

/**
 * Get common node inputs
 */
export function getCommonOptions(this: IExecuteFunctions, i: number) {
	let options = {} as any;
	try {
		const addition = this.getNodeParameter('addition', i) as any;
		options = parseCollectionOptions(browserlessPageOptionsFileds, addition);

		if(options['setExtraHTTPHeaders']) {
			options['setExtraHTTPHeaders'] = composeArrayToMap(options['setExtraHTTPHeaders'], 'name', 'value');
		}

		options['setExtraHTTPHeaders'].push({
			name: 'Cache-Control',
			value: 'no-cache',
		});

		if(options['addScriptTag']) {
			options['addScriptTag'] = Array.from(options['addScriptTag']).map(tag => omitEmptyProps(tag));
		}

		if(options['waitFor']) {
			options['waitFor'] = Number.isNaN(+options['waitFor']) ? options['waitFor'] :+options['waitFor'];
		}

	} catch(e) {
		// do nothing
	}

	return options;
}

/**
 * Get common node inputs
 */
export function getNodeCommoonOptions(this: IExecuteFunctions): BrowserlessCommonOptions {
	const browserOptionsRaw = this.getNodeParameter('browserOptions', 0) as any;
	const browserOptions = parseBrowserOptions(browserOptionsRaw);
	return {
		browserOptions,
	};
}

/**
 * compose key - value to object
 */
 export function composeArrayToMap(array: any[], key: string, value: string) {
	const options = {} as any;
	for(const item of array) {
		options[item[key]] = item[value];
	}
	return options;
}

/**
 * compose key - value to object
 */
 export function omitEmptyProps(obj: any) {
	const options = {} as any;
	for(const [key, value] of Object.entries(obj)) {
		if(!!value) {
			options[key] = value;
		}
	}
	return options;
}

/**
 * Prepare response binary
 */
 export async function prepareBinaryResponse(this: IExecuteFunctions, res: IN8nHttpFullResponse, key: string) {
	const binaryData = await this.helpers.prepareBinaryData(
		res.body as unknown as ArrayBuffer,
	);
	return binaryData;
}

/**
 * Parse browser options
 */
 export function parseBrowserOptions(rawOption: any) {
	const options = {} as any;
	for(const option of browserlessBrowserOptionsFields?.options ?? []) {
		if(rawOption[option.name]) {
			options[option.name] = rawOption[option.name];
		}
	}
	return options;
 }

/**
 * Parse fixed collection options
 */
 export function parseFixedCollectionOptions(descriptor: INodeProperties,rawOption: any) {
	if(descriptor.type !== 'fixedCollection') {
		return rawOption;
	}
	if(descriptor.typeOptions && descriptor.typeOptions.multipleValues) {
		const [firstValue] = Object.values(rawOption);
		return firstValue;
	}

	if(descriptor.typeOptions && !descriptor.typeOptions.multipleValues) {
		return rawOption[descriptor.name];
	}

	return rawOption;
}

/**
 * Parse collection options
 */
 export function parseCollectionOptions(descriptor: INodeProperties, rawOption: any) {
	const results = {} as any;
	if(descriptor.type !== 'collection') {
		return rawOption;
	}
	for(const option of descriptor?.options ?? []) {
		if(!option.name || typeof rawOption[option.name] === 'undefined') {
			continue;
		}
		if(isINodeProperties(option) && option?.type === 'fixedCollection') {
			results[option.name] = parseFixedCollectionOptions(option, rawOption[option.name]);
		} else {
			results[option.name] = rawOption[option.name];
		}
	}
	return results;
}

//
export function isINodeProperties(descriptor: INodeProperties | INodePropertyOptions | INodePropertyCollection): descriptor is INodeProperties {
	return (descriptor as INodeProperties).type !== undefined;
}
/**
 * flaterned scrape results
 */
 export function flaternScrapedResults(this: IExecuteFunctions, options: BrowserlessApiRequestScrapeOptions, data: BrowserlessApiResponseScrapeData): BrowserlessApiResponseScrapeDataFlat {
	const results = [] as BrowserlessApiResponseScrapeDataFlat;
	for (const dat of data) {
		for (const res of dat.results) {
			const resFlat: BrowserlessApiResponseScrapeResultFlat = {
				selector: dat.selector,
				url: options.options.url,
				...res,
			};
			results.push(resFlat);
		}
	}
	return results;
}
