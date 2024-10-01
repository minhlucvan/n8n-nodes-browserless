import { INodeProperties, INodeType } from 'n8n-workflow'

export function runHooks (properties: INodeProperties[]): {
  properties: INodeProperties[]
  methods: INodeType['methods']
} {
  return {
    properties,
    methods: {},
  }
}
