import { OptionsWithUri } from 'request';

import {
	IDataObject,
	IExecuteFunctions,
	ILoadOptionsFunctions,
	IN8nHttpFullResponse,
	IN8nHttpResponse,
	NodeApiError,
} from 'n8n-workflow';

import { browserlessApiRequestContentOptions, BrowserlessCredentials } from './types';
import { content } from './interfaces';

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
	options: browserlessApiRequestContentOptions,
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
export async function browserlessApiRequesScrape(
	this: IExecuteFunctions | ILoadOptionsFunctions,
	options: browserlessApiRequestContentOptions,
) {
	const body: content = {
		...options.options,
	};
	const response = await browserlessApiRequest.call(this, 'POST', '/scrape', body);
	return response;
}
