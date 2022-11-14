import { Response } from 'request';

import {
	IAllExecuteFunctions,
	IDataObject,
	IExecuteFunctions,
	IHttpRequestMethods,
	IHttpRequestOptions,
	ILoadOptionsFunctions,
	IN8nHttpFullResponse,
	IN8nHttpResponse,
	NodeApiError,
} from 'n8n-workflow';

import { BrowserlessApiRequestContentOptions, BrowserlessApiRequestFnOptions, BrowserlessApiRequestPdfOptions, BrowserlessApiRequestScrapeOptions, BrowserlessApiRequestScreenshotOptions, BrowserlessApiResponseScrape, BrowserlessApiResponseScrapeData, BrowserlessApiResponseScrapeDataFlat, BrowserlessApiResponseScrapeResultFlat, BrowserlessCredentials } from './types';
import { content, fn, pdf, scrape, screenshot } from './interfaces';
import * as schems from './chemas/browserless-api.schema';

/**
 * Make a request to Browserless API.
 */
export async function browserlessApiRequest(
	this: IAllExecuteFunctions,
	method: IHttpRequestMethods,
	endpoint: string,
	body: any = {},
	qs: IDataObject = {},
	extradOptions: Partial<IHttpRequestOptions> = {}
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
		throw new NodeApiError(this.getNode(), error);
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
	const response = await browserlessApiRequest.call(this, 'POST', '/content', value) as IN8nHttpFullResponse;
	return response;
}

/**
 * Make a content request to Browserless API.
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
	const response = await browserlessApiRequest.call(this, 'POST', '/scrape', value);
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
	const response = await browserlessApiRequest.call(this, 'POST', '/function', value);
	return response;
}


/**
 * Make a content request to Browserless API.
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
	const response = await browserlessApiRequest.call(this, 'POST', '/pdf', value, {}, {
		encoding: 'arraybuffer',
		json: false,
		returnFullResponse: true,
	}) as IN8nHttpFullResponse;
	const binaryData = await prepareBinaryResponse.call(this, response, 'data.pdf');
	return binaryData;
}

/**
 * Make a content request to Browserless API.
 * @see: https://docs.browserless.io/docs/pdf.html
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
	const response = await browserlessApiRequest.call(this, 'POST', '/screenshot', value, {}, {
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
	const options = {} as any
	options.addition = this.getNodeParameter('addition', i) as any;
	options.parsed = parseFixedCollectionOptions(options.addition);

	if(options.parsed['setExtraHTTPHeaders']) {
		options.parsed['setExtraHTTPHeaders'] = composeArrayToMap(options.parsed['setExtraHTTPHeaders'], 'name', 'value');
	}

	return options
}

/**
 * compose key - value to object
 */
 export function composeArrayToMap(array: any[], key: string, value: string) {
	const options = {} as any
	for(const item of array) {
		options[item[key]] = item[value];
	}
	return options;
}

/**
 * Prepare response binary
 */
 export async function prepareBinaryResponse(this: IExecuteFunctions, res: IN8nHttpFullResponse, key: string) {
	const binaryData = await this.helpers.prepareBinaryData(
		res.body as unknown as ArrayBuffer
	);
	return binaryData;
}

/**
 * Parse fixed collection options
 */
 export function parseFixedCollectionOptions(rawOption: object) {
	const option = {} as any;
	for(const [key, value] of Object.entries(rawOption)) {
		const [subValue] = Object.values(value);
		option[key] = subValue;
	}
	return option;
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
				...res
			};
			results.push(resFlat);
		}
	}
	return results;
}
