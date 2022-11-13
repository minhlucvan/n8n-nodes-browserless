import { content, fn, pdf, scrape, screenshot, } from "./interfaces";

export type BrowserlessCredentials = {
	token?: string;
	url?: string;
}

export type BrowserlessOperation = 'content' | 'function' | 'scrape' | 'pdf' | 'screenshot' | 'download';

export type browserlessApiRequestOptions<T> = {
	options: T;
}

export type browserlessApiRequestContentOptions = browserlessApiRequestOptions<content>;

export type browserlessApiRequestContentScrape = browserlessApiRequestOptions<scrape>;

export type browserlessApiRequestContentFn = browserlessApiRequestOptions<fn>;

export type browserlessApiRequestContentScreenshot = browserlessApiRequestOptions<screenshot>;

export type browserlessApiRequestContentPdf = browserlessApiRequestOptions<pdf>;
