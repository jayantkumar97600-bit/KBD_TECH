/**
 * Simple pagination helper that calculates `skip` and `limit` from page parameters.
 */
export interface PaginationParams {
  page?: number; // 1‑based page number
  pageSize?: number; // items per page
}

export const DEFAULT_PAGE_SIZE = 20;

export function getPagination(params: PaginationParams) {
  const page = Math.max(params.page ?? 1, 1);
  const pageSize = Math.max(params.pageSize ?? DEFAULT_PAGE_SIZE, 1);
  const skip = (page - 1) * pageSize;
  const limit = pageSize;
  return { skip, limit };
}
