/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type postStoreSAPOptions = Record<string, any>;

export type postStoreSAPResponse = Promise<ObjectMap<any, object>>;

/**
 * @desc postStoreSAP
 */
export function request(options?: postStoreSAPOptions): postStoreSAPResponse {
  const host = getEnvHost();
  const url = host + '/bakery/hot-deli-bakery/sap/post_store';
  const fetchOption = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  return sendRequest(url, fetchOption);
}
