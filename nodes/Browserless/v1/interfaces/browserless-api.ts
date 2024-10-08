/* eslint-disable */
/* tslint:disable */

/**
 * This file was automatically generated by joi-to-typescript
 * Do not modify this file manually
 */

export interface content {
	addScriptTag?: Array<{
		content?: string;
		type?: any;
		url?: string;
	}>;
	addStyleTag?: Array<{
		content?: string;
		url?: string;
	}>;
	authenticate?: {
		password?: string;
		username?: string;
	};
	cookies?: Array<{
		domain?: string;
		expires?: number;
		httpOnly?: boolean;
		name: string;
		path?: string;
		sameSite?: 'Strict' | 'Lax';
		secure?: boolean;
		url?: string;
		value: string;
	}>;
	gotoOptions?: {
		timeout?: number;
		waitUntil?: 'load' | 'domcontentloaded' | 'networkidle0' | 'networkidle2';
	};
	rejectRequestPattern?: string[];
	rejectResourceTypes?: Array<
		| 'document'
		| 'stylesheet'
		| 'image'
		| 'media'
		| 'font'
		| 'script'
		| 'texttrack'
		| 'xhr'
		| 'fetch'
		| 'eventsource'
		| 'websocket'
		| 'manifest'
		| 'other'
	>;
	requestInterceptors?: Array<{
		pattern: string;
		response?: {
			body: string | Buffer;
			contentType: string;
			headers?: object;
			status: number;
		};
	}>;
	setExtraHTTPHeaders?: {
		/**
		 * Unknown Property
		 */
		[x: string]: unknown;
	};
	setJavaScriptEnabled?: boolean;
	url: string;
	userAgent?: string;
	viewport?: {
		deviceScaleFactor?: number;
		hasTouch?: boolean;
		height: number;
		isLandscape?: boolean;
		isMobile?: boolean;
		width: number;
	};
	waitFor?: string | number;
}

export interface fn {
	code: string;
	context?: object;
	detached?: boolean;
}

export interface pdf {
	addScriptTag?: Array<{
		content?: string;
		type?: any;
		url?: string;
	}>;
	addStyleTag?: Array<{
		content?: string;
		url?: string;
	}>;
	authenticate?: {
		password?: string;
		username?: string;
	};
	cookies?: Array<{
		domain?: string;
		expires?: number;
		httpOnly?: boolean;
		name: string;
		path?: string;
		sameSite?: 'Strict' | 'Lax';
		secure?: boolean;
		url?: string;
		value: string;
	}>;
	emulateMedia?: 'screen' | 'print';
	gotoOptions?: {
		timeout?: number;
		waitUntil?: 'load' | 'domcontentloaded' | 'networkidle0' | 'networkidle2';
	};
	html?: string;
	options?: {
		displayHeaderFooter?: boolean;
		footerTemplate?: string;
		format?:
			| 'Letter'
			| 'Legal'
			| 'Tabloid'
			| 'Ledger'
			| 'A0'
			| 'A1'
			| 'A2'
			| 'A3'
			| 'A4'
			| 'A5'
			| 'A6';
		headerTemplate?: string;
		height?: any;
		landscape?: boolean;
		margin?: {
			bottom?: string;
			left?: string;
			right?: string;
			top?: string;
		};
		omitBackground?: boolean;
		pageRanges?: string;
		preferCSSPageSize?: boolean;
		printBackground?: boolean;
		scale?: number;
		timeout?: number;
		width?: any;
	};
	rejectRequestPattern?: string[];
	rejectResourceTypes?: Array<
		| 'document'
		| 'stylesheet'
		| 'image'
		| 'media'
		| 'font'
		| 'script'
		| 'texttrack'
		| 'xhr'
		| 'fetch'
		| 'eventsource'
		| 'websocket'
		| 'manifest'
		| 'other'
	>;
	requestInterceptors?: Array<{
		pattern: string;
		response?: {
			body: string | Buffer;
			contentType: string;
			headers?: object;
			status: number;
		};
	}>;
	rotate?: 90 | -90 | 180;
	safeMode?: boolean;
	setExtraHTTPHeaders?: {
		/**
		 * Unknown Property
		 */
		[x: string]: unknown;
	};
	setJavaScriptEnabled?: boolean;
	url?: string;
	userAgent?: string;
	viewport?: {
		deviceScaleFactor?: number;
		hasTouch?: boolean;
		height: number;
		isLandscape?: boolean;
		isMobile?: boolean;
		width: number;
	};
	waitFor?: string | number;
}

export interface scrape {
	addScriptTag?: Array<{
		content?: string;
		type?: any;
		url?: string;
	}>;
	addStyleTag?: Array<{
		content?: string;
		url?: string;
	}>;
	authenticate?: {
		password?: string;
		username?: string;
	};
	cookies?: Array<{
		domain?: string;
		expires?: number;
		httpOnly?: boolean;
		name: string;
		path?: string;
		sameSite?: 'Strict' | 'Lax';
		secure?: boolean;
		url?: string;
		value: string;
	}>;
	debug?: {
		console?: boolean;
		cookies?: boolean;
		html?: boolean;
		network?: boolean;
		screenshot?: boolean;
	};
	elements: Array<{
		selector?: string;
		timeout?: number;
	}>;
	gotoOptions?: {
		timeout?: number;
		waitUntil?: 'load' | 'domcontentloaded' | 'networkidle0' | 'networkidle2';
	};
	rejectRequestPattern?: string[];
	rejectResourceTypes?: Array<
		| 'document'
		| 'stylesheet'
		| 'image'
		| 'media'
		| 'font'
		| 'script'
		| 'texttrack'
		| 'xhr'
		| 'fetch'
		| 'eventsource'
		| 'websocket'
		| 'manifest'
		| 'other'
	>;
	requestInterceptors?: Array<{
		pattern: string;
		response?: {
			body: string | Buffer;
			contentType: string;
			headers?: object;
			status: number;
		};
	}>;
	setExtraHTTPHeaders?: {
		/**
		 * Unknown Property
		 */
		[x: string]: unknown;
	};
	url: string;
	userAgent?: string;
	waitFor?: string | number;
}

export interface screenshot {
	addScriptTag?: Array<{
		content?: string;
		type?: any;
		url?: string;
	}>;
	addStyleTag?: Array<{
		content?: string;
		url?: string;
	}>;
	authenticate?: {
		password?: string;
		username?: string;
	};
	cookies?: Array<{
		domain?: string;
		expires?: number;
		httpOnly?: boolean;
		name: string;
		path?: string;
		sameSite?: 'Strict' | 'Lax';
		secure?: boolean;
		url?: string;
		value: string;
	}>;
	gotoOptions?: {
		timeout?: number;
		waitUntil?: 'load' | 'domcontentloaded' | 'networkidle0' | 'networkidle2';
	};
	html?: string;
	manipulate?: {
		flip?: boolean;
		flop?: boolean;
		resize?: {
			fit?: 'cover' | 'contain' | 'fill' | 'inside' | 'outside';
			height?: number;
			position?:
				| 'top'
				| 'right top'
				| 'right'
				| 'right bottom'
				| 'bottom'
				| 'left bottom'
				| 'left'
				| 'left top';
			width?: number;
		};
		rotate?: number;
	};
	options?: {
		clip?: {
			height?: number;
			width?: number;
			x?: number;
			y?: number;
		};
		encoding?: 'binary' | 'base64';
		fullPage?: boolean;
		omitBackground?: boolean;
		quality?: number;
		type?: 'jpeg' | 'png';
	};
	rejectRequestPattern?: string[];
	rejectResourceTypes?: Array<
		| 'document'
		| 'stylesheet'
		| 'image'
		| 'media'
		| 'font'
		| 'script'
		| 'texttrack'
		| 'xhr'
		| 'fetch'
		| 'eventsource'
		| 'websocket'
		| 'manifest'
		| 'other'
	>;
	requestInterceptors?: Array<{
		pattern: string;
		response?: {
			body: string | Buffer;
			contentType: string;
			headers?: object;
			status: number;
		};
	}>;
	scrollPage?: boolean;
	selector?: string;
	setExtraHTTPHeaders?: {
		/**
		 * Unknown Property
		 */
		[x: string]: unknown;
	};
	setJavaScriptEnabled?: boolean;
	url?: string;
	userAgent?: string;
	viewport?: {
		deviceScaleFactor?: number;
		hasTouch?: boolean;
		height: number;
		isLandscape?: boolean;
		isMobile?: boolean;
		width: number;
	};
	waitFor?: string | number;
}

export interface stats {
	budgets?: object[];
	config?: object;
	url: string;
}
