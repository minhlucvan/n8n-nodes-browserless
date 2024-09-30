import { describe, expect, it } from '@jest/globals';
import { browserlessPageOptionsFileds } from '../../BrowserlessDescriptions';
import { content } from '../chemas/browserless-api.schema';
import { parseCollectionOptions } from '../../GenericFunctions';

describe('parseFixedCollectionOptions', () => {
	it('should parse cookies as an array', () => {
		const collectionOptions = {
			cookies: { cookies: [{ name: 'Test', value: 'test' }] },
		};
		const parsedFixedCollectionOptions = parseCollectionOptions(browserlessPageOptionsFileds, collectionOptions);
		console.log('----', parsedFixedCollectionOptions);
		const results = content.validate({
			url: 'https://google.com',
			...parsedFixedCollectionOptions,
		});
		// console.log(results);
		expect(results.error).toBeUndefined();
	});

	it('should parse header as an object', () => {
		const collectionOptions = {
			setExtraHTTPHeaders: { header: { name: 'Test', value: 'test' } },
		};
		const parsedFixedCollectionOptions = parseCollectionOptions(browserlessPageOptionsFileds, collectionOptions);
		console.log('----', parsedFixedCollectionOptions);
		const results = content.validate({
			url: 'https://google.com',
			...parsedFixedCollectionOptions,
		});
		// console.log(results);
		expect(results.error).toBeUndefined();
	});
	it('should parse authenticate properly', () => {
		const collectionOptions = {
			authenticate: { authenticate: { username: 'Test', password: 'test' } },
		};
		const parsedFixedCollectionOptions = parseCollectionOptions(browserlessPageOptionsFileds, collectionOptions);
		console.log('----', parsedFixedCollectionOptions);
		const results = content.validate({
			url: 'https://google.com',
			...parsedFixedCollectionOptions,
		});
		// console.log(results);
		expect(results.error).toBeUndefined();
	});
	it('should parse goto options properly', () => {
		const collectionOptions = {
			"gotoOptions": {
				"gotoOptions": {
					"timeout": 0,
					"waitUntil": "load",
				},
			},
		};

		const parsedFixedCollectionOptions = parseCollectionOptions(browserlessPageOptionsFileds, collectionOptions);
		console.log('----', parsedFixedCollectionOptions);
		const results = content.validate({
			url: 'https://google.com',
			...parsedFixedCollectionOptions,
		});
		// console.log(results);
		expect(results.error).toBeUndefined();
		expect(results.value).toMatchSnapshot({
			gotoOptions: {
				"timeout": 0,
				"waitUntil": "load",
			},
		});
	});
});
