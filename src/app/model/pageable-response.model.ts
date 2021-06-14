export interface Pageable {
    sort?: Map<string, string>;
    offset?: number
    pageNumber: number;
    pageSize: number;
    paged?: boolean;
    unpaged?: boolean
}

export interface PageableContainer<T> {
  content: Array<T>;
  size: number;
  pageNumber: number;
  sort: Map<string, string>;
  totalElements?: number;
  totalPages: number;
  last: boolean;
  number: number;
  first: boolean;
  numberOfElements: number;
  empty: false;
  pageable: Pageable;
}