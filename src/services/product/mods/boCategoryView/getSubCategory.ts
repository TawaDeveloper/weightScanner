/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type getSubCategoryParam = {
  /** categoryViewId */
  categoryViewId: number;
};
export type getSubCategoryOptions = Record<string, any>;

export type getSubCategoryResponse = Promise<
  defs.product.Response<Array<defs.product.CategoryView>>
>;

/**
 * @desc 获取当前类目子类目
 */
export function request(
  params: getSubCategoryParam,
  options?: getSubCategoryOptions,
): getSubCategoryResponse {
  const host = getEnvHost();
  const url = host + '/product/bo/categoryView/sub';
  const fetchOption = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    params,
    ...options,
  };

  return sendRequest(url, fetchOption);
}
