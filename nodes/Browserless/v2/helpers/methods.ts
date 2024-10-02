import { INodeType } from 'n8n-workflow'

type IMethodModule = INodeType['methods']

/**
 * Merge all methods from all modules into one object
 * @param modules: IMethodModule[]
 * @returns methods: INodeType['methods']
 */
export function aggregateNodeMethods (
  modules: IMethodModule[]
): INodeType['methods'] {
  return modules.reduce((methods, module) => {
    return {
      ...methods,
      ...module,
    }
  }, {})
}
