import type { INodeTypeBaseDescription, IVersionedNodeType } from 'n8n-workflow';
import { VersionedNodeType } from 'n8n-workflow';

import { Browserless as BrowserlessV1 } from './v1/Browserless.node';
import { Browserless as BrowserlessV2 } from './v2/Browserless.node';

export class Browserless extends VersionedNodeType {
	constructor() {
		const baseDescription: INodeTypeBaseDescription = {
			displayName: 'Browserless',
			name: 'browserless',
			icon: 'file:browserless.svg',
			group: ['transform'],
			subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
			description: 'Interact with Browserless API',
			// @ts-ignore
			version: [1, 2, 3],
			defaultVersion: 2,
		};

		const nodeVersions: IVersionedNodeType['nodeVersions'] = {
			1: new BrowserlessV1(baseDescription),
			2: new BrowserlessV2(baseDescription),
		};

		super(nodeVersions, baseDescription);
	}
}
