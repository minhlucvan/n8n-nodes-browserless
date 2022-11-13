import { OptionsWithUri } from 'request';

import {
	IDataObject,
	IExecuteFunctions,
	ILoadOptionsFunctions,
	IN8nHttpFullResponse,
	IN8nHttpResponse,
	NodeApiError,
} from 'n8n-workflow';

import { BrowserlessApiRequestContentOptions, BrowserlessApiRequestFnOptions, BrowserlessApiRequestPdfOptions, BrowserlessApiRequestScrapeOptions, BrowserlessApiRequestScreenshotOptions, BrowserlessCredentials } from './types';
import { content, fn, pdf, scrape, screenshot } from './interfaces';

/**
 * Make a request to Browserless API.
 */
export async function browserlessApiRequest(
	this: IExecuteFunctions | ILoadOptionsFunctions,
	method: string,
	endpoint: string,
	body: any = {},
	qs: IDataObject = {},
): Promise<any> {
	const credentials = (await this.getCredentials('browserlessApi')) as BrowserlessCredentials;

	const options: OptionsWithUri = {
		method,
		body,
		qs: {
			...qs,
			token: credentials.token,
		},
		uri: `${credentials.url}${endpoint}`,
		json: true,
	};

	if (Object.keys(qs).length === 0) {
		delete options.qs;
	}

	if (Object.keys(body).length === 0) {
		delete options.body;
	}

	try {
		return await this.helpers.request!(options);
	} catch (error) {
		throw new NodeApiError(this.getNode(), error);
	}
}

/**
 * Make a content request to Browserless API.
 * @see: https://docs.browserless.io/docs/content.html
 */
export async function browserlessApiRequestContent(
	this: IExecuteFunctions | ILoadOptionsFunctions,
	options: BrowserlessApiRequestContentOptions,
) {
	const body: content = {
		...options.options,
	};
	const response = await browserlessApiRequest.call(this, 'POST', '/content', body);
	return response;
}

/**
 * Make a content request to Browserless API.
 * @see: https://docs.browserless.io/docs/scrape.html
 */
export async function browserlessApiRequestScrape(
	this: IExecuteFunctions | ILoadOptionsFunctions,
	options: BrowserlessApiRequestScrapeOptions,
) {
	const body: scrape = {
		...options.options,
	};
	const response = await browserlessApiRequest.call(this, 'POST', '/scrape', body);
	return response;
}

/**
 * Make a content request to Browserless API.
 * @see: https://docs.browserless.io/docs/function.html
 */
 export async function browserlessApiRequestFuction(
	this: IExecuteFunctions | ILoadOptionsFunctions,
	options: BrowserlessApiRequestFnOptions,
) {
	const body: fn = {
		...options.options,
	};
	const response = await browserlessApiRequest.call(this, 'POST', '/function', body);
	return response;
}


/**
 * Make a content request to Browserless API.
 * @see: https://docs.browserless.io/docs/pdf.html
 */
 export async function browserlessApiRequestPdf(
	this: IExecuteFunctions | ILoadOptionsFunctions,
	options: BrowserlessApiRequestPdfOptions,
) {
	const body: pdf = {
		...options.options,
	};
	const response = await browserlessApiRequest.call(this, 'POST', '/pdf', body);
	return response;
}

/**
 * Make a content request to Browserless API.
 * @see: https://docs.browserless.io/docs/pdf.html
 */
 export async function browserlessApiRequestScreenshot(
	this: IExecuteFunctions | ILoadOptionsFunctions,
	options: BrowserlessApiRequestScreenshotOptions,
) {
	const body: screenshot = {
		...options.options,
	};
	const response = await browserlessApiRequest.call(this, 'POST', '/screenshot', body);
	return response;
}


