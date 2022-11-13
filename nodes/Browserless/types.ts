import { content, fn, pdf, scrape, screenshot, } from "./interfaces";

export type BrowserlessCredentials = {
	token?: string;
	url?: string;
}

export type BrowserlessOperation = 'content' | 'function' | 'scrape' | 'pdf' | 'screenshot' | 'download';

export type browserlessApiRequestOptions<T> = {
	options: T;
}

export type BrowserlessApiRequestContentOptions = browserlessApiRequestOptions<content>;

export type BrowserlessApiRequestScrapeOptions = browserlessApiRequestOptions<scrape>;

export type BrowserlessApiRequestFnOptions = browserlessApiRequestOptions<fn>;

export type BrowserlessApiRequestScreenshotOptions = browserlessApiRequestOptions<screenshot>;

export type BrowserlessApiRequestPdfOptions = browserlessApiRequestOptions<pdf>;
