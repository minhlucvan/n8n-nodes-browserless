import { INodeProperties, INodePropertyOptions } from 'n8n-workflow'

export function runHooks (
  option: INodePropertyOptions,
  properties: INodeProperties[]
): {
  option: INodePropertyOptions
  properties: INodeProperties[]
} {
  return {
    option,
    properties,
  }
}
