import {
  INodeType,
  INodeTypeBaseDescription,
  INodeTypeDescription,
} from 'n8n-workflow'

import { properties } from './Browserless.properties'
import { methods } from './Browserless.methods'

export class Browserless implements INodeType {
  description: INodeTypeDescription

  methods = methods

  constructor (baseDescription: INodeTypeBaseDescription) {
    this.description = {
      ...baseDescription,
      displayName: 'Browserless',
      name: 'browserless',
      icon: 'file:browserless.svg',
      group: ['transform'],
      version: 2,
      subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
      description: 'Browserless API',
      defaults: {
        name: 'Browserless',
      },
      inputs: ['main'],
      outputs: ['main'],
      credentials: [
        {
          displayName: 'Browserless API',
          name: 'browserlessApi',
          required: true,
        },
      ],
      requestDefaults: {
        headers: {
          'Content-Type': 'application/json',
        },
        baseURL: '={{$credentials.url}}',
      },

      properties: properties,
    }
  }
}
