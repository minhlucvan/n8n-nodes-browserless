import { INodeProperties, INodePropertyOptions } from 'n8n-workflow';
import { runHooks } from './hooks';

import * as contentApi from './content-api';
import * as downloadAFileCreatedInTheBrowser from './download-a-file-created-in-the-browser';
import * as executesCustomPuppeteerCode from './executes-custom-puppeteer-code';
import * as takesAScreenshotOfSpecifiedUrl from './takes-a-screenshot-of-specified-url';
import * as unblockAWebpage from './unblock-a-webpage';
import * as scrapepage from './scrapepage';
import * as gatherSitePerformanceData from './gather-site-performance-data';
import * as gatherInformationAboutCurrentlyRunningSessions from './gather-information-about-currently-running-sessions';
import * as getYourWorkersConfiguration from './get-your-workers-configuration';
import * as getMetricsOfTheSession from './get-metrics-of-the-session';
import * as getTotalMetricsOfAllTheSessions from './get-total-metrics-of-all-the-sessions';

const operations: INodePropertyOptions[] = [
	contentApi.option,
	downloadAFileCreatedInTheBrowser.option,
	executesCustomPuppeteerCode.option,
	takesAScreenshotOfSpecifiedUrl.option,
	unblockAWebpage.option,
	scrapepage.option,
	gatherSitePerformanceData.option,
	gatherInformationAboutCurrentlyRunningSessions.option,
	getYourWorkersConfiguration.option,
	getMetricsOfTheSession.option,
	getTotalMetricsOfAllTheSessions.option,
];

export const name = 'Default';

/* eslint-disable */
const operationSelect: INodeProperties = {
	displayName: 'Operation',
	name: 'operation',
	type: 'options',
	noDataExpression: true,
	displayOptions: {
		show: {
			resource: ['Default'],
		},
	},
	default: '',
};
/* eslint-disable */

// overwrite the options of the operationSelect
operationSelect.options = operations;

// set the default operation
operationSelect.default = operations.length > 0 ? operations[0].value : '';

export const rawProperties: INodeProperties[] = [
	operationSelect,
	...contentApi.properties,
	...downloadAFileCreatedInTheBrowser.properties,
	...executesCustomPuppeteerCode.properties,
	...takesAScreenshotOfSpecifiedUrl.properties,
	...unblockAWebpage.properties,
	...scrapepage.properties,
	...gatherSitePerformanceData.properties,
	...gatherInformationAboutCurrentlyRunningSessions.properties,
	...getYourWorkersConfiguration.properties,
	...getMetricsOfTheSession.properties,
	...getTotalMetricsOfAllTheSessions.properties,
];

const { properties, methods } = runHooks(rawProperties);

export { properties, methods };
