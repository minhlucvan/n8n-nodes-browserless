import {
  BinaryFileType,
  IBinaryData,
  IDataObject,
  IExecuteSingleFunctions,
  IHttpRequestOptions,
  IN8nHttpFullResponse,
  INodeExecutionData,
  IPostReceiveBinaryData,
  IPostReceiveFilter,
  IPostReceiveLimit,
  IPostReceiveRootProperty,
  IPostReceiveSet,
  IPostReceiveSetKeyValue,
  IPostReceiveSort,
} from 'n8n-workflow'

export async function preSendActionCustonBody (
  this: IExecuteSingleFunctions,
  requestOptions: IHttpRequestOptions
): Promise<IHttpRequestOptions> {
  const { customBody } = requestOptions.body as IDataObject

  if (
    typeof requestOptions.body === 'object' &&
    typeof customBody === 'object'
  ) {
    // @ts-ignore
    requestOptions.body = {
      ...requestOptions.body,
      ...customBody,
    }
    // @ts-ignore
    delete requestOptions.body.customBody
  }

  return Promise.resolve(requestOptions)
}

/* eslint-disable indent */
/* tslint:disable:indent */
export type PostReceiveAction =
  | ((
      this: IExecuteSingleFunctions,
      items: INodeExecutionData[],
      response: IN8nHttpFullResponse
    ) => Promise<INodeExecutionData[]>)
  | IPostReceiveBinaryData
  | IPostReceiveFilter
  | IPostReceiveLimit
  | IPostReceiveRootProperty
  | IPostReceiveSet
  | IPostReceiveSetKeyValue
  | IPostReceiveSort
/* eslint-enable indent */
/* tslint:enable:indent */

function getresponseContentType (response: IN8nHttpFullResponse): string {
  return response.headers['content-type'] as string
}

function getFileTypeFromContentType (contentType: string): string {
  const type = contentType.split(';')[0].trim()

  if (type.includes('/')) {
    return type.split('/')[0]
  }

  return type
}

function getFileExtensionFromContentType (contentType: string): string {
  const type = contentType.split(';')[0].trim()

  // any/thing -> thing
  if (typeof type === 'string' && type.includes('/')) {
    return type.split('/')[1]
  }

  return type
}

export const postReceiveActionBinaryData: PostReceiveAction =
  async function postReceiveActionBinaryData (
    this: IExecuteSingleFunctions,
    items: INodeExecutionData[],
    response: IN8nHttpFullResponse
  ): Promise<INodeExecutionData[]> {
    const contentType = getresponseContentType(response)

    const { binary } = items[0]

    if (binary && binary.data && binary.data.mimeType === 'text/plain') {
      const data = binary.data as IBinaryData
      data.mimeType = contentType
      data.fileType = getFileTypeFromContentType(contentType) as BinaryFileType
      data.fileExtension = getFileExtensionFromContentType(contentType)
    }

    return items
  }
