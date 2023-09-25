/// <reference path="../../api.d.ts" />
import sendRequest, { getEnvHost } from '@/utils/request';

export type pageQueryBody = defs.backoffice.ContentCategoryPageQueryDTO;
export type pageQueryOptions = Record<string, any>;

export type pageQueryResponse = Promise<
  defs.backoffice.Response<
    defs.backoffice.PageInfo<defs.backoffice.ContentCategoryVO>
  >
>;

/**
 * @desc 分页查询
 */
export function request(
  body: pageQueryBody,
  options?: pageQueryOptions,
): pageQueryResponse {
  const host = getEnvHost();
  const url = host + '/backoffice/bo/content-category/page';
  const fetchOption = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...options,
  };

  return sendRequest(url, fetchOption);
}
