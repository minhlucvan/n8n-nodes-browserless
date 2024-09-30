import { IExecuteSingleFunctions, IHttpRequestOptions } from 'n8n-workflow';

export async function preSendActionCustonBody (
	this: IExecuteSingleFunctions,
	requestOptions: IHttpRequestOptions,
): Promise<IHttpRequestOptions> {
	// @ts-ignore
	console.log('preSendActionCustonBody', requestOptions);
	return Promise.resolve(requestOptions);
}
