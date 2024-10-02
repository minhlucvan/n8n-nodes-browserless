import {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class BrowserlessApi implements ICredentialType {
	displayName = 'Browserless Credentials API';
	name = 'browserlessApi';
	documentationUrl = 'https://docs.browserless.io/docs/token.html#docsNav';

	properties: INodeProperties[] = [
		// The credentials to get from user and save encrypted.
		// Properties can be defined exactly in the same way
		// as node properties.
		{
			displayName: 'Browserless URL',
			name: 'url',
			type: 'string',
			default: '',
		},
		{
			displayName: 'Token',
			name: 'token',
			type: 'string',
			typeOptions: {
				password: true,
			},
			default: '',
		},
	];

	// This credential is currently not used by any node directly
	// but the HTTP Request node can use it to make requests.
	// The credential is also testable due to the `test` property below
	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			qs: {
				// Send this as part of the query string
				token: '={{ $credentials.token }}',
			},
		},
	};

	// The block below tells how this credential can be tested
	test: ICredentialTestRequest = {
		request: {
			baseURL: '={{ $credentials.url }}',
			encoding: 'json',
			url: '/content',
			method: 'POST',
			qs: {
				// Send this as part of the query string
				token: '={{ $credentials.token }}',
			},
			body: {
				url: 'https://example.com/',
			},
		},
	};
}
