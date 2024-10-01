import { content, fn, pdf, scrape, screenshot, } from "./interfaces";

export type BrowserlessCredentials = {
	token?: string;
	url?: string;
};

export type ElementInput = {
	selector: string;
	timeout: number;
};

export type ElementGroupInputs = {
	elements: ElementInput[]
};


export type BrowserlessResource = 'content' | 'function' | 'json' | 'pdf' | 'screenshot' | 'download';

export type BrowserlessBrowserOptions = {
	blockAds?: boolean;
	headless?: boolean;
	ignoreHTTPSErrors?:  boolean;
	stealth?: boolean;
	userDataDir?: string;
	trackingId?: string;
	keepalive?: number;
	flags?: string;
};

export type BrowserlessCommonOptions =  {
	browserOptions: BrowserlessBrowserOptions;
};

export type browserlessApiRequestOptions<T> = {
	common: BrowserlessCommonOptions;
	options: T;
};

export type BrowserlessApiRequestContentOptions = browserlessApiRequestOptions<content>;

export type BrowserlessApiRequestScrapeOptions = browserlessApiRequestOptions<scrape>;

export type BrowserlessApiRequestFnOptions = browserlessApiRequestOptions<fn>;

export type BrowserlessApiRequestScreenshotOptions = browserlessApiRequestOptions<screenshot>;

export type BrowserlessApiRequestPdfOptions = browserlessApiRequestOptions<pdf>;

export type BrowserlessApiResponseScrapeResult = {
	html: string;
	text: string;
	attributes: object[];
};

export type BrowserlessApiResponseScrapeSelection = {
	selector: string;
	results: BrowserlessApiResponseScrapeResult[];
};

export type BrowserlessApiResponseScrapeData = BrowserlessApiResponseScrapeSelection[];

export type BrowserlessApiResponseScrapeResultFlat = BrowserlessApiResponseScrapeResult & {
	selector: string;
	url: string;
};

export type BrowserlessApiResponseScrapeDataFlat = BrowserlessApiResponseScrapeResultFlat[];

export type BrowserlessApiResponseScrapeDebug = {
	screenshot?: unknown,
	console?: unknown,
	network?: unknown,
	cookies?: unknown,
	html?: unknown
};

export type BrowserlessApiResponseScrape = {
	data: BrowserlessApiResponseScrapeData;
	debug?: BrowserlessApiResponseScrapeDebug;
};
